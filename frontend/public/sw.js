/* E9-Bridge — 서비스 워커 (React 버전)
   ------------------------------------------------------------------
   설치형 앱(PWA)과 Play 스토어 배포(TWA)의 최소 요건입니다.

   ■ React(SPA)로 바뀌면서 달라진 점
     예전에는 쪽마다 HTML 파일이 따로 있었습니다. 이제는 index.html 하나가
     모든 화면(/check, /notices …)을 그리고, JS·CSS 는 빌드할 때마다 이름에
     해시가 붙은 파일(/static/index-AbC123.js)로 나옵니다.
     → 화면 주소로 들어오는 요청은 모두 같은 "앱 껍데기(index.html)"로 답합니다.
     → /static/ 파일은 이름이 바뀌지 않는 한 내용도 안 바뀌므로 저장해 둔 것을 바로 씁니다.

   ■ 캐시하지 않음  ← 중요
     · /api/ 전부. 로그인 상태, 게시판 글, AI 답변이 여기로 옵니다.
       이걸 캐시하면 로그아웃했는데 로그인으로 보이거나, 남의 화면이 남습니다.

   ■ 화면(HTML)은 "네트워크 먼저"
     이 서비스는 법정 기한과 조문을 다룹니다. 화면에 적힌 "확인일"이 오래된 것이면
     그 자체가 사용자 피해가 됩니다. 연결이 될 때는 항상 최신을 보여 줍니다.
     연결이 없으면 저장해 둔 앱 껍데기를 띄워, 기한 계산(브라우저 안 계산)은 계속 됩니다.

   ■ 고칠 때
     이 파일의 동작을 바꾸면 아래 VERSION 을 올리세요. (JS·CSS 는 해시 이름이라 올릴 필요 없습니다.)
   ------------------------------------------------------------------ */

const VERSION = 'v30';   // 2026-11-04 React(Vite) + Express 구조로 전환
const STATIC = 'e9b-static-' + VERSION;
const PAGES = 'e9b-pages-' + VERSION;

/* 설치할 때 미리 받아 두는 것 */
const PRECACHE = [
  '/',
  '/offline.html',
  '/manifest.webmanifest',
  '/assets/logo-mark.svg',
  '/assets/logo-mark-white.svg',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(STATIC)
      // 하나라도 실패하면 설치 전체가 실패하므로 개별로 담습니다.
      .then((c) => Promise.allSettled(PRECACHE.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== STATIC && k !== PAGES).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isApi(url) { return url.pathname.startsWith('/api/'); }
function isNavigation(req) {
  return req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // GET 만 다룹니다. 로그인·글쓰기 같은 POST 는 손대지 않습니다.
  if (req.method !== 'GET') return;
  // 다른 도메인(구글 폰트 등)은 브라우저에 맡깁니다.
  if (url.origin !== self.location.origin) return;
  // API 는 캐시를 거치지 않습니다. 관리자 화면도 기기에 남기지 않습니다.
  if (isApi(url) || url.pathname === '/admin') return;

  if (isNavigation(req)) {
    // 네트워크 먼저 → 실패하면 저장해 둔 앱 껍데기 → 그것도 없으면 오프라인 안내
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(PAGES).then((c) => c.put('/', copy));
          }
          return res;
        })
        .catch(() => caches.match('/').then((hit) => hit || caches.match('/offline.html')))
    );
    return;
  }

  // /static/ (빌드 결과, 해시 이름) — 저장해 둔 것이 있으면 그대로 씁니다.
  if (url.pathname.startsWith('/static/')) {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(STATIC).then((c) => c.put(req, copy)); }
        return res;
      }))
    );
    return;
  }

  // 그 밖의 정적 파일(사진·아이콘) — 저장해 둔 것을 바로 주고, 뒤에서 조용히 새로 받아 둡니다.
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req)
        .then((res) => {
          if (res && res.ok) { const copy = res.clone(); caches.open(STATIC).then((c) => c.put(req, copy)); }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    })
  );
});
