/* AI 질문 (Gemini) — 지금은 화면에서 숨김 상태, 서버는 그대로 둡니다 */

const express = require('express');
const ctrl = require('../controllers/askController');
const { limits } = require('../middleware/rateLimit');

const router = express.Router();

router.post('/', limits.ask, ctrl.handle);  // { question, lang }
router.all('/', ctrl.handle);               // 그 밖의 메서드 → 405 (예전 동작 그대로)

module.exports = router;
