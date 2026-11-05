/* 소셜 로그인 (구글 · 카카오)
   제공자 콘솔에 등록한 콜백 주소(/api/oauth/google, /api/oauth/kakao)는 그대로입니다. */

const express = require('express');
const ctrl = require('../controllers/oauthController');

const router = express.Router();

router.get('/start', ctrl.start);                 // ?p=google|kakao&ret=board
router.get('/:provider', ctrl.providerCallback);  // google | kakao 가 돌려보내는 곳

module.exports = router;
