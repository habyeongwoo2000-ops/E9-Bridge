/* 모든 쪽의 틀 — 건너뛰기 링크 · 머리말 · 언어 안내 · (쪽 내용) · 바닥글 · 맨 위로

   쪽마다 다른 것
   · 첫 화면("/")은 <body class="is-home"> — 머리말이 사진 위에 투명하게 뜹니다.
   · 나머지는 <body class="sub"> — 남색 띠(SubVisual)와 큰 제목이 붙습니다.
   쪽을 옮기면 맨 위로 올라가고, 주소에 #앵커가 있으면 그 자리로 갑니다. */

import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ToTop from './ToTop.jsx';
import LangToast from './LangToast.jsx';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { AndroidHeader, AndroidNavigation } from './AndroidShell.jsx';
import { isAndroidApp } from '../config/platform.js';

export default function Layout() {
  const { T, isDraft } = useI18n();
  const loc = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = !isAndroidApp && loc.pathname === '/';

  /* body 클래스 — CSS 가 이 이름으로 머리말 모양을 바꿉니다. */
  useEffect(() => {
    const b = document.body.classList;
    b.toggle('is-home', isHome);
    b.toggle('sub', !isHome);
    b.toggle('android-app', isAndroidApp);
  }, [isHome]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') { setMenuOpen(false); const b = document.getElementById('menuBtn'); if (b) b.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  /* 쪽을 옮기면 전체 메뉴를 닫고 맨 위로 — #앵커가 있으면 그 요소로 */
  useEffect(() => {
    setMenuOpen(false);
    if (loc.hash) {
      const id = decodeURIComponent(loc.hash.slice(1));
      // 쪽 내용이 그려진 다음에 찾습니다.
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: 'start' });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [loc.pathname, loc.hash]);

  return (
    <>
      <a className="skip" href="#top">{T.skip}</a>
      {isAndroidApp ? <AndroidHeader /> : <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      <LangToast />
      {/* 검수 전 언어를 고르면 그 사실을 적어 둡니다. 영어로 남은 문장을 "내 언어로 확인했다"고 믿지 않게. */}
      {isDraft && <div className="draft-bar" id="draftBar">{T.draftNote || 'This language is a draft. Some sentences remain in English.'}</div>}
      <Outlet />
      {isAndroidApp ? <AndroidNavigation /> : <Footer />}
      <ToTop />
    </>
  );
}
