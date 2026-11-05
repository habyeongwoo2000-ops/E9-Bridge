/* 관리자 전용 — 답변을 번역해 공개 (x-admin-token 헤더) */

const express = require('express');
const ctrl = require('../controllers/qnaPublishController');
const { limits } = require('../middleware/rateLimit');

const router = express.Router();

router.post('/', limits.admin, ctrl.handle); // { id? }
router.all('/', ctrl.handle);               // 그 밖의 메서드 → 405 (예전 동작 그대로)

module.exports = router;
