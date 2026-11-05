/* 마지막 그물 — 컨트롤러에서 잡지 못한 오류를 여기서 받습니다.
   사용자에게는 자세한 이유를 보여 주지 않고, 서버 로그에만 남깁니다. */

module.exports = function errorHandler(err, req, res, next) {   // eslint-disable-line no-unused-vars
  // 본문이 JSON 이 아니거나 너무 큰 경우는 서버 잘못이 아니라 요청 잘못입니다.
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ ok: false, error: 'badJson' });
  }
  if (err && err.type === 'entity.too.large') {
    return res.status(413).json({ ok: false, error: 'tooLarge' });
  }

  console.error('[api] unhandled', err && (err.stack || err.message || err));
  if (res.headersSent) return next(err);
  return res.status(500).json({ ok: false, error: 'server' });
};
