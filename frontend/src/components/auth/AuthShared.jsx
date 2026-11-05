/* 로그인 · 회원가입이 함께 쓰는 것
   · nextName()  : ?next=account 처럼 로그인한 뒤 돌아갈 화면 이름 (우리 사이트 이름만 받습니다)
   · nextPath()  : 그 이름을 실제 주소로 ('index'·'home' → '/', 나머지 → '/이름', 없으면 '/board')
   · SocialBox   : 서버에 키가 들어 있어 켜진 소셜 로그인 버튼만 보여 줍니다 */

import { useI18n } from '../../i18n/I18nProvider.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

/* 예전 주소(account.html)로 온 값도 받되 .html 은 떼어 냅니다.
   그 밖의 값(다른 사이트 주소, 경로 문자 등)은 받지 않습니다 — 로그인 뒤 엉뚱한 곳으로 보내지 않게. */
export function nextName(search) {
  let v = null;
  try { v = new URLSearchParams(search).get('next'); } catch (e) { v = null; }
  if (!v || !/^[a-z0-9_-]{1,40}(\.html)?$/.test(v)) return null;
  return v.replace(/\.html$/, '');
}

export function nextPath(name) {
  if (!name) return '/board';
  if (name === 'index' || name === 'home') return '/';
  return '/' + name;
}

/* 소셜 로그인 버튼 — 화면의 버튼은 그냥 서버 주소로 가는 링크입니다(자바스크립트가 필요 없습니다).
   ret 은 로그인을 마친 뒤 서버가 돌려보낼 화면 이름입니다. */
export function SocialBox({ next }) {
  const { T } = useI18n();
  const { methods } = useAuth();
  if (!methods || !methods.length) return null;
  const ret = encodeURIComponent(next || 'board');
  return (
    <div className="social" id="socialBox">
      <p className="social-or"><span>{T.socialOr}</span></p>
      <h3 className="social-title">{T.socialTitle}</h3>
      <p className="social-lead">{T.socialLead}</p>

      <div className="social-btns">
        {methods.indexOf('google') >= 0 && (
          <a className="sbtn sbtn-google" id="btnGoogle" href={'/api/oauth/start?p=google&ret=' + ret}>
            <span className="sbtn-ico" aria-hidden="true">
              <svg viewBox="0 0 18 18" width="18" height="18"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.71-1.57 2.68-3.88 2.68-6.62z" /><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18z" /><path fill="#FBBC05" d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33z" /><path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z" /></svg>
            </span>
            <span>{T.socialGoogle}</span>
          </a>
        )}
        {methods.indexOf('kakao') >= 0 && (
          <a className="sbtn sbtn-kakao" id="btnKakao" href={'/api/oauth/start?p=kakao&ret=' + ret}>
            <span className="sbtn-ico" aria-hidden="true">
              <svg viewBox="0 0 18 18" width="18" height="18"><path fill="#191600" d="M9 1.5C4.86 1.5 1.5 4.15 1.5 7.42c0 2.09 1.38 3.92 3.46 4.97l-.88 3.23c-.08.28.23.5.47.34l3.87-2.56c.19.01.38.02.58.02 4.14 0 7.5-2.65 7.5-5.92S13.14 1.5 9 1.5z" /></svg>
            </span>
            <span>{T.socialKakao}</span>
          </a>
        )}
      </div>

      <p className="social-privacy">{T.socialPrivacy}</p>
    </div>
  );
}

/* 결과 안내 한 줄 — 키를 저장해 두므로 언어를 바꾸면 그 언어로 다시 보입니다. */
export function AuthMsg({ msg, id = 'authMsg' }) {
  const { T } = useI18n();
  return (
    <p className={'auth-msg' + (msg.kind ? ' is-' + msg.kind : '')} id={id} role="status" aria-live="polite">
      {msg.key ? (T[msg.key] || T.errNet) : ''}
    </p>
  );
}
