/* 첫 화면 인터뷰 — 사진 반, 글 반. 사진이 있는 인터뷰만 최신순으로 넘겨 봅니다. */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import INTERVIEWS from '../../data/interviews.js';
import { itvName } from './HeroSlider.jsx';

export default function FeatInterview() {
  const { T, lang } = useI18n();
  const [k, setK] = useState(0);

  const items = INTERVIEWS.filter((it) => it.photo && (it[lang] || it.en || it.ko))
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  if (!items.length) return null;

  const it = items[((k % items.length) + items.length) % items.length];
  const alt = (lang !== 'ko' && it.photoAltL && it.photoAltL[lang]) || it.photoAlt || '';

  /* 인터뷰마다 글 길이가 달라 넘길 때마다 [이전·다음] 단추가 위아래로 움직였습니다.
     모든 인터뷰 카드를 같은 칸에 보이지 않게 겹쳐 두어, 칸 높이를 가장 긴 글에 맞춥니다. */
  const card = (x) => {
    const body = x[lang] || x.en || x.ko;
    const text = body.useQuote || body.intro || ((body.qa && body.qa[0]) ? body.qa[0].a : '');
    const facts = [];
    if (x.country && T.itvCountries) facts.push(T.itvCountries[x.country] || x.country);
    if (x.years) facts.push(String(T.itvYears || '{y}').replace('{y}', x.years));
    if (x.field && T.itvFields) facts.push(T.itvFields[x.field] || x.field);
    if (x.date) facts.push(x.date);
    return { name: itvName(x, lang), text, meta: facts.join(' · ') };
  };
  const cur = card(it);

  return (
    <section className="feat" id="itvFeat" aria-labelledby="featTitle">
      <div className="feat-photo"><img id="featImg" src={'/' + String(it.photo).replace(/^\//, '')} alt={alt} /></div>
      <div className="feat-body">
        <p className="sec-eyebrow" aria-hidden="true">Interview</p>
        <h2 className="sec-title" id="featTitle">{T.navInterview}</h2>
        <p className="feat-lead">{T.itvLead}</p>
        <div className="feat-cards">
          {items.map((x, n) => {
            const c = card(x);
            return (
              <div key={x.id || n} className="feat-card feat-sizer" aria-hidden="true">
                <span className="pill">{c.name}</span>
                <p className="feat-text">{c.text}</p>
                <p className="feat-meta">{c.meta}</p>
              </div>
            );
          })}
          <div className="feat-card">
            <span className="pill" id="featAlias">{cur.name}</span>
            <p className="feat-text" id="featText">{cur.text}</p>
            <p className="feat-meta" id="featMeta">{cur.meta}</p>
          </div>
        </div>
        <div className="feat-ctrl">
          <button type="button" className="circ" id="featPrev" aria-label={T.carPrev} onClick={() => setK(k - 1)}>
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12.5 4 6.5 10l6 6" /></svg>
          </button>
          <button type="button" className="circ" id="featNext" aria-label={T.carNext} onClick={() => setK(k + 1)}>
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7.5 4l6 6-6 6" /></svg>
          </button>
          <Link className="more" to="/interviews">{T.viewMore}</Link>
        </div>
      </div>
    </section>
  );
}
