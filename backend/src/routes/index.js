/* /api 아래의 모든 경로를 한곳에 모읍니다.
   주소는 예전 서버리스 함수 시절과 똑같습니다. 화면 코드는 고칠 필요가 없습니다. */

const express = require('express');

const router = express.Router();

router.use('/health', require('./health'));
router.use('/auth', require('./auth'));
router.use('/account', require('./account'));
router.use('/admin', require('./admin'));
router.use('/posts', require('./posts'));
router.use('/qna', require('./qna'));
router.use('/qna-publish', require('./qnaPublish'));
router.use('/ask', require('./ask'));
router.use('/read-doc', require('./readDoc'));
router.use('/oauth', require('./oauth'));

module.exports = router;
