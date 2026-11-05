/* 요청 기록 — 메서드, 경로, 상태 코드, 걸린 시간만 남깁니다.
   주소 뒤의 ?쿼리는 남기지 않습니다. 소셜 로그인 콜백의 code·state 처럼
   남기면 안 되는 값이 들어 있기 때문입니다. 본문(body)도 남기지 않습니다. */

module.exports = function requestLogger(req, res, next) {
  const started = Date.now();
  res.on('finish', function () {
    const path = String(req.originalUrl || req.url || '').split('?')[0];
    console.log('[api] ' + req.method + ' ' + path + ' → ' + res.statusCode + ' (' + (Date.now() - started) + 'ms)');
  });
  next();
};
