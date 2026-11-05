/* 다국어 — 화면 문자열을 고른 언어로 바꿔 주는 React 컨텍스트

   예전(정적 HTML) 방식
     HTML 에 한국어를 박아 두고, app.js 가 data-i18n 속성을 찾아 글자를 바꿨습니다.

   지금(React) 방식
     컴포넌트가 useI18n() 으로 T(그 언어 문자열 묶음)를 받아 바로 그립니다.
     언어 파일은 Vite 가 언어별로 쪼개 두고, 고른 언어 하나만 동적 import 로 받습니다.
     (기숙사에서 데이터를 아껴 쓰는 사람에게는 이 차이가 큽니다.)

   언어를 고르는 순서 (예전과 같습니다)
     1) 주소의 ?lang=vi — 상담사나 지인이 링크로 언어를 정해 보낼 때
     2) 이 기기에 저장한 선택
     3) 기기 언어 목록 (전체 태그 → 기본 코드 → 옛 코드)
     4) 셋 다 없으면 영어로 보여 주고, 아직 지원하지 않는 언어라고 알립니다 */

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { LANGS, LANG_ALIAS, DRAFT_LANGS, LANG_NAMES } from './core.js';
import { load, save } from '../lib/storage.js';

/* locales/ko.js → () => import('./locales/ko.js') 처럼 언어별 조각을 만듭니다. */
const LOADERS = import.meta.glob('./locales/*.js');

export function isLang(code) {
  return typeof code === 'string' && LANGS.indexOf(code) >= 0;
}

export function pickLang(tag) {
  const t = String(tag || '').toLowerCase().replace(/_/g, '-').trim();
  if (!t) return null;
  if (isLang(t)) return t;
  const base = t.split('-')[0];
  if (isLang(base)) return base;                         // vi-VN → vi
  if (isLang(LANG_ALIAS[base])) return LANG_ALIAS[base]; // in → id
  return null;
}

export function detectLang() {
  let fromUrl = null;
  try { fromUrl = pickLang(new URLSearchParams(window.location.search).get('lang')); } catch (e) { /* 주소 해석 실패 */ }
  if (fromUrl) return { code: fromUrl, auto: false, matched: true, source: 'url' };

  const stored = pickLang(load('lang'));
  if (stored) return { code: stored, auto: false, matched: true, source: 'stored' };

  const list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
  for (let i = 0; i < list.length; i++) {
    const hit = pickLang(list[i]);
    if (hit) return { code: hit, auto: true, matched: true, source: 'device' };
  }
  return { code: 'en', auto: true, matched: false, source: 'fallback' };
}

const cache = {};

/* 한 언어의 문자열 묶음을 받아 옵니다. 초안 언어는 영어를 바탕에 깔고 덮어씁니다. */
async function fetchLang(code) {
  if (cache[code]) return cache[code];
  const loader = LOADERS['./locales/' + code + '.js'];
  if (!loader) throw new Error('no locale ' + code);
  const mod = await loader();
  let T = mod.default || {};
  if (DRAFT_LANGS.indexOf(code) !== -1 && code !== 'en') {
    const en = await fetchLang('en');
    T = { ...en, ...T };
  }
  cache[code] = T;
  return T;
}

const I18nCtx = createContext(null);

export function I18nProvider({ children }) {
  const first = useRef(detectLang());
  const [state, setState] = useState({ lang: first.current.code, T: null });
  const want = useRef(first.current.code);

  const setLang = useCallback((code, opts) => {
    const next = isLang(code) ? code : 'en';
    want.current = next;
    if (!opts || opts.persist !== false) save('lang', next);
    return fetchLang(next)
      .then((T) => {
        // 늦게 도착한 앞선 요청이 새 선택을 덮지 않게 합니다.
        if (want.current !== next) return;
        setState({ lang: next, T });
      })
      .catch((e) => console.warn('language load failed', e)); // 못 받으면 지금 언어를 그대로 둡니다
  }, []);

  useEffect(() => {
    // 링크(?lang=)로 들어온 선택도 다음 방문까지 유지합니다.
    setLang(first.current.code, { persist: first.current.source === 'url' });
  }, [setLang]);

  useEffect(() => {
    if (!state.T) return;
    document.documentElement.lang = state.lang;
    // index.html 의 부트 코드가 걸어 둔 가리개를 걷습니다 (다른 언어 사용자가 한국어를 잠깐 보지 않게).
    document.documentElement.removeAttribute('data-lang-pending');
  }, [state]);

  const value = useMemo(() => {
    const T = state.T || {};
    return {
      lang: state.lang,
      T,
      ready: !!state.T,
      setLang,
      detected: first.current,
      isDraft: DRAFT_LANGS.indexOf(state.lang) !== -1,
      langs: LANGS,
      langName: (c) => LANG_NAMES[c] || c,
      /* 자리표시자 바꾸기: tr('myProgress', { n: 2 }) → "2/3" */
      tr: (key, vars) => {
        let s = typeof T[key] === 'string' ? T[key] : '';
        if (vars) Object.keys(vars).forEach((k) => { s = s.split('{' + k + '}').join(String(vars[k])); });
        return s;
      }
    };
  }, [state, setLang]);

  // 첫 언어 파일이 오기 전에는 아무것도 그리지 않습니다 (한 순간이라 깜빡임보다 낫습니다).
  if (!state.T) return null;
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const v = useContext(I18nCtx);
  if (!v) throw new Error('useI18n must be used inside <I18nProvider>');
  return v;
}

/* 탭 제목: "사유 자가진단 · E9-Bridge — 사업장 변경 안내" 처럼 쪽 이름을 앞에 붙입니다. */
export function useDocTitle(key) {
  const { T } = useI18n();
  useEffect(() => {
    if (!T.docTitle) return;
    document.title = key && T[key] ? T[key] + ' · ' + T.docTitle : T.docTitle;
  }, [T, key]);
}
