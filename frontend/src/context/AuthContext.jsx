/* 로그인 상태 — 화면 표시용입니다. 실제 확인은 서버가 쿠키로 합니다.
   브라우저 쪽 값을 고쳐도 글이 써지거나 남의 정보가 보이지는 않습니다.

   · me      : { username, nickname, isAdmin, lang, … } 또는 null
   · methods : 서버에 키가 들어 있어 켜진 소셜 로그인 방법 (['google','kakao'])
               키를 안 넣은 버튼을 띄워 두면 눌렀을 때만 실패해서, 왜 안 되는지 알 수 없습니다. */

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { getJSON, postJSON } from '../lib/api.js';
import { isLang, useI18n } from '../i18n/I18nProvider.jsx';

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const { lang, setLang } = useI18n();
  const [me, setMe] = useState(null);
  const [methods, setMethods] = useState([]);
  const [ready, setReady] = useState(false);
  const langRef = useRef(lang);
  langRef.current = lang;

  /* 계정 언어를 서버에 저장합니다 — 다른 기기에서 로그인해도 같은 언어로 보이게. */
  const pushLang = useCallback((code) => {
    if (!isLang(code)) return;
    postJSON('/api/auth', { action: 'lang', lang: code })
      .then((out) => { if (out.ok && out.data && out.data.ok) setMe((m) => (m ? { ...m, lang: out.data.lang || code } : m)); })
      .catch((e) => console.warn('lang sync failed', e));
  }, []);

  const refresh = useCallback(() => {
    return getJSON('/api/auth')
      .then((d) => { setMe((d && d.user) || null); setMethods((d && d.methods) || []); return (d && d.user) || null; })
      .catch(() => { setMe(null); setMethods([]); return null; })
      .then((u) => {
        setReady(true);
        /* 로그인한 계정의 언어를 화면과 맞춥니다.
           · 계정에 저장된 언어가 있고 지금과 다르면 → 계정 쪽을 따릅니다.
           · 아직 없으면 → 지금 화면 언어를 계정에 저장해 둡니다. */
        if (u) {
          if (u.lang && isLang(u.lang) && u.lang !== langRef.current) setLang(u.lang);
          else if (!u.lang) pushLang(langRef.current);
        }
        return u;
      });
  }, [setLang, pushLang]);

  useEffect(() => { refresh(); }, [refresh]);

  const logout = useCallback(() => {
    return postJSON('/api/auth', { action: 'logout' }).catch(() => {}).then(() => setMe(null));
  }, []);

  /* 로그인·회원가입 — 성공하면 user 를 돌려줍니다. 실패하면 error 키(errLoginFail 등). */
  const authSend = useCallback(async (action, payload) => {
    const out = await postJSON('/api/auth', { action, ...payload });
    if (!out.ok || !out.data || !out.data.ok) return { ok: false, error: (out.data && out.data.error) || 'errNet' };
    setMe(out.data.user || null);
    return { ok: true, user: out.data.user || null };
  }, []);

  const value = useMemo(() => ({ me, setMe, methods, ready, refresh, logout, authSend, pushLang }),
    [me, methods, ready, refresh, logout, authSend, pushLang]);
  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const v = useContext(AuthCtx);
  if (!v) throw new Error('useAuth must be used inside <AuthProvider>');
  return v;
}
