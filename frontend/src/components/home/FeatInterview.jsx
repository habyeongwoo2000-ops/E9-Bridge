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
  const body = it[lang] || it.en || it.ko;
  const text = body.useQuote || body.intro || ((body.qa && body.qa[0]) ? body.qa[0].a : '');
  const facts = [];
  if (it.country && T.itvCountries) facts.push(T.itvCountries[it.country] || it.country);
  if (it.years) facts.push(String(T.itvYears || '{y}').replace('{y}', it.years));
  if (it.field && T.itvFields) facts.push(T.itvFields[it.field] || it.field);
  if (it.date) facts.push(it.date);
  const alt = (lang !== 'ko' && it.photoAltL && it.photoAltL[lang]) || it.photoAlt || '';

  return (
    <section className="feat" id="itvFeat" aria-labelledby="featTitle">
      <div className="feat-photo"><img id="featImg" src={'/' + String(it.photo).replace(/^\//, '')} alt={alt} /></div>
      <div className="feat-body">
        <p className="sec-eyebrow" aria-hidden="true">Interview</p>
        <h2 className="sec-title" id="featTitle">{T.navInterview}</h2>
        <p className="feat-lead">{T.itvLead}</p>
        <div className="feat-card">
          <span className="pill" id="featAlias">{itvName(it, lang)}</span>
          <p className="feat-text" id="featText">{text}</p>
          <p className="feat-meta" id="featMeta">{facts.join(' · ')}</p>
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
