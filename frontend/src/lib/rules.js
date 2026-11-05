/* 규칙 엔진 — 기한·사유·출국 정산 판정
   ------------------------------------------------------------------
   설계 원칙 (PRD 1.3): AI 는 읽고 정리만 하고, 판정과 금액 계산은
   이 파일의 결정론적 규칙이 합니다. 같은 입력이면 언제나 같은 결과가 나오고,
   각 판정마다 근거 조항을 주석으로 남겨 둡니다.

   화면(React 컴포넌트)과 분리해 두었으므로, 첫 화면 "내 정보 한눈에"와
   "내 상황 확인" 결과가 같은 함수로 같은 값을 냅니다.
   T 는 지금 고른 언어의 문자열 묶음입니다(문장만 고르고 판정에는 쓰지 않습니다).
   ------------------------------------------------------------------ */

import { addMonths, asDay, diffDays, today } from './dates.js';

/* ---------- 기한 계산 ----------
   근로계약 종료일 + 1개월 = 사업장 변경 신청 마감
   신청일(없으면 신청 마감일) + 3개월 = 새 직장 구하기 마감
   근거: 외국인근로자의 고용 등에 관한 법률 제25조 제3항 */
export function deadlineCompute(leaveV, applyV) {
  if (!leaveV) return null;
  const leave = asDay(leaveV);
  const now = today();
  if (leave > now) return { bad: true };
  const applyDue = addMonths(leave, 1);
  const applied = applyV ? asDay(applyV) : null;
  const jobDue = addMonths(applied || applyDue, 3);
  const applyDays = diffDays(applyDue, now);
  const jobDays = diffDays(jobDue, now);
  const span = diffDays(jobDue, leave) || 1;
  const pos = Math.max(0, Math.min(100, (diffDays(now, leave) / span) * 100));
  return { leave, applyDue, applied, jobDue, applyDays, jobDays, pos };
}

/* 남은 날 수 → 카드 색 (ok / warn / stop) */
export function dayKind(days) {
  if (days <= 0) return 'stop';
  return days <= 7 ? 'warn' : 'ok';
}

/* 기한 안내 문장 */
export function deadlineMessage(T, r, hasApply) {
  const lines = [];
  let kind = '';
  if (r.applyDays < 0) { kind = 'is-stop'; lines.push(T.msgOver); }
  else if (r.applyDays <= 7) { kind = 'is-warn'; lines.push(T.msgWarn); }
  else lines.push(T.msgOk);
  if (r.jobDays < 0) lines.push(T.msgJobOver);
  else if (r.jobDays <= 14) lines.push(T.msgJobWarn);
  if (!hasApply) lines.push(T.msgEstimate);
  return { kind, text: lines.join(' ') };
}

/* ---------- 사유 자가진단 ----------
   세 답(q1·q2·q3)만으로 판정합니다.
   근거: 외국인근로자의 고용 등에 관한 법률 제25조 (근로자 책임이 아닌 사유는 변경 횟수에서 제외) */
export function quizCompute(T, qq) {
  const { q1, q2, q3 } = qq;
  const employerFault = q1 !== 'own' && q1 !== 'other';
  const overLimit = q3 === '3';

  let kind; let tag; let title; let body;
  if (overLimit) {
    kind = 'stop'; tag = T.resCountTag; title = T.resCountTitle; body = T.resCountBody;
  } else if (q1 === 'other') {
    // 보기에 없는 이유는 사업주 잘못인지 여기서 가를 수 없습니다. 상담을 먼저 권합니다.
    kind = 'warn'; tag = T.resOtherTag; title = T.resOtherTitle; body = T.resOtherBody;
  } else if (employerFault) {
    kind = null; tag = T.resEmpTag; title = T.resEmpTitle; body = T.resEmpBody;
  } else {
    kind = 'warn'; tag = T.resOwnTag; title = T.resOwnTitle; body = T.resOwnBody;
  }
  const ev = q2 === 'yes' ? T.evYes : (q2 === 'some' ? T.evSome : (q2 === 'unsure' ? T.evUnsure : T.evNo));
  const count = q3 === 'unsure' ? T.countUnsure : String(T.countLine || '').replace('{n}', q3 === '3' ? '3+' : q3);
  return { kind, tag, title, body, ev, count };
}

/* ---------- 출국 정산: 신고·청구 기한 ----------
   출국예정신고: 출국 예정일 1개월 전 / 보험금 지급 신청: 출국 예정일 7일 전 */
export function payoutCompute(exitV) {
  if (!exitV) return null;
  const exit = asDay(exitV);
  const now = today();
  const reportDue = addMonths(exit, -1);
  const claimDue = new Date(exit.getFullYear(), exit.getMonth(), exit.getDate() - 7);
  return { exit, reportDue, claimDue, reportDays: diffDays(reportDue, now), claimDays: diffDays(claimDue, now) };
}

export function payoutMessage(T, r) {
  if (r.claimDays < 0) return { kind: 'is-stop', text: T.pyMsgOver };
  if (r.claimDays <= 7 || r.reportDays < 0) return { kind: 'is-warn', text: T.pyMsgWarn };
  return { kind: '', text: T.pyMsgOk };
}

/* ---------- 출국만기보험 어림 계산 ----------
   회사는 근로계약 효력 발생일부터 15일 안에 출국만기보험에 들어야 하고,
   매달 통상임금의 8.3%(1/12)를 냅니다. 한 사업장에서 1년 이상 일한 뒤
   출국하거나 체류자격이 바뀌면 본인이 청구할 수 있습니다.
   법정 퇴직금(계속근로 1년에 30일분 평균임금)보다 보험금이 적으면
   그 차액은 회사가 따로 줘야 합니다. 그래서 두 값을 나란히 보여 줍니다.
   여기 나오는 값은 어림값입니다(화면에도 크게 적어 둡니다). */
export const INS_RATE = 1 / 12;     // 통상임금의 8.3%
export const INS_MIN_DAYS = 365;    // 1년 이상

export function wonFmt(T, n) {
  const v = Math.round(n);
  const unit = (T && T.wonUnit) || '원';
  try { return v.toLocaleString('ko-KR') + unit; } catch (e) { return String(v) + unit; }
}

/* 쌓인 보험료 ≈ 월 통상임금 × 8.3% × 일한 달 수
   법정 퇴직금 ≈ 30일분 임금 × (재직일수 / 365) */
export function insMoney(wage, start, end) {
  const days = diffDays(end, start);
  const saved = wage * INS_RATE * (days / 30.4375);
  const legal = wage * (days / 365);
  return { days, saved, legal, gap: legal - saved };
}

/* 계속근로기간을 달 수로 셉니다. 「근로자퇴직급여 보장법」의 1년은 달을 기준으로 봅니다.
   예) 2025-03-10 입사 → 2026-03-09 는 11개월(1년 미만), 03-10 은 12개월(1년 이상). */
export function monthsWorked(from, to) {
  let m = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  if (to.getDate() < from.getDate()) m -= 1;
  return m;
}

/* ---------- 출국 정산 적격 판정 ----------
   inp: { start, end, exit, moved, hours, nat, type }  날짜는 'YYYY-MM-DD' 또는 ''
   돌려주는 값: { bad:true, … } 또는 { tenureCls, tenureText, items:[{n, kind, body, w}] } */
export function eligCompute(T, inp) {
  const E = T.pyElig;
  const startV = inp.start || ''; const endV = inp.end || ''; const exitV = inp.exit || '';
  const moved = inp.moved || ''; const hours = inp.hours || ''; const nat = inp.nat || ''; const type = inp.type || '';
  let months = null;

  if (startV) {
    const start = asDay(startV);
    /* 마지막 근무일이 비어 있으면 출국 예정일까지, 그것도 없으면 오늘까지 셉니다. */
    const end = endV ? asDay(endV) : (exitV ? asDay(exitV) : today());
    if (end < start) return { bad: true, tenureCls: 'callout is-stop', tenureText: E.badDates, items: [] };
    months = monthsWorked(start, end);
  }

  const over1y = months !== null && months >= 12;
  const nearly = months !== null && months >= 10 && months < 12;
  const out = { items: [] };

  if (months === null) {
    out.tenureCls = 'callout is-warn';
    out.tenureText = E.needHire;
  } else {
    const y = Math.floor(months / 12); const mm = months % 12;
    const line = y > 0 ? E.tenureYM.replace('{y}', y).replace('{m}', mm) : E.tenureM.replace('{m}', months);
    out.tenureCls = 'callout' + (over1y ? '' : (nearly ? ' is-warn' : ' is-stop'));
    out.tenureText = line + ' ' + (over1y ? E.tenureOver : (nearly ? E.tenureNear : E.tenureUnder));
  }

  const I = E.items;
  const add = (it, kind, body) => out.items.push({ n: it.n, kind, body, w: it.w });

  /* 1) 출국만기보험금 — 한 사업장에서 계속 1년 이상이어야 근로자에게 갑니다.
        1년 미만이면 그 사업장 몫은 사업주에게 귀속됩니다 (외국인고용법 시행령 제21조 제2항 제2호 단서). */
  let matKind; let matBody;
  if (over1y) { matKind = 'ok'; matBody = I.mat.ok; }
  else if (moved === 'prevOver') { matKind = 'warn'; matBody = I.mat.prevOver; }
  else if (moved === 'unsure' || months === null) { matKind = 'warn'; matBody = I.mat.unsure; }
  else { matKind = 'no'; matBody = I.mat.no; }
  if (matKind === 'ok' && type !== 'unsure') {
    matBody += ' ' + (type === 'change' ? I.mat.typeChange : (type === 'reentry' ? I.mat.typeReentry : I.mat.typeLeave));
  }
  add(I.mat, matKind, matBody);

  /* 2) 퇴직금 차액 — 계속근로 1년 이상 + 4주 평균 1주 15시간 이상 (근로자퇴직급여 보장법 제4조 제1항). */
  let sevKind; let sevBody;
  if (over1y && hours === 'yes') { sevKind = 'ok'; sevBody = I.sev.ok; }
  else if (over1y && hours === 'unsure') { sevKind = 'warn'; sevBody = I.sev.hoursUnsure; }
  else if (over1y && hours === 'no') { sevKind = 'no'; sevBody = I.sev.hoursNo; }
  else if (moved === 'prevOver' || moved === 'unsure') { sevKind = 'warn'; sevBody = I.sev.prevOver; }
  else if (months === null) { sevKind = 'warn'; sevBody = I.sev.noDate; } // 입사일을 모르면 '대상 아님'으로 단정하지 않습니다
  else { sevKind = 'no'; sevBody = I.sev.no; }
  add(I.sev, sevKind, sevBody);

  /* 3) 귀국비용보험 — 근로자가 낸 돈이라 근속기간과 무관하게 돌려받습니다 (시행령 제22조). */
  const amt = nat === 'g3' ? E.amt3 : (nat === 'g2' ? E.amt2 : E.amt1);
  add(I.ret, 'ok', I.ret.ok.replace('{amt}', amt));

  /* 4) 국민연금 반환일시금 — E-9 체류자격은 상호주의와 무관하게 대상입니다. */
  add(I.pen, 'ok', I.pen.ok);

  /* 5) 못 받은 임금·수당 — 출국 뒤에도 3년 안에 청구할 수 있습니다 (근로기준법 제49조). */
  add(I.wage, 'warn', I.wage.ok);
  return out;
}

/* 판정 종류 → 표시 글자 */
export function verdictText(T, kind) {
  const E = T.pyElig;
  return kind === 'ok' ? E.vOk : (kind === 'warn' ? E.vWarn : E.vNo);
}
