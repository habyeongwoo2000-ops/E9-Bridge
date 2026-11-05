/* 화면 주소(라우트) 목록
   ------------------------------------------------------------------
   쪽마다 코드를 따로 나눠(React.lazy) 그 쪽을 열 때만 받습니다.
   첫 화면을 여는 사람은 게시판·마이페이지 코드를 내려받지 않습니다.

   예전 주소(index.html, check.html …)로 들어와도 새 주소로 넘겨 줍니다.
   카카오톡에 이미 퍼진 링크와 검색엔진에 남은 주소가 깨지지 않게 하려는 것입니다.
   (서버 쪽에서도 vercel.json redirects 로 한 번 더 넘깁니다.)
   ------------------------------------------------------------------ */

import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import { FEATURES } from './config/features.js';

const Home = lazy(() => import('./pages/Home.jsx'));
const Check = lazy(() => import('./pages/Check.jsx'));
const Notices = lazy(() => import('./pages/Notices.jsx'));
const Legal = lazy(() => import('./pages/Legal.jsx'));
const Faq = lazy(() => import('./pages/Faq.jsx'));
const Board = lazy(() => import('./pages/Board.jsx'));
const Interviews = lazy(() => import('./pages/Interviews.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Signup = lazy(() => import('./pages/Signup.jsx'));
const Account = lazy(() => import('./pages/Account.jsx'));
const Privacy = lazy(() => import('./pages/Privacy.jsx'));
const Ask = lazy(() => import('./pages/Ask.jsx'));
const Admin = lazy(() => import('./pages/Admin.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

/* 예전 .html 주소 → 새 주소 */
const LEGACY = {
  'index.html': '/', 'check.html': '/check', 'reason.html': '/check#reason', 'payout.html': '/check#payout',
  'notices.html': '/notices', 'legal.html': '/legal', 'faq.html': '/faq', 'board.html': '/board',
  'interviews.html': '/interviews', 'login.html': '/login', 'signup.html': '/signup',
  'account.html': '/account', 'privacy.html': '/privacy', 'ask.html': '/ask', 'admin.html': '/admin'
};

function Fallback() {
  const loc = useLocation();
  const name = loc.pathname.split('/').pop();
  const to = LEGACY[name];
  if (to) {
    const [path, hash] = to.split('#');
    return <Navigate replace to={{ pathname: path, search: loc.search, hash: loc.hash || (hash ? '#' + hash : '') }} />;
  }
  return <NotFound />;
}

export default function App() {
  return (
    <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
      <Routes>
        {/* 관리자 화면은 머리말·바닥글 없이 따로 둡니다(메뉴 어디에도 연결하지 않습니다). */}
        <Route path="/admin" element={<Admin />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="check" element={<Check />} />
          <Route path="reason" element={<Navigate replace to="/check#reason" />} />
          <Route path="payout" element={<Navigate replace to="/check#payout" />} />
          <Route path="notices" element={<Notices />} />
          <Route path="legal" element={<Legal />} />
          <Route path="faq" element={<Faq />} />
          <Route path="board" element={<Board />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account" element={<Account />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="ask" element={FEATURES.chatbot ? <Ask /> : <Navigate replace to="/faq" />} />
          <Route path="*" element={<Fallback />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
