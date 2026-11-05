/* E9-Bridge — 언어 공통 설정 (React 버전)

   예전에는 core.js 가 전역 변수(EUM_LANGS, I18N …)를 만들고 각 페이지가
   document.write 로 언어 파일 하나를 불러왔습니다. 이제는 Vite 가 언어 파일을
   언어별 조각(chunk)으로 나눠 두고, 고른 언어 하나만 동적 import 로 받아 옵니다.
   (i18n/I18nProvider.jsx 참고)

   새 언어를 켜려면: locales/<코드>.js 를 만든 뒤 아래 LANGS 에 코드를 더하세요. */

/* 지금 화면에서 고를 수 있는 언어 */
export const LANGS = ['ko', 'en', 'vi', 'id', 'km', 'ne'];

/* 고용허가제(E-9) 송출국에서 쓰는 말들. 화면에 보일 이름을 그 언어 그대로 적습니다.
   자기 언어를 찾는 사람은 "Khmer" 가 아니라 "ខ្មែរ" 를 찾습니다. */
export const LANG_NAMES = {
  ko: '한국어',
  en: 'English',
  vi: 'Tiếng Việt',       // 베트남
  id: 'Bahasa Indonesia', // 인도네시아
  km: 'ខ្មែរ',             // 캄보디아
  ne: 'नेपाली',            // 네팔
  th: 'ไทย',              // 태국 (초안)
  my: 'မြန်မာ',            // 미얀마 (초안)
  si: 'සිංහල',            // 스리랑카 (초안)
  uz: 'Oʻzbekcha'         // 우즈베키스탄 (초안)
};

/* 검수가 끝나지 않은 언어. 아직 번역되지 않은 문장은 영어로 채우고,
   화면 위에 "초안" 이라고 알려 줍니다. LANGS 에 넣을 때 여기에도 넣으세요. */
export const DRAFT_LANGS = [];

/* 브라우저가 옛 코드나 세 글자 코드를 보내는 경우를 흡수합니다. */
export const LANG_ALIAS = { in: 'id', ind: 'id', vie: 'vi', kor: 'ko', eng: 'en', khm: 'km', nep: 'ne' };

/* ── 공용 상수 ──────────────────────────────────────────────
   언제 확인한 내용인지 한곳에서만 적어 둡니다. 여기만 고치면 모든 언어
   화면에 함께 반영됩니다. */
export const CHECKED_ON = '2026-08-10';
/* 출국 정산 항목은 공식 자료로 따로 확인한 날짜입니다. */
export const PAY_CHECKED = '2026-08-21';
/* 법률 자문 안내 항목을 공식 자료로 확인한 날짜입니다. */
export const LEGAL_CHECKED = '2026-08-13';
export const PAY_SRC = '외국인근로자의 고용 등에 관한 법률 제13조·제15조, 같은 법 시행령 제21조·제22조 · 근로자퇴직급여 보장법 제4조 · 근로기준법 제49조 · 국민연금법 제77조·제126조';
