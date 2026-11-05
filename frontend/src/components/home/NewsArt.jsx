/* 기사 카드 그림 — 기사 내용을 바탕으로 E9-Bridge가 직접 그린 일러스트입니다.

   왜 기사 사진을 쓰지 않나
     언론사 사진은 그 언론사(또는 사진기자)에게 저작권이 있습니다. 허락 없이 가져다
     쓰면 저작권 침해가 됩니다. 그래서 숫자와 장면을 담은 그림을 직접 그렸습니다.
     허락받은 사진이나 팀이 직접 찍은 사진이 생기면 NewsSection 의 ARTICLES 에
     img: '/assets/news/파일이름.jpg' 를 적으세요. 그림 대신 그 사진이 나옵니다.

   그림 안에는 글자를 넣지 않습니다(언어마다 달라지므로). 글자는 카드 위에 따로 얹습니다. */

function Sky({ id, from, to }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={from} />
        <stop offset="1" stopColor={to} />
      </linearGradient>
    </defs>
  );
}

/* 공장 지붕(톱니) 실루엣 — 여러 장면의 바닥에 깝니다 */
function Factory({ y = 300, fill = 'rgba(255,255,255,.12)' }) {
  return (
    <path fill={fill} d={`M0 ${y} l60 -40 v40 l60 -40 v40 l60 -40 v40 l60 -40 v40 h40 v-90 h22 v90 h18 l60 -40 v40 l60 -40 v40 l60 -40 v40 l60 -40 v40 h60 V400 H0z`} />
  );
}

/* a) 사업장 변경 상담 급증 — 높아지는 막대와 쌓이는 신청서 */
function ArtChange() {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Sky id="g-a" from="#0b2d5c" to="#2a6fe8" />
      <rect width="640" height="400" fill="url(#g-a)" />
      <circle cx="540" cy="70" r="120" fill="rgba(255,255,255,.06)" />
      <Factory y={330} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={70 + i * 62} y={290 - (40 + i * 38)} width="40" height={40 + i * 38} rx="6"
              fill={i === 4 ? '#8fb7ff' : 'rgba(255,255,255,.28)'} />
      ))}
      <path d="M80 210 C170 190 240 150 330 80" fill="none" stroke="#ffd166" strokeWidth="6" strokeLinecap="round" />
      <path d="M312 72 l26 4 -10 24" fill="none" stroke="#ffd166" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(420 110) rotate(8)">
        <rect width="150" height="190" rx="12" fill="#fff" opacity=".18" />
      </g>
      <g transform="translate(400 120) rotate(-4)">
        <rect width="150" height="190" rx="12" fill="#fff" />
        <rect x="22" y="28" width="80" height="12" rx="6" fill="#0b2d5c" />
        {[60, 84, 108, 132].map((y) => <rect key={y} x="22" y={y} width={y === 132 ? 70 : 106} height="9" rx="4.5" fill="#d9dee6" />)}
        <circle cx="112" cy="156" r="20" fill="none" stroke="#cf3a2e" strokeWidth="5" />
        <path d="M102 156 l7 7 13 -14" fill="none" stroke="#cf3a2e" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/* b) 3개월 구직 기간 — 달력 세 장과 모래시계, 공장 앞에 선 사람 */
function ArtDeadline() {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Sky id="g-b" from="#1b2a52" to="#5b4bb5" />
      <rect width="640" height="400" fill="url(#g-b)" />
      <circle cx="110" cy="80" r="44" fill="#ffe8a3" opacity=".9" />
      <Factory y={320} fill="rgba(255,255,255,.14)" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${150 + i * 34} ${110 + i * 18})`}>
          <rect width="190" height="170" rx="14" fill={i === 2 ? '#fff' : 'rgba(255,255,255,.35)'} />
          <rect width="190" height="40" rx="14" fill={i === 2 ? '#cf3a2e' : 'rgba(255,255,255,.25)'} />
          {i === 2 && [0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4].map((c) => (
            <rect key={r + '-' + c} x={18 + c * 34} y={56 + r * 26} width="22" height="16" rx="4"
                  fill={r === 3 && c > 1 ? '#cf3a2e' : '#e6edf8'} />
          )))}
        </g>
      ))}
      <g transform="translate(470 140)">
        <path d="M0 0 h80 M0 150 h80" stroke="#ffd166" strokeWidth="10" strokeLinecap="round" />
        <path d="M8 6 C8 60 72 60 72 75 C72 90 8 90 8 144 M72 6 C72 60 8 60 8 75 C8 90 72 90 72 144" fill="none" stroke="#fff" strokeWidth="6" />
        <path d="M22 40 h36 L40 70z M12 140 C20 110 60 110 68 140z" fill="#ffd166" />
      </g>
      <g fill="#0b1630">
        <circle cx="590" cy="262" r="13" />
        <path d="M575 330 v-40 q15 -16 30 0 v40z" />
        <rect x="548" y="300" width="22" height="30" rx="4" />
      </g>
    </svg>
  );
}

/* c) 임금체불 — 비어 있는 월급봉투와 흩어진 동전 */
function ArtWage() {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Sky id="g-c" from="#7a2e12" to="#e0782c" />
      <rect width="640" height="400" fill="url(#g-c)" />
      <circle cx="520" cy="90" r="130" fill="rgba(255,255,255,.07)" />
      <Factory y={335} fill="rgba(0,0,0,.14)" />
      <g transform="translate(170 110) rotate(-6)">
        <rect width="260" height="170" rx="14" fill="#fff6e8" />
        <path d="M0 14 L130 100 L260 14" fill="none" stroke="#e7c9a2" strokeWidth="6" />
        <rect x="24" y="118" width="110" height="14" rx="7" fill="#e7c9a2" />
        <path d="M188 112 l40 40 M228 112 l-40 40" stroke="#cf3a2e" strokeWidth="10" strokeLinecap="round" />
      </g>
      {[[470, 250], [510, 280], [455, 300], [120, 300], [90, 255], [520, 220]].map(([x, y], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="26" ry="26" fill="#ffd166" />
          <ellipse cx={x} cy={y} rx="17" ry="17" fill="none" stroke="#e0a72a" strokeWidth="4" />
        </g>
      ))}
    </svg>
  );
}

/* d) 찾아가지 않은 보험금 — 떠나는 비행기와 남겨진 저금통 */
function ArtPayout() {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Sky id="g-d" from="#0d4a5c" to="#2ea3a0" />
      <rect width="640" height="400" fill="url(#g-d)" />
      {[[90, 80, 60], [260, 60, 46], [520, 130, 70]].map(([x, y, w], i) => (
        <rect key={i} x={x} y={y} width={w * 2} height={w * .55} rx={w * .28} fill="rgba(255,255,255,.18)" />
      ))}
      <path d="M40 330 C200 300 330 200 470 110" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="4" strokeDasharray="4 14" strokeLinecap="round" />
      <g transform="translate(470 104) rotate(-28)" fill="#fff">
        <path d="M-60 -8 h96 q24 0 24 8 t-24 8 h-96z" />
        <path d="M-10 -6 l-30 -44 h18 l40 44z M-10 6 l-30 44 h18 l40 -44z M-54 -6 l-14 -22 h10 l18 22z" />
      </g>
      <rect y="320" width="640" height="80" fill="rgba(0,0,0,.16)" />
      <g transform="translate(120 230)">
        <ellipse cx="80" cy="60" rx="86" ry="62" fill="#ff9fb1" />
        <circle cx="140" cy="44" r="6" fill="#7a2e3c" />
        <rect x="58" y="-6" width="44" height="10" rx="5" fill="#7a2e3c" />
        <path d="M20 112 v18 M130 112 v18" stroke="#ff9fb1" strokeWidth="16" strokeLinecap="round" />
        <ellipse cx="166" cy="62" rx="14" ry="18" fill="#ff8aa0" />
      </g>
      {[[90, 210], [300, 290], [330, 250]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="15" fill="#ffd166" />)}
    </svg>
  );
}

/* e) 산업재해 — 안전모와 경고 줄무늬, 크레인 */
function ArtSafety() {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Sky id="g-e" from="#1d1f24" to="#4a4f5a" />
      <rect width="640" height="400" fill="url(#g-e)" />
      <g stroke="rgba(255,255,255,.22)" strokeWidth="6" fill="none">
        <path d="M470 380 V70 M470 70 H640 M470 70 L420 120 M500 70 l-30 40 M540 70 l-40 40 M580 70 l-40 40" />
        <path d="M600 70 v120" strokeDasharray="6 8" />
      </g>
      <rect x="585" y="190" width="30" height="24" rx="4" fill="rgba(255,255,255,.3)" />
      <g transform="translate(140 120)">
        <path d="M0 150 C0 60 50 0 130 0 C210 0 260 60 260 150z" fill="#ffc21a" />
        <path d="M110 4 h40 v146 h-40z" fill="#ffd451" />
        <rect x="-26" y="140" width="312" height="30" rx="15" fill="#f0a800" />
      </g>
      <g>
        <clipPath id="clip-e"><rect y="330" width="640" height="70" /></clipPath>
        <g clipPath="url(#clip-e)">
          {Array.from({ length: 14 }).map((_, i) => (
            <path key={i} d={`M${i * 60 - 40} 400 l60 -70 h30 l-60 70z`} fill="#ffc21a" />
          ))}
        </g>
      </g>
    </svg>
  );
}

/* f) 비닐하우스 숙소의 폭염 — 이글거리는 해와 온도계 */
function ArtHeat() {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <Sky id="g-f" from="#b8361c" to="#f6a03b" />
      <rect width="640" height="400" fill="url(#g-f)" />
      <g transform="translate(470 100)">
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x="-4" y="-96" width="8" height="26" rx="4" fill="#ffe08a" transform={`rotate(${i * 30})`} />
        ))}
        <circle r="58" fill="#ffe08a" />
      </g>
      <rect y="300" width="640" height="100" fill="#7a3a1a" opacity=".35" />
      {[[40, 300, 240], [250, 300, 200]].map(([x, y, w], i) => (
        <g key={i}>
          <path d={`M${x} ${y} v-60 C${x} ${y - 150} ${x + w} ${y - 150} ${x + w} ${y - 60} v60z`} fill="rgba(255,255,255,.55)" />
          {[0.25, 0.5, 0.75].map((t) => (
            <path key={t} d={`M${x + w * t} ${y} V${y - 100 - (t === 0.5 ? 12 : 0)}`} stroke="rgba(255,255,255,.8)" strokeWidth="4" />
          ))}
          <rect x={x + w * .4} y={y - 50} width={w * .2} height="50" rx="4" fill="rgba(122,58,26,.55)" />
        </g>
      ))}
      <g transform="translate(540 190)">
        <rect x="-16" y="0" width="32" height="140" rx="16" fill="#fff" />
        <rect x="-7" y="30" width="14" height="96" rx="7" fill="#cf3a2e" />
        <circle cy="140" r="30" fill="#fff" />
        <circle cy="140" r="20" fill="#cf3a2e" />
      </g>
      <path d="M90 120 q12 -16 0 -32 q-12 -16 0 -32 M140 130 q12 -16 0 -32 q-12 -16 0 -32" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

const ARTS = { change: ArtChange, deadline: ArtDeadline, wage: ArtWage, payout: ArtPayout, safety: ArtSafety, heat: ArtHeat };

export default function NewsArt({ kind }) {
  const A = ARTS[kind] || ArtChange;
  return <A />;
}
