/* 내 상황 확인 — 기한 → 사유 → 출국 정산 → 종합 결과를 한 쪽에서 차례로 봅니다.
   ------------------------------------------------------------------
   · 지금 단계는 주소의 #deadline · #reason · #payout · #result 로 정합니다.
     첫 화면의 "출국 정산" 아이콘(/check#payout)처럼 원하는 단계를 바로 열 수 있습니다.
   · 판정과 금액 계산은 lib/rules.js(규칙 엔진)가 합니다. 이 화면은 입력을 받고
     결과를 그리기만 합니다. 결과는 문자열로 저장하지 않고 "입력값 + 지금 언어"로
     그릴 때마다 다시 계산하므로, 언어를 바꾸면 결과도 그 언어로 바뀝니다.
   · 넣은 값은 이 기기(localStorage)에 남습니다. 로그인했으면 [계산] 버튼을 누를 때
     계정의 "내 정보 요약"에도 저장해 첫 화면에서 한 번에 볼 수 있게 합니다.
   ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import SummaryRows from '../components/SummaryRows.jsx';
import TelText from '../components/TelText.jsx';
import { DCard, MyNote, Question, shrink } from '../components/check/parts.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import { CHECKED_ON, PAY_CHECKED, PAY_SRC } from '../i18n/core.js';
import { useAuth } from '../context/AuthContext.jsx';
import { useSummary } from '../context/SummaryContext.jsx';
import {
  deadlineCompute, deadlineMessage, quizCompute, payoutCompute, payoutMessage,
  insMoney, INS_MIN_DAYS, wonFmt, eligCompute, verdictText
} from '../lib/rules.js';
import { myRows, EMAIL_RE, openMailto } from '../lib/summary.js';
import { asDay, fmt, fmtDay, today } from '../lib/dates.js';
import { load, save, drop } from '../lib/storage.js';
import { apiPost } from '../lib/api.js';

const STEPS = ['deadline', 'reason', 'payout', 'result'];
const STEP_LABEL = { deadline: 'dlTitle', reason: 'ckTitle', payout: 'secNoPay', result: 'wzStepResult' };

/* 문항 보기 — [값, 언어 키]. 값은 계정에 저장되는 값이라 바꾸면 안 됩니다. */
const Q1 = [['wage', 'ckQ1a'], ['abuse', 'ckQ1b'], ['terms', 'ckQ1c'], ['closed', 'ckQ1d'], ['own', 'ckQ1e'], ['other', 'ckQ1Other']];
const Q2 = [['yes', 'ckQ2a'], ['some', 'ckQ2b'], ['no', 'ckQ2c'], ['unsure', 'ckQ2d']];
const Q3 = [['0', 'ckQ3a'], ['1', 'ckQ3b'], ['2', 'ckQ3c'], ['3', 'ckQ3d'], ['unsure', 'ckQ3e']];
const PY_MOVED = [['none', 'pyQmovedA'], ['prevOver', 'pyQmovedB'], ['prevUnder', 'pyQmovedC'], ['unsure', 'pyQmovedD']];
const PY_HOURS = [['yes', 'pyQhoursA'], ['no', 'pyQhoursB'], ['unsure', 'pyQhoursC']];
const PY_NAT = [['g1', 'pyQnatA'], ['g3', 'pyQnatB'], ['g2', 'pyQnatC']];
const PY_TYPE = [['leave', 'pyQtypeA'], ['change', 'pyQtypeB'], ['reentry', 'pyQtypeC'], ['unsure', 'pyQtypeD']];

/* 출국만기보험 어림 — 입력 묶음 하나로 화면에 그릴 값을 모두 냅니다. 계산이 안 되면 null. */
function insCalc(shown) {
  if (!shown) return null;
  const wage = parseFloat(shown.wage);
  if (!Number.isFinite(wage) || wage <= 0 || !shown.start) return null;
  const start = asDay(shown.start);
  const end = shown.end ? asDay(shown.end) : today();
  // 들어온 날이 그만두는 날보다 뒤면 계산이 성립하지 않습니다.
  if (end <= start) return { err: true };
  const money = insMoney(wage, start, end);
  const days = money.days;
  const years = Math.floor(days / 365);
  const months = Math.floor((days - years * 365) / 30);
  return {
    days, years, months,
    joinDue: new Date(start.getFullYear(), start.getMonth(), start.getDate() + 15),
    eligible: new Date(start.getFullYear() + 1, start.getMonth(), start.getDate()),
    saved: money.saved, legal: money.legal, gap: money.gap
  };
}

export default function Check() {
  const { T, lang } = useI18n();
  useDocTitle('navCheck');
  const { me } = useAuth();
  const summary = useSummary();
  const loc = useLocation();
  const navigate = useNavigate();

  const hashStep = loc.hash.slice(1);
  const step = STEPS.indexOf(hashStep) !== -1 ? hashStep : 'deadline';

  const stepsRef = useRef(null);
  const quizRef = useRef(null);
  const otherRef = useRef(null);
  const fileRef = useRef(null);
  const emailRef = useRef(null);

  const [skip, setSkip] = useState({});
  const [notes, setNotes] = useState({});

  /* ---------- 1. 기한 — 저장해 둔 퇴사일이 있으면 되살려 바로 계산해 둡니다 ---------- */
  const [leave, setLeave] = useState(() => load('leave') || '');
  const [apply, setApply] = useState(() => (load('leave') && load('apply')) || '');
  const [dd, setDd] = useState(() => (load('leave') ? { leave: load('leave'), apply: load('apply') || '' } : null));

  /* ---------- 2. 사유 ---------- */
  const [q, setQ] = useState({ q1: '', q2: '', q3: '' });
  const [q1Text, setQ1Text] = useState('');
  const [quiz, setQuiz] = useState(null);          // 마지막으로 [결과 보기]를 누른 답
  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState(null);  // { key, kind }
  const [docUrl, setDocUrl] = useState('');
  const [docFile, setDocFile] = useState(null);
  const [read, setRead] = useState(null);          // { status:'loading'|'ok'|'fail', data, applied }

  /* ---------- 3. 출국 정산 ---------- */
  const [exit, setExit] = useState(() => load('exit') || '');
  const [payShown, setPayShown] = useState(() => load('exit') || null);
  const [wage, setWage] = useState(() => load('insWage') || '');
  const [insStart, setInsStart] = useState(() => load('insStart') || '');
  const [insEnd, setInsEnd] = useState(() => load('insEnd') || '');
  const [insShown, setInsShown] = useState(() => ((load('insWage') && load('insStart'))
    ? { wage: load('insWage'), start: load('insStart'), end: load('insEnd') || '' } : null));
  /* 적격 판정의 입사일·마지막 근무일은 위 보험 계산기와 같은 뜻이라 서로 따라갑니다(저장 키도 하나). */
  const [eligStart, setEligStart] = useState(() => load('insStart') || '');
  const [eligEnd, setEligEnd] = useState(() => load('insEnd') || '');
  const [el, setEl] = useState(() => ({
    moved: load('payMoved') || '', hours: load('payHours') || '', nat: load('payNat') || '', type: load('payType') || ''
  }));
  // 입사일과 답이 모두 남아 있을 때만 지난 결과를 되살립니다.
  const [eligShown, setEligShown] = useState(() => ((load('insStart') && load('payMoved')) ? {
    start: load('insStart') || '', end: load('insEnd') || '', exit: load('exit') || '',
    moved: load('payMoved') || '', hours: load('payHours') || '', nat: load('payNat') || '', type: load('payType') || ''
  } : null));

  /* 비동기 결과(사진 읽기)가 돌아왔을 때 그 순간의 최신 값을 보기 위해 둡니다. */
  const latest = useRef({});
  latest.current = { leave, apply };

  const todayStr = fmt(today());

  /* ---------- 계정에 저장 (로그인했을 때만) ---------- */
  function mySave(part, data, anchor) {
    summary.save(part, data)
      .then((ok) => {
        if (ok === null) return; // 로그인하지 않았으면 아무것도 보내지 않았습니다
        setNotes((n) => ({ ...n, [anchor]: ok ? { key: 'mySaved', kind: 'good' } : { key: 'mySaveFail', kind: 'bad' } }));
      })
      .catch(() => setNotes((n) => ({ ...n, [anchor]: { key: 'mySaveFail', kind: 'bad' } })));
  }

  /* ---------- 단계 이동 ---------- */
  function go(s, focus) {
    const to = STEPS.indexOf(s) === -1 ? 'deadline' : s;
    navigate({ pathname: loc.pathname, search: loc.search, hash: '#' + to }, { replace: true });
    if (focus && stepsRef.current) stepsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function move(dir) {
    const i = STEPS.indexOf(step) + dir;
    if (i >= 0 && i < STEPS.length) go(STEPS[i], true);
  }

  // 처음 열 때는 맨 위에서 시작하고, 주소에 단계가 없으면 #deadline 을 붙여 둡니다.
  useEffect(() => {
    window.scrollTo(0, 0);
    if (STEPS.indexOf(loc.hash.slice(1)) === -1) go('deadline');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 출국 정산의 "그만두는 날"은 1단계 퇴사일과 같은 날입니다. 비어 있으면 채워 둡니다. */
  useEffect(() => {
    if (step !== 'payout' || !leave) return;
    setInsEnd((v) => v || leave);
    setEligEnd((v) => v || leave);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  /* ---------- 1. 기한 ---------- */
  function runDeadline(lv, ap) {
    if (!lv) return null;
    const r = deadlineCompute(lv, ap);
    setDd({ leave: lv, apply: ap });
    if (r && !r.bad) {
      save('leave', lv);
      if (ap) save('apply', ap); else drop('apply');
    }
    return r;
  }
  function submitDeadline(e) {
    if (e) e.preventDefault();
    const r = runDeadline(leave, apply);
    // 계산이 실제로 됐을 때만(미래 날짜 오류가 아닐 때) 내 정보에 저장합니다.
    if (r && !r.bad) mySave('deadline', { leave, apply }, 'dday');
  }
  function resetDeadline() {
    setLeave(''); setApply(''); setDd(null);
    drop('leave'); drop('apply');
  }

  /* ---------- 2. 사유 ---------- */
  function onQ1(v) {
    setQ((x) => ({ ...x, q1: v }));
    // "기타"를 고르면 짧게 적을 칸을 보여 주고 바로 쓸 수 있게 합니다.
    if (v === 'other') setTimeout(() => otherRef.current && otherRef.current.focus(), 0);
  }
  function submitQuiz(e) {
    if (e) e.preventDefault();
    if (!(q.q1 && q.q2 && q.q3)) return;
    const lq = { q1: q.q1, q2: q.q2, q3: q.q3 };
    // "기타"에 적은 글은 이 화면과 이메일에만 씁니다. 계정(서버)에는 보내지 않습니다.
    if (q.q1 === 'other' && q1Text.trim()) lq.q1Text = q1Text.trim();
    setQuiz(lq);
    setEmailMsg(null); // 다시 제출하면 전의 "메일 앱을 열었습니다" 안내는 지웁니다(주소는 남깁니다)
    mySave('reason', { q1: q.q1, q2: q.q2, q3: q.q3 }, 'quiz');
    setTimeout(() => quizRef.current && quizRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 30);
  }
  function clearDoc() {
    if (fileRef.current) fileRef.current.value = '';
    if (docUrl) URL.revokeObjectURL(docUrl);
    setDocUrl(''); setDocFile(null); setRead(null);
  }
  function resetQuiz() {
    setQ({ q1: '', q2: '', q3: '' }); setQ1Text(''); setQuiz(null);
    clearDoc();
    setEmail(''); setEmailMsg(null);
  }
  /* 서류 미리보기는 이 기기 안에서만 합니다. [사진에서 읽기]를 눌러야 서버로 갑니다. */
  function onFile(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    if (docUrl) URL.revokeObjectURL(docUrl);
    setDocFile(f);
    setDocUrl(URL.createObjectURL(f));
    setRead(null);
  }
  function readDoc() {
    if (!docFile) return;
    setRead({ status: 'loading' });
    shrink(docFile)
      // 사진은 글보다 오래 걸립니다. 조금 더 기다려 줍니다.
      .then((b64) => apiPost('/api/read-doc', { image: b64, mediaType: 'image/jpeg', lang }, 75000))
      .then((d) => {
        /* 읽은 값을 화면에 채워 넣습니다. 판단은 규칙 엔진(아래 질문)이 합니다.
           퇴사일 칸이 비어 있을 때만 채웁니다 — 사람이 넣은 값을 AI 가 덮어쓰지 않게. */
        let applied = false;
        const cur = latest.current;
        if (d.endDate && !cur.leave) {
          setLeave(d.endDate);
          runDeadline(d.endDate, cur.apply);
          applied = true;
        }
        if (d.reasonCategory && d.reasonCategory !== 'unknown' && Q1.some(([v]) => v === d.reasonCategory)) {
          setQ((x) => ({ ...x, q1: d.reasonCategory }));
          applied = true;
        }
        setRead({ status: 'ok', data: d, applied });
      })
      .catch((err) => {
        console.warn('read-doc failed', err);
        setRead({ status: 'fail' });
      });
  }

  /* 사진에서 읽은 내용을 한 줄 글로 — 이메일 본문에 함께 담습니다. */
  function readText() {
    if (!read || read.status !== 'ok') return '';
    const d = read.data || {};
    const parts = [T.ckReadOk + (d.docType ? ' — ' + d.docType : ''),
      T.ckReadEmployer + ' ' + (d.employer || T.ckReadNone),
      T.ckReadEnd + ' ' + (d.endDate || T.ckReadNone),
      T.ckReadReason + ' ' + (d.statedReason || T.ckReadNone)];
    if (read.applied) parts.push(T.ckReadApplied);
    if (d.note) parts.push(d.note);
    parts.push(T.ckReadNote);
    return parts.join(' ').replace(/\s+/g, ' ').trim();
  }
  function srcLine() {
    return T.askSourceLabel + ': 외국인근로자의 고용 등에 관한 법률 제25조 · ' + T.ntCheckedLabel + ' ' + CHECKED_ON;
  }
  /* 결과를 이메일로 — mailto: 로 이 기기의 이메일 앱을 열어 본문을 채워 둡니다.
     실제 전송은 그 앱에서 한 번 더 눌러야 됩니다. 안내문도 그렇게 씁니다. */
  function quizEmailBody() {
    const f = quizCompute(T, quiz);
    const lines = [f.title, '', f.body + ' ' + f.ev + ' ' + f.count];
    if (quiz.q1Text) lines.push('', T.ckOtherNote + ': ' + quiz.q1Text);
    lines.push('', T.ckDocsTitle);
    (T.docs || []).forEach((d) => lines.push('- ' + d));
    lines.push('', srcLine());
    const rt = readText();
    if (rt) lines.push('', T.ckReadOk, rt);
    lines.push('', T.disclaimer);
    return lines.join('\n');
  }
  function sendQuizEmail() {
    const addr = email.trim();
    if (!EMAIL_RE.test(addr)) {
      setEmailMsg({ key: 'ckEmailBad', kind: 'bad' });
      if (emailRef.current) emailRef.current.focus();
      return;
    }
    openMailto(addr, T.ckEmailSubject, quizEmailBody());
    setEmailMsg({ key: 'ckEmailOpened', kind: 'good' });
  }

  /* ---------- 3. 출국 정산 ---------- */
  function submitPay(e) {
    if (e) e.preventDefault();
    if (!exit) return;
    save('exit', exit);
    setPayShown(exit);
    mySave('payout', { exit }, 'pay');
  }
  function resetPay() { setExit(''); setPayShown(null); drop('exit'); }

  // 출국만기보험 어림 계산 — 넣은 값은 이 기기에 남깁니다. 로그인했으면 내 정보에도 저장합니다.
  function submitIns(e) {
    if (e) e.preventDefault();
    save('insWage', wage); save('insStart', insStart); save('insEnd', insEnd);
    const shown = { wage, start: insStart, end: insEnd };
    setInsShown(shown);
    const r = insCalc(shown);
    if (r && !r.err) mySave('payout', { ins: { wage, start: insStart, end: insEnd } }, 'ins');
  }
  function resetIns() {
    setWage(''); setInsStart(''); setInsEnd(''); setInsShown(null);
    drop('insWage'); drop('insStart'); drop('insEnd');
  }
  /* 두 카드의 날짜 칸을 서로 맞춰 둡니다 (같은 뜻이라 두 번 넣을 필요가 없습니다). */
  function setStartBoth(v) { setInsStart(v); setEligStart(v); save('insStart', v); }
  function setEndBoth(v) { setInsEnd(v); setEligEnd(v); save('insEnd', v); }

  function eligInputs() {
    return { start: eligStart, end: eligEnd, exit, moved: el.moved, hours: el.hours, nat: el.nat, type: el.type };
  }
  function submitElig(e) {
    if (e) e.preventDefault();
    const inp = eligInputs();
    save('insStart', inp.start); save('insEnd', inp.end);
    save('payMoved', inp.moved); save('payHours', inp.hours); save('payNat', inp.nat); save('payType', inp.type);
    setEligShown(inp);
    const part = { elig: inp };
    if (inp.exit) part.exit = inp.exit;
    mySave('payout', part, 'elig');
  }
  function resetElig() {
    setEligStart(''); setEligEnd('');
    setEl({ moved: '', hours: '', nat: '', type: '' });
    setEligShown(null);
    ['payMoved', 'payHours', 'payNat', 'payType'].forEach((k) => drop(k));
  }

  /* ---------- 단계 상태 · 다음 · 넘어가기 ---------- */
  /* 지금 입력칸에 들어 있는 값으로 요약용 묶음을 만듭니다(myRows 가 읽는 모양과 같습니다). */
  function wzSum() {
    const out = {};
    if (leave && !skip.deadline) out.deadline = { leave, apply };
    if (q.q1 && q.q2 && q.q3 && !skip.reason) {
      out.reason = { q1: q.q1, q2: q.q2, q3: q.q3 };
      if (q.q1 === 'other' && q1Text.trim()) out.reason.q1Text = q1Text.trim();
    }
    if (!skip.payout) {
      const py = {};
      if (exit) py.exit = exit;
      const w = parseFloat(wage);
      if (Number.isFinite(w) && w > 0 && insStart) py.ins = { wage: w, start: insStart, end: insEnd };
      if (el.moved || el.hours || el.nat || el.type) py.elig = eligInputs();
      if (py.exit || py.ins || py.elig) out.payout = py;
    }
    return out;
  }
  const sum = wzSum();
  const stateOf = (s) => (skip[s] ? 'skip' : (sum[s] ? 'done' : 'todo'));

  /* 다음으로 가기 전에, 입력은 해 놓고 버튼을 안 누른 단계가 있으면 대신 계산해 둡니다.
     빈 칸이 있는 폼은 건드리지 않습니다(필수 칸 경고가 뜨지 않게). */
  function runStep(s) {
    if (s === 'deadline' && leave) submitDeadline();
    if (s === 'reason' && q.q1 && q.q2 && q.q3) submitQuiz();
    if (s === 'payout') {
      if (exit) submitPay();
      if (wage && insStart) submitIns();
      if (el.moved && el.hours && el.nat && el.type) submitElig();
    }
  }
  function next() {
    runStep(step);
    setSkip((sk) => { const n = { ...sk }; delete n[step]; return n; });
    move(1);
  }
  function skipStep() {
    setSkip((sk) => ({ ...sk, [step]: true }));
    move(1);
  }
  function restart() {
    setSkip({}); setNotes({});
    resetDeadline(); resetQuiz(); resetPay(); resetIns(); resetElig();
    go('deadline', true);
  }

  /* ---------- 그릴 값 (입력값 + 지금 언어로 매번 다시 계산) ---------- */
  const ddR = dd ? deadlineCompute(dd.leave, dd.apply) : null;
  const ddMsg = ddR && !ddR.bad ? deadlineMessage(T, ddR, !!dd.apply) : null;
  const quizF = quiz ? quizCompute(T, quiz) : null;
  const payR = payShown ? payoutCompute(payShown) : null;
  const payMsg = payR ? payoutMessage(T, payR) : null;
  const insR = insCalc(insShown);
  const eligR = eligShown && T.pyElig ? eligCompute(T, eligShown) : null;
  const fd = (d) => fmtDay(d, lang, T);

  const bar = (s) => (
    <div className="wz-bar">
      {s === 'deadline' ? <span /> : (
        <button type="button" className="btn btn-ghost wz-prev" onClick={() => move(-1)}>{T.wzPrev}</button>
      )}
      <div className="wz-bar-r">
        {s === 'result' ? (
          <button type="button" className="btn btn-ghost" id="wzRestart" onClick={restart}>{T.wzRestart}</button>
        ) : (
          <>
            <button type="button" className="btn btn-ghost wz-skip" onClick={skipStep}>{T.wzSkip}</button>
            <button type="button" className="btn btn-go wz-next" onClick={next}>{s === 'payout' ? T.wzSeeResult : T.wzNext}</button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      <SubVisual crumbs={['navCheck']} en="My Situation" title="navCheck" />
      <main id="top">
        <section id="wizard" className="band wz">
          <div className="wrap">
            <p className="sec-lead wz-lead">{T.wzLead}</p>

            <ol className="wz-steps" id="wzSteps" ref={stepsRef}>
              {STEPS.map((s, i) => {
                const st = s === 'result' ? '' : stateOf(s);
                const cls = 'wz-step' + (s === step ? ' is-on' : '') + (st === 'done' ? ' is-done' : '') + (st === 'skip' ? ' is-skip' : '');
                return (
                  <li key={s}>
                    <button type="button" className={cls} data-step={s} aria-current={s === step ? 'step' : undefined}
                            onClick={() => go(s, true)}>
                      <span className="wz-n">{i + 1}</span>
                      <span className="wz-t">{T[STEP_LABEL[s]]}</span>
                      <small className="wz-s">{st === 'done' ? T.wzDone : (st === 'skip' ? T.wzSkipTag : '')}</small>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* ========== 1. 기한 계산 ========== */}
            <div className="wz-panel" id="wz-deadline" data-step="deadline" hidden={step !== 'deadline'}>
              <div className="calc-card">
                <h2>{T.dlTitle}</h2>
                <form className="form" id="ddayForm" autoComplete="off" onSubmit={submitDeadline}>
                  <div className="field">
                    <label htmlFor="leaveDate">{T.dlLeaveDate}</label>
                    <input type="date" id="leaveDate" required max={todayStr} value={leave} onChange={(e) => setLeave(e.target.value)} />
                  </div>
                  <div className="field">
                    <label htmlFor="applyDate">{T.dlApplyDate} <span className="opt">{T.optional}</span></label>
                    <input type="date" id="applyDate" max={todayStr} value={apply} onChange={(e) => setApply(e.target.value)} />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-go">{T.dlCalc}</button>
                    <button type="button" className="btn btn-ghost" id="ddayReset" onClick={resetDeadline}>{T.reset}</button>
                  </div>
                </form>

                {ddR && (ddR.bad ? (
                  <div id="ddayResult" className="dday">
                    <p className="callout is-stop" id="ddayMsg">{T.dlBadDate}</p>
                  </div>
                ) : (
                  <div id="ddayResult" className="dday">
                    <div className="dday-cards">
                      <DCard id="cardApply" label={T.dlCardApply} days={ddR.applyDays} dateText={fd(ddR.applyDue)} rule={T.dlRuleApply} />
                      <DCard id="cardJob" label={T.dlCardJob} days={ddR.jobDays} dateText={fd(ddR.jobDue)} rule={T.dlRuleJob} />
                    </div>
                    {/* 아래 타임라인 라벨은 자리가 좁아 요일 없이 날짜만 둡니다. */}
                    <div className="live" id="liveTimeline">
                      <div className="live-track">
                        <span className="live-fill" id="liveFill" style={{ width: ddR.pos + '%' }} />
                        <span className="live-pin" id="livePin" style={{ left: ddR.pos + '%' }}><b>{T.tlToday}</b></span>
                      </div>
                      <div className="live-labels">
                        <span id="lbLeave">{fmt(ddR.leave)}</span>
                        <span id="lbApply">{fmt(ddR.applied || ddR.applyDue)}</span>
                        <span id="lbJob">{fmt(ddR.jobDue)}</span>
                      </div>
                    </div>
                    <p className={'callout' + (ddMsg.kind ? ' ' + ddMsg.kind : '')} id="ddayMsg">{ddMsg.text}</p>
                  </div>
                ))}
                <MyNote note={notes.dday} />
              </div>
              {bar('deadline')}
            </div>

            {/* ========== 2. 사유 자가진단 ========== */}
            <div className="wz-panel" id="wz-reason" data-step="reason" hidden={step !== 'reason'}>
              <div className="calc-card">
                <h2>{T.ckTitle}</h2>
                <form className="quiz" id="quizForm" onSubmit={submitQuiz}>
                  <Question n={1} legend="ckQ1" name="q1" opts={Q1} value={q.q1} onChange={onQ1}>
                    <input type="text" id="q1OtherText" className="opt-other" maxLength={200} ref={otherRef}
                           placeholder={T.ckQ1OtherPh} hidden={q.q1 !== 'other'}
                           value={q1Text} onChange={(e) => setQ1Text(e.target.value)} />
                  </Question>
                  <Question n={2} legend="ckQ2" name="q2" opts={Q2} value={q.q2} onChange={(v) => setQ((x) => ({ ...x, q2: v }))} />
                  <Question n={3} legend="ckQ3" name="q3" opts={Q3} value={q.q3} onChange={(v) => setQ((x) => ({ ...x, q3: v }))} />

                  <div className="upload">
                    <label className="up-drop" htmlFor="docFile">
                      <span className="up-ic" aria-hidden="true">＋</span>
                      <span>{T.ckUpload}</span>
                    </label>
                    <input type="file" id="docFile" accept="image/*" hidden ref={fileRef} onChange={onFile} />
                    {docUrl && (
                      <div id="docPreview" className="up-prev">
                        <img alt="" id="docImg" src={docUrl} />
                        <div className="up-acts">
                          <button type="button" id="docRead" className="btn btn-go btn-sm"
                                  disabled={!!read && read.status === 'loading'} onClick={readDoc}>{T.ckRead}</button>
                          <button type="button" id="docClear" className="btn btn-ghost btn-sm" onClick={clearDoc}>{T.remove}</button>
                        </div>
                      </div>
                    )}
                    {read && (
                      <div id="docReadOut" className={'read-out' + (read.status === 'fail' ? ' is-warn' : '')}>
                        {read.status === 'loading' && <p><span className="spin" />{T.ckReading}</p>}
                        {read.status === 'fail' && <p>{T.ckReadFail}</p>}
                        {read.status === 'ok' && (
                          <>
                            <h5>{T.ckReadOk + (read.data.docType ? ' — ' + read.data.docType : '')}</h5>
                            <dl>
                              <dt>{T.ckReadEmployer}</dt><dd>{read.data.employer || T.ckReadNone}</dd>
                              <dt>{T.ckReadEnd}</dt><dd>{read.data.endDate || T.ckReadNone}</dd>
                              <dt>{T.ckReadReason}</dt><dd>{read.data.statedReason || T.ckReadNone}</dd>
                            </dl>
                            {read.applied && <p className="read-note">{T.ckReadApplied}</p>}
                            {read.data.note && <p className="read-note">{read.data.note}</p>}
                            <p className="read-note">{T.ckReadNote}</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-go">{T.ckSubmit}</button>
                    <button type="button" className="btn btn-ghost" id="quizReset" onClick={resetQuiz}>{T.reset}</button>
                  </div>
                </form>

                {quizF && (
                  <div id="quizResult" ref={quizRef} className={'result' + (quizF.kind ? ' is-' + quizF.kind : '')}>
                    <p className="result-tag" id="resultTag">{quizF.tag}</p>
                    <h3 id="resultTitle">{quizF.title}</h3>
                    {quiz.q1Text && <p className="result-other" id="resultOther">{T.ckOtherNote + ': ' + quiz.q1Text}</p>}
                    <p id="resultBody">{quizF.body + ' ' + quizF.ev + ' ' + quizF.count}</p>
                    <div className="result-docs">
                      <p className="rd-h">{T.ckDocsTitle}</p>
                      <ul id="resultDocs">{(T.docs || []).map((d, i) => <li key={i}>{d}</li>)}</ul>
                    </div>
                    <p className="src" id="resultSrc">{srcLine()}</p>

                    <div className="result-email">
                      <label htmlFor="resultEmail">{T.ckEmailLabel}</label>
                      <p className="hint">{T.ckEmailHint}</p>
                      <div className="result-email-row">
                        <input type="email" id="resultEmail" inputMode="email" autoComplete="email" ref={emailRef}
                               placeholder={T.ckEmailPh || 'you@example.com'} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button type="button" className="btn btn-go btn-sm" id="resultEmailSend" onClick={sendQuizEmail}>{T.ckEmailSend}</button>
                      </div>
                      <p className={'result-email-msg' + (emailMsg ? ' is-' + emailMsg.kind : '')} id="resultEmailMsg"
                         role="status" aria-live="polite">{emailMsg ? T[emailMsg.key] : ''}</p>
                    </div>

                    <p className="disclaim">{T.disclaimer}</p>
                  </div>
                )}
                <MyNote note={notes.quiz} />
              </div>
              {bar('reason')}
            </div>

            {/* ========== 3. 출국 정산 ========== */}
            <div className="wz-panel" id="wz-payout" data-step="payout" hidden={step !== 'payout'}>
              <h2 className="wz-h">{T.pyTitle}</h2>
              <div className="calc-card pay-form-card">
                <h3>{T.pyDateLabel}</h3>
                <form className="form form-inline" id="payForm" autoComplete="off" onSubmit={submitPay}>
                  <div className="field">
                    <label htmlFor="exitDate" className="sr">{T.pyDateLabel}</label>
                    <input type="date" id="exitDate" required value={exit} onChange={(e) => setExit(e.target.value)} />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-go">{T.pyCalc}</button>
                    <button type="button" className="btn btn-ghost" id="payReset" onClick={resetPay}>{T.reset}</button>
                  </div>
                </form>

                {payR && (
                  <div id="payResult" className="dday">
                    <div className="dday-cards">
                      <DCard id="cardReport" label={T.pyCardReport} days={payR.reportDays} dateText={fd(payR.reportDue)} rule={T.pyRuleReport} />
                      <DCard id="cardClaim" label={T.pyCardClaim} days={payR.claimDays} dateText={fd(payR.claimDue)} rule={T.pyRuleClaim} />
                    </div>
                    <p className={'callout' + (payMsg.kind ? ' ' + payMsg.kind : '')} id="payMsg">{payMsg.text}</p>
                  </div>
                )}
                <MyNote note={notes.pay} />

                <p className="callout is-warn">{T.pyLimit}</p>
                <p className="src" id="paySrc">{T.askSourceLabel + ': ' + PAY_SRC + ' · ' + T.ntCheckedLabel + ' ' + PAY_CHECKED}</p>
              </div>

              {/* ▼ 출국만기보험 추정 계산기 */}
              <div className="calc-card pay-form-card" id="insCard">
                <h3>{T.insTitle}</h3>
                <p className="sec-lead">{T.insLead}</p>
                <form className="form" id="insForm" autoComplete="off" onSubmit={submitIns}>
                  <div className="field">
                    <label htmlFor="insWage">{T.insWageLabel}</label>
                    <input type="number" id="insWage" min="0" step="any" inputMode="numeric" placeholder="2096270" required
                           value={wage} onChange={(e) => setWage(e.target.value)} />
                    <p className="hint">{T.insWageHint}</p>
                  </div>
                  <div className="field">
                    <label htmlFor="insStart">{T.insStartLabel}</label>
                    <input type="date" id="insStart" required value={insStart} onChange={(e) => setStartBoth(e.target.value)} />
                  </div>
                  <div className="field">
                    <label htmlFor="insEnd">{T.insEndLabel}</label>
                    <input type="date" id="insEnd" value={insEnd} onChange={(e) => setEndBoth(e.target.value)} />
                    <p className="hint">{T.insEndHint}</p>
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-go">{T.insCalc}</button>
                    <button type="button" className="btn btn-ghost" id="insReset" onClick={resetIns}>{T.reset}</button>
                  </div>
                </form>

                {insR && (
                  <div id="insResult">
                    <div className="ins-grid">
                      <article className="ins-box">
                        <p className="ins-k">{T.insWorked}</p>
                        <p className="ins-v" id="insWorkedOut">{insR.err ? '–'
                          : (insR.years > 0 ? insR.years + (T.yearUnit || '년') + ' ' : '') + insR.months + (T.monthUnit || '개월') +
                            ' (' + insR.days + (T.dayUnitPlain || '일') + ')'}</p>
                      </article>
                      <article className="ins-box">
                        <p className="ins-k">{T.insFrom}</p>
                        <p className="ins-v" id="insFromOut">{insR.err ? '–' : fd(insR.joinDue) + ' ' + (T.insFromTail || '까지')}</p>
                        <p className="ins-r">{T.insFromRule}</p>
                      </article>
                      <article className={'ins-box' + (insR.err ? '' : (insR.days < INS_MIN_DAYS ? ' is-warn' : ' is-go'))} id="insEligBox">
                        <p className="ins-k">{T.insElig}</p>
                        <p className="ins-v" id="insEligOut">{insR.err ? '–' : fd(insR.eligible)}</p>
                        <p className="ins-r">{T.insEligRule}</p>
                      </article>
                    </div>

                    <div className="ins-money">
                      <div className="ins-money-row">
                        <span>{T.insSaved}</span>
                        <b id="insSavedOut">{insR.err ? '–' : wonFmt(T, insR.saved)}</b>
                      </div>
                      <div className="ins-money-row">
                        <span>{T.insLegal}</span>
                        <b id="insLegalOut">{insR.err ? '–' : wonFmt(T, insR.legal)}</b>
                      </div>
                      {/* 차액은 회사가 채워 줘야 하는 몫입니다. 1만원 넘게 벌어질 때만 보여
                          반올림 때문에 생기는 잔돈으로 놀라지 않게 합니다. */}
                      {!insR.err && insR.gap > 10000 && (
                        <div className="ins-money-row is-gap" id="insGapRow">
                          <span>{T.insGap}</span>
                          <b id="insGapOut">{wonFmt(T, insR.gap)}</b>
                        </div>
                      )}
                    </div>

                    {/* 1년을 못 채우면 근로자가 못 받고 회사로 돌아갑니다. 가장 중요한 안내입니다. */}
                    {insR.err ? <p className="callout is-stop" id="insMsg">{T.insErrOrder}</p>
                      : insR.days < INS_MIN_DAYS
                        ? <p className="callout is-warn" id="insMsg">{String(T.insMsgShort || '').replace('{d}', String(INS_MIN_DAYS - insR.days))}</p>
                        : <p className="callout" id="insMsg">{T.insMsgOk}</p>}
                  </div>
                )}
                <MyNote note={notes.ins} />

                <p className="callout is-warn">{T.insWarn}</p>
              </div>
              {/* ▲ 출국만기보험 추정 계산기 끝 */}

              {/* ▼ 적격 여부 자가진단 — 항목별로 받을 수 있는지 판정합니다. */}
              <div className="calc-card pay-form-card" id="eligCard">
                <h3>{T.pyEligTitle}</h3>
                <p className="sec-lead">{T.pyEligLead}</p>
                <form className="quiz" id="eligForm" autoComplete="off" onSubmit={submitElig}>
                  <div className="field">
                    <label htmlFor="eligStart">{T.pyHireLabel}</label>
                    <input type="date" id="eligStart" value={eligStart} onChange={(e) => setStartBoth(e.target.value)} />
                    <p className="hint">{T.pyHireHint}</p>
                  </div>
                  <div className="field">
                    <label htmlFor="eligEnd">{T.pyLastLabel} <span className="opt">{T.optional}</span></label>
                    <input type="date" id="eligEnd" value={eligEnd} onChange={(e) => setEndBoth(e.target.value)} />
                    <p className="hint">{T.pyLastHint}</p>
                  </div>

                  <Question n={1} legend="pyQmoved" name="pyMoved" opts={PY_MOVED} value={el.moved} onChange={(v) => setEl((x) => ({ ...x, moved: v }))} />
                  <Question n={2} legend="pyQhours" name="pyHours" opts={PY_HOURS} value={el.hours} onChange={(v) => setEl((x) => ({ ...x, hours: v }))} />
                  <Question n={3} legend="pyQnat" name="pyNat" opts={PY_NAT} value={el.nat} onChange={(v) => setEl((x) => ({ ...x, nat: v }))} />
                  <Question n={4} legend="pyQtype" name="pyType" opts={PY_TYPE} value={el.type} onChange={(v) => setEl((x) => ({ ...x, type: v }))} />

                  <div className="form-actions">
                    <button type="submit" className="btn btn-go">{T.pyEligBtn}</button>
                    <button type="button" className="btn btn-ghost" id="eligReset" onClick={resetElig}>{T.reset}</button>
                  </div>
                </form>

                {eligR && (
                  <div id="eligResult">
                    <p className={eligR.tenureCls} id="eligTenure">{eligR.tenureText}</p>
                    <h4 className="sub-h">{T.pyVerdictTitle}</h4>
                    {/* 상태는 색만으로 말하지 않습니다 — 레일 + 배지 + 글자를 함께 씁니다. */}
                    <div className="pay-list" id="eligVerdicts">
                      {eligR.items.map((it, i) => (
                        <div className={'pay-item is-' + (it.kind === 'no' ? 'stop' : it.kind)} key={i}>
                          <h4>
                            <span className="pay-check">{it.kind === 'ok' ? '✓' : (it.kind === 'warn' ? '!' : '×')}</span>
                            <span>{it.n}</span>
                          </h4>
                          <p className="pay-verdict">{verdictText(T, it.kind)}</p>
                          <p>{it.body}</p>
                          {it.w && <p className="pay-where">{it.w}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <MyNote note={notes.elig} />
              </div>
              {/* ▲ 적격 여부 자가진단 끝 */}

              <div className="pay-hero">
                <h2>{T.pyTitle}</h2>
                <h3 className="sub-h">{T.pyListTitle}</h3>
                <p className="pay-hero-lead">{T.pyHeroLead}</p>
                {/* 순서를 매겨 두면 "몇 개 중 몇 번째"가 한눈에 들어옵니다. 번호는 눌러서 바로 걸립니다. */}
                <div className="pay-list" id="payList">
                  {(T.pyItems || []).map((it, i) => (
                    <div className="pay-item" key={i}>
                      <span className="pay-num">{i + 1}</span>
                      <h4><span>{it.t}</span></h4>
                      <p>{it.w}</p>
                      <p className="pay-where"><TelText text={it.r} /></p>
                    </div>
                  ))}
                </div>
              </div>
              {bar('payout')}
            </div>

            {/* ========== 4. 종합 결과 ========== */}
            <div className="wz-panel" id="wz-result" data-step="result" hidden={step !== 'result'}>
              <div className="calc-card">
                <h2>{T.wzStepResult}</h2>
                <p className="sec-lead">{T.wzResultLead}</p>
                <div className="wz-sum" id="wzSummary">
                  {step === 'result' && <SummaryRows rows={myRows(T, lang, sum, skip)} />}
                </div>
                {!me && (
                  <p className="wz-login" id="wzLogin">
                    <span>{T.wzLoginHint}</span>
                    <Link className="btn btn-go btn-sm" to="/login?next=check">{T.myLoginBtn}</Link>
                  </p>
                )}
                <p className="disclaim">{T.disclaimer}</p>
              </div>
              {bar('result')}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
