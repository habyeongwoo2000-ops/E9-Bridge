/* 기기 언어로 자동 선택했을 때 7초 동안 알려 줍니다.
   아직 지원하지 않는 언어면 "영어로 보여 드립니다" 안내로 바꿉니다.
   사용자가 언어를 직접 바꾸면 바로 닫습니다. */

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function LangToast() {
  const { T, lang, detected } = useI18n();
  const [open, setOpen] = useState(detected.auto && detected.code !== 'ko');
  const firstLang = useRef(lang);

  useEffect(() => {
    if (!open) return undefined;
    const t = setTimeout(() => setOpen(false), 7000);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => { if (lang !== firstLang.current) setOpen(false); }, [lang]);

  if (!open) return null;
  return (
    <div id="langToast" className="toast" role="status">
      <span id="langToastText">{detected.matched ? T.langAuto : T.langUnsupported}</span>
      <button type="button" id="toastClose" onClick={() => setOpen(false)}>{T.ok}</button>
    </div>
  );
}
