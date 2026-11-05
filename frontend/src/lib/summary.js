/* 내 정보 요약 — 기한·사유·출국 정산 입력값을 사람이 읽는 줄로 바꿉니다.
   첫 화면 팝업, "내 상황 확인" 종합 결과, 이메일 본문이 모두 이 함수를 씁니다.

   돌려주는 줄: [{ h: 제목 } | { k: 항목, v: 값, kind } | { p: 문장 }] */

import { addMonths, asDay, diffDays, fmtDay, today } from './dates.js';
import { eligCompute, insMoney, quizCompute, verdictText, wonFmt } from './rules.js';

export const MY_PARTS = ['deadline', 'reason', 'payout'];

export function myHas(sum, part) {
  const v = sum && sum[part];
  if (!v) return false;
  if (part === 'payout') return !!(v.exit || v.ins || v.elig);
  return true;
}

export function myCount(sum) {
  return MY_PARTS.filter((p) => myHas(sum, p)).length;
}

/* sum: { deadline, reason, payout }   skip: "내 상황 확인"에서 넘어간 단계 */
export function myRows(T, lang, sum, skip) {
  const S = sum || {};
  const sk = skip || {};
  const none = (part) => ({ p: sk[part] ? T.wzSkipped : T.myNone });
  const rows = [];
  const now = today();
  const fd = (d) => fmtDay(d, lang, T);
  // 숫자와 단위 사이 띄어쓰기 — 한국어는 "13일", 다른 언어는 "13 days".
  const unit = (u) => ((lang === 'ko' || /^\s/.test(u || '')) ? (u || '') : ' ' + u);
  const dayLine = (d) => {
    const days = diffDays(d, now);
    if (days < 0) return fd(d) + ' · ' + Math.abs(days) + unit(T.daysOver);
    if (days === 0) return fd(d) + ' · ' + T.dueToday;
    return fd(d) + ' · ' + days + unit(T.daysUnit);
  };
  const kindOf = (d) => {
    const days = diffDays(d, now);
    return days <= 0 ? 'stop' : (days <= 7 ? 'warn' : 'ok');
  };

  /* 1) 기한 */
  rows.push({ h: T.dlTitle });
  const dl = S.deadline;
  if (dl && dl.leave) {
    const leave = asDay(dl.leave);
    const applyDue = addMonths(leave, 1);
    const applied = dl.apply ? asDay(dl.apply) : null;
    const jobDue = addMonths(applied || applyDue, 3);
    rows.push({ k: T.myLeave, v: fd(leave) });
    if (applied) rows.push({ k: T.myApplied, v: fd(applied) });
    rows.push({ k: T.myApplyBy, v: dayLine(applyDue), kind: applied ? 'ok' : kindOf(applyDue) });
    rows.push({ k: T.myJobBy, v: dayLine(jobDue), kind: kindOf(jobDue) });
    if (!applied) rows.push({ p: T.msgEstimate });
  } else rows.push(none('deadline'));

  /* 2) 사유 자가진단 */
  rows.push({ h: T.ckTitle });
  const rs = S.reason;
  if (rs && rs.q1) {
    const f = quizCompute(T, rs);
    rows.push({ k: f.tag, v: f.title, kind: f.kind === 'stop' ? 'stop' : (f.kind === 'warn' ? 'warn' : 'ok') });
    rows.push({ p: f.body + ' ' + f.ev + ' ' + f.count });
    if (rs.q1Text) rows.push({ k: T.ckOtherNote, v: rs.q1Text });
    rows.push({ k: T.ckDocsTitle, v: (T.docs || []).join(', ') });
  } else rows.push(none('reason'));

  /* 3) 출국 정산 */
  rows.push({ h: T.secNoPay });
  const py = S.payout;
  if (py && (py.exit || py.ins || py.elig)) {
    if (py.exit) {
      const exit = asDay(py.exit);
      const reportDue = addMonths(exit, -1);
      const claimDue = new Date(exit.getFullYear(), exit.getMonth(), exit.getDate() - 7);
      rows.push({ k: T.myExit, v: fd(exit) });
      rows.push({ k: T.myReport, v: dayLine(reportDue), kind: kindOf(reportDue) });
      rows.push({ k: T.myClaim, v: dayLine(claimDue), kind: kindOf(claimDue) });
    }
    if (py.ins && py.ins.wage && py.ins.start) {
      const st = asDay(py.ins.start);
      const en = py.ins.end ? asDay(py.ins.end) : now;
      if (en > st) {
        const m = insMoney(Number(py.ins.wage), st, en);
        rows.push({ k: T.myInsSaved, v: wonFmt(T, m.saved) });
        if (m.gap > 10000) rows.push({ k: T.myInsGap, v: wonFmt(T, m.gap), kind: 'warn' });
      }
    }
    if (py.elig && T.pyElig) {
      const r = eligCompute(T, {
        start: py.elig.start, end: py.elig.end, exit: py.exit || '',
        moved: py.elig.moved, hours: py.elig.hours, nat: py.elig.nat, type: py.elig.type
      });
      if (r.tenureText) rows.push({ p: r.tenureText });
      r.items.forEach((it) => {
        rows.push({ k: it.n, v: verdictText(T, it.kind), kind: it.kind === 'no' ? 'stop' : it.kind });
      });
    }
  } else rows.push(none('payout'));

  return rows;
}

/* 이메일 본문(글자). 서버는 이 글을 HTML 로 바꿀 때 글자를 이스케이프합니다. */
export function myText(T, lang, sum) {
  const lines = [T.myPopTitle];
  myRows(T, lang, sum).forEach((r) => {
    if (r.h) { lines.push(''); lines.push('■ ' + r.h); }
    else if (r.p) lines.push(r.p);
    else lines.push('- ' + r.k + ': ' + r.v);
  });
  lines.push('', T.disclaimer, '', 'E9-Bridge · https://eum-six.vercel.app/?lang=' + lang);
  return lines.join('\n');
}

/* 이메일 주소 모양만 봅니다(실제 주소인지는 메일 서버가 압니다). */
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* 이 기기의 메일 앱을 열어 본문을 채워 둡니다. 실제 전송은 그 앱에서 한 번 더 눌러야 됩니다.
   encodeURIComponent 는 '@'도 %40 으로 바꿔서 일부 메일 앱이 주소를 못 알아봅니다. '@'만 다시 풉니다. */
export function openMailto(addr, subject, body) {
  const url = 'mailto:' + encodeURIComponent(addr).replace(/%40/g, '@') +
    '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  window.location.href = url;
}
