/* 공개 게시판 — 목록 · 글쓰기 · 관리자 답변 */

const express = require('express');
const ctrl = require('../controllers/postsController');
const { limits } = require('../middleware/rateLimit');

const router = express.Router();

router.get('/', ctrl.handle);               // 목록 (?page, ?lang, ?q, ?mine=1, ?pub=1)
router.post('/', limits.posts, ctrl.handle); // 글쓰기 { body, lang, private } / 답변 { action:'answer', id, answer, src }
router.all('/', ctrl.handle);               // 그 밖의 메서드 → 405 (예전 동작 그대로)

module.exports = router;
