/* 내 정보 한눈에 — 첫 화면 오른쪽 카드와 요약 팝업
   ------------------------------------------------------------------
   로그인한 사람이 기한 계산·사유 자가진단·출국 정산에 넣은 값은 계정에 저장되고
   (SummaryContext), 여기서는 지금 고른 언어로 다시 계산해 그립니다.
   로그인하지 않았으면 로그인 안내만 보입니다.

   세 가지를 모두 넣은 뒤 첫 화면에 오면 팝업을 한 번 띄웁니다. 같은 내용으로는
   다시 띄우지 않고, 어느 하나라도 새로 저장하면 다음에 또 한 번 띄웁니다.
   ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useSummary } from '../../context/SummaryContext.jsx';
import { EMAIL_RE, MY_PARTS, myCount, myHas, myRows, myText, openMailto } from '../../lib/summary.js';
import { load, save, drop } from '../../lib/storage.js';
import SummaryRows from '../SummaryRows.jsx';

const STEPS = [
  { part: 'deadline', key: 'dlTitle', to: '/check#deadline' },
  { part: 'reason', key: 'ckTitle', to: '/check#reason' },
  { part: 'payout', key: 'secNoPay', to: '/check#payout' }
];

function MyPop({ open, onClose }) {
  const { T, lang } = useI18n();
  const { sum, mail, clear } = useSummary();
  const ref = useRef(null);
  const [addr, setAddr] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState({ text: '', kind: '' });

  /* <dialog> 를 열고 닫습니다. showModal 이 없는 옛 브라우저는 open 속성으로 대신합니다. */
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open) {
      setMsg({ text: '', kind: '' });
      if (typeof d.showModal === 'function') { if (!d.open) d.showModal(); } else d.setAttribute('open', '');
    } else if (typeof d.close === 'function') { if (d.open) d.close(); } else d.removeAttribute('open');
  }, [open]);

  const stamps = MY_PARTS.map((p) => sum && sum[p] && sum[p].at).filter(Boolean).sort();
  const done = myCount(sum) >= 3;

  const send = async (e) => {
    e.preventDefault();
    const a = addr.trim();
    if (!EMAIL_RE.test(a)) { setMsg({ text: T.ckEmailBad, kind: 'bad' }); return; }
    const text = myText(T, lang, sum);
    setBusy(true);
    setMsg({ text: T.myEmailSending, kind: '' });
    const out = await mail(a, T.myEmailSubject, text);
    setBusy(false);
    if (out.status === 200 && out.data && out.data.ok) { setMsg({ text: T.myEmailSent, kind: 'good' }); return; }
    if (out.status === 429) { setMsg({ text: T.myEmailLimit, kind: 'bad' }); return; }
    /* 서버에 메일 설정이 아직 없으면(501) 이 기기의 메일 앱을 열어 대신 보냅니다. */
    if (out.status === 501 || out.status === 404 || out.status === 0) {
      openMailto(a, T.myEmailSubject, text);
      setMsg({ text: T.ckEmailOpened, kind: 'good' });
      return;
    }
    setMsg({ text: T.myEmailFail, kind: 'bad' });
  };

  const onClear = async () => {
    if (!window.confirm(T.myClearAsk)) return;
    const ok = await clear();
    if (ok) { drop('myPopSeen'); onClose(); } else setMsg({ text: T.errNet, kind: 'bad' });
  };

  return (
    // 바깥(어두운 부분)을 누르면 닫습니다. Esc 로 닫혀도 상태를 맞춥니다.
    <dialog className="my-pop" id="myPop" aria-labelledby="myPopTitle" ref={ref}
            onClick={(e) => { if (e.target === ref.current) onClose(); }} onClose={onClose}>
      <div className="my-pop-head">
        <h2 id="myPopTitle">{T.myPopTitle}</h2>
        <button type="button" className="my-pop-x" id="myPopX" aria-label={T.myClose} onClick={onClose}>&times;</button>
      </div>
      {done && <p className="my-pop-done" id="myPopDone">{T.myAllDone}</p>}
      <div className="my-pop-body" id="myPopBody">
        {open && <SummaryRows rows={myRows(T, lang, sum)} />}
        {stamps.length > 0 && <p className="my-stamp">{T.myUpdated + ': ' + stamps[stamps.length - 1].slice(0, 10)}</p>}
        <p className="my-dis">{T.disclaimer}</p>
      </div>

      <form className="my-mail" id="myMailForm" noValidate onSubmit={send}>
        <label htmlFor="myEmail">{T.myEmailLabel}</label>
        <div className="result-email-row">
          <input type="email" id="myEmail" inputMode="email" autoComplete="email" placeholder={T.ckEmailPh || 'you@example.com'}
                 value={addr} onChange={(e) => setAddr(e.target.value)} />
          <button type="submit" className="btn btn-go" id="myMailBtn" disabled={busy}>{T.myEmailSend}</button>
        </div>
        <p className="hint">{T.myEmailHint}</p>
        <p className={'result-email-msg' + (msg.kind ? ' is-' + msg.kind : '')} id="myMailMsg" role="status" aria-live="polite">{msg.text}</p>
      </form>

      <div className="my-pop-foot">
        <button type="button" className="btn btn-ghost btn-sm" id="myClear" onClick={onClear}>{T.myClear}</button>
        <button type="button" className="btn btn-ghost" id="myPopClose" onClick={onClose}>{T.myClose}</button>
      </div>
    </dialog>
  );
}

export default function MyCard() {
  const { T, tr } = useI18n();
  const { me } = useAuth();
  const { sum, loaded } = useSummary();
  const [open, setOpen] = useState(false);
  const n = myCount(sum);

  /* 세 가지를 다 넣었으면 한 번만 자동으로 엽니다(저장 시각 셋을 이어 붙인 값으로 "본 적 있음"을 기억). */
  useEffect(() => {
    if (!me || !loaded || !sum || myCount(sum) < 3) return;
    const sig = MY_PARTS.map((p) => (sum[p] && sum[p].at) || '').join('|');
    if (load('myPopSeen') === sig) return;
    save('myPopSeen', sig);
    setOpen(true);
  }, [me, loaded, sum]);

  useEffect(() => { if (!me) setOpen(false); }, [me]);

  return (
    <>
      <div className="ask-card my-card" id="myCard">
        <h2>{T.myTitle}</h2>
        <p>{T.myLead}</p>

        {!me ? (
          <div className="my-guest" id="myGuest">
            <p className="my-sub">{T.myLoginLead}</p>
            <Link className="btn btn-go" to="/login?next=index">{T.myLoginBtn}</Link>
          </div>
        ) : (
          <div className="my-user" id="myUser">
            <p className="my-progress" id="myProgress">{tr('myProgress', { n })}</p>
            <ul className="my-steps">
              {STEPS.map((s) => {
                const done = myHas(sum, s.part);
                return (
                  <li className={'my-step' + (done ? ' is-done' : '')} data-part={s.part} key={s.part}>
                    <span className="my-step-ico" aria-hidden="true">{done ? '✓' : ''}</span>
                    <span className="my-step-txt"><b>{T[s.key]}</b><small className="my-step-state">{done ? T.myDone : T.myTodo}</small></span>
                    <Link className="my-step-go" to={s.to}>{done ? T.myEdit : T.myGo}</Link>
                  </li>
                );
              })}
            </ul>
            <button type="button" className="btn btn-go" id="myOpen" disabled={n === 0} onClick={() => setOpen(true)}>{T.myOpen}</button>
          </div>
        )}
      </div>
      {/* 팝업은 body 바로 아래에 둡니다. 섹션(.band) 안에 두면 .band h2 같은 규칙이 팝업 제목 색을 덮어씁니다. */}
      {me && createPortal(<MyPop open={open} onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}
