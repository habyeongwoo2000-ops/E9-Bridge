/* 정부24 공공서비스(혜택) 정보 API — 행정안전부, 공공데이터포털(data.go.kr)
   ------------------------------------------------------------------
   · 키: 공공데이터포털에서 "행정안전부_대한민국 공공서비스 정보" 활용 신청 → 일반 인증키(Decoding)
         를 Vercel 환경변수 GOV24_API_KEY 에 넣습니다. 키가 없으면 이 기능은 꺼진 채로 둡니다.
   · 주소: https://api.odcloud.kr/api/gov24/v3/serviceList  (page · perPage · returnType · serviceKey · cond[...])
   · 서비스 이름에 "외국인·이주" 가 들어간 것을 불러온 뒤, 지원 대상까지 다시 살펴 외국인 대상만 남깁니다.
   · 같은 질문은 6시간 동안 메모리에 담아 두어 API 호출 수를 줄입니다(무료 키는 하루 호출 수 제한이 있음).
   · 응답 칸 이름이 바뀌어도 죽지 않게, 이름 후보를 여러 개 둡니다.
   ------------------------------------------------------------------ */

const BASE = 'https://api.odcloud.kr/api/gov24/v3/serviceList';
const TTL = 6 * 60 * 60 * 1000;
const cache = new Map();

/* 지역 코드 → 기관 이름에 들어 있는 말 */
const SIDO_WORDS = {
  seoul: ['서울'], busan: ['부산'], daegu: ['대구'], incheon: ['인천'], daejeon: ['대전'], ulsan: ['울산'],
  sejong: ['세종'], gyeonggi: ['경기'], gangwon: ['강원'], chungbuk: ['충청북도', '충북'], chungnam: ['충청남도', '충남'],
  jeonbuk: ['전북', '전라북도'], jeonnamgwangju: ['전라남도', '전남', '광주'], gyeongbuk: ['경상북도', '경북'],
  gyeongnam: ['경상남도', '경남'], jeju: ['제주']
};
/* 시·도 단위가 아닌 시·군·구 이름이 기관명에 오는 경우가 많아, 중앙기관 여부만 따로 봅니다. */
const CENTRAL = /부$|처$|청$|위원회$|공단|공사|진흥원|관리원/;

const FOREIGN = /외국인|이주민|이주노동자|이민자|체류외국인|다문화/;
/* 근로자와 상관없는 외국인 대상(관광객·유학생·재외동포) */
const NOT_WORKER = /관광객|유학생|재외국민|재외동포|외국인 투자|외국인투자/;
const WORKER_HINT = /외국인\s?근로자|이주노동자|고용허가|E-9|외국인\s?노동자|외국인주민/;

function configured() { return !!process.env.GOV24_API_KEY; }

const pick = (row, names) => {
  for (const n of names) if (row[n] !== undefined && row[n] !== null && String(row[n]).trim()) return String(row[n]).trim();
  return '';
};
const cut = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

function toItem(row) {
  const id = pick(row, ['서비스ID', 'svcId', 'serviceId']);
  const url = pick(row, ['상세조회URL', 'detailUrl']);
  return {
    id,
    name: pick(row, ['서비스명', 'svcNm', 'serviceName']),
    summary: cut(pick(row, ['서비스목적요약', '서비스목적', 'svcPurpsSmry']), 160),
    target: cut(pick(row, ['지원대상', 'sprtTrgt']), 160),
    org: pick(row, ['소관기관명', 'jrsdDptAllNm', 'orgNm']),
    deadline: cut(pick(row, ['신청기한', 'aplyPrd']), 60),
    phone: cut(pick(row, ['전화문의', 'telNo']), 40),
    url: /^https:\/\/(www\.)?gov\.kr\//.test(url) ? url : (id ? 'https://www.gov.kr/portal/rcvfvrSvc/dtlEx/' + encodeURIComponent(id) : '')
  };
}

async function fetchPage(cond, fetchImpl) {
  const qs = new URLSearchParams({ page: '1', perPage: '100', returnType: 'JSON', serviceKey: process.env.GOV24_API_KEY });
  for (const [k, v] of Object.entries(cond)) qs.append(k, v);
  const ac = new AbortController();
  const killer = setTimeout(() => ac.abort(), 12000);
  try {
    const r = await fetchImpl(BASE + '?' + qs.toString(), { headers: { accept: 'application/json' }, signal: ac.signal });
    if (!r.ok) throw Object.assign(new Error('gov24 http ' + r.status), { status: r.status });
    const d = await r.json();
    return Array.isArray(d && d.data) ? d.data : [];
  } finally { clearTimeout(killer); }
}

/* 지역(sido)에 맞게 거른 목록. sido 가 비어 있으면 중앙기관(전국) 서비스만. */
async function search(sido, fetchImpl = globalThis.fetch) {
  const key = sido || 'nation';
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL) return hit.value;

  const all = cache.get('_all');
  let rows;
  if (all && Date.now() - all.at < TTL) rows = all.value;
  else {
    const words = ['외국인', '이주'];
    const pages = await Promise.all(words.map((w) => fetchPage({ 'cond[서비스명::LIKE]': w }, fetchImpl).catch((e) => {
      if (e.status === 401 || e.status === 403) throw e;   // 키 문제는 위로 올립니다
      return [];
    })));
    const seen = new Set();
    rows = [];
    for (const row of pages.flat()) {
      const it = toItem(row);
      if (!it.id || seen.has(it.id)) continue;
      seen.add(it.id);
      if (!FOREIGN.test(it.name + ' ' + it.target) || NOT_WORKER.test(it.name + ' ' + it.target)) continue;
      rows.push(it);
    }
    cache.set('_all', { at: Date.now(), value: rows });
  }

  const wordsOf = SIDO_WORDS[sido] || [];
  const items = rows
    .filter((it) => (wordsOf.length ? wordsOf.some((w) => it.org.indexOf(w) !== -1) || CENTRAL.test(it.org) : CENTRAL.test(it.org)))
    .sort((a, b) => Number(WORKER_HINT.test(b.name + b.target)) - Number(WORKER_HINT.test(a.name + a.target)))
    .slice(0, 12);
  const value = { items, fetchedAt: new Date().toISOString() };
  cache.set(key, { at: Date.now(), value });
  return value;
}

module.exports = { configured, search, SIDO_WORDS, _cache: cache };
