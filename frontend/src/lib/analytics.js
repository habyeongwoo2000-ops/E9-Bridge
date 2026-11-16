/* 방문 통계(GA4)와 전환 이벤트
   ------------------------------------------------------------------
   · 배포된 사이트에서만, 측정 ID(config/analytics.js)가 있을 때만 GA4 스크립트를 불러옵니다.
     개발 서버에서는 불러오지 않고 window.dataLayer 에 쌓기만 합니다(동작 확인용).
   · 화면 이동(page_view)은 GA4 "향상된 측정"의 기록 변경 감지가 셉니다.
   · 보내는 것은 이벤트 이름과 어느 버튼·서비스인지뿐입니다. 입력한 날짜·답·글 내용·계정 정보는 보내지 않습니다.
   · 구글 신호·광고 맞춤 설정은 끕니다.

   전환 이벤트(GA4 에서 "주요 이벤트"로 표시할 것)
     check_complete       내 상황 확인 — 종합 결과까지 봄        (보조: check_deadline_calc 기한 계산)
     reco_search          맞춤 지원 — 조건을 골라 찾아봄
     board_question       질문게시판에 질문을 남김
     login                로그인(method: password / google / kakao)  (보조: sign_up)
     notice_source_click  최신 제도 — 원문 보기
     home_service_click   홈 — 주요 서비스 아이콘(service)
     home_reco_click      홈 — 맞춤 지원 찾기
     home_check_start     홈 — 내 상황 확인 시작하기
     home_login_start     홈 — 로그인하고 시작하기
     community_click      커뮤니티(network: instagram / facebook)

   버튼에는 data-ga="이벤트 이름" (필요하면 data-ga-label="값") 만 달면 아래 클릭 감지가 보냅니다. */

import { GA_ID } from '../config/analytics.js';

let started = false;

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
}

export function initAnalytics() {
  if (started || typeof window === 'undefined') return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || gtag;

  // 버튼 클릭 → data-ga 이벤트
  document.addEventListener('click', (e) => {
    const el = e.target && e.target.closest && e.target.closest('[data-ga]');
    if (!el) return;
    const label = el.getAttribute('data-ga-label');
    track(el.getAttribute('data-ga'), label ? { label } : undefined);
  }, true);

  if (!GA_ID || !import.meta.env.PROD) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  document.head.appendChild(s);
  gtag('js', new Date());
  gtag('config', GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
}

export function track(name, params) {
  if (!name || typeof window === 'undefined') return;
  gtag('event', name, params || {});
}
