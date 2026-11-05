/* 관리자 지정/해제 (ADMIN_SETUP_KEY 로만 보호) */

const express = require('express');
const ctrl = require('../controllers/adminController');
const { limits } = require('../middleware/rateLimit');

const router = express.Router();

router.post('/', limits.admin, ctrl.handle); // action: promote | demote
router.all('/', ctrl.handle);               // 그 밖의 메서드 → 405 (예전 동작 그대로)

module.exports = router;
