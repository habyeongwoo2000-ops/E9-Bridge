/* GET /api/benefits?sido=gyeonggi
   정부24 공공서비스 API 에서 외국인 대상 서비스를 불러 그 지역(+중앙기관) 것만 돌려줍니다.
   → { ok:true, enabled:true, items:[{ id, name, summary, target, org, deadline, phone, url }], fetchedAt }
   키(GOV24_API_KEY)가 없으면 { ok:true, enabled:false } — 화면은 안내만 보여 줍니다.
   외부 API 가 실패하면 502 { ok:false, error:'upstream' }. */

const G = require('../services/gov24');

async function handle(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false, error: 'method' });
  if (!G.configured()) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ ok: true, enabled: false, items: [] });
  }
  const sido = String((req.query && req.query.sido) || '');
  if (sido && !G.SIDO_WORDS[sido]) return res.status(400).json({ ok: false, error: 'sido' });
  try {
    const out = await G.search(sido);
    // 브라우저·Vercel 앞단에 10분 담아 둡니다(같은 지역을 여러 사람이 볼 때).
    res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=600');
    return res.status(200).json({ ok: true, enabled: true, items: out.items, fetchedAt: out.fetchedAt });
  } catch (e) {
    console.warn('gov24 failed', e && (e.status || e.message));
    return res.status(502).json({ ok: false, error: 'upstream' });
  }
}

module.exports = { handle };
