/* 서류 사진 읽기 (Gemini 비전) — 사실만 뽑고 판단은 화면의 규칙 엔진이 합니다 */

const express = require('express');
const ctrl = require('../controllers/readDocController');
const { limits } = require('../middleware/rateLimit');

const router = express.Router();

router.post('/', limits.readDoc, ctrl.handle); // { image(base64), mediaType, lang }
router.all('/', ctrl.handle);               // 그 밖의 메서드 → 405 (예전 동작 그대로)

module.exports = router;
