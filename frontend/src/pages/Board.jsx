/* 질문게시판 — 누구나 읽고, 로그인한 사람만 씁니다.
   ------------------------------------------------------------------
   · 목록은 서버가 이미 고른 언어로 만들어 보내 줍니다. 여기서는 번역하지 않습니다.
     (번역은 질문 등록 때와 답변 게시 때 각 1회뿐이고, 조회는 저장된 문자열을 그대로 씁니다.)
   · 이 기기에서 마지막으로 본 같은 쪽(sessionStorage)을 먼저 보여 주고, 새 목록이 오면 바꿉니다.
     첫 요청은 서버가 깨어나느라 몇 초 걸리기도 해서, 빈 화면보다 지난 목록이 낫습니다.
   · 로그인하지 않은 목록은 모두에게 같으므로 pub=1 을 붙입니다. 서버가 잠깐(30초)
     담아 둔 목록을 바로 내줍니다. 로그인한 사람은 자기 비공개 글이 보여야 해서 붙이지 않습니다.
   ------------------------------------------------------------------ */

import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import BoardRow from '../components/BoardRow.jsx';
import Pager from '../components/Pager.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { getJSON, postJSON } from '../lib/api.js';
import { sGet, sSet } from '../lib/storage.js';

export default function Board() {
  const { T, lang } = useI18n();
  const { me, ready, setMe } = useAuth();
  useDocTitle('boardTitle');

  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');            // 지금 적용된 검색어
  const [qInput, setQInput] = useState('');  // 입력칸에 적힌 글자
  const [data, setData] = useState(null);    // 서버 응답 { items, page, pages, total, perPage }
  const [status, setStatus] = useState('loading'); // loading | ok | fail
  const [reload, setReload] = useState(0);

  const [text, setText] = useState('');
  const [priv, setPriv] = useState(false);
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState({ key: null, kind: null });

  const seq = useRef(0);          // 늦게 온 응답이 새 화면을 덮지 않게
  const scrollNext = useRef(false); // 쪽 번호를 눌렀을 때만 목록 맨 위로 이동
  const listRef = useRef(null);
  const meKey = me ? me.username : '';

  /* ---------- 목록 불러오기 ---------- */
  useEffect(() => {
    const mySeq = ++seq.current;
    let url = '/api/posts?page=' + page + '&lang=' + encodeURIComponent(lang);
    if (q) url += '&q=' + encodeURIComponent(q);
    const cacheKey = 'board:' + url + (meKey ? ':' + meKey : '');
    if (!meKey) url += '&pub=1';

    let cached = null;
    try { cached = JSON.parse(sGet(cacheKey) || 'null'); } catch (e) { cached = null; }
    if (cached) { setData(cached); setStatus('ok'); }
    else setStatus((s) => (scrollNext.current || s !== 'ok' ? 'loading' : s));

    getJSON(url, { tries: 1 })
      .then((d) => {
        if (mySeq !== seq.current) return;
        sSet(cacheKey, JSON.stringify(d));
        setData(d);
        setStatus('ok');
        if (scrollNext.current && listRef.current) listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        scrollNext.current = false;
      })
      .catch((e) => {
        if (mySeq !== seq.current) return;
        console.warn('board list unavailable', e);
        scrollNext.current = false;
        // 저장본을 보여 주고 있었다면 그대로 둡니다. 없을 때만 실패 안내와 다시 시도 버튼을 둡니다.
        if (!cached) setStatus('fail');
      });
  }, [page, q, lang, meKey, reload]);

  const go = useCallback((p) => { scrollNext.current = true; setPage(p); }, []);
  const again = useCallback(() => setReload((n) => n + 1), []);

  /* ---------- 글 남기기 ---------- */
  const submit = async (e) => {
    e.preventDefault();
    const v = text.trim();
    if (v.length < 5) { setMsg({ key: 'boardTooShort', kind: 'bad' }); return; }
    if (v.length > 1000) { setMsg({ key: 'boardTooLong', kind: 'bad' }); return; }
    setSending(true);
    setMsg({ key: 'boardSending', kind: null });
    const out = await postJSON('/api/posts', { body: v, lang, private: !!priv });
    setSending(false);
    if (!out.ok) {
      // 로그인이 풀렸으면 글쓰기 상자를 닫고 안내로 바꿉니다.
      if (out.data && out.data.error === 'errNeedLogin') setMe(null);
      setMsg({ key: (out.data && out.data.error) || 'boardFail', kind: 'bad' });
      return;
    }
    setText('');
    setPriv(false);
    setMsg({ key: 'boardSent', kind: 'good' });
    if (page === 1) again(); else setPage(1);
  };

  const onSearch = (e) => {
    e.preventDefault();
    setQ(qInput.trim().slice(0, 60));
    setPage(1);
  };
  const clearSearch = () => { setQ(''); setQInput(''); setPage(1); };

  const items = (data && data.items) || [];
  const total = (data && data.total) || 0;
  const per = (data && data.perPage) || 10;
  const curPage = (data && data.page) || page;
  const pages = status === 'fail' ? 1 : ((data && data.pages) || 1);
  // 최신 글이 맨 위이므로, 번호는 전체 개수에서 거꾸로 셉니다.
  const first = total - (curPage - 1) * per;

  return (
    <>
      <SubVisual crumbs={['navFaq', 'navBoard']} en="Q&A Board" title="navBoard" />
      <main id="top">
        <section id="board" className="band">
          <div className="wrap">

            {/* 로그인한 사람에게만 보이는 글쓰기 상자 */}
            {me && (
              <form className="board-form" id="boardForm" onSubmit={submit}>
                <label className="sr" htmlFor="boardInput">{T.boardTitle}</label>
                <textarea id="boardInput" rows={4} maxLength={1000} placeholder={T.boardPlaceholder}
                          value={text} onChange={(e) => setText(e.target.value)} />
                <p className="board-warn">{T.boardPublicWarn}</p>
                <label className="board-private">
                  <input type="checkbox" id="boardPrivate" checked={priv} onChange={(e) => setPriv(e.target.checked)} />
                  <span>{T.boardPrivateLabel}</span>
                </label>
                <p className="hint">{T.boardPrivateHint}</p>
                <div className="board-actions">
                  <button type="submit" className="btn btn-go" id="boardSend" disabled={sending}>{T.boardSend}</button>
                  <span className={'board-msg' + (msg.kind ? ' is-' + msg.kind : '')} id="boardMsg" role="status" aria-live="polite">
                    {msg.key ? (T[msg.key] || '') : ''}
                  </span>
                </div>
              </form>
            )}

            {/* 로그인하지 않았을 때 대신 보이는 안내 */}
            {ready && !me && (
              <div className="board-gate" id="boardGate">
                <p>{T.boardLoginNeeded}</p>
                <Link className="btn btn-go" to="/login?next=board">{T.boardLoginBtn}</Link>
              </div>
            )}

            {/* 목록 머리 — 좁은 화면에서는 숨깁니다 */}
            <div className="board-thead" aria-hidden="true">
              <span className="bt-no">{T.boardColNo}</span>
              <span className="bt-q">{T.boardColTitle}</span>
              <span className="bt-user">{T.boardColUser}</span>
              <span className="bt-at">{T.boardColAt}</span>
            </div>

            <div className="board-list" id="boardList" ref={listRef} aria-busy={status === 'loading' ? 'true' : undefined}>
              {status === 'loading' && (
                <p className="board-empty board-loading"><span className="spin" />{T.boardLoading || ''}</p>
              )}
              {status === 'fail' && (
                <p className="board-empty">
                  {T.boardListFail + ' '}
                  <button type="button" className="btn btn-ghost btn-sm" onClick={again}>{T.boardRetry || 'Retry'}</button>
                </p>
              )}
              {status === 'ok' && data && !items.length && (
                <p className="board-empty">{q ? T.boardNoResult : T.boardEmpty}</p>
              )}
              {status === 'ok' && items.map((it, i) => (
                <BoardRow key={it.id != null ? it.id : i} it={it} no={first - i}
                          isAdmin={!!(me && me.isAdmin)} onChanged={again} />
              ))}
            </div>

            <Pager id="boardPager" page={curPage} pages={pages} onGo={go} />

            {/* 검색 — 원문 기준으로 찾습니다 */}
            <form className="board-search" id="boardSearch" role="search" onSubmit={onSearch}>
              <label className="sr" htmlFor="boardQ">{T.boardSearchLabel}</label>
              <input type="search" id="boardQ" maxLength={60} placeholder={T.boardSearchPh}
                     autoCapitalize="off" autoCorrect="off" value={qInput} onChange={(e) => setQInput(e.target.value)} />
              <button type="submit" className="btn btn-go btn-sm">{T.boardSearchBtn}</button>
              <button type="button" className="btn btn-ghost btn-sm" id="boardQClear" hidden={!q} onClick={clearSearch}>
                {T.boardSearchClear}
              </button>
            </form>
            {q && <p className="board-found" id="boardFound">{'"' + q + '" · ' + total + (T.boardFoundUnit || '건')}</p>}
          </div>
        </section>
      </main>
    </>
  );
}
