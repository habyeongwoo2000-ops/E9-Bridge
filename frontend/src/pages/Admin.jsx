/* 관리자 계정 설정 — 이미 아이디로 가입된 계정을 관리자로 바꾸거나 되돌립니다.
   ------------------------------------------------------------------
   · 메뉴·검색 어디에도 연결하지 않는 쪽입니다(머리말·바닥글도 없습니다).
   · 실제 보호는 서버의 ADMIN_SETUP_KEY 가 합니다. 이 쪽 주소를 안다고 관리자가 되지 않습니다.
   · 운영자만 쓰는 화면이라 한국어로만 둡니다.
   ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from 'react';
import { postJSON } from '../lib/api.js';

const ERR = {
  errAdminOff: '서버에 ADMIN_SETUP_KEY 가 설정되어 있지 않습니다.',
  errAdminKey: '키가 맞지 않습니다.',
  errAdminUser: '그 아이디를 가진 계정을 찾을 수 없습니다.'
};

export default function Admin() {
  const [username, setUsername] = useState('');
  const [key, setKey] = useState('');
  const [msg, setMsg] = useState({ text: '', kind: '' });
  const action = useRef('promote');

  /* 검색엔진이 이 쪽을 담지 않게 합니다(robots.txt 에서도 막아 둡니다). */
  useEffect(() => {
    const prevTitle = document.title;
    document.title = '관리자 계정 설정 · E9-Bridge';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    // 다른 쪽에서 넘어왔다면 그 쪽 머리말용 body 클래스를 걷어 냅니다.
    document.body.classList.remove('is-home', 'sub', 'menu-open');
    return () => { document.title = prevTitle; meta.remove(); };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setMsg({ text: '처리 중...', kind: '' });
    const out = await postJSON('/api/admin', { action: action.current, username: username.trim(), key });
    if (out.status === 0) { setMsg({ text: '네트워크 오류. 다시 시도해 주세요.', kind: 'bad' }); return; }
    if (!out.ok || !out.data || !out.data.ok) {
      const err = (out.data && out.data.error) || 'errNet';
      setMsg({ text: ERR[err] || '문제가 생겼습니다. 다시 시도해 주세요.', kind: 'bad' });
      return;
    }
    setMsg({
      text: out.data.username + ' 계정을 ' + (out.data.isAdmin ? '관리자로 바꿨습니다.' : '관리자에서 해제했습니다.'),
      kind: 'good'
    });
  };

  return (
    <main id="top">
      <section className="band">
        <div className="wrap wrap-narrow">
          <h2>관리자 계정 설정</h2>
          <p className="sec-lead">
            이미 아이디로 가입되어 있는 계정을 관리자로 바꾸거나 되돌립니다.
            아래 키는 Vercel 환경변수 <code>ADMIN_SETUP_KEY</code> 에 넣어 둔 값과
            똑같아야 합니다. 이 페이지 주소와 키는 아무에게도 알려주지 마세요.
            이 페이지는 검색이나 메뉴 어디에도 연결되어 있지 않습니다.
          </p>

          <form className="auth-form" id="adminForm" autoComplete="off" onSubmit={submit}>
            <div className="field">
              <label htmlFor="adUser">대상 계정 아이디 (로그인 아이디)</label>
              <input type="text" id="adUser" name="username" autoCapitalize="off" autoCorrect="off" spellCheck="false"
                     required value={username} onChange={(e) => setUsername(e.target.value)} />
              <p className="hint">소셜 로그인 계정은 user_xxxxxxxx 형태의 내부 아이디입니다. 마이페이지에서 본인이 확인해야 합니다.</p>
            </div>
            <div className="field">
              <label htmlFor="adKey">설정 키 (ADMIN_SETUP_KEY)</label>
              <input type="password" id="adKey" name="key" autoComplete="off" required
                     value={key} onChange={(e) => setKey(e.target.value)} />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-go" onClick={() => { action.current = 'promote'; }}>관리자로 만들기</button>
              <button type="submit" className="btn btn-ghost" onClick={() => { action.current = 'demote'; }}>관리자 해제</button>
            </div>
            <p className={'auth-msg' + (msg.kind ? ' is-' + msg.kind : '')} id="adMsg" role="status" aria-live="polite">{msg.text}</p>
          </form>
        </div>
      </section>
    </main>
  );
}
