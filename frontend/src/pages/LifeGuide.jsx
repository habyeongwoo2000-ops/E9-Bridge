import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExternalLink from '../components/ExternalLink.jsx';
import SubVisual from '../components/SubVisual.jsx';
import { guideSections } from '../data/lifeGuide.js';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { lifeLabels } from '../i18n/life.js';
import { load, save } from '../lib/storage.js';
import '../styles/pages/life.css';

export default function LifeGuide() {
  const { lang, T } = useI18n();
  const t = lifeLabels(lang);
  const [completed, setCompleted] = useState(() => new Set((load('lifeGuide') || '').split(',').filter(Boolean)));

  function toggleStep(step, checked) {
    const next = new Set(completed);
    if (checked) next.add(step);
    else next.delete(step);
    setCompleted(next);
    save('lifeGuide', [...next].join(','));
  }

  return (
    <main id="top">
      <SubVisual label={t.guide} en="Return & Settlement" />
      <div className="wrap life-page">
        <p className="sec-lead">{t.intro}</p>
        {guideSections.map(({ title, steps }) => {
          const done = steps.filter(({ text }) => completed.has(text)).length;
          const progress = t.guideProgress.replace('{done}', done).replace('{total}', steps.length);
          return (
            <section key={title}>
              <div className="life-section-heading">
                <h2>{t[title]}</h2>
                <span className="life-count">{progress}</span>
              </div>
              <progress className="life-progress" aria-label={t[title]} value={done} max={steps.length} />
              <ol className="life-list life-steps">
                {steps.map(({ text, route, routeLabel, source, checked }) => (
                  <li key={text}>
                    <label className="life-step">
                      <input type="checkbox" checked={completed.has(text)}
                             onChange={(event) => toggleStep(text, event.target.checked)} />
                      <span>{t[text]}</span>
                    </label>
                    <div className="form-actions">
                      {route && <Link className="btn btn-ghost btn-sm" to={route}>{T[routeLabel]}</Link>}
                      {source && <ExternalLink className="btn btn-ghost btn-sm" href={source}>{t.source}</ExternalLink>}
                    </div>
                    {checked && <p>{t.checked} {checked}</p>}
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
        <Link className="btn btn-ghost" to="/nearby">{t.nearby} →</Link>
      </div>
    </main>
  );
}
