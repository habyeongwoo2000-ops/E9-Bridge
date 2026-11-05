/* 안내문 안의 전화번호를 눌러서 바로 걸리게 만듭니다.
   1600-0266 · 1350 · 132 처럼 자릿수가 제각각이라 한 번에 걸러 냅니다.
   휴대폰으로 보는 사람이 번호를 손으로 옮겨 적지 않아도 됩니다. */

const RE = /(\d{3,4}-\d{3,4}|\b1\d{3}\b|\b13[0-9]\b)/g;

export default function TelText({ text }) {
  const s = String(text || '');
  const out = [];
  let last = 0;
  let m;
  RE.lastIndex = 0;
  while ((m = RE.exec(s)) !== null) {
    if (m.index > last) out.push(s.slice(last, m.index));
    out.push(<a key={m.index} className="pay-tel" href={'tel:' + m[0].replace(/-/g, '')}>{m[0]}</a>);
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push(s.slice(last));
  return <>{out}</>;
}
