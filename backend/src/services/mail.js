/* 메일 보내기 한 곳 — "내 정보 요약"을 본인 이메일로 보낼 때 씁니다.

   두 가지 방법 중 환경변수가 들어 있는 쪽을 씁니다. 둘 다 없으면
   { ok:false, reason:'off' } 를 돌려주고, 화면은 이 기기의 메일 앱을 여는
   방식(mailto:)으로 대신 보냅니다. 그래서 설정 전에도 기능이 멈추지 않습니다.

   ① Gmail(또는 다른 SMTP) — 도메인이 없어도 바로 됩니다. 추천합니다.
      SMTP_HOST   smtp.gmail.com
      SMTP_PORT   465
      SMTP_USER   보내는 Gmail 주소 (예: e9bridge.team@gmail.com)
      SMTP_PASS   Gmail "앱 비밀번호" 16자리 (계정 비밀번호가 아닙니다.
                  구글 계정 → 보안 → 2단계 인증 켜기 → 앱 비밀번호에서 만듭니다)
      MAIL_FROM   (선택) 보낸 사람 표시. 예: E9-Bridge <e9bridge.team@gmail.com>

   ② Resend — 자기 도메인을 인증했을 때만 아무 주소로나 보낼 수 있습니다.
      RESEND_API_KEY   re_ 로 시작하는 키
      MAIL_FROM        인증한 도메인의 주소. 예: E9-Bridge <no-reply@내도메인>

   ※ 키·비밀번호를 코드에 적지 마세요. Vercel 환경변수에만 넣습니다. */

const SEND_MS = 15000;

function configured() {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) return 'smtp';
  if (process.env.RESEND_API_KEY && process.env.MAIL_FROM) return 'resend';
  return null;
}

function fromAddr() {
  return process.env.MAIL_FROM || ('E9-Bridge <' + (process.env.SMTP_USER || '') + '>');
}

async function viaResend(to, subject, text, html) {
  const ac = new AbortController();
  const killer = setTimeout(function () { ac.abort(); }, SEND_MS);
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + process.env.RESEND_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({ from: fromAddr(), to: [to], subject: subject, text: text, html: html }),
      signal: ac.signal
    });
    if (!r.ok) {
      const detail = (await r.text()).slice(0, 300);
      console.warn('resend failed', r.status, detail);
      return { ok: false, reason: 'send' };
    }
    return { ok: true };
  } finally {
    clearTimeout(killer);
  }
}

async function viaSmtp(to, subject, text, html) {
  // 필요할 때만 불러옵니다. 메일 기능을 안 쓰는 함수가 느려지지 않게 합니다.
  const nodemailer = require('nodemailer');
  const port = Number(process.env.SMTP_PORT || 465);
  const t = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: SEND_MS,
    greetingTimeout: SEND_MS,
    socketTimeout: SEND_MS
  });
  await t.sendMail({ from: fromAddr(), to: to, subject: subject, text: text, html: html });
  return { ok: true };
}

/* to: 받는 주소, subject: 제목, text: 본문(글자), html: 본문(HTML, 선택) */
async function send(to, subject, text, html) {
  const how = configured();
  if (!how) return { ok: false, reason: 'off' };
  try {
    if (how === 'smtp') return await viaSmtp(to, subject, text, html);
    return await viaResend(to, subject, text, html);
  } catch (e) {
    console.warn('mail error', e && e.message);
    return { ok: false, reason: 'send' };
  }
}

module.exports = { send, configured };
