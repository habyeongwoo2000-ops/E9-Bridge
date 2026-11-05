/* 없는 API 주소 → 404 JSON. 화면(HTML)이 아니라 JSON 으로 답해야
   화면 코드가 "주소가 틀렸다"는 것을 바로 알 수 있습니다. */

module.exports = function notFound(req, res) {
  return res.status(404).json({ ok: false, error: 'notFound' });
};
