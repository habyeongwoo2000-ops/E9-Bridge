/* 첫 화면
   ------------------------------------------------------------------
   순서
     1. 메인 비주얼 (인터뷰 사진 슬라이드)
     2. 주요 서비스 (아이콘 8개)
     3. 우리가 풀려는 문제 — 숫자 네 개 + 문제 → 기능 연결         (2026-11 추가)
     4. 언론이 본 E-9 노동 현실 — 신문 1면처럼 꾸민 기사 6건         (2026-11 추가)
     5. 내 상황 확인 시작 + 내 정보 한눈에 (로그인 개인화)
     6. 인터뷰 (사진 반, 글 반)
     7. 최신 제도 5건
     8. 숫자로 보는 사업장 변경
     9. 커뮤니티 (공식 SNS)
   3·4번은 해커톤 멘토링 의견("어떤 문제를 풀려는지 첫 화면에서 보여 달라")을 반영했습니다.
   ------------------------------------------------------------------ */

import { Link } from 'react-router-dom';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import { FEATURES } from '../config/features.js';
import { SNS } from '../components/Footer.jsx';
import HeroSlider from '../components/home/HeroSlider.jsx';
import ProblemSection from '../components/home/ProblemSection.jsx';
import NewsSection from '../components/home/NewsSection.jsx';
import MyCard from '../components/home/MyCard.jsx';
import FeatInterview from '../components/home/FeatInterview.jsx';
import HomeNotices from '../components/home/HomeNotices.jsx';
import '../styles/pages/home.css';

/* 주요 서비스 아이콘 — 선(stroke)으로 그리고, 강조할 부분에만 class="ac"(파란색)를 줍니다. */
const SERVICES = [
  { to: '/check#deadline', key: 'dlTitle', svg: <><rect x="7" y="10" width="34" height="31" rx="3" /><path d="M7 19h34M16 6v8M32 6v8" /><circle className="ac" cx="30" cy="31" r="6" /><path className="ac" d="M30 28v3.5l2.2 1.6" /></> },
  { to: '/check#reason', key: 'ckTitle', svg: <><rect x="11" y="9" width="26" height="33" rx="3" /><path d="M18 9V6.5h12V9" /><path d="M17 19h14M17 26h9" /><path className="ac" d="M18 33.5l3.5 3.5L30 29.5" /></> },
  { to: '/check#payout', key: 'secNoPay', svg: <><path d="M8 15h28a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z" /><path d="M8 15 30 8l2 7" /><rect className="ac" x="29" y="23" width="13" height="9" rx="2" /><circle className="ac" cx="34" cy="27.5" r="1.2" /></> },
  { to: '/notices', key: 'navUpdates', svg: <><path d="M9 21v8a2 2 0 0 0 2 2h5l14 8V11l-14 8h-5a2 2 0 0 0-2 2z" /><path d="M16 31l3 9h5l-2-8" /><path className="ac" d="M36 19c2 1.5 3 3.5 3 6s-1 4.5-3 6" /></> },
  /* 챗봇은 멘토링 의견에 따라 숨겨 두었습니다(config/features.js). 그 자리에는 인터뷰를 둡니다. */
  FEATURES.chatbot
    ? { to: '/ask', key: 'navChatbot', svg: <><path d="M9 11h28a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3H21l-9 7v-7H9a3 3 0 0 1-3-3V14a3 3 0 0 1 3-3z" /><circle className="ac" cx="16" cy="21.5" r="1.6" /><circle className="ac" cx="23" cy="21.5" r="1.6" /><circle className="ac" cx="30" cy="21.5" r="1.6" /></> }
    : { to: '/interviews', key: 'navInterview', svg: <><rect x="17" y="6" width="14" height="22" rx="7" /><path d="M11 22a13 13 0 0 0 26 0" /><path d="M24 35v7M17 42h14" /><path className="ac" d="M21 13h6M21 18h6" /></> },
  { to: '/board', key: 'navBoard', svg: <><rect x="8" y="8" width="30" height="32" rx="3" /><path d="M15 17h16M15 24h16M15 31h9" /><circle className="ac" cx="35" cy="35" r="7" /><path className="ac" d="M32.8 33.2a2.2 2.2 0 1 1 2.9 2.1c-.5.2-.7.6-.7 1.1v.6M35 39.3v.2" /></> },
  { to: '/legal', key: 'secNoLegal', svg: <><path d="M24 7v34M15 41h18M10 13h28" /><path className="ac" d="M10 13 5 25a5 5 0 0 0 10 0zM38 13l-5 12a5 5 0 0 0 10 0z" /></> },
  { to: '/faq', key: 'faqTitle', svg: <><circle cx="24" cy="24" r="17" /><path className="ac" d="M19 19.5a5 5 0 1 1 7 4.6c-1.3.6-2 1.6-2 3V29M24 34v.5" /></> }
];

const STATS = [
  { t: 'st1T', s: 'st1S', n: 1, u: 'st1U' },
  { t: 'st2T', s: 'st2S', n: 3, u: 'st2U' },
  { t: 'st3T', s: 'st3S', n: 3, u: 'st3U' },
  { t: 'st4T', s: 'st4S', n: 6, u: 'st4U' }
];

export default function Home() {
  const { T } = useI18n();
  useDocTitle(null);

  return (
    <main id="top">
      <HeroSlider />

      {/* ▼ 주요 서비스 */}
      <section className="band" id="svc">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-eyebrow" aria-hidden="true">E9-Bridge Service</p>
            <h2 className="sec-title">{T.svcTitle}</h2>
          </div>
          <ul className="svc-list">
            {SERVICES.map((s) => (
              <li key={s.to}>
                <Link to={s.to}>
                  <span className="svc-ic" aria-hidden="true"><svg viewBox="0 0 48 48">{s.svg}</svg></span>
                  <span className="svc-name">{T[s.key]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProblemSection />
      <NewsSection />

      {/* ▼ 내 상황 확인 시작 + 내 정보 한눈에 */}
      <section id="deadline" className="band band-sky">
        <div className="wrap">
          <div className="card-row">
            {/* 기한·사유·출국 정산은 /check 에서 차례로 합니다. 여기서는 시작만 안내합니다. */}
            <div className="calc-card wz-start">
              <h2>{T.navCheck}</h2>
              <p className="sec-lead">{T.wzHomeLead}</p>
              <ol className="wz-start-list">
                <li><span className="wz-n">1</span><span>{T.dlTitle}</span></li>
                <li><span className="wz-n">2</span><span>{T.ckTitle}</span></li>
                <li><span className="wz-n">3</span><span>{T.secNoPay}</span></li>
              </ol>
              <Link className="btn btn-go" to="/check">{T.wzStart}</Link>
            </div>
            <MyCard />
          </div>
        </div>
      </section>

      <FeatInterview />
      <HomeNotices />

      {/* ▼ 숫자로 보는 사업장 변경 */}
      <section className="stats" style={{ backgroundImage: "url('/assets/itv-boss.jpg')" }}>
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-eyebrow" aria-hidden="true">Key Numbers</p>
            <h2 className="sec-title">{T.stTitle}</h2>
          </div>
          <ul className="st-list">
            {STATS.map((s) => (
              <li key={s.t}>
                <p className="st-t">{T[s.t]}</p>
                <p className="st-s">{T[s.s]}</p>
                <p className="st-n"><b>{s.n}</b><span>{T[s.u]}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ▼ 커뮤니티 — 공식 SNS 채널. 채널을 늘리면 li 를 하나 더 넣으세요. */}
      <section className="comm" id="community" aria-labelledby="commTitle">
        <div className="wrap">
          <div className="sec-head">
            <p className="sec-eyebrow" aria-hidden="true">Community</p>
            <h2 className="sec-title" id="commTitle">{T.commTitle}</h2>
            <p className="comm-lead"><span>{T.commLead1}</span><br /><span>{T.commLead2}</span></p>
          </div>
          <ul className="comm-list">
            <li>
              <a className="comm-ic comm-ig" href={SNS.instagram} target="_blank" rel="noopener noreferrer" aria-label={T.commIg}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" /></svg>
              </a>
              <span className="comm-name" aria-hidden="true">Instagram</span>
            </li>
            <li>
              <a className="comm-ic comm-fb" href={SNS.facebook} target="_blank" rel="noopener noreferrer" aria-label={T.commFb}>
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M13.6 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6V21h3.1z" /></svg>
              </a>
              <span className="comm-name" aria-hidden="true">Facebook</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
