# E9-Bridge 백엔드 (Express)

화면(frontend, React)과 분리된 REST API 서버입니다.
예전에는 `api/` 폴더에 서버리스 함수 11개가 따로 있었는데, 지금은 **Express 앱 하나**로 모았습니다.
Vercel 에서는 `api/index.js` 함수 **1개**로 돌기 때문에 무료(Hobby) 요금제의 함수 12개 제한에 걸리지 않습니다.

## 구조

```
backend/
├─ package.json
└─ src/
   ├─ app.js            Express 앱 (미들웨어 → /api 라우터 → 404 → 오류 처리)
   ├─ server.js         내 컴퓨터에서 켜기 (localhost:4000)
   ├─ routes/           주소·메서드 → 컨트롤러 연결, 요청 제한
   │  ├─ index.js       /api 아래 전체 목록
   │  ├─ auth.js  account.js  admin.js  posts.js  qna.js  qnaPublish.js
   │  ├─ ask.js  readDoc.js  oauth.js  health.js
   ├─ controllers/      요청 검사 + 응답 만들기 (예전 api/*.js 본문)
   ├─ services/         공용 기능
   │  ├─ db.js          Supabase REST 호출
   │  ├─ auth.js        비밀번호 해시(scrypt) · 세션 쿠키 서명
   │  ├─ oauth.js       구글·카카오 로그인 (PKCE + state)
   │  ├─ gemini.js      Gemini 호출 (키 여러 개 순환, 모델 대체)
   │  ├─ kb.js          AI 답변 근거(지식베이스)
   │  ├─ qna.js         게시글 번역(등록·게시 때 1번만)
   │  ├─ mail.js        내 정보 요약 이메일 (Gmail SMTP / Resend)
   │  └─ gov24.js       정부24 공공서비스 API (외국인 대상만 걸러 6시간 캐시)
   └─ middleware/
      ├─ securityHeaders.js   보안 헤더
      ├─ requestLogger.js     요청 기록 (쿼리·본문은 남기지 않음)
      ├─ rateLimit.js         IP 기준 요청 제한 → 429
      ├─ notFound.js          없는 주소 → 404 JSON
      └─ errorHandler.js      마지막 오류 처리 → 500 JSON

api/index.js            Vercel 진입점: module.exports = require('../backend/src/app')
```

요청 흐름: `브라우저 → /api/* → (vercel.json rewrites) → api/index.js → Express 라우터 → 컨트롤러 → 서비스(Supabase·Gemini·메일)`

## 내 컴퓨터에서 켜기

```bash
# 저장소 맨 위 폴더에서 (frontend·backend 를 한 번에 설치합니다)
npm install

# 백엔드만 켜기 → http://localhost:4000/api/health
npm run dev:api
```

환경변수는 `backend/.env` 파일에 적으면 자동으로 읽습니다(Node 20.12 이상). **.env 는 절대 깃허브에 올리지 마세요.**

## API 목록

| 메서드 | 주소 | 하는 일 | 로그인 |
|---|---|---|---|
| GET | `/api/health` | 서버 상태 + 어떤 기능이 설정됐는지(참/거짓) | - |
| GET | `/api/auth` | 로그인 상태, 켜진 소셜 로그인 목록 | - |
| POST | `/api/auth` | `action`: signup · login · logout · lang | - |
| GET | `/api/account` | 내 정보 (`?part=summary` → 내 정보 요약) | 필요 |
| POST | `/api/account` | `action`: nickname · password · profile · summarySave · summaryClear · summaryMail | 필요 |
| POST | `/api/admin` | 관리자 지정/해제 (`ADMIN_SETUP_KEY`) | 키 |
| GET | `/api/posts` | 게시판 목록 (`?page` `?lang` `?q` `?mine=1` `?pub=1`) | - |
| POST | `/api/posts` | 글쓰기 / 관리자 답변(`action:'answer'`) | 필요 |
| GET | `/api/qna` | 공개된 묻고 답하기 (`?lang`) | - |
| POST | `/api/qna` | 질문 접수 | - |
| POST | `/api/qna-publish` | 답변 번역·공개 (`x-admin-token` 헤더) | 토큰 |
| POST | `/api/ask` | AI 질문 (화면에서는 지금 숨김) | - |
| POST | `/api/read-doc` | 서류 사진에서 사실 뽑기 (Gemini 비전) | - |
| GET | `/api/oauth/start?p=google\|kakao&ret=board` | 소셜 로그인 시작 | - |
| GET | `/api/oauth/google`, `/api/oauth/kakao` | 제공자 콜백 (콘솔에 등록한 주소 그대로) | - |

오류는 `{ ok:false, error:'<i18n 키>' }` 로 돌려줍니다. 화면이 고른 언어로 안내문을 보여 줍니다.

### 요청 제한 (IP 기준, 1분)

ask 20 · read-doc 8 · auth(POST) 20 · account(POST) 30 · posts(POST) 10 · qna(POST) 6 · admin·qna-publish 10
넘으면 `429 { ok:false, error:'rateLimit' }` + `Retry-After` 헤더. 서버리스 인스턴스별 메모리라 대략적인 제한입니다.

## 환경변수 (Vercel → Settings → Environment Variables)

| 이름 | 필수 | 설명 |
|---|---|---|
| `SUPABASE_URL` | ✔ | 예) https://abcd.supabase.co |
| `SUPABASE_SERVICE_ROLE_KEY` | ✔ | service_role 키. 절대 공개 금지 |
| `SESSION_SECRET` | ✔ | 로그인 쿠키 서명용, 16자 이상 무작위 |
| `GEMINI_API_KEY` | AI 기능 | `GEMINI_API_KEY_2` … `_10`, `GEMINI_API_KEYS`(쉼표) 로 여러 개 가능 |
| `GEMINI_MODEL`, `GEMINI_MODELS` | 선택 | 모델 이름 / 대체 순서 |
| `GEMINI_CALL_MS`, `GEMINI_TOTAL_MS` | 선택 | 호출 시간 제한(기본 12000 / 40000ms) |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | 메일 | Gmail: smtp.gmail.com / 465 / 주소 / 앱 비밀번호 |
| `GOV24_API_KEY` | 맞춤 지원 실시간 | 공공데이터포털 "행정안전부_대한민국 공공서비스 정보" 일반 인증키(Decoding). 없으면 정부24 실시간 칸만 꺼짐 |
| `MAIL_FROM` | 선택 | 보낸 사람 표시 |
| `RESEND_API_KEY` | 선택 | SMTP 대신 Resend (도메인 인증 필요) |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | 소셜 | 없으면 구글 버튼이 숨습니다 |
| `KAKAO_CLIENT_ID`, `KAKAO_CLIENT_SECRET` | 소셜 | secret 은 선택 |
| `PUBLIC_BASE_URL` | 소셜 | 예) https://eum-six.vercel.app — 콘솔에 등록한 주소와 같아야 함 |
| `ADMIN_SETUP_KEY` | 관리자 | `/api/admin` 보호 키 (12자 이상) |
| `ADMIN_TOKEN` | 관리자 | `/api/qna-publish` 보호 토큰 |
| `PORT` | 로컬 | 내 컴퓨터에서 켤 포트 (기본 4000) |

환경변수 이름은 예전과 **똑같습니다.** Vercel 에 이미 넣어 둔 값을 그대로 씁니다.
