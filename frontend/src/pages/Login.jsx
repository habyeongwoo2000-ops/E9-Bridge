/* 로그인 — 아이디·비밀번호, 또는 켜져 있는 소셜 로그인
   게시판에 글을 남길 때만 필요합니다. 다른 기능은 로그인 없이 모두 쓸 수 있습니다.

   ?next=account   로그인한 뒤 돌아갈 화면 (첫 화면 "로그인하고 시작하기" 등에서 붙여 보냅니다)
   ?err=oauth      소셜 로그인이 실패해 서버가 돌려보낸 경우 — 안내를 띄우고 주소창은 바로 정리합니다
                   (새로고침해도 오류가 다시 뜨지 않게). */

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import { AuthMsg, SocialBox, nextName, nextPath } from '../components/auth/AuthShared.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { T } = useI18n();
  const { authSend } = useAuth();
  const loc = useLocation();
  const navigate = useNavigate();
  useDocTitle('authLoginTitle');

  const next = nextName(loc.search);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [msg, setMsg] = useState({ key: null, kind: null });
  const [busy, setBusy] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    let err = null;
    try { err = new URLSearchParams(loc.search).get('err'); } catch (e) { err = null; }
    if (err === 'oauth' || err === 'oauthOff') {
      setMsg({ key: err === 'oauthOff' ? 'errOauthOff' : 'errOauth', kind: 'bad' });
      navigate({ pathname: '/login', search: next ? '?next=' + next : '' }, { replace: true });
    }
    // 주소가 바뀔 때만 봅니다 (next 는 주소에서 나온 값입니다).
  }, [loc.search]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setMsg({ key: 'authWorking', kind: null });
    const out = await authSend('login', { username: id.trim(), password: pw });
    setBusy(false);
    if (!out.ok) { setMsg({ key: out.error, kind: 'bad' }); return; }
    setMsg({ key: 'authLoginOk', kind: 'good' });
    // "로그인했습니다" 를 잠깐 보여 준 뒤 넘어갑니다.
    timer.current = setTimeout(() => navigate(nextPath(next)), 700);
  };

  const q = next ? '?next=' + next : '';
  return (
    <>
      <SubVisual crumbs={['navLogin']} en="Log In" title="authLoginTitle" />
      <main id="top">
        <section id="auth" className="band">
          <div className="wrap wrap-narrow">
            <p className="sec-lead">{T.authLoginLead}</p>

            <form className="auth-form" id="loginForm" autoComplete="on" onSubmit={submit}>
              <div className="field">
                <label htmlFor="authId">{T.authIdLabel}</label>
                <input type="text" id="authId" name="username" autoComplete="username" autoCapitalize="off"
                       autoCorrect="off" spellCheck="false" required value={id} onChange={(e) => setId(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="authPw">{T.authPwLabel}</label>
                <input type="password" id="authPw" name="password" autoComplete="current-password" required
                       value={pw} onChange={(e) => setPw(e.target.value)} />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-go" disabled={busy}>{T.authLoginBtn}</button>
              </div>
              <AuthMsg msg={msg} />
            </form>

            <SocialBox next={next} />

            <p className="auth-swap"><Link to={'/signup' + q}>{T.authGoSignup}</Link></p>
          </div>
        </section>
      </main>
    </>
  );
}
