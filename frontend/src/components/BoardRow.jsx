/* 질문게시판 글 한 줄 — 누르면 아래로 펼쳐집니다. 게시판과 마이페이지 "내가 남긴 질문"이 함께 씁니다.
   잠긴 글(남의 비공개 글)은 서버가 본문을 아예 보내지 않으므로 펼치지 않습니다.
   관리자에게만 답변 작성/수정 칸이 보입니다. */

import { useState } from 'react';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { postJSON } from '../lib/api.js';

/* 목록에 보일 한 줄짜리 제목 — 본문 첫 줄을 잘라 씁니다(제목 칸을 따로 두지 않아 급한 사람이 덜 채우게). */
export function boardSubject(text) {
  let one = String(text || '').split(/\r?\n/)[0].trim();
  if (one.length > 60) one = one.slice(0, 60) + '…';
  return one || '—';
}

/* 오늘 쓴 글은 시:분, 그 전은 날짜 */
export function boardWhen(at) {
  if (!at) return '—';
  const d = new Date(at);
  if (Number.isNaN(d.getTime())) return String(at).slice(0, 10);
  const now = new Date();
  const p = (n) => (n < 10 ? '0' : '') + n;
  const sameDay = d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  if (sameDay) return p(d.getHours()) + ':' + p(d.getMinutes());
  return String(d.getFullYear()).slice(2) + '.' + p(d.getMonth() + 1) + '.' + p(d.getDate());
}

function AdminBox({ it, onSaved }) {
  const { T } = useI18n();
  const [text, setText] = useState(it.answer || '');
  const [src, setSrc] = useState(it.src || '');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState({ text: '', kind: '' });

  const save = async () => {
    const v = text.trim();
    if (v.length < 5 || v.length > 2000) { setMsg({ text: T.errAnswerRule, kind: 'bad' }); return; }
    setBusy(true);
    setMsg({ text: T.authWorking, kind: '' });
    const out = await postJSON('/api/posts', { action: 'answer', id: it.id, answer: v, src: src.trim() });
    const ok = !!(out.ok && out.data && out.data.ok);
    setMsg({ text: ok ? T.adminAnswerOk : T.errNet, kind: ok ? 'good' : 'bad' });
    setBusy(false);
    if (ok && onSaved) onSaved();
  };

  return (
    <div className="board-admin">
      <p className="board-admin-label">{T.adminAnswerLabel}</p>
      <textarea className="board-admin-ta" rows={3} maxLength={2000} placeholder={T.adminAnswerPh || ''}
                value={text} onChange={(e) => setText(e.target.value)} />
      <input type="text" className="board-admin-src" placeholder={T.adminSrcLabel || ''}
             value={src} onChange={(e) => setSrc(e.target.value)} />
      <div className="board-admin-row">
        <button type="button" className="btn btn-ghost btn-sm" disabled={busy} onClick={save}>{T.adminSaveBtn}</button>
        <span className={'board-admin-msg' + (msg.kind ? ' is-' + msg.kind : '')}>{msg.text}</span>
      </div>
    </div>
  );
}

export default function BoardRow({ it, no, isAdmin, onChanged }) {
  const { T } = useI18n();
  const [open, setOpen] = useState(false);

  const head = (
    <>
      <span className="bt-no">{no != null ? String(no) : '—'}</span>
      <span className="bt-q">
        {it.isPrivate && <span className="board-lock" aria-hidden="true">🔒</span>}
        <span className="bt-subject">{it.locked ? T.boardLockedSubject : boardSubject(it.body)}</span>
        {it.answered && <span className="board-badge is-answered">{T.boardAnsweredBadge}</span>}
        {it.mine && it.isPrivate && <span className="board-badge is-private">{T.boardPrivateBadge}</span>}
      </span>
      <span className="bt-user">{it.username || '—'}</span>
      <span className="bt-at">{boardWhen(it.at)}</span>
    </>
  );

  if (it.locked) {
    return <article className="board-item is-locked"><div className="board-row">{head}</div></article>;
  }

  return (
    <article className={'board-item' + (open ? ' is-open' : '')}>
      <button type="button" className="board-row" aria-expanded={open ? 'true' : 'false'} onClick={() => setOpen(!open)}>
        {head}
      </button>
      <div className="board-panel" hidden={!open}>
        <p className="board-body">{it.body || ''}</p>
        {it.answer ? (
          <>
            <div className="board-a">
              <span className="board-a-label">{T.boardAnswer}</span>
              <span>{it.answer}</span>
            </div>
            {(it.src || it.checked) && (
              <div className="board-meta">
                {it.src && <span>{T.ntSourceLabel + ': ' + it.src}</span>}
                {it.checked && <span>{T.ntCheckedLabel + ': ' + it.checked}</span>}
              </div>
            )}
          </>
        ) : (
          <p className="board-pending">{T.boardNoAnswerYet}</p>
        )}
        {isAdmin && <AdminBox it={it} onSaved={onChanged} />}
      </div>
    </article>
  );
}
