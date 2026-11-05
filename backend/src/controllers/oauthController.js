/* 소셜 로그인 — 시작(start)과 콜백(callback)

   GET /api/oauth/start?p=google&ret=board     → 임시 쿠키를 심고 제공자 로그인 화면으로 보냅니다.
   GET /api/oauth/google                       → 구글이 돌려보내는 주소 (콘솔에 그대로 등록)
   GET /api/oauth/kakao                        → 카카오가 돌려보내는 주소 (콘솔에 그대로 등록)

   화면의 버튼은 그냥 /api/oauth/start 로 가는 링크입니다. 자바스크립트가 필요 없습니다.
   화면이 React 로 바뀌면서 돌아갈 주소에 .html 이 빠졌습니다.
   ret 에는 화면 이름('board', 'account' …)을 넣습니다. 예전 값('board.html')도 받습니다. */

const crypto = require('crypto');
const O = require('../services/oauth');
const A = require('../services/auth');

/* ---------- 시작 ---------- */

function start(req, res) {
  try {
    const name = String((req.query && req.query.p) || '');
    const ret = O.safeReturn(req.query && req.query.ret);
    const c = O.conf(name);

    // 키를 안 넣었으면 조용히 실패하지 않고 이유를 화면에 알립니다.
    if (!c) {
      res.writeHead(302, { location: '/login?err=oauthOff' + (ret !== 'board' ? '&next=' + ret : '') });
      return res.end();
    }

    const nonce = O.makeVerifier();
    const verifier = O.makeVerifier();
    const state = O.packState({
      p: name,
      n: nonce,
      v: verifier,
      r: ret,
      exp: Math.floor(Date.now() / 1000) + 600
    });

    O.setStateCookie(res, state);

    const q = new URLSearchParams({
      response_type: 'code',
      client_id: c.clientId,
      redirect_uri: O.redirectUri(req, name),
      state: nonce
    });
    if (c.scope) q.set('scope', c.scope);
    if (c.usePkce) {
      q.set('code_challenge', O.challengeOf(verifier));
      q.set('code_challenge_method', 'S256');
    }
    // 구글은 계정 선택 화면을 매번 띄우게 합니다. 공용 기기에서 남의 계정으로
    // 자동 로그인되는 일을 막기 위해서입니다.
    if (name === 'google') q.set('prompt', 'select_account');

    res.writeHead(302, { location: c.authUrl + '?' + q.toString() });
    return res.end();
  } catch (e) {
    console.error('oauth start', e && e.message);
    res.writeHead(302, { location: '/login?err=oauth' });
    return res.end();
  }
}

/* ---------- 콜백 ----------
   실패하면 이유를 자세히 알려 주지 않고 로그인 화면으로 돌려보냅니다.
   어디서 막혔는지 알려 주면 남의 계정을 캐는 데 쓸 수 있습니다.
   서버 로그에는 남기므로 개발할 때는 Vercel 로그를 보세요. */

function bail(res, ret, err) {
  O.clearStateCookie(res);
  res.writeHead(302, { location: '/login?err=' + (err || 'oauth') });
  return res.end();
}

async function callback(name, req, res) {
  let ret = 'board';
  try {
    const c = O.conf(name);
    if (!c) return bail(res, ret, 'oauthOff');

    // 사용자가 제공자 화면에서 "취소"를 누른 경우입니다. 오류가 아닙니다.
    if (req.query && req.query.error) {
      O.clearStateCookie(res);
      res.writeHead(302, { location: '/login' });
      return res.end();
    }

    const code = String((req.query && req.query.code) || '');
    const stateParam = String((req.query && req.query.state) || '');
    if (!code || !stateParam) return bail(res, ret);

    const saved = O.unpackState(O.readStateCookie(req));
    if (!saved) return bail(res, ret);
    if (saved.p !== name) return bail(res, ret);

    ret = O.safeReturn(saved.r);

    // 쿠키 안의 값과 주소로 돌아온 값이 같아야 우리가 시작한 로그인입니다.
    const want = Buffer.from(String(saved.n));
    const got = Buffer.from(stateParam);
    if (want.length !== got.length) return bail(res, ret);
    if (!crypto.timingSafeEqual(want, got)) return bail(res, ret);

    const token = await O.exchangeCode(c, req, code, saved.v);
    const uid = await O.fetchUid(c, token);
    const user = await O.findOrCreateUser(name, uid);

    O.clearStateCookie(res);
    A.setSession(res, user);

    res.writeHead(302, { location: O.returnPath(ret) });
    return res.end();
  } catch (e) {
    console.error('oauth callback ' + name, e && e.message);
    return bail(res, ret);
  }
}

/* 제공자 이름은 라우터가 주소에서 꺼내 줍니다. 모르는 이름이면 404 로 넘깁니다. */
function providerCallback(req, res, next) {
  const name = String(req.params.provider || '');
  if (!O.PROVIDERS[name]) return next();
  return callback(name, req, res);
}

module.exports = { start, callback, providerCallback };
