/* 상태 확인 */

const express = require('express');
const ctrl = require('../controllers/healthController');

const router = express.Router();

router.get('/', ctrl.handle);

module.exports = router;
