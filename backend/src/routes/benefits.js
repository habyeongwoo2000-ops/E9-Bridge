/* 정부24 공공서비스(외국인 대상) 실시간 조회 */

const express = require('express');
const ctrl = require('../controllers/benefitsController');
const { limits } = require('../middleware/rateLimit');

const router = express.Router();

router.get('/', limits.benefits, ctrl.handle);
router.all('/', ctrl.handle);               // 그 밖의 메서드 → 405

module.exports = router;
