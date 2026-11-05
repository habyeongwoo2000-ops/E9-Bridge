# E9-Bridge — EPS 외국인근로자 사업장 변경 안내

고용허가제(E-9)로 한국에 온 외국인근로자가 **사업장 변경 기한·사유·출국 전 받을 돈·지역 지원 정책**을
6개 언어(한국어·영어·베트남어·인도네시아어·크메르어·네팔어)로 확인하는 서비스입니다.

- 사이트: https://eum-six.vercel.app/
- 대회 주제: 01-02 지역 주민 맞춤형 공공지원사업 추천 서비스

---

## 0. 2026-11-04 구조 변경 (먼저 읽어 주세요)

멘토링 의견("해커톤에서는 프론트엔드와 백엔드를 나눠 프레임워크로 만들면 좋다")에 따라
정적 HTML 사이트를 **React 프론트엔드 + Express 백엔드**로 나눴습니다. 화면 모양과 기능은 그대로입니다.

| 구분 | 예전 | 지금 |
|---|---|---|
| 화면 | HTML 15개 + `assets/app.js` 3,200줄 | **React 18 + Vite** (`frontend/`) — 화면별 컴포넌트, 라우터, 언어별 코드 분할 |
| 서버 | `api/*.js` 서버리스 함수 11개 | **Express 5** (`backend/`) — routes / controllers / services / middleware |
| 배포 | 정적 파일 + 함수 11개 | Vercel: `frontend/dist` + 함수 **1개**(`api/index.js`) → 무료 요금제 함수 12개 제한에서 벗어남 |
| 주소 | `/check.html` | `/check` (예전 주소는 자동으로 새 주소로 넘어감) |

함께 바뀐 것
- 챗봇 화면과 최신 제도의 "이 공지에 대해 질문하기" 버튼을 **숨겼습니다**(멘토 의견). 코드는 남아 있고
  `frontend/src/config/features.js` 의 값을 `true` 로 바꾸면 다시 켜집니다.
- 첫 화면에 **"우리가 풀려는 문제"**(통계 4개 + 문제→해결 연결)와 **"언론이 본 E-9 노동 현실"**(신문 지면 모양, 실제 기사 6건) 섹션을 넣었습니다.
- 법률 자문에 **고용노동부(1350 · moel.go.kr · 노동포털 labor.moel.go.kr)** 를 넣었습니다.
- 크메르어·네팔어에 빠져 있던 문장(최신 제도 지역 필터, FAQ 분류 등)을 채웠습니다.
- 백엔드에 요청 제한(429), 보안 헤더, 오류 처리, `/api/health` 를 더했습니다.

---

## 1. 폴더 구조

```
/
├─ frontend/                 화면 (React + Vite)
│  ├─ index.html             <head> 메타(OG·검색 인증) + <div id="root">
│  ├─ public/                그대로 복사되는 파일 (사진·아이콘·sw.js·manifest·robots·sitemap·offline.html)
│  ├─ scripts/               check-lang.mjs (언어 검사) · make-lang.mjs (기계 번역 초안)
│  └─ src/
│     ├─ main.jsx            진입점: 언어 → 로그인 → 내 정보 요약 → 라우터
│     ├─ App.jsx             화면 주소 목록 (React.lazy 로 화면별 코드 분할, 예전 .html 주소 처리)
│     ├─ config/features.js  기능 켜고 끄기 (챗봇 등)
│     ├─ i18n/               core.js (언어 목록·확인일) · I18nProvider.jsx · locales/<언어>.js
│     ├─ data/               notices.js (최신 제도 179건) · interviews.js · kb.js (FAQ·지식베이스)
│     ├─ lib/                rules.js (규칙 엔진: 기한·사유·정산 판정) · dates.js · summary.js · api.js · storage.js
│     ├─ context/            AuthContext (로그인) · SummaryContext (내 정보 요약)
│     ├─ components/         Layout · Header · Footer · SubVisual · Pager · BoardRow … / home/ · check/ · auth/
│     ├─ pages/              Home · Check · Notices · Legal · Faq · Board · Interviews · Login · Signup · Account · Privacy · Ask · Admin
│     └─ styles/             style.css (디자인 시스템) · pages/*.css
├─ backend/                  서버 (Express) — 자세한 내용은 backend/README.md
│  └─ src/  app.js · server.js · routes/ · controllers/ · services/ · middleware/
├─ api/index.js              Vercel 진입점 (backend 앱을 함수 1개로 실행)
├─ docs/                     SQL · 기획(PRD·BM) · 제도 점검 기록 · legacy-README.md(예전 설명서)
├─ vercel.json               빌드 명령 · 주소 넘기기(redirects) · /api 연결(rewrites)
└─ package.json              npm workspaces (frontend + backend)
```

요청 흐름
```
브라우저 ──(화면 주소 /check 등)──▶ frontend/dist/index.html ─▶ React 라우터가 화면을 그림
        ──(/api/*)───────────────▶ api/index.js ─▶ Express 라우터 ─▶ 컨트롤러 ─▶ 서비스(Supabase · Gemini · 메일)
```

설계 원칙 (PRD 1.3): **AI 는 읽고 정리만, 판정과 금액 계산은 규칙 엔진(`frontend/src/lib/rules.js`)** 이 합니다.

---

## 2. 내 컴퓨터에서 켜기

Node.js 20 이상이 필요합니다.

```bash
npm install          # 맨 위 폴더에서 한 번 (frontend·backend 함께 설치)
npm run dev:api      # 백엔드  → http://localhost:4000/api/health
npm run dev:web      # 화면    → http://localhost:5173  (/api 는 4000번으로 넘겨 줌)
npm run build        # 배포용 빌드 → frontend/dist
```

환경변수는 `backend/.env` 에 적습니다(목록은 backend/README.md). **.env 는 깃허브에 올리지 마세요.**

---

## 3. 배포 (Vercel)

깃허브 `main` 에 올리면 Vercel 이 알아서 배포합니다. 설정은 `vercel.json` 에 다 들어 있어서
Vercel 화면에서 따로 바꿀 것은 없습니다. (Framework Preset 이 다른 것으로 잡혀 있으면 **Other** 로 두세요.)

- 설치: `npm install` → 빌드: `npm run build` → 올리는 폴더: `frontend/dist`
- `/api/*` → `api/index.js` (Express)
- 그 밖의 주소 → `index.html` (React 라우터)
- `/check.html` 같은 예전 주소 → 새 주소로 영구 이동(308)

환경변수(Supabase·Gemini·SMTP·구글/카카오 키)는 이름이 그대로라 **다시 넣을 필요가 없습니다.**
구글·카카오 콘솔에 등록한 콜백 주소(`/api/oauth/google`, `/api/oauth/kakao`)도 그대로입니다.

---

## 4. 팀원이 자주 고치는 곳

| 고칠 것 | 파일 |
|---|---|
| 화면 문장(모든 언어) | `frontend/src/i18n/locales/<언어>.js` → 고친 뒤 `node frontend/scripts/check-lang.mjs` |
| 최신 제도(전국·지자체) | `frontend/src/data/notices.js` (예전 `assets/data.js` 의 NOTICES 부분. 쓰는 규칙은 파일 맨 위 주석) |
| 인터뷰 | `frontend/src/data/interviews.js` (사진은 `frontend/public/assets/`) |
| FAQ·지식베이스 | `frontend/src/data/kb.js` + 언어 파일의 `faqQ_*` / `faqA_*` |
| 확인일(CHECKED_ON 등) | `frontend/src/i18n/core.js` |
| 기한·판정 규칙 | `frontend/src/lib/rules.js` (근거 조항이 주석에 있음) |
| 기능 숨기기/켜기 | `frontend/src/config/features.js` |
| 색·글꼴·간격 | `frontend/src/styles/style.css` 맨 위 `:root` |
| 서버 API | `backend/src/routes` → `controllers` → `services` |

> **제도 자동 점검을 돌리는 팀원께:** 고칠 파일이 `assets/data.js` → `frontend/src/data/notices.js` 로 바뀌었습니다.
> 항목 모양(key, tagKey, region, source, url, date, checked, until, ko/en/…)은 그대로입니다.
> 점검 프롬프트(또는 스크립트)의 경로만 바꿔 주세요. 서비스 워커 VERSION 을 올릴 필요는 없습니다(빌드 파일 이름이 바뀌므로).

---

## 5. 언어

- 켜 둔 언어: `frontend/src/i18n/core.js` 의 `LANGS` — 고른 언어 파일 하나만 내려받습니다(언어별 코드 분할).
- 태국어·미얀마어·싱할라어·우즈베크어 파일은 들어 있지만 아직 켜지 않았습니다(`check-lang` 에서 진행률만 보임).
- 링크로 언어 지정: `https://eum-six.vercel.app/check?lang=vi`

---

## 6. 개인정보 원칙 (바뀌지 않음)

본명·여권번호·외국인등록번호·전화번호·이메일(소셜 로그인 포함)을 받지 않습니다.
로그인하지 않으면 입력한 날짜는 기기 안에만 남습니다. 서류 사진은 읽는 동안만 쓰고 저장하지 않습니다.
자세한 내용은 화면의 개인정보처리방침(`/privacy`)과 `docs/legacy-README.md` 를 보세요.
