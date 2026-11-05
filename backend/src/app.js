/* E9-Bridge 백엔드 — Express 앱

   이 파일은 앱을 "만들기만" 하고 직접 켜지 않습니다(listen 없음).
     · 내 컴퓨터에서는  src/server.js 가 켭니다 (npm run dev → http://localhost:4000)
     · Vercel 에서는    api/index.js 가 이 앱을 그대로 내보내 함수 하나로 돌립니다.

   요청이 지나가는 순서
     보안 헤더 → 요청 기록 → 본문 읽기(JSON) → /api 라우터 → (없으면) 404 → 오류 처리

   폴더 구조
     routes/       주소와 메서드만 정합니다 (어느 컨트롤러로 보낼지 + 요청 제한)
     controllers/  요청을 받아 검사하고 응답을 만듭니다 (예전 api/*.js 의 본문)
     services/     DB(Supabase) · 로그인 · AI(Gemini) · 메일 · 소셜 로그인 같은 공용 기능
     middleware/   모든 요청에 공통으로 끼우는 것들 */

const express = require('express');

const securityHeaders = require('./middleware/securityHeaders');
const requestLogger = require('./middleware/requestLogger');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const apiRouter = require('./routes');

const app = express();

app.disable('x-powered-by');
// Vercel 앞단(프록시)이 넘겨주는 실제 접속 IP 를 믿습니다. 요청 제한이 IP 로 동작합니다.
app.set('trust proxy', true);

app.use(securityHeaders);
app.use(requestLogger);

/* Vercel 은 /api/(.*) 를 이 함수 하나로 보내면서 원래 주소(/api/posts …)를 그대로 넘깁니다.
   혹시 앞의 /api 가 빠진 채로 들어오는 환경이어도 같은 라우터를 타도록 맞춰 줍니다. */
app.use(function ensureApiPrefix(req, res, next) {
  if (!/^\/api(\/|$|\?)/.test(req.url)) req.url = '/api' + (req.url.charAt(0) === '/' ? '' : '/') + req.url;
  next();
});

/* 본문 읽기. 서류 사진(base64)이 들어오므로 넉넉하게 6MB 까지 받습니다.
   (사진 자체 제한은 readDocController 가 5,000,000자로 따로 겁니다.)
   예전 서버리스 함수처럼 text/plain 으로 온 JSON 글자도 받아서, 컨트롤러가 직접 풀게 둡니다. */
app.use(express.json({ limit: '6mb' }));
app.use(express.text({ type: 'text/plain', limit: '6mb' }));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));

app.use('/api', apiRouter);
app.use('/api', notFound);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
