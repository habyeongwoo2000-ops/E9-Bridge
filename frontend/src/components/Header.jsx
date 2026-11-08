/* 공통 머리말 — 로고 · 주 메뉴 · 언어 · 로그인 · [MENU]
   ------------------------------------------------------------------
   · 넓은 화면: 메뉴가 머리말 가운데 한 줄로 보입니다.
     메뉴 글자가 길어(크메르어·네팔어 등) 한 줄에 안 들어가면 [MENU] 단추로 바꿉니다(fitNav).
   · 좁은 화면: [MENU] 를 누르면 남색 전체 메뉴가 펼쳐집니다.
   · 첫 화면은 사진 위에 투명하게 떠 있다가, 내리면 흰 바탕이 됩니다(is-solid).
   ------------------------------------------------------------------ */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { FEATURES } from '../config/features.js';
import { lifeLabels } from '../i18n/life.js';
import { recoLabels } from '../i18n/reco.js';

/* 주소의 첫 마디로 지금 위치를 정합니다. "/" 는 home. */
function here(pathname) {
  const seg = String(pathname || '/').split('/')[1] || '';
  return seg.replace(/\.html?$/, '') || 'home';
}

function DropItem({ trigger, children, active }) {
  const ref = useRef(null);
  const dropRef = useRef(null);
  const timer = useRef(null);
  /* 화면 밖으로 잘리지 않도록 position:fixed 로 트리거 바로 아래에 좌표를 맞춥니다. */
  const show = () => {
    clearTimeout(timer.current);
    const a = ref.current && ref.current.querySelector(':scope > a');
    const drop = dropRef.current;
    if (!a || !drop) return;
    const r = a.getBoundingClientRect();
    drop.style.top = (r.bottom + 6) + 'px';
    drop.style.left = r.left + 'px';
    drop.classList.add('is-open');
  };
  const hide = () => {
    timer.current = setTimeout(() => dropRef.current && dropRef.current.classList.remove('is-open'), 150);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <div className="secnav-item" ref={ref} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {trigger(active)}
      <div className="secnav-drop" ref={dropRef}>{children}</div>
    </div>
  );
}

export default function Header({ menuOpen, setMenuOpen }) {
  const { T, lang, setLang, langs, langName } = useI18n();
  const { me, logout, pushLang } = useAuth();
  const loc = useLocation();
  const cur = here(loc.pathname);
  const isHome = cur === 'home';

  const [solid, setSolid] = useState(!isHome);
  const [authOpen, setAuthOpen] = useState(false);
  const barRef = useRef(null);
  const navInRef = useRef(null);
  const siteNavRef = useRef(null);

  /* ---------- 투명 → 흰 바탕 ---------- */
  useEffect(() => {
    const check = () => setSolid(!isHome || window.scrollY > 40 || menuOpen);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [isHome, menuOpen]);

  /* ---------- 메뉴가 한 줄에 들어가는지 재기 ---------- */
  const fitNav = useCallback(() => {
    const root = document.documentElement;
    const bar = barRef.current; const nav = navInRef.current;
    if (!bar || !nav) return;
    root.classList.remove('nav-compact');
    if (window.innerWidth < 1200) return;
    let used = 0;
    Array.prototype.forEach.call(bar.children, (c) => {
      used += c === siteNavRef.current ? nav.scrollWidth : c.getBoundingClientRect().width;
    });
    const cs = getComputedStyle(bar);
    const gap = parseFloat(cs.columnGap) || 20;
    used += gap * (bar.children.length - 1);
    const room = bar.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    if (used > room - 8) root.classList.add('nav-compact');
  }, []);

  useLayoutEffect(() => { fitNav(); }, [fitNav, lang, me]);
  useEffect(() => {
    const onResize = () => {
      fitNav();
      const compact = document.documentElement.classList.contains('nav-compact');
      if (window.innerWidth >= 1200 && !compact) setMenuOpen(false);
      // 머리말 실제 높이를 CSS 변수로 넘깁니다(#앵커로 이동했을 때 제목이 가려지지 않게).
      if (barRef.current) document.documentElement.style.setProperty('--stick', barRef.current.parentNode.offsetHeight + 'px');
    };
    onResize();
    window.addEventListener('resize', onResize);
    // 글꼴이 늦게 도착하면 글자 폭이 바뀝니다. 한 번 더 잽니다.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [fitNav, setMenuOpen, lang]);

  /* ---------- 로그인 메뉴: 바깥을 누르거나 Esc 로 닫기 ---------- */
  useEffect(() => {
    if (!authOpen) return undefined;
    const close = () => setAuthOpen(false);
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('click', close);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', close); document.removeEventListener('keydown', onKey); };
  }, [authOpen]);
  useEffect(() => { if (!me) setAuthOpen(false); }, [me]);

  const onLang = (e) => {
    const v = e.target.value;
    setLang(v);
    if (me) pushLang(v);
  };

  /* 메뉴 링크 하나 — 지금 있는 쪽이면 is-on + aria-current */
  const nav = (to, key, extra, label = T[key]) => {
    const name = to === '/' ? 'home' : to.split('/')[1];
    const on = name === cur;
    return (
      <Link to={to} className={on || extra ? 'is-on' : undefined} aria-current={on ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}>{label}</Link>
    );
  };
  const inFaqGroup = cur === 'faq' || cur === 'board' || cur === 'ask';

  return (
    <header className={'topbar' + (solid ? ' is-solid' : '')} id="siteHeader">
      <div className="wrap topbar-in" ref={barRef}>
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <img className="brand-mark brand-mark-c" src="/assets/logo-mark.svg" alt="E9-Bridge" width="42" height="42" />
          <img className="brand-mark brand-mark-w" src="/assets/logo-mark-white.svg" alt="" aria-hidden="true" width="42" height="42" />
          <span className="brand-text">
            <strong>E9-Bridge</strong>
            <em>{T.brandSub}</em>
          </span>
        </Link>

        <nav className="secnav" id="siteNav" aria-label={T.navLabel} ref={siteNavRef}>
          <div className="secnav-in" id="secnav" ref={navInRef}>
            {nav('/check', 'navCheck')}
            {nav('/recommend', 'navReco', false, recoLabels(lang).navReco)}
            {nav('/guide', 'guide', false, lifeLabels(lang).guide)}
            {nav('/nearby', 'nearby', false, lifeLabels(lang).nearby)}
            <DropItem active={inFaqGroup} trigger={(active) => (
              <Link to="/faq" className={active ? 'is-on' : undefined} aria-current={cur === 'faq' ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}>{T.navFaq}</Link>
            )}>
              {nav('/faq', 'faqTitle')}
              {FEATURES.chatbot && nav('/ask', 'navChatbot')}
              {nav('/board', 'navBoard')}
            </DropItem>
            {nav('/notices', 'navUpdates')}
            {nav('/legal', 'secNoLegal')}
            {nav('/interviews', 'navInterview')}
          </div>
          <div className="secnav-util">
            <a href="tel:1345"><b>1345</b><span>{T.of1345}</span></a>
            <a href="tel:1350"><b>1350</b><span>{T.of1350}</span></a>
          </div>
        </nav>

        <div className="util">
          <div className="lang">
            <label className="lang-label" htmlFor="langSelect">{T.langLabel}</label>
            <select id="langSelect" aria-label="Language" value={lang} onChange={onLang}>
              {langs.map((c) => <option key={c} value={c}>{langName(c)}</option>)}
            </select>
          </div>
          <div className="auth-wrap">
            <div className="auth-slot" id="authSlot">
              {me ? (
                <button type="button" className="auth-btn auth-toggle" id="authToggle" aria-haspopup="true"
                        aria-expanded={authOpen ? 'true' : 'false'} aria-controls="authMenu"
                        onClick={(e) => { e.stopPropagation(); setAuthOpen((o) => !o); }}>
                  {(me.nickname || me.username) + (T.authHello || '')}
                </button>
              ) : (
                <Link className="auth-btn" to="/login">{T.navLogin}</Link>
              )}
            </div>
            {/* 로그인했을 때만 열리는 메뉴 */}
            <div className="auth-menu" id="authMenu" hidden={!authOpen} onClick={(e) => e.stopPropagation()}>
              <Link to="/account" onClick={() => setAuthOpen(false)}>{T.navAccount}</Link>
              <button type="button" id="menuLogout" onClick={() => { setAuthOpen(false); logout(); }}>{T.navLogout}</button>
            </div>
          </div>
          <button type="button" className="menu-btn" id="menuBtn" aria-expanded={menuOpen ? 'true' : 'false'}
                  aria-controls="siteNav" aria-label={menuOpen ? T.menuClose : T.menuOpen}
                  onClick={() => setMenuOpen(!menuOpen)}>
            <span className="menu-ic" aria-hidden="true"><i /></span><span className="menu-txt" aria-hidden="true">MENU</span>
          </button>
        </div>
      </div>
    </header>
  );
}
