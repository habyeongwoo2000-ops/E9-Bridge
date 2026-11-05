/* Vercel 진입점 — /api/* 요청은 전부 이 함수 하나로 들어옵니다(vercel.json 의 rewrites).
   실제 서버 코드는 backend/ 폴더의 Express 앱에 있습니다.
   함수가 1개뿐이라 Vercel 무료(Hobby) 요금제의 함수 12개 제한에 걸리지 않습니다. */

module.exports = require('../backend/src/app');
