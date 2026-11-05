/* GET /api/health — 서버가 살아 있는지 확인합니다.
   비밀 값은 절대 내보내지 않습니다. 무엇이 "설정되어 있는지"만 참/거짓으로 알려 줍니다.
   배포 직후 환경변수가 빠지지 않았는지 볼 때 씁니다. */

const G = require('../services/gemini');
const M = require('../services/mail');
const O = require('../services/oauth');

function handle(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    ok: true,
    service: 'e9-bridge-api',
    time: new Date().toISOString(),
    configured: {
      supabase: !!(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
      session: !!(process.env.SESSION_SECRET && process.env.SESSION_SECRET.length >= 16),
      gemini: G.keyCount() > 0,
      mail: !!M.configured(),
      oauth: O.enabledProviders()
    }
  });
}

module.exports = { handle };
