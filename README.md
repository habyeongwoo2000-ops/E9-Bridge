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

## 0-1. 맞춤 지원 찾기 (`/recommend`, 2026-11-08 추가)

대회 주제 **"지역 주민 맞춤형 공공지원사업 추천"** 에 맞춘 화면입니다. 메뉴 "맞춤 지원", 첫 화면 "나에게 맞는 지원"에서 들어갑니다.

| 기능 | 하는 일 | 파일 |
|---|---|---|
| ① 맞춤 추천 | 시·도·시군구·업종·체류 기간·상황·관심 분야 → 최신 제도 179건 중 지금 시행 중인 신청형 사업에 점수(시행 전·추진 중인 제도는 빼고, 시행일이 지나면 저절로 들어감) | `frontend/src/lib/reco.js` |
| ② 추천 근거 | 카드마다 ✓ 맞음 · ! 확인 필요 · ✕ 안 맞음 (규칙 엔진, AI 아님) | `components/reco/ProgramCard.jsx` |
| ③ 알림 | 마감 14일 전 · 지난 방문 뒤 새로 생긴 사업 · 신청 진행 중, 브라우저 알림(하루 1번) | `pages/Recommend.jsx`, `components/reco/useRecoProfile.js` |
| ④ 신청 체크리스트 | 전화 → 서류 → 방문 → 기록 + 가져갈 서류, 진행 상황(관심/신청함/받음) | `components/reco/ProgramCard.jsx` |
| ⑤ 정부24 실시간 | 공공데이터포털 정부24 공공서비스 API → 외국인 대상만, 6시간 캐시 | `backend/src/services/gov24.js`, `GET /api/benefits?sido=` |
| ⑥ 지역 지도 | 시·군·구 전체 목록(`data/sigungu.js`) + 시·도마다 내 조건에 맞는 사업 수로 색칠, 누르면 그 지역, 내 위치로 찾기 | `components/reco/KoreaMap.jsx` |

- 추천 데이터는 `frontend/src/data/notices.js` 를 그대로 읽습니다. **새 지자체 사업을 notices.js 에 넣으면 추천에도 자동으로 나옵니다.**
  분야(상담·한국어·의료…)·시군구·전화번호는 한국어 제목/내용에서 읽어 냅니다. 잘못 읽으면 `lib/reco.js` 위쪽 표(NATIONAL, CITY_EXTRA)를 고치세요.
- 조건은 이 기기에 저장되고, 로그인하면 계정(내 정보 요약의 `reco` 칸)에도 저장됩니다. "내 상황 확인"을 해 둔 사람은 상황이 미리 골라집니다.
- ⑤를 켜려면 공공데이터포털에서 **"행정안전부_대한민국 공공서비스 정보"** 활용 신청 → 일반 인증키(Decoding)를 Vercel 환경변수 `GOV24_API_KEY` 에 넣고 다시 배포하세요. 키가 없으면 그 칸만 "준비 중"으로 보입니다. `/api/health` 의 `configured.gov24` 로 확인할 수 있습니다.
- 지도 모양: `@svg-maps/south-korea` (CC BY 4.0, 화면에 출처 표시).

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

## 생활 정보 · 귀국 및 정착 데모

웹에서 `npm run dev:web`을 실행하고 `/nearby` 또는 `/guide`를 엽니다. 공통 메뉴에서도 접근할 수 있습니다.

- 주변 검색은 안산의 예시 좌표를 사용합니다. 현재 위치 검색은 직선거리와 반경을 적용하고, 지역 직접 선택은 지정 지역의 장소를 표시합니다. 현재 위치는 검색 화면에서만 사용합니다.
- 예시 레코드에는 실제 업체명과 전화번호가 없습니다. 지도 링크는 예시 지점을 열며, 전화 버튼은 데모를 끄고 확인된 연락처를 등록한 장소에서 표시됩니다.
- 귀국·정착 체크 항목은 기기 내에 저장됩니다. 정산은 기존 `/check#payout`, 지역 지원은 `/notices`로 연결됩니다. 신규 화면의 한국어·영어·베트남어 문구를 제공하고 다른 언어에서는 영어를 사용합니다.

운영 전에는 아래 순서로 준비합니다.

1. **지역과 카테고리 선택** — `frontend/src/config/nearby.js`에서 지역, 활성 카테고리, 검색 반경, 최대 결과 수를 조정합니다.
2. **장소 확인 및 교체** — `frontend/src/data/places.js`의 예시 레코드를 모두 교체하고 장소명(`name`), 지역, 좌표, 주소, 연락처(`phone`), 확인일(`checked`)을 확인한 뒤 데모 표시를 끕니다.
3. **검색 공급자 결정** — 데모는 브라우저와 앱에 포함된 장소 목록을 검색합니다. 외부 지도 표시 또는 자동 장소 검색이 필요한 경우 공급자를 확정하고, 비밀 키가 필요한 조회는 서버에서 연결합니다. 현재 외부 지도 연결은 네이버 지도 검색 링크입니다.
4. **귀국·정착 콘텐츠 확인** — `frontend/src/data/lifeGuide.js`의 안내 단계와 공식 출처를 검토하고 확인일을 기록합니다. 문구는 `frontend/src/i18n/life.js`에서 관리합니다.
5. **Android 실기기 검증** — 아래 절차로 디버그 앱을 빌드하고 위치 권한과 외부 지도 링크를 확인합니다. 앱에서 기존 웹 로그인과 서버 기능을 제공하려면 배포 API 및 인증 복귀 흐름을 별도로 연결하고 검증합니다.

### Android 데모 빌드

프로젝트 루트에서 웹을 빌드한 뒤 Android 프로젝트를 동기화합니다. APK 빌드에는 Android SDK와 프로젝트 Gradle 요구사항에 맞는 JDK가 필요합니다.

```powershell
npm install
npm run build
Set-Location frontend
npx cap sync android
npx cap open android
```

Android Studio에서 실행하거나 `frontend/android`에서 `.\gradlew.bat assembleDebug`를 실행합니다. 위치 허용·거부, 지역 직접 선택, 외부 지도 열기, 체크리스트 유지 여부를 실기기에서 확인합니다.

Android MVP는 전용 홈에서 근로·체류, 내 주변, 귀국·정착을 엽니다. Windows에서 이번 빌드에 사용한 JDK 21과 Android SDK는 `%LOCALAPPDATA%\E9Bridge-Android`에 있습니다. 새 PowerShell 창에서 아래처럼 현재 세션의 도구 경로를 지정한 뒤 빌드합니다.

```powershell
$androidTools = Join-Path $env:LOCALAPPDATA 'E9Bridge-Android'
$env:JAVA_HOME = (Get-ChildItem $androidTools -Directory -Filter 'jdk-21*' | Select-Object -First 1).FullName
$env:ANDROID_HOME = Join-Path $androidTools 'sdk'
npm run build
npm exec --workspace frontend -- cap sync android
Set-Location frontend/android
.\gradlew.bat assembleDebug
& "$env:ANDROID_HOME/platform-tools/adb.exe" devices
```

APK는 `frontend/android/app/build/outputs/apk/debug/app-debug.apk`에 생성됩니다.

### Codex CLI로 작업 이어가기

[작업 인계 문서](docs/codex-handoff.md)에 검증 상태와 CLI가 실행할 현재 단계를 기록합니다. 프로젝트 루트에서 ChatGPT에 로그인된 Codex CLI로 실행합니다.

```powershell
# 별도 설치본이 없는 Windows 환경에서 최초 1회 실행
npm install --prefix "$env:LOCALAPPDATA/E9Bridge-Codex" @openai/codex@0.167.0
```

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/Invoke-E9Codex.ps1
```

CLI가 JSON 이벤트로 사용 한도 오류를 보고하고 세션 ID를 저장한 경우, 실행 중인 스크립트는 기본 1시간 간격으로 같은 세션을 최대 6회 재시도합니다. 완료 또는 다른 오류에는 종료합니다. 중단 후 이어갈 때는 `.codex-run/session-id.txt`의 ID를 `-SessionId`로 지정합니다. 실행 로그는 `.codex-run`에 저장됩니다.
