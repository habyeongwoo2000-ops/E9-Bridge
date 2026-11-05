/* 묻고 답하기 — 공개 목록 · 질문 접수 */

const express = require('express');
const ctrl = require('../controllers/qnaController');
const { limits } = require('../middleware/rateLimit');

const router = express.Router();

router.get('/', ctrl.handle);               // 공개된 글 (?lang)
router.post('/', limits.qna, ctrl.handle);  // 질문 접수 { question, lang }
router.all('/', ctrl.handle);               // 그 밖의 메서드 → 405 (예전 동작 그대로)

module.exports = router;
