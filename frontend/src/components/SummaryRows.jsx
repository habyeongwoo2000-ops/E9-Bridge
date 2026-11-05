/* lib/summary.js 의 myRows() 가 만든 줄을 그립니다.
   { h } → 소제목(섹션 시작) / { p } → 문장 / { k, v, kind } → 항목 · 값 줄 */

export default function SummaryRows({ rows }) {
  const secs = [];
  rows.forEach((r) => {
    if (r.h) { secs.push({ h: r.h, parts: [] }); return; }
    const sec = secs[secs.length - 1];
    if (!sec) return;
    if (r.p) { sec.parts.push({ p: r.p }); return; }
    const last = sec.parts[sec.parts.length - 1];
    if (last && last.dl) last.dl.push(r);
    else sec.parts.push({ dl: [r] });
  });
  return (
    <>
      {secs.map((s, i) => (
        <section className="my-sec" key={i}>
          <h3>{s.h}</h3>
          {s.parts.map((part, j) => (part.p
            ? <p className="my-p" key={j}>{part.p}</p>
            : (
              <dl className="my-dl" key={j}>
                {part.dl.map((r, k) => (
                  <div className={'my-row' + (r.kind ? ' is-' + r.kind : '')} key={k}>
                    <dt>{r.k}</dt>
                    <dd>{r.v}</dd>
                  </div>
                ))}
              </dl>
            )))}
        </section>
      ))}
    </>
  );
}
