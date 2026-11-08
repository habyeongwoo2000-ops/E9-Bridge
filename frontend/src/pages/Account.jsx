/* 마이페이지 — 계정 정보 · 닉네임 · 비밀번호 · 프로필 · 내가 남긴 질문
   ------------------------------------------------------------------
   · 로그인 아이디는 바꾸지 않습니다(바꾸면 다음에 본인이 못 들어옵니다). 보이는 이름만 바꿉니다.
   · 비밀번호 칸은 아이디·비밀번호로 가입한 사람에게만 보입니다.
     구글·카카오로 들어온 계정은 이 사이트에 비밀번호가 없습니다.
   · 로그인하지 않고 주소로 바로 들어오면 로그인 안내만 보입니다.
   ------------------------------------------------------------------ */

import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import BoardRow from '../components/BoardRow.jsx';
import Pager from '../components/Pager.jsx';
import FavoritePlaces from '../components/FavoritePlaces.jsx';
import { AuthMsg } from '../components/auth/AuthShared.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { getJSON, postJSON } from '../lib/api.js';

/* 프로필 국적 — 고용허가제(E-9) 송출국 순서대로 둡니다. */
const NATIONS = ['PH', 'VN', 'TH', 'ID', 'MN', 'LK', 'UZ', 'PK', 'KH', 'CN', 'BD', 'NP', 'MM', 'KG', 'TL', 'LA', 'TJ', 'KZ'];

/* 로그인 방법을 사람이 읽는 말로 바꿉니다. */
function providerName(T, lang, p) {
  if (p === 'google') return 'Google';
  if (p === 'kakao') return lang === 'ko' ? '카카오' : 'Kakao';
  return T.acWayPassword || '아이디 · 비밀번호';
}

/* 서버 응답을 { key, kind } 안내로 바꿉니다. */
async function send(payload) {
  const out = await postJSON('/api/account', payload);
  if (!out.ok || !out.data || !out.data.ok) return { ok: false, error: (out.data && out.data.error) || 'errNet' };
  return { ok: true, data: out.data };
}

/* ---------- 내가 남긴 질문 ---------- */
function MyQuestions() {
  const { T, lang } = useI18n();
  const { me } = useAuth();
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [fail, setFail] = useState(false);
  const seq = useRef(0);
  const scrollNext = useRef(false);
  const listRef = useRef(null);

  const load = useCallback(() => {
    const mySeq = ++seq.current;
    getJSON('/api/posts?mine=1&page=' + page + '&lang=' + encodeURIComponent(lang))
      .then((d) => {
        if (mySeq !== seq.current) return;
        setData(d); setFail(false);
        if (scrollNext.current && listRef.current) listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        scrollNext.current = false;
      })
      .catch((e) => {
        if (mySeq !== seq.current) return;
        console.warn('my questions unavailable', e);
        setData(null); setFail(true);
        scrollNext.current = false;
      });
  }, [page, lang]);

  useEffect(() => { if (me) load(); }, [me, load]);

  const items = (data && data.items) || [];
  const total = (data && data.total) || 0;
  const per = (data && data.perPage) || 10;
  const cur = (data && data.page) || page;
  const first = total - (cur - 1) * per;

  return (
    <>
      <div className="board-thead" aria-hidden="true">
        <span className="bt-no">{T.boardColNo}</span>
        <span className="bt-q">{T.boardColTitle}</span>
        <span className="bt-user">{T.boardColUser}</span>
        <span className="bt-at">{T.boardColAt}</span>
      </div>
      <div className="board-list" id="myqList" ref={listRef}>
        {fail && <p className="board-empty">{T.boardListFail}</p>}
        {!fail && data && !items.length && <p className="board-empty">{T.acMyQEmpty}</p>}
        {!fail && items.map((it, i) => (
          <BoardRow key={it.id != null ? it.id : i} it={it} no={first - i} isAdmin={!!(me && me.isAdmin)} onChanged={load} />
        ))}
      </div>
      <Pager id="myqPager" page={cur} pages={fail ? 1 : ((data && data.pages) || 1)}
             onGo={(p) => { scrollNext.current = true; setPage(p); }} />
    </>
  );
}

export default function Account() {
  const { T, lang } = useI18n();
  const { me, ready, setMe, logout } = useAuth();
  useDocTitle('acTitle');

  const [info, setInfo] = useState(null);
  const [nick, setNick] = useState('');
  const [nickMsg, setNickMsg] = useState({ key: null, kind: null });
  const [pwNow, setPwNow] = useState('');
  const [pwNew, setPwNew] = useState('');
  const [pwNew2, setPwNew2] = useState('');
  const [pwMsg, setPwMsg] = useState({ key: null, kind: null });
  const [birth, setBirth] = useState('');
  const [nation, setNation] = useState('');
  const [gender, setGender] = useState('');
  const [profileMsg, setProfileMsg] = useState({ key: null, kind: null });

  const meKey = me ? me.username : '';
  useEffect(() => {
    if (!meKey) { setInfo(null); return undefined; }
    let alive = true;
    getJSON('/api/account')
      .then((d) => {
        if (!alive || !d) return;
        setInfo(d);
        setNick((v) => v || d.nickname || '');
        setBirth(d.birthdate || '');
        setNation(d.nationality || '');
        setGender(d.gender || '');
      })
      .catch(() => { if (alive) setNickMsg({ key: 'errNet', kind: 'bad' }); });
    return () => { alive = false; };
  }, [meKey]);

  const todayIso = new Date().toISOString().slice(0, 10);

  const saveNick = async (e) => {
    e.preventDefault();
    const v = nick.trim();
    if (v.length < 2 || v.length > 20) { setNickMsg({ key: 'errNickRule', kind: 'bad' }); return; }
    setNickMsg({ key: 'authWorking', kind: null });
    const out = await send({ action: 'nickname', nickname: v });
    if (!out.ok) { setNickMsg({ key: out.error, kind: 'bad' }); return; }
    setNickMsg({ key: 'acNickOk', kind: 'good' });
    setInfo((i) => (i ? { ...i, nickname: out.data.nickname } : i));
    // 머리말에 걸린 이름도 그 자리에서 바꿉니다.
    setMe((m) => (m ? { ...m, nickname: out.data.nickname } : m));
  };

  const savePw = async (e) => {
    e.preventDefault();
    if (pwNew !== pwNew2) { setPwMsg({ key: 'errPwMatch', kind: 'bad' }); return; }
    if (pwNew.length < 8) { setPwMsg({ key: 'errPwRule', kind: 'bad' }); return; }
    if (pwNow === pwNew) { setPwMsg({ key: 'errPwSame', kind: 'bad' }); return; }
    setPwMsg({ key: 'authWorking', kind: null });
    const out = await send({ action: 'password', current: pwNow, next: pwNew });
    if (!out.ok) { setPwMsg({ key: out.error, kind: 'bad' }); return; }
    setPwMsg({ key: 'acPwOk', kind: 'good' });
    // 바꾼 비밀번호가 화면에 남아 있지 않게 지웁니다.
    setPwNow(''); setPwNew(''); setPwNew2('');
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    // 오늘 이후 날짜는 생년월일이 될 수 없습니다.
    if (birth && birth > todayIso) { setProfileMsg({ key: 'errBirthFuture', kind: 'bad' }); return; }
    setProfileMsg({ key: 'authWorking', kind: null });
    const out = await send({ action: 'profile', birthdate: birth, nationality: nation, gender });
    if (!out.ok) { setProfileMsg({ key: out.error, kind: 'bad' }); return; }
    setProfileMsg({ key: 'acProfileOk', kind: 'good' });
    setInfo((i) => (i ? { ...i, birthdate: out.data.birthdate, nationality: out.data.nationality, gender: out.data.gender } : i));
  };

  const isPw = !!(info && info.provider === 'password');

  return (
    <>
      <SubVisual crumbs={['navAccount']} en="My Page" title="acTitle" />
      <main id="top">
        <section id="account" className="band">
          <div className="wrap wrap-narrow">
            <p className="sec-lead">{T.acLead}</p>

            {/* 로그인하지 않고 주소로 바로 들어온 경우 */}
            {ready && !me && (
              <div className="board-gate" id="acGate">
                <p>{T.acNeedLogin}</p>
                <Link className="btn btn-go" to="/login?next=account">{T.navLogin}</Link>
              </div>
            )}

            {me && (
              <div id="acBody">
                <h3 className="ac-head">{T.acSecAccount}</h3>
                <dl className="ac-list">
                  <dt>{T.acLoginWay}</dt>
                  <dd id="acProvider">{info ? providerName(T, lang, info.provider) : '-'}</dd>
                  <dt>{T.acLoginId}</dt>
                  {/* 소셜 계정의 아이디는 user_1a2b3c4d 같은 내부용 값이라 보여 줘도 쓸 데가 없습니다. */}
                  <dd id="acUsername">{info ? (isPw ? info.username : (T.acIdHidden || '-')) : '-'}</dd>
                  <dt>{T.acJoined}</dt>
                  <dd id="acJoined">{(info && info.joined) || '-'}</dd>
                </dl>
                {(!info || isPw) && <p className="hint" id="acIdNote">{T.acIdNote}</p>}

                <h3 className="ac-head">{T.acSecNick}</h3>
                <p className="sec-lead">{T.acNickLead}</p>
                <form className="auth-form" id="nickForm" autoComplete="off" onSubmit={saveNick}>
                  <div className="field">
                    <label htmlFor="acNick">{T.acNickLabel}</label>
                    <input type="text" id="acNick" name="nickname" maxLength={20} autoCapitalize="off" autoCorrect="off"
                           spellCheck="false" required value={nick} onChange={(e) => setNick(e.target.value)} />
                    <p className="hint">{T.acNickHint}</p>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-go">{T.acNickBtn}</button>
                  </div>
                  <AuthMsg msg={nickMsg} id="nickMsg" />
                </form>

                {isPw && (
                  <div id="pwBlock">
                    <h3 className="ac-head">{T.acSecPw}</h3>
                    <p className="sec-lead">{T.acPwLead}</p>
                    <form className="auth-form" id="pwForm" autoComplete="off" onSubmit={savePw}>
                      <div className="field">
                        <label htmlFor="acPwNow">{T.acPwNow}</label>
                        <input type="password" id="acPwNow" name="current" autoComplete="current-password" required
                               value={pwNow} onChange={(e) => setPwNow(e.target.value)} />
                      </div>
                      <div className="field">
                        <label htmlFor="acPwNew">{T.acPwNew}</label>
                        <input type="password" id="acPwNew" name="next" autoComplete="new-password" required
                               value={pwNew} onChange={(e) => setPwNew(e.target.value)} />
                        <p className="hint">{T.authPwHint}</p>
                      </div>
                      <div className="field">
                        <label htmlFor="acPwNew2">{T.authPw2Label}</label>
                        <input type="password" id="acPwNew2" name="next2" autoComplete="new-password" required
                               value={pwNew2} onChange={(e) => setPwNew2(e.target.value)} />
                      </div>
                      <div className="form-actions">
                        <button type="submit" className="btn btn-go">{T.acPwBtn}</button>
                      </div>
                      <AuthMsg msg={pwMsg} id="pwMsg" />
                    </form>
                  </div>
                )}

                {info && !isPw && <p className="social-privacy" id="pwSocialNote">{T.acPwSocial}</p>}

                <h3 className="ac-head">{T.acSecProfile}</h3>
                <p className="sec-lead">{T.acProfileLead}</p>
                <form className="auth-form" id="profileForm" autoComplete="off" onSubmit={saveProfile}>
                  <div className="field">
                    <label htmlFor="acBirth">{T.acBirthLabel}</label>
                    <input type="date" id="acBirth" name="birthdate" max={todayIso} value={birth}
                           onChange={(e) => setBirth(e.target.value)} />
                  </div>
                  <div className="field">
                    <label htmlFor="acNation">{T.acNationLabel}</label>
                    <select id="acNation" name="nationality" value={nation} onChange={(e) => setNation(e.target.value)}>
                      <option value="">{T.acNationUnset}</option>
                      {NATIONS.map((c) => <option key={c} value={c}>{T['cty' + c]}</option>)}
                      <option value="other">{T.ctyOther}</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="acGender">{T.acGenderLabel}</label>
                    <select id="acGender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                      <option value="">{T.acGenderUnset}</option>
                      <option value="M">{T.acGenderM}</option>
                      <option value="F">{T.acGenderF}</option>
                    </select>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-go">{T.acProfileBtn}</button>
                  </div>
                  <AuthMsg msg={profileMsg} id="profileMsg" />
                </form>

                <FavoritePlaces key={me.username} username={me.username} />
                <h3 className="ac-head">{T.acSecMyQ}</h3>
                <p className="sec-lead">{T.acMyQLead}</p>
                <MyQuestions />

                <p className="auth-swap">
                  <a href="#top" id="acLogout" onClick={(e) => { e.preventDefault(); logout(); }}>{T.navLogout}</a>
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
