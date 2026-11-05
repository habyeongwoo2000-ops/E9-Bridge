/* 회원가입 · 로그인 · 로그아웃 · 로그인 상태 · 언어 저장 */

const express = require('express');
const ctrl = require('../controllers/authController');
const { limits } = require('../middleware/rateLimit');

const router = express.Router();

router.get('/', ctrl.handle);               // 로그인 상태 + 켜져 있는 소셜 로그인 목록
router.post('/', limits.auth, ctrl.handle); // action: signup | login | logout | lang
router.all('/', ctrl.handle);               // 그 밖의 메서드 → 405 (예전 동작 그대로)

module.exports = router;
