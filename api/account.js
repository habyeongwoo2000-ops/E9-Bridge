/* 마이페이지 — 내 정보 보기 / 닉네임 바꾸기 / 비밀번호 바꾸기

   GET  /api/account                                   → { username, nickname, provider, joined }
   POST /api/account { action:'nickname', nickname }
   POST /api/account { action:'password', current, next }

   ── 내 정보 한눈에 (로그인 개인화) ──
   GET  /api/account?part=summary                      → { summary }
   POST /api/account { action:'summarySave', part, data } part = deadline | reason | payout
   POST /api/account { action:'summaryClear' }
   POST /api/account { action:'summaryMail', to, subject, text }
        저장한 요약을 본인 이메일로 보냅니다. 하루 5통까지. 주소는 저장하지 않습니다.
        메일 설정(_mail.js)이 없으면 501 { error:'mailOff' } — 화면이 메일 앱 열기로 대신합니다.
   표 변경은 docs/my_summary.sql 을 Supabase SQL Editor 에서 한 번 실행하세요.

   지켜야 하는 것 세 가지

   1) 로그인 아이디는 바꾸지 않습니다.
      바꾸게 하면 다음에 들어올 때 본인이 못 들어옵니다. 화면에 보이는
      이름(nickname)만 바꿉니다.

   2) 비밀번호를 바꿀 때는 지금 비밀번호를 반드시 확인합니다.
      남이 자리를 비운 사이 기기를 만져 비밀번호만 바꿔 계정을 빼앗는 일을
      막습니다. 소셜로 들어온 계정에는 비밀번호가 없어서 이 기능이 없습니다.

   3) 닉네임을 바꾸면 그 사람이 쓴 게시글의 표시 이름도 함께 바꿉니다.
      안 바꾸면 예전 글에 옛 이름이 남아, 이름을 바꾼 의미가 없어집니다. */

const { sb, readBody } = require('./_db');
const A = require('./_auth');
const M = require('./_mail');

/* ---------- 내 정보 요약: 받을 수 있는 값만 골라 담습니다 ----------
   화면에서 보낸 값을 그대로 저장하지 않습니다. 정해 둔 칸과 모양만 통과시켜서
   엉뚱한 값(긴 글, 스크립트 등)이 계정에 쌓이지 않게 합니다.
   결과 문장이 아니라 "입력한 값"만 저장합니다. 화면 글자는 고른 언어로
   그때그때 다시 계산하므로, 언어를 바꿔도 요약이 그 언어로 보입니다. */
const DAY = /^\d{4}-\d{2}-\d{2}$/;
function day(v) {
  const s = String(v || '').trim();
  if (!DAY.test(s)) return '';
  const d = new Date(s + 'T00:00:00Z');
  if (Number.isNaN(d.getTime()) || d.getUTCFullYear() < 2000 || d.getUTCFullYear() > 2100) return '';
  return s;
}
function pick(v, list) { return list.indexOf(String(v || '')) >= 0 ? String(v) : ''; }

const CLEAN = {
  deadline: function (d) {
    const leave = day(d.leave);
    if (!leave) return null;
    return { leave: leave, apply: day(d.apply) };
  },
  reason: function (d) {
    const q1 = pick(d.q1, ['wage', 'abuse', 'closed', 'terms', 'own']);
    const q2 = pick(d.q2, ['yes', 'some', 'no']);
    const q3 = pick(d.q3, ['0', '1', '2', '3']);
    if (!q1 || !q2 || !q3) return null;
    return { q1: q1, q2: q2, q3: q3 };
  },
  payout: function (d) {
    const out = {};
    if (d.exit !== undefined) out.exit = day(d.exit);
    if (d.ins) {
      const wage = Math.round(Number(d.ins.wage));
      const start = day(d.ins.start);
      if (wage > 0 && wage < 100000000 && start) out.ins = { wage: wage, start: start, end: day(d.ins.end) };
    }
    if (d.elig) {
      out.elig = {
        start: day(d.elig.start), end: day(d.elig.end),
        moved: pick(d.elig.moved, ['none', 'prevOver', 'prevUnder', 'unsure']),
        hours: pick(d.elig.hours, ['yes', 'no', 'unsure']),
        nat: pick(d.elig.nat, ['g1', 'g2', 'g3']),
        type: pick(d.elig.type, ['leave', 'change', 'reentry'])
      };
    }
    return Object.keys(out).length ? out : null;
  }
};

const MAIL_PER_DAY = 5;
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

function esc(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function readSummary(uid) {
  const rows = await sb('eum_users?select=my_summary,mail_day,mail_count&id=eq.' +
    encodeURIComponent(uid) + '&limit=1');
  return rows && rows[0];
}

function fail(res, code, key) {
  return res.status(code).json({ ok: false, error: key });
}

// 고용허가제(E-9) 송출 16개국 + 기타. docs/profile.sql 의 체크 제약과 맞춰 둡니다.
const NAT_CODES = ['PH', 'MN', 'LK', 'VN', 'TH', 'ID', 'UZ', 'PK', 'KH', 'CN', 'BD', 'NP', 'MM', 'KG', 'TL', 'LA', 'TJ', 'KZ', 'other'];
const GENDER_CODES = ['M', 'F'];

module.exports = async function handler(req, res) {
  try {
    const me = A.currentUser(req);
    if (!me) return fail(res, 401, 'errNeedLogin');

    /* ---------- 내 정보 ---------- */
    if (req.method === 'GET' && req.query && req.query.part === 'summary') {
      const row = await readSummary(me.uid);
      return res.status(200).json({ ok: true, summary: (row && row.my_summary) || {} });
    }

    if (req.method === 'GET') {
      const rows = await sb('eum_users?select=username,nickname,provider,created_at,birthdate,nationality,gender&id=eq.' +
        encodeURIComponent(me.uid) + '&limit=1');
      const u = rows && rows[0];
      if (!u) return fail(res, 404, 'errNet');

      return res.status(200).json({
        username: u.username,
        nickname: u.nickname || u.username,
        provider: u.provider || 'password',
        joined: (u.created_at || '').slice(0, 10),
        birthdate: u.birthdate || '',
        nationality: u.nationality || '',
        gender: u.gender || ''
      });
    }

    if (req.method !== 'POST') return fail(res, 405, 'errNet');

    const body = readBody(req);
    const action = String(body.action || '');

    /* ---------- 닉네임 바꾸기 ---------- */
    if (action === 'nickname') {
      const nickname = A.normalizeNick(body.nickname);
      const bad = A.checkNick(nickname);
      if (bad) return fail(res, 400, bad);

      // 같은 이름을 쓰는 사람이 이미 있는지 봅니다. 대소문자만 다른 것도 걸러냅니다.
      const dup = await sb('eum_users?select=id&nickname=ilike.' +
        encodeURIComponent(nickname) + '&limit=1');
      if (dup && dup.length && dup[0].id !== me.uid) {
        return fail(res, 409, 'errNickTaken');
      }

      const rows = await sb('eum_users?id=eq.' + encodeURIComponent(me.uid), {
        method: 'PATCH',
        headers: { prefer: 'return=representation' },
        body: JSON.stringify({ nickname: nickname })
      });
      const user = rows && rows[0];
      if (!user) return fail(res, 500, 'errNet');

      // 예전에 쓴 글에 옛 이름이 남지 않게 함께 고칩니다.
      // 여기서 실패해도 닉네임 변경 자체는 이미 끝났으므로 화면을 막지 않습니다.
      try {
        await sb('eum_posts?user_id=eq.' + encodeURIComponent(me.uid), {
          method: 'PATCH',
          headers: { prefer: 'return=minimal' },
          body: JSON.stringify({ username: nickname })
        });
      } catch (e) {
        console.warn('post rename failed', e && e.message);
      }

      // 쿠키 안에도 이름이 들어 있어서 다시 발급해야 머리말이 바로 바뀝니다.
      A.setSession(res, user);
      return res.status(200).json({ ok: true, nickname: nickname });
    }

    /* ---------- 비밀번호 바꾸기 ---------- */
    if (action === 'password') {
      const current = String(body.current || '');
      const next = String(body.next || '');

      const rows = await sb('eum_users?select=id,username,nickname,provider,password_hash&id=eq.' +
        encodeURIComponent(me.uid) + '&limit=1');
      const u = rows && rows[0];
      if (!u) return fail(res, 404, 'errNet');

      // 소셜 계정에는 바꿀 비밀번호가 없습니다.
      if (u.provider !== 'password' || !u.password_hash) {
        return fail(res, 400, 'errPwSocial');
      }

      const ok = await A.verifyPassword(current, u.password_hash);
      if (!ok) return fail(res, 401, 'errPwWrong');

      const bad = A.checkPw(next);
      if (bad) return fail(res, 400, bad);
      if (current === next) return fail(res, 400, 'errPwSame');

      const hash = await A.hashPassword(next);
      await sb('eum_users?id=eq.' + encodeURIComponent(me.uid), {
        method: 'PATCH',
        headers: { prefer: 'return=minimal' },
        body: JSON.stringify({ password_hash: hash })
      });

      // 쿠키를 새로 발급해 유효기간을 다시 채웁니다.
      A.setSession(res, u);
      return res.status(200).json({ ok: true });
    }

    /* ---------- 내 정보 요약 저장 ---------- */
    if (action === 'summarySave') {
      const part = String(body.part || '');
      if (!CLEAN[part]) return fail(res, 400, 'errNet');
      const clean = CLEAN[part](body.data || {});
      if (!clean) return fail(res, 400, 'errNet');

      const row = await readSummary(me.uid);
      const cur = (row && row.my_summary) || {};
      // 출국 정산은 계산기가 세 개라 따로따로 들어옵니다. 들어온 칸만 바꿉니다.
      const prev = part === 'payout' ? (cur.payout || {}) : {};
      cur[part] = Object.assign({}, prev, clean, { at: new Date().toISOString() });

      await sb('eum_users?id=eq.' + encodeURIComponent(me.uid), {
        method: 'PATCH',
        headers: { prefer: 'return=minimal' },
        body: JSON.stringify({ my_summary: cur })
      });
      return res.status(200).json({ ok: true, summary: cur });
    }

    /* ---------- 내 정보 요약 지우기 ---------- */
    if (action === 'summaryClear') {
      await sb('eum_users?id=eq.' + encodeURIComponent(me.uid), {
        method: 'PATCH',
        headers: { prefer: 'return=minimal' },
        body: JSON.stringify({ my_summary: null })
      });
      return res.status(200).json({ ok: true, summary: {} });
    }

    /* ---------- 내 정보 요약을 이메일로 보내기 ----------
       본문은 화면이 고른 언어로 만든 글입니다(서버에는 6개 언어 문장이 없습니다).
       아무 글이나 아무 주소로 보내는 통로가 되지 않게 세 가지를 막습니다.
         · 로그인한 사람만, 요약을 저장해 둔 사람만
         · 하루 5통까지
         · 글 길이 제한, HTML 은 서버에서 글자를 이스케이프해 만듭니다 */
    if (action === 'summaryMail') {
      const to = String(body.to || '').trim();
      if (!EMAIL.test(to) || to.length > 254) return fail(res, 400, 'ckEmailBad');

      const text = String(body.text || '').replace(/\r/g, '').slice(0, 8000).trim();
      const subject = String(body.subject || 'E9-Bridge').replace(/[\r\n]+/g, ' ').slice(0, 120).trim() || 'E9-Bridge';
      if (!text) return fail(res, 400, 'errNet');

      const row = await readSummary(me.uid);
      const sum = row && row.my_summary;
      if (!sum || !Object.keys(sum).length) return fail(res, 400, 'myNone');

      const today = new Date().toISOString().slice(0, 10);
      const used = row.mail_day === today ? (row.mail_count || 0) : 0;
      if (used >= MAIL_PER_DAY) return fail(res, 429, 'myEmailLimit');

      if (!M.configured()) return fail(res, 501, 'mailOff');

      const html = '<div style="font-family:sans-serif;font-size:15px;line-height:1.6;color:#2b2118">' +
        text.split('\n').map(function (l) {
          if (!l.trim()) return '<br>';
          if (/^■ /.test(l)) return '<h3 style="margin:18px 0 6px;font-size:16px">' + esc(l.slice(2)) + '</h3>';
          return '<div>' + esc(l) + '</div>';
        }).join('') + '</div>';

      const out = await M.send(to, subject, text, html);
      if (!out.ok) return fail(res, out.reason === 'off' ? 501 : 502, out.reason === 'off' ? 'mailOff' : 'myEmailFail');

      await sb('eum_users?id=eq.' + encodeURIComponent(me.uid), {
        method: 'PATCH',
        headers: { prefer: 'return=minimal' },
        body: JSON.stringify({ mail_day: today, mail_count: used + 1 })
      });
      return res.status(200).json({ ok: true });
    }

    /* ---------- 프로필(생년월일 · 국적 · 성별) 바꾸기 ---------- */
    if (action === 'profile') {
      const birthdateRaw = String(body.birthdate || '').trim();
      const nationality = String(body.nationality || '').trim();
      const gender = String(body.gender || '').trim();

      let birthdate = null;
      if (birthdateRaw) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdateRaw)) return fail(res, 400, 'errBirthRule');
        const d = new Date(birthdateRaw + 'T00:00:00Z');
        if (Number.isNaN(d.getTime())) return fail(res, 400, 'errBirthRule');
        if (d.getTime() > Date.now()) return fail(res, 400, 'errBirthFuture');
        if (d.getUTCFullYear() < 1930) return fail(res, 400, 'errBirthRule');
        birthdate = birthdateRaw;
      }

      if (nationality && NAT_CODES.indexOf(nationality) < 0) return fail(res, 400, 'errNationRule');
      if (gender && GENDER_CODES.indexOf(gender) < 0) return fail(res, 400, 'errGenderRule');

      const rows = await sb('eum_users?id=eq.' + encodeURIComponent(me.uid), {
        method: 'PATCH',
        headers: { prefer: 'return=representation' },
        body: JSON.stringify({
          birthdate: birthdate,
          nationality: nationality || null,
          gender: gender || null
        })
      });
      const u = rows && rows[0];
      if (!u) return fail(res, 500, 'errNet');

      return res.status(200).json({
        ok: true,
        birthdate: u.birthdate || '',
        nationality: u.nationality || '',
        gender: u.gender || ''
      });
    }

    return fail(res, 400, 'errNet');
  } catch (e) {
    console.error('account error', e && e.message);
    return fail(res, 500, 'errNet');
  }
};
