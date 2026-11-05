/* 날짜 계산 — 기한·출국 정산·요약이 모두 이 함수들을 씁니다.
   모든 계산은 "그날 자정" 기준입니다. 시각 때문에 하루가 밀리지 않게 합니다. */

export function addMonths(d, n) {
  const t = new Date(d.getFullYear(), d.getMonth() + n, 1);
  const last = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
  t.setDate(Math.min(d.getDate(), last));
  return t;
}
export function midnight(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
export function today() { return midnight(new Date()); }
export function diffDays(a, b) { return Math.round((midnight(a) - midnight(b)) / 86400000); }
export function fmt(d) {
  const m = ('0' + (d.getMonth() + 1)).slice(-2);
  const day = ('0' + d.getDate()).slice(-2);
  return d.getFullYear() + '-' + m + '-' + day;
}
/* 'YYYY-MM-DD' → 그날 자정 */
export function asDay(v) { return midnight(new Date(v + 'T00:00:00')); }

/* 화면에 보여 줄 마감일. 숫자는 ISO 그대로 둡니다 — 근로자가 대조할 고용센터
   서류와 EPS 누리집이 같은 표기를 쓰기 때문입니다. 요일만 사용자 언어로 붙입니다.
   고용센터는 주말에 닫으므로 마감일이 무슨 요일인지가 실제 행동을 바꿉니다. */
const weekdayFmt = {};

export function weekdayOf(d, lang, T) {
  /* 브라우저에 따라 크메르어·네팔어 요일 이름이 없어서 영어로 나옵니다.
     그 언어를 모르는 브라우저면 언어 파일의 weekdays 를 씁니다. */
  let known = true;
  try { known = !Intl.DateTimeFormat.supportedLocalesOf || Intl.DateTimeFormat.supportedLocalesOf([lang]).length > 0; }
  catch (e) { known = false; }
  if (!known && T && T.weekdays && T.weekdays.length === 7) return T.weekdays[d.getDay()];
  if (!(lang in weekdayFmt)) {
    /* 태국어는 기본 달력이 불교력이라 2026년이 2569년으로 나옵니다. 그레고리력을 못박습니다. */
    const loc = lang === 'th' ? 'th-TH-u-ca-gregory' : lang;
    try { weekdayFmt[lang] = new Intl.DateTimeFormat(loc, { weekday: 'long' }); }
    catch (e) { weekdayFmt[lang] = null; }
  }
  if (!weekdayFmt[lang]) return '';
  try { return weekdayFmt[lang].format(d); } catch (e) { return ''; }
}

export function fmtDay(d, lang, T) {
  const w = weekdayOf(d, lang, T);
  return w ? fmt(d) + ' (' + w + ')' : fmt(d);
}
