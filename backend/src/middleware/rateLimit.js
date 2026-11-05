/* 아주 단순한 요청 제한 (IP 기준, 메모리)

   AI 를 부르는 경로(질문·사진 읽기)와 글쓰기·로그인처럼 남용되기 쉬운 경로에만 겁니다.
   한도를 넘으면 429 { ok:false, error:'rateLimit' } 를 돌려줍니다.

   한계: 서버리스 인스턴스마다 메모리가 따로라, 인스턴스가 여러 개 뜨면 한도도 그만큼
   느슨해집니다. 해커톤·초기 운영에는 충분하고, 사용자가 늘면 Upstash Redis 같은
   공용 저장소로 옮기면 됩니다(이 파일만 바꾸면 됩니다). */

const buckets = new Map();
const MAX_KEYS = 5000;

function clientIp(req) {
  // Vercel 은 x-real-ip / x-forwarded-for 를 실제 접속 IP 로 덮어씁니다.
  const real = req.headers['x-real-ip'];
  if (real) return String(real).split(',')[0].trim();
  return req.ip || (req.socket && req.socket.remoteAddress) || 'unknown';
}

/* name: 구분 이름, max: 창 안에서 허용할 횟수, windowMs: 창 길이 */
function rateLimit(name, max, windowMs) {
  return function (req, res, next) {
    const now = Date.now();
    const key = name + '|' + clientIp(req);
    let b = buckets.get(key);
    if (!b || now - b.start >= windowMs) {
      b = { start: now, count: 0 };
      if (buckets.size >= MAX_KEYS) buckets.delete(buckets.keys().next().value);
      buckets.set(key, b);
    }
    b.count++;
    if (b.count > max) {
      const retry = Math.ceil((b.start + windowMs - now) / 1000);
      res.setHeader('Retry-After', String(Math.max(1, retry)));
      return res.status(429).json({ ok: false, error: 'rateLimit' });
    }
    return next();
  };
}

const MIN = 60 * 1000;

/* 경로별 한도 — 사람이 정상적으로 쓰면 닿지 않을 만큼 넉넉하게 잡았습니다. */
const limits = {
  ask: rateLimit('ask', 20, MIN),            // AI 질문: 1분 20번
  readDoc: rateLimit('readDoc', 8, MIN),     // 사진 읽기: 1분 8번
  auth: rateLimit('auth', 20, MIN),          // 로그인·가입: 1분 20번 (비밀번호 대입 막기)
  account: rateLimit('account', 30, MIN),    // 마이페이지 저장·메일: 1분 30번
  posts: rateLimit('posts', 10, MIN),        // 게시판 글·답변: 1분 10번
  qna: rateLimit('qna', 6, MIN),             // 질문 접수: 1분 6번
  admin: rateLimit('admin', 10, MIN)         // 관리자 키 확인: 1분 10번
};

module.exports = { rateLimit, limits, clientIp };
