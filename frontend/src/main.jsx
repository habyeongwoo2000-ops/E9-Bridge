/* E9-Bridge 프론트엔드 진입점
   I18nProvider (언어) → AuthProvider (로그인) → SummaryProvider (내 정보 요약) → 라우터 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { I18nProvider } from './i18n/I18nProvider.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { SummaryProvider } from './context/SummaryContext.jsx';
import './styles/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <AuthProvider>
          <SummaryProvider>
            <App />
          </SummaryProvider>
        </AuthProvider>
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>
);

/* 설치형 앱(PWA) — 서비스 워커를 등록합니다. 연결이 끊겨도 이미 연 화면과
   기한 계산은 계속 되고, 홈 화면에 추가할 수 있게 됩니다. 개발 서버에서는 켜지 않습니다. */
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((e) => console.warn('service worker 등록 실패', e));
  });
}
