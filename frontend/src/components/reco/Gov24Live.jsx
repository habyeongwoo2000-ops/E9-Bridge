/* 정부24 공공서비스 실시간 — 백엔드 /api/benefits 가 공공데이터 API 를 불러 외국인 대상만 걸러 줍니다.
   서버에 GOV24_API_KEY 가 없으면 enabled:false 가 와서 안내만 보입니다. */

import { useEffect, useState } from 'react';
import { getJSON } from '../../lib/api.js';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import { recoLabels, fill } from '../../i18n/reco.js';
import ExternalLink from '../ExternalLink.jsx';

export default function Gov24Live({ sido }) {
  const { lang } = useI18n();
  const t = recoLabels(lang);
  const [st, setSt] = useState({ phase: 'loading' });

  useEffect(() => {
    let alive = true;
    setSt({ phase: 'loading' });
    getJSON('/api/benefits?sido=' + encodeURIComponent(sido || ''), { timeout: 20000 })
      .then((d) => { if (alive) setSt(d && d.enabled ? { phase: 'ok', ...d } : { phase: 'off' }); })
      .catch(() => { if (alive) setSt({ phase: 'err' }); });
    return () => { alive = false; };
  }, [sido]);

  return (
    <section className="gv" aria-labelledby="gvTitle">
      <div className="gv-head">
        <h2 id="gvTitle">{t.gvTitle} <span className={'gv-dot is-' + st.phase} aria-hidden="true" /></h2>
        <p>{t.gvLead}</p>
      </div>
      {st.phase === 'loading' && <p className="gv-msg">{t.gvLoading}</p>}
      {st.phase === 'off' && <p className="gv-msg">{t.gvOff}</p>}
      {st.phase === 'err' && <p className="gv-msg">{t.gvErr}</p>}
      {st.phase === 'ok' && (
        <>
          {!st.items.length && <p className="gv-msg">{t.gvNone}</p>}
          <ul className="gv-list">
            {st.items.map((x) => (
              <li key={x.id}>
                <p className="gv-org"><span>{t.gvOrg}</span> <b lang="ko">{x.org}</b></p>
                <h3 lang="ko">{x.name}</h3>
                {x.summary && <p lang="ko" className="gv-sum">{x.summary}</p>}
                {x.target && <p lang="ko" className="gv-target">{x.target}</p>}
                <p className="gv-meta">
                  {x.deadline && <span><span>{t.gvDeadline}</span> <b lang="ko">{x.deadline}</b></span>}
                  {x.url && <ExternalLink className="more" href={x.url}>{t.gvMore}</ExternalLink>}
                </p>
              </li>
            ))}
          </ul>
          <p className="gv-foot">{t.gvKo} · {fill(t.gvTime, { t: (st.fetchedAt || '').slice(0, 16).replace('T', ' ') })}</p>
        </>
      )}
    </section>
  );
}
