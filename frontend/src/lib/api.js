/* 백엔드(Express, /api) 호출 도우미
   ------------------------------------------------------------------
   · 주소는 늘 '/api/…' 절대 경로로 씁니다. (화면 주소가 /check 처럼 바뀌어도 같은 곳으로 갑니다)
   · 로그인은 서버가 심는 쿠키(HttpOnly)로 확인합니다. 브라우저 쪽에는 토큰을 두지 않습니다.
   · 서버가 답을 안 주면 무한정 기다리지 않습니다. 고장 난 줄 알고 창을 닫아 버리기 전에
     일찍 안내하는 편이 낫습니다.
   ------------------------------------------------------------------ */

function withTimeout(ms) {
  const ac = typeof AbortController === 'function' ? new AbortController() : null;
  const killer = ac ? setTimeout(() => ac.abort(), ms) : null;
  return { signal: ac ? ac.signal : undefined, done: () => killer && clearTimeout(killer) };
}

/* GET → JSON. 실패하면 tries 만큼 1.2초 뒤에 다시 시도합니다(첫 요청은 서버가 깨어나느라 느릴 수 있습니다). */
export async function getJSON(path, { timeout = 15000, tries = 0 } = {}) {
  const t = withTimeout(timeout);
  try {
    const r = await fetch(path, { headers: { accept: 'application/json' }, credentials: 'same-origin', signal: t.signal });
    t.done();
    if (!r.ok) {
      const err = new Error('http ' + r.status);
      err.status = r.status;
      throw err;
    }
    return await r.json();
  } catch (e) {
    t.done();
    if (tries > 0) {
      await new Promise((ok) => setTimeout(ok, 1200));
      return getJSON(path, { timeout, tries: tries - 1 });
    }
    throw e;
  }
}

/* POST → { ok:상태코드 2xx 여부, status, data } — 화면이 실패 이유(error 키)를 골라 보여 줄 수 있게 그대로 돌려줍니다. */
export async function postJSON(path, payload, { timeout = 70000 } = {}) {
  const t = withTimeout(timeout);
  try {
    const r = await fetch(path, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(payload || {}),
      signal: t.signal
    });
    t.done();
    let data = {};
    try { data = await r.json(); } catch (e) { data = {}; }
    return { ok: r.ok, status: r.status, data };
  } catch (e) {
    t.done();
    const aborted = e && (e.name === 'AbortError' || /abort/i.test(String(e.message || '')));
    return { ok: false, status: 0, data: { error: aborted ? 'timeout' : 'errNet' }, timeout: aborted };
  }
}

/* AI 처럼 오래 걸리는 요청 — 실패하면 예외를 던지고, 다시 눌러 볼 만한 실패인지(retryable) 표시합니다. */
export async function apiPost(path, payload, waitMs) {
  const out = await postJSON(path, payload, { timeout: waitMs || 70000 });
  if (!out.ok) {
    const err = new Error(out.timeout ? 'timeout' : 'http ' + out.status);
    err.status = out.status;
    err.retryable = !!out.timeout || !!(out.data && out.data.retryable) || out.status === 503;
    throw err;
  }
  return out.data;
}
