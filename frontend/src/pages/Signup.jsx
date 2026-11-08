/* 회원가입 — 아이디와 비밀번호만 정하면 됩니다. 이름·여권번호·전화번호는 묻지 않습니다.
   비밀번호 확인은 서버로 보내기 전에 브라우저에서 먼저 거릅니다.
   가입할 때 이 기기가 지금 쓰는 언어를 함께 저장해, 다른 기기에서도 같은 언어로 보이게 합니다. */

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import { AuthMsg, SocialBox, nextName, nextPath } from '../components/auth/AuthShared.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { isAndroidApp } from '../config/platform.js';

export default function Signup() {
  const { T, lang } = useI18n();
  const { authSend, ready } = useAuth();
  const loc = useLocation();
  const navigate = useNavigate();
  useDocTitle('authSignupTitle');

  const next = nextName(loc.search);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [msg, setMsg] = useState({ key: null, kind: null });
  const [busy, setBusy] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const submit = async (e) => {
    e.preventDefault();
    if (busy || (isAndroidApp && !ready)) return;
    if (pw !== pw2) { setMsg({ key: 'errPwMatch', kind: 'bad' }); return; }
    if (pw.length < 8) { setMsg({ key: 'errPwRule', kind: 'bad' }); return; }
    setBusy(true);
    setMsg({ key: 'authWorking', kind: null });
    const out = await authSend('signup', { username: id.trim(), password: pw, lang });
    setBusy(false);
    if (!out.ok) { setMsg({ key: out.error, kind: 'bad' }); return; }
    setMsg({ key: 'authSignupOk', kind: 'good' });
    timer.current = setTimeout(() => navigate(nextPath(next)), 700);
  };

  const q = next ? '?next=' + next : '';
  return (
    <>
      <SubVisual crumbs={['authSignupTitle']} en="Sign Up" title="authSignupTitle" />
      <main id="top">
        <section id="auth" className="band">
          <div className="wrap wrap-narrow">
            <p className="sec-lead">{T.authSignupLead}</p>

            <form className="auth-form" id="signupForm" autoComplete="on" onSubmit={submit}>
              <div className="field">
                <label htmlFor="authId">{T.authIdLabel}</label>
                <input type="text" id="authId" name="username" autoComplete="username" autoCapitalize="off"
                       autoCorrect="off" spellCheck="false" required value={id} onChange={(e) => setId(e.target.value)} />
                <p className="hint">{T.authIdHint}</p>
              </div>
              <div className="field">
                <label htmlFor="authPw">{T.authPwLabel}</label>
                <input type="password" id="authPw" name="password" autoComplete="new-password" required
                       value={pw} onChange={(e) => setPw(e.target.value)} />
                <p className="hint">{T.authPwHint}</p>
              </div>
              <div className="field">
                <label htmlFor="authPw2">{T.authPw2Label}</label>
                <input type="password" id="authPw2" name="password2" autoComplete="new-password" required
                       value={pw2} onChange={(e) => setPw2(e.target.value)} />
              </div>
              <p className="auth-safety">{T.authSafety}</p>
              <div className="form-actions">
                <button type="submit" className="btn btn-go" disabled={busy || (isAndroidApp && !ready)}>{T.authSignupBtn}</button>
              </div>
              <AuthMsg msg={msg} />
            </form>

            <SocialBox next={next} />

            <p className="auth-swap"><Link to={'/login' + q}>{T.authGoLogin}</Link></p>
          </div>
        </section>
      </main>
    </>
  );
}
