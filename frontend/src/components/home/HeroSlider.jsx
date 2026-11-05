/* 메인 비주얼 — 실제 현장 인터뷰 사진이 6초마다 바뀝니다.
   · 01/05 숫자, 이전·멈춤·다음 단추, 아래 진행 막대
   · 움직임을 줄이도록 설정한 기기(prefers-reduced-motion)에서는 저절로 넘기지 않습니다.
   · 다른 탭으로 가면 멈췄다가 돌아오면 이어서 넘깁니다. */

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import INTERVIEWS from '../../data/interviews.js';

const HERO_MS = 6000;

/* 사진과 그 인터뷰(data/interviews.js 의 key)를 짝지어 둡니다. 위치는 얼굴이 잘리지 않게 맞춘 값입니다. */
const SLIDES = [
  { itv: 'itv-sohee', img: '/assets/itv-sohee.jpg', pos: 'center 40%' },
  { itv: 'itv-owner', img: '/assets/itv-owner.jpg', pos: 'center 45%' },
  { itv: 'itv-asad', img: '/assets/itv-asad.jpg', pos: 'center 30%' },
  { itv: 'itv-boss', img: '/assets/itv-boss.jpg', pos: 'center 30%' },
  { itv: 'itv-tilo', img: '/assets/itv-tilo.jpg', pos: 'center 35%' }
];

function reducedMotion() {
  try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; }
}

export function itvName(it, lang) {
  return (lang !== 'ko' && it.aliasL && it.aliasL[lang]) || it.alias || '';
}

const two = (n) => ('0' + n).slice(-2);

export default function HeroSlider() {
  const { T, lang } = useI18n();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(reducedMotion);
  const [hidden, setHidden] = useState(false);
  const barRef = useRef(null);

  const go = (n) => setI((n + SLIDES.length) % SLIDES.length);

  /* 다음 장으로 넘기는 타이머 + 진행 막대 애니메이션을 처음부터 다시 */
  useEffect(() => {
    const bar = barRef.current;
    if (bar) { bar.classList.remove('is-run'); void bar.offsetWidth; } // 강제로 다시 그려 애니메이션을 0부터
    if (paused || hidden) return undefined;
    if (bar) bar.classList.add('is-run');
    const t = setTimeout(() => setI((x) => (x + 1) % SLIDES.length), HERO_MS);
    return () => clearTimeout(t);
  }, [i, paused, hidden]);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const it = INTERVIEWS.find((x) => x.key === SLIDES[i].itv);
  const caption = it ? (T.navInterview || '') + ' · ' + itvName(it, lang) : '';

  return (
    <section className="hv" id="hv" aria-roledescription="carousel" aria-label="E9-Bridge">
      {SLIDES.map((s, k) => (
        <div key={s.itv} className={'hv-slide' + (k === i ? ' is-on' : '')} data-itv={s.itv}
             style={{ backgroundImage: `url('${s.img}')`, backgroundPosition: s.pos }} />
      ))}
      <div className="hv-shade" aria-hidden="true" />
      <div className="wrap hv-in">
        <p className="hv-eyebrow" aria-hidden="true">E9-Bridge</p>
        <h1 className="hero-title">{T.heroTitle}</h1>
        <p className="hero-lead">{T.heroLead}</p>
        {/* 화면에는 보이지 않는 한 줄(검색·화면 읽기 프로그램용) */}
        <p className="sr" lang="ko">E9-Bridge는 고용허가제(E-9)로 한국에 온 외국인근로자가 사업장 변경 기한과 사유를 한국어·영어·베트남어·인도네시아어·캄보디아어(크메르어)·네팔어로 확인할 수 있는 무료 안내 서비스입니다.</p>
      </div>
      <div className="hv-ctrl">
        <div className="wrap">
          <p className="hv-cap" id="hvCap">{caption}</p>
          <div className="hv-nav">
            <span className="hv-count" aria-hidden="true"><b id="hvNow">{two(i + 1)}</b><i>/</i><span id="hvAll">{two(SLIDES.length)}</span></span>
            <button type="button" className="hv-btn" id="hvPrev" aria-label={T.carPrev} onClick={() => go(i - 1)}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12.5 4 6.5 10l6 6" /></svg>
            </button>
            <button type="button" className="hv-btn" id="hvPause" aria-label={paused ? T.hvPlay : T.hvPause} onClick={() => setPaused(!paused)}>
              {paused
                ? <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6 4l10 6-10 6z" /></svg>
                : <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="3" height="12" rx="1" /><rect x="12" y="4" width="3" height="12" rx="1" /></svg>}
            </button>
            <button type="button" className="hv-btn" id="hvNext" aria-label={T.carNext} onClick={() => go(i + 1)}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7.5 4l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
      <a className="hv-scroll" href="#svc" aria-hidden="true" tabIndex={-1}>SCROLL</a>
      <div className="hv-bar" aria-hidden="true"><i id="hvBar" ref={barRef} /></div>
    </section>
  );
}
