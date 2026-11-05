/* 마이페이지 · 내 정보 요약(저장·지우기·메일) · 프로필 */

const express = require('express');
const ctrl = require('../controllers/accountController');
const { limits } = require('../middleware/rateLimit');

const router = express.Router();

router.get('/', ctrl.handle);               // 내 정보 / ?part=summary 요약
router.post('/', limits.account, ctrl.handle); // action: nickname | password | profile | summarySave | summaryClear | summaryMail
router.all('/', ctrl.handle);               // 그 밖의 메서드 → 405 (예전 동작 그대로)

module.exports = router;
