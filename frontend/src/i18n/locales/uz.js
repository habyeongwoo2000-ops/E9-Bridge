import { CHECKED_ON, PAY_CHECKED, LEGAL_CHECKED, PAY_SRC } from '../core.js';

/* 예전 전역 I18N 객체 모양을 그대로 둡니다. 번역 도구(make-lang)와 사람이 고치던
   방식이 바뀌지 않게 하려는 것입니다. 맨 아래에서 이 언어 묶음 하나만 내보냅니다. */
const I18N = {};

/* E9-Bridge — UI 문자열 (uz · Oʻzbekcha)
   ⚠ 초안입니다. 여기 없는 문장은 core.js 가 영어로 메웁니다.
      전체 번역은 tools/make-lang.mjs 로 채우고, 사람이 검수한 뒤
      core.js 의 EUM_DRAFT_LANGS 에서 이 코드를 빼세요.
   공용 상수(CHECKED_ON 등)는 core.js 에 있습니다. */

I18N.uz = {
  daysUnit: 'kun qoldi',
  daysOver: 'kun oʻtdi',
  dlLeaveDate: 'Ishdan boʻshagan sana (shartnoma tugagan kun)',
  docTitle: 'E9-Bridge — Ish joyini oʻzgartirish',
  brandSub: 'Ish joyini oʻzgartirish boʻyicha qoʻllanma',
  draftNote: 'Bu til hali qoralama. Ayrim gaplar ingliz tilida qoladi.',
  secNo1: 'Muddat',
  secNo2: 'Sabab',
  secNoPay: 'Ketishdan oldingi hisob',
  navFaq: 'Koʻp beriladigan savollar',
  navChatbot: 'Chatbotdan soʻrash',
  navBoard: 'Savollar doskasi',
  navUpdates: 'Soʻnggi oʻzgarishlar',
  secNoLegal: 'Yuridik maslahat',
  navInterview: 'Intervyular',
  heroTitle: 'Ish joyini oʻzgartirish,<br>endi adashmang',
  heroLead: 'Ishdan boʻshagan sanani kiriting — qolgan kunlar koʻrinadi.',
  heroCta: 'Muddatimni hisoblash',
  heroCta2: 'Savol berish',
  homePick: 'Yana nimani bilmoqchisiz?',
  langLabel: 'Til',
  reset: 'Tozalash',
  errNet: 'Xatolik yuz berdi. Qayta urinib koʻring.',
  ofTitle: 'Rasmiy idoralar',
  askSourceLabel: 'Manba',
  askMtReview: 'Tarjima tekshirilishi kerak',
  chips: ['Ariza berish uchun necha kun bor?', '3 oy ichida ish topolmasam nima boʻladi?', 'Necha martagacha almashtirish mumkin?', 'Ish haqim toʻlanmadi', 'Chiqish sugʻurtasi va ishdan boʻshash nafaqasini qanday olaman?', 'Qayerda va qanday ariza beraman? Qanday hujjatlar kerak?', 'Ish beruvchining aybi bilan almashsam, hisobga olinadimi?', 'E-7-4 vizasiga oʻtsam boʻladimi?'],
  disclaimer: 'Bu maʼlumot faqat maʼlumot uchun, yuridik maslahat emas. Yakuniy tasdiqni bandlik markazi yoki 1345 orqali oling.'
};

/* 내 상황 확인 */
Object.assign(I18N.uz, {
  navCheck: "Check my situation",
  wzLead: "Check your deadlines, your reason and your departure payments in order. You can skip any step you do not need.",
  wzStepResult: "Summary",
  wzPrev: "← Back",
  wzNext: "Next step →",
  wzSkip: "Skip this step",
  wzSeeResult: "See summary",
  wzSkipped: "You skipped this step.",
  wzRestart: "Start over",
  wzResultLead: "This summary is made from what you entered. You can go back to a skipped step at any time by tapping its number above.",
  wzLoginHint: "Log in to save this result to your account and receive it by email.",
  wzStart: "Start",
  wzHomeLead: "Check deadlines, the reason self-check and departure payments in order on one page. You can skip any step you do not need.",
  wzDone: "Done",
  wzSkipTag: "Skipped",
  ckQ1Other: "Other (a reason not listed)",
  ckQ1OtherPh: "Briefly describe your situation (optional)",
  ckQ2d: "Not sure",
  ckQ3e: "Not sure",
  pyQtypeD: "Not decided yet",
  resOtherTag: "Get advice",
  resOtherTitle: "The answer depends on your situation",
  resOtherBody: "For a reason not listed here, we cannot tell whether it was the company's fault. Talk to a Job Center or call 1345 first, with what you wrote and any records you have.",
  evUnsure: "If you are not sure you have records, start by collecting your contract, pay slips, bank deposit records and text messages.",
  countUnsure: "You can check how many times you have changed workplaces at a Job Center or on the EPS website (eps.go.kr).",
  ckOtherNote: "What you wrote"
});

export default I18N.uz;
