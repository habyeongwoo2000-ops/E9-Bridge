/* 보안 헤더 — API 응답에 공통으로 붙입니다.
   helmet 같은 큰 패키지 대신 꼭 필요한 것만 직접 적었습니다.
   (화면 파일의 헤더는 vercel.json 이 정합니다.) */

module.exports = function securityHeaders(req, res, next) {
  res.setHeader('X-Content-Type-Options', 'nosniff');      // 내용물 종류를 멋대로 추측하지 않게
  res.setHeader('X-Frame-Options', 'DENY');                  // 다른 사이트 안에 끼워 넣지 못하게
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
  next();
};
