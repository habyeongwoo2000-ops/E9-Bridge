/* 추천 카드 한 장 — 제목 · 적합도 · 추천 근거(✓ △ ✗) · 신청 준비 체크리스트 */

import { useState } from 'react';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import { recoLabels, fill } from '../../i18n/reco.js';
import { checklistOf, mapSearchUrl, STATUSES } from '../../lib/reco.js';
import ExternalLink from '../ExternalLink.jsx';

const MARK = { ok: '✓', warn: '!', no: '✕' };

/* 근거 하나를 지금 언어 문장으로 */
export function reasonText(r, t, T) {
  const v = r.v || {};
  const region = (c) => (T.ntRegions && T.ntRegions[c]) || c;
  const list = (arr, opts) => (arr || []).map((x) => opts[x] || x).join(', ');
  return fill(t[r.k], {
    sido: region(v.sido), city: v.city, days: v.days, until: v.until,
    cats: list(v.cats, t.catOpts), sits: list(v.sits, t.sitOpts), ind: list(v.ind, t.indOpts)
  });
}

export default function ProgramCard({ r, rank, track, onTrack }) {
  const { T, lang } = useI18n();
  const t = recoLabels(lang);
  const [open, setOpen] = useState(false);
  const { p } = r;
  const body = p.n[lang] || p.n.en;
  const mine = track[p.key] || {};
  const list = checklistOf(p);
  const checks = mine.c || [];
  const allItems = [...list.steps, ...list.docs];
  const done = allItems.filter((k) => checks.indexOf(k) !== -1).length;
  const regionName = p.region ? ((T.ntRegions && T.ntRegions[p.region]) || p.region) : t.rsNation;

  const toggle = (k) => {
    const next = checks.indexOf(k) === -1 ? [...checks, k] : checks.filter((x) => x !== k);
    onTrack(p.key, { ...mine, c: next });
  };

  return (
    <li id={'rc-' + p.key} className={'rc-card' + (r.fit ? '' : ' is-weak')}>
      <div className="rc-top">
        <span className="rc-rank" aria-hidden="true">{rank}</span>
        <div className="rc-head">
          <p className="rc-where">
            <span>{regionName}</span>
            {p.cities.length > 0 && <span lang="ko">{p.cities.join('·')}</span>}
            {p.cats.slice(0, 3).map((c) => <span key={c} className="rc-cat">{t.catOpts[c]}</span>)}
          </p>
          <h3 className="rc-title">{body.title}</h3>
          {lang !== 'ko' && <p className="rc-ko"><span>{t.koTitle}</span> <b lang="ko">{p.n.ko.title}</b></p>}
        </div>
        <div className="rc-score" aria-label={t.match + ' ' + r.score + '%'}>
          <b>{r.score}</b><span>%</span>
          <i style={{ width: r.score + '%' }} aria-hidden="true" />
        </div>
      </div>

      <ul className="rc-why">
        {r.reasons.map((x, i) => (
          <li key={i} className={'is-' + x.t}><span aria-hidden="true">{MARK[x.t]}</span>{reasonText(x, t, T)}</li>
        ))}
      </ul>
      {!r.fit && <p className="rc-weak-note">{t.notFit}</p>}

      <div className="rc-actions">
        <button type="button" className="btn btn-go btn-sm" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? t.close : t.prepare}{done > 0 && !open ? ' · ' + fill(t.progress, { done, total: allItems.length }) : ''}
        </button>
        <ExternalLink className="btn btn-ghost btn-sm" href={p.n.url}>{t.original}</ExternalLink>
        {p.region && <ExternalLink className="btn btn-ghost btn-sm" href={mapSearchUrl(p)}>{t.map}</ExternalLink>}
        {p.phones.slice(0, 1).map((ph) => <a key={ph} className="btn btn-ghost btn-sm" href={'tel:' + ph.replace(/-/g, '')}>{t.call} {ph}</a>)}
        <label className="rc-status">
          <span>{t.statusLabel}</span>
          <select value={mine.s || ''} onChange={(e) => onTrack(p.key, { ...mine, s: e.target.value })}>
            {STATUSES.map((s) => <option key={s} value={s}>{t.statusOpts[s]}</option>)}
          </select>
        </label>
      </div>

      {open && (
        <div className="rc-prep">
          <ul className="rc-points">{(body.points || []).map((x, i) => <li key={i}>{x}</li>)}</ul>
          <div className="rc-prep-grid">
            <fieldset>
              <legend>{t.stepsTitle}</legend>
              {list.steps.map((k, i) => (
                <label key={k} className="rc-check">
                  <input type="checkbox" checked={checks.indexOf(k) !== -1} onChange={() => toggle(k)} />
                  <span><b>{i + 1}</b> {t[k]}{k === 'stCall' && p.phones.length > 0 ? ' — ' + p.phones.join(', ') : ''}</span>
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend>{t.docsTitle}</legend>
              {list.docs.map((k) => (
                <label key={k} className="rc-check">
                  <input type="checkbox" checked={checks.indexOf(k) !== -1} onChange={() => toggle(k)} />
                  <span>{t[k]}</span>
                </label>
              ))}
              <p className="rc-docs-note">{t.docsNote}</p>
            </fieldset>
          </div>
          <div className="rc-meter" role="progressbar" aria-valuemin={0} aria-valuemax={allItems.length} aria-valuenow={done}>
            <i style={{ width: (done / allItems.length * 100) + '%' }} />
            <span>{done === allItems.length ? t.ready : fill(t.progress, { done, total: allItems.length })}</span>
          </div>
          <p className="rc-src" lang="ko">{p.n.source} · {p.n.checked}</p>
        </div>
      )}
    </li>
  );
}
