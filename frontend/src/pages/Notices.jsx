/* 최신 제도 — 전국 제도 + 지자체(광역 16개 시·도) 지원사업 목록
   ------------------------------------------------------------------
   · 목록은 브라우저 안(data/notices.js)에 다 있으니 글자를 칠 때마다 바로 거릅니다.
   · 지역·한 쪽 개수는 마지막 선택을 기억해, 다시 열어도 그 지역을 보여 줍니다.
   · 마감된 지자체 공고는 남겨 두되 "마감"으로 표시하고 맨 아래로 내립니다.
   · 첫 화면 목록에서 눌러 들어오면(/notices#n-minwage-2027) 그 항목을 펼쳐 둡니다.
   ------------------------------------------------------------------ */

import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ExternalLink from '../components/ExternalLink.jsx';
import { isAndroidApp } from '../config/platform.js';
import SubVisual from '../components/SubVisual.jsx';
import Pager from '../components/Pager.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import '../styles/pages/anchors.css';
import { load, save, sSet } from '../lib/storage.js';
import { fmt, today } from '../lib/dates.js';
import { FEATURES } from '../config/features.js';
import NOTICES from '../data/notices.js';

/* 광역 16개 시·도(광주·전남은 2026-07-01 전남광주통합특별시로 합쳐졌습니다).
   지자체 정책은 data/notices.js 에서 region 에 이 코드를 적습니다. region 이 없으면 전국 제도입니다. */
const NT_REGIONS = ['seoul', 'busan', 'daegu', 'incheon', 'daejeon', 'ulsan', 'sejong',
  'gyeonggi', 'gangwon', 'chungbuk', 'chungnam', 'jeonbuk', 'jeonnamgwangju', 'gyeongbuk', 'gyeongnam', 'jeju'];
const NT_PER_CHOICES = [10, 15, 20];

function initialPer() {
  const v = Number(load('ntPer')) || 10;
  return NT_PER_CHOICES.indexOf(v) === -1 ? 10 : v;
}

/* 지역마다 올라온 정책 수 — 고르기 상자에 함께 보여 줍니다. */
const REGION_COUNT = NOTICES.reduce((acc, n) => {
  if (n.region) acc[n.region] = (acc[n.region] || 0) + 1;
  return acc;
}, {});

export default function Notices() {
  const { T, lang } = useI18n();
  useDocTitle('navUpdates');
  const loc = useLocation();

  const [pick, setPick] = useState(() => load('ntRegion') || 'all');   // 'all' · 'nation' · 지역 코드
  const [per, setPer] = useState(initialPer);
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');                                        // 입력칸 그대로
  const [open, setOpen] = useState(() => new Set());
  const [jumpTo, setJumpTo] = useState(null);
  const filterRef = useRef(null);
  const jumped = useRef(false);

  const ntQ = q.trim().slice(0, 60);
  const regionName = (code) => (T.ntRegions && T.ntRegions[code]) || code;
  const todayStr = fmt(today());
  const isClosed = (n) => !!(n.until && n.until < todayStr);

  /* 검색어를 띄어쓰기로 나눠, 모두 들어 있는 항목만 남깁니다(대소문자 무시).
     지금 언어의 제목·내용에 더해 출처·지역 이름·한국어 제목도 함께 봅니다 —
     기관 이름은 한국어로만 적혀 있고, 상담사가 한국어로 찾아 줄 때도 있습니다. */
  const sorted = useMemo(() => {
    const words = ntQ.toLowerCase().split(/\s+/).filter(Boolean);
    const match = (n) => {
      if (!words.length) return true;
      const body = n[lang] || n.en;
      const hay = [body.title, (body.points || []).join(' '), n.source, n.ko && n.ko.title,
        n.region ? ((T.ntRegions && T.ntRegions[n.region]) || n.region) : ''].join(' ').toLowerCase();
      return words.every((w) => hay.indexOf(w) !== -1);
    };
    /* 최신 소식이 위로. 같은 날 발표된 항목은 data 에 적힌 순서를 지킵니다(안정 정렬).
       원본 배열은 건드리지 않습니다. */
    return NOTICES.filter((n) => {
      if (!match(n)) return false;
      if (pick === 'nation') return !n.region;
      if (pick !== 'all') return n.region === pick;
      return true;
    }).sort((a, b) => {
      const c = (a.until && a.until < todayStr ? 1 : 0) - (b.until && b.until < todayStr ? 1 : 0);
      return c || String(b.date || '').localeCompare(String(a.date || ''));
    });
  }, [ntQ, pick, lang, T, todayStr]);

  const pages = Math.max(1, Math.ceil(sorted.length / per));
  const curPage = Math.min(page, pages);
  const shown = sorted.slice((curPage - 1) * per, curPage * per);

  const choose = (v) => { setPick(v); setPage(1); save('ntRegion', v); };
  const toggle = (key) => setOpen((s) => {
    const next = new Set(s);
    if (next.has(key)) next.delete(key); else next.add(key);
    return next;
  });
  const go = (p) => {
    setPage(p);
    if (filterRef.current) filterRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ---------- #항목 으로 들어온 경우 ----------
     그 항목이 지금 거름(지역·검색어) 밖에 있으면 거름을 풀고, 들어 있는 쪽으로 넘긴 뒤 펼칩니다. */
  const hashKey = decodeURIComponent((loc.hash || '').slice(1));
  useEffect(() => {
    if (!hashKey || !NOTICES.some((n) => n.key === hashKey)) return;
    let list = sorted;
    if (!list.some((n) => n.key === hashKey)) {
      setPick('all'); save('ntRegion', 'all'); setQ('');
      list = NOTICES.slice().sort((a, b) => {
        const c = (isClosed(a) ? 1 : 0) - (isClosed(b) ? 1 : 0);
        return c || String(b.date || '').localeCompare(String(a.date || ''));
      });
    }
    const idx = list.findIndex((n) => n.key === hashKey);
    setPage(Math.floor(idx / per) + 1);
    setOpen((s) => new Set(s).add(hashKey));
    setJumpTo(hashKey);
    // 거름이 바뀌어도 다시 계산하지 않습니다 — 주소가 바뀔 때만 한 번 맞춥니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hashKey]);

  useEffect(() => {
    if (!jumpTo || jumped.current) return undefined;
    const t = setTimeout(() => {
      const el = document.getElementById(jumpTo);
      if (el) { el.scrollIntoView({ block: 'start' }); jumped.current = true; }
    }, 80);
    return () => clearTimeout(t);
  }, [jumpTo, curPage]);

  return (
    <>
      <SubVisual crumbs={['navUpdates']} en="Policy Updates" title="ntTitle" />
      <main id="top">
        <section id="notices" className="band">
          <div className="wrap">
            <form className="board-search nt-search" id="ntSearch" role="search"
                  onSubmit={(e) => { e.preventDefault(); setPage(1); }}>
              <label className="sr" htmlFor="ntQ">{T.ntSearchLabel}</label>
              <input type="search" id="ntQ" maxLength={60} placeholder={T.ntSearchPh}
                     autoCapitalize="off" autoCorrect="off" value={q}
                     onChange={(e) => { setQ(e.target.value); setPage(1); }} />
              <button type="submit" className="btn btn-go btn-sm">{T.boardSearchBtn}</button>
              {ntQ && (
                <button type="button" className="btn btn-ghost btn-sm" id="ntQClear"
                        onClick={() => { setQ(''); setPage(1); const i = document.getElementById('ntQ'); if (i) i.focus(); }}>
                  {T.boardSearchClear}
                </button>
              )}
            </form>
            {ntQ && <p className="board-found nt-found" id="ntFound">{'"' + ntQ + '" · ' + sorted.length + (T.boardFoundUnit || '')}</p>}

            <div className="nt-filter" id="ntFilter" ref={filterRef}>
              {[['all', T.ntFilterAll], ['nation', T.ntFilterNation]].map(([v, label]) => (
                <button key={v} type="button" className={'chip' + (pick === v ? ' is-on' : '')}
                        aria-pressed={pick === v ? 'true' : 'false'} onClick={() => choose(v)}>{label}</button>
              ))}
              {/* 지역은 16개라 버튼 대신 고르기 상자로 둡니다. */}
              <select className={'nt-region' + (NT_REGIONS.indexOf(pick) !== -1 ? ' is-on' : '')}
                      aria-label={T.ntFilterRegion} value={NT_REGIONS.indexOf(pick) !== -1 ? pick : ''}
                      onChange={(e) => choose(e.target.value || 'all')}>
                <option value="">{T.ntFilterRegion}</option>
                {NT_REGIONS.map((r) => (
                  <option key={r} value={r}>{regionName(r) + ' (' + (REGION_COUNT[r] || 0) + ')'}</option>
                ))}
              </select>
              <select className="nt-per" aria-label={T.ntPerLabel || 'Per page'} value={String(per)}
                      onChange={(e) => { const v = Number(e.target.value) || 10; setPer(v); setPage(1); save('ntPer', String(v)); }}>
                {NT_PER_CHOICES.map((n) => (
                  <option key={n} value={String(n)}>{String(T.ntPerUnit || '%d').replace('%d', n)}</option>
                ))}
              </select>
            </div>

            <div className="notice-list" id="noticeList">
              {!sorted.length && <p className="nt-empty">{ntQ ? T.ntNoMatch : T.ntEmpty}</p>}
              {shown.map((n) => {
                const body = n[lang] || n.en;
                const closed = isClosed(n);
                const isOpen = open.has(n.key);
                // 지자체 정책은 태그 자리에 지역 이름을 씁니다. 어느 지역 이야기인지가 먼저 보여야 합니다.
                const tagLabel = n.region ? regionName(n.region) : ((T.noticeTags && T.noticeTags[n.tagKey]) || n.tagKey);
                const source = (lang !== 'ko' && n.sourceL && n.sourceL[lang]) || n.source;
                return (
                  <article key={n.key} id={n.key} className={'notice' + (closed ? ' is-closed' : '') + (isOpen ? ' is-open' : '')}>
                    <button type="button" className="notice-head" aria-expanded={isOpen ? 'true' : 'false'} onClick={() => toggle(n.key)}>
                      <span className={'notice-tag' + (n.region ? ' is-local' : '')}>{tagLabel}</span>
                      {/* 날짜를 제목 옆에 크게 둡니다. "언제 바뀐 것인가" 가 이 쪽의 핵심입니다. */}
                      {n.date && <span className="notice-date">{(T.ntDateLabel ? T.ntDateLabel + ' ' : '') + n.date}</span>}
                      {closed && <span className="notice-closed">{T.ntClosed}</span>}
                      <p className="notice-t">{body.title}</p>
                      {/* 언제 마지막으로 확인했는지 — 펼치지 않아도 보이게 줄 오른쪽에 둡니다. */}
                      {n.checked && <span className="notice-checked">{T.ntCheckedLabel + ' ' + n.checked}</span>}
                      <span className="notice-arrow">⌄</span>
                    </button>
                    <div className="notice-body">
                      <ul>{(body.points || []).map((p, i) => <li key={i}>{p}</li>)}</ul>
                      {/* 챗봇으로 넘기는 버튼 — 2026-11 멘토링 의견으로 숨겨 둡니다(config/features.js). */}
                      {!isAndroidApp && FEATURES.noticeAsk && (
                        <Link className="btn btn-ghost btn-sm" to={'/ask?q=' + encodeURIComponent(body.title)}
                              onClick={() => sSet('eum.carryQ', body.title)}>{T.ntAskBtn}</Link>
                      )}
                      <div className="notice-meta">
                        <span>{T.ntSourceLabel + ': ' + source}</span>
                        {n.date && T.ntDateLabel && <span>{T.ntDateLabel + ': ' + n.date}</span>}
                        <span>{T.ntCheckedLabel + ': ' + n.checked}</span>
                        {n.until && <span>{T.ntUntil + ': ' + n.until}</span>}
                        <ExternalLink href={n.url}>{T.ntOriginal}</ExternalLink>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <Pager id="ntPager" page={curPage} pages={sorted.length ? pages : 0} onGo={go} blockArrows />
          </div>
        </section>
      </main>
    </>
  );
}
