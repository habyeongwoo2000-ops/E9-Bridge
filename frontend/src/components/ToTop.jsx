/* 맨 위로 — 600px 넘게 내려가면 오른쪽 아래에 나타납니다. */

import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function ToTop() {
  const { T } = useI18n();
  const [on, setOn] = useState(false);
  useEffect(() => {
    const check = () => setOn(window.scrollY > 600);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);
  return (
    <button type="button" className={'to-top' + (on ? ' is-on' : '')} aria-label={T.toTop || 'Top'}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              const skip = document.querySelector('.skip');
              if (skip) skip.focus({ preventScroll: true });
            }}>TOP</button>
  );
}
