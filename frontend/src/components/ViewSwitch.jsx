/* PC로 보기 · 모바일로 보기 (모든 쪽 바닥글 맨 아래)
   · 휴대폰: 화면 폭(viewport)을 1200px 로 바꿔 PC 배치를 보여 줍니다.
   · PC: 브라우저는 화면 폭을 바꿀 수 없어서, 휴대폰 폭 미리보기 창을 띄워 같은 쪽을 보여 줍니다.
   · 미리보기 창 안의 쪽에는 이 줄을 다시 그리지 않습니다(창 속의 창이 생기지 않게). */

import { Fragment, useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { load, save } from '../lib/storage.js';

const IN_FRAME = typeof window !== 'undefined' && window.self !== window.top;
function isPhone() { return Math.min(window.screen.width, window.screen.height) < 768; }
function initialMode() { return load('view') || (isPhone() ? 'mobile' : 'pc'); }

export default function ViewSwitch() {
  const { T } = useI18n();
  const [mode, setModeState] = useState(initialMode);

  const setMode = useCallback((m) => { save('view', m); setModeState(m); }, []);

  useEffect(() => {
    if (IN_FRAME) return undefined;
    if (isPhone()) {
      const meta = document.querySelector('meta[name=viewport]');
      if (meta) meta.setAttribute('content', mode === 'pc' ? 'width=1200' : 'width=device-width, initial-scale=1');
      return undefined;
    }
    document.documentElement.classList.toggle('is-previewing', mode === 'mobile');
    const onKey = (e) => { if (e.key === 'Escape' && mode === 'mobile') setMode('pc'); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mode, setMode]);

  if (IN_FRAME) return null;
  const preview = !isPhone() && mode === 'mobile';

  return (
    <>
      <div className="view-switch in-foot">
        {[['pc', 'viewPc'], ['mobile', 'viewMobile']].map(([m, k], i) => (
          <Fragment key={m}>
            {i ? <span className="view-switch-sep">|</span> : null}
            <button type="button" className={mode === m ? 'is-on' : undefined} aria-pressed={mode === m ? 'true' : 'false'}
                    onClick={() => setMode(m)}>{T[k]}</button>
          </Fragment>
        ))}
      </div>
      {preview && createPortal(
        <div className="view-preview" id="viewPreview" role="dialog" aria-modal="true">
          <div className="view-preview-bar">
            <span>{T.viewPreview}</span>
            <button type="button" className="view-preview-close" autoFocus onClick={() => setMode('pc')}>{T.viewPc}</button>
          </div>
          <iframe src={window.location.href} title={T.viewPreview} />
        </div>,
        document.body
      )}
    </>
  );
}
