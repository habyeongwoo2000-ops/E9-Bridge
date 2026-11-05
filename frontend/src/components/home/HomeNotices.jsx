/* 첫 화면 최신 제도 — 날짜 최신순 5건, 60일 안에 바뀐 제도에는 NEW.
   제도 데이터(data/notices.js)는 400 KB 가 넘어서, 첫 화면 코드에 넣지 않고
   이 목록이 그려질 때 따로 받아 옵니다(dynamic import → 별도 조각). */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import { asDay, diffDays, today } from '../../lib/dates.js';

export default function HomeNotices() {
  const { T, lang } = useI18n();
  const [list, setList] = useState(null);

  useEffect(() => {
    let alive = true;
    import('../../data/notices.js')
      .then((m) => {
        if (!alive) return;
        const all = (m.default || m.NOTICES || []).slice()
          .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
        setList(all.slice(0, 5));
      })
      .catch((e) => console.warn('notices load failed', e));
    return () => { alive = false; };
  }, []);

  const now = today();
  return (
    <section className="band" id="homeNotices">
      <div className="wrap">
        <div className="sec-row">
          <div>
            <p className="sec-eyebrow" aria-hidden="true">Policy Updates</p>
            <h2 className="sec-title">{T.navUpdates}</h2>
          </div>
          <Link className="more" to="/notices">{T.viewMore}</Link>
        </div>
        <ul className="nlist" id="homeNoticeList" aria-busy={list ? undefined : 'true'}>
          {(list || []).map((n) => {
            const body = n[lang] || n.en || n.ko;
            const fresh = n.date && diffDays(now, asDay(n.date)) <= 60;
            return (
              <li key={n.key}>
                <Link to={'/notices#' + n.key}>
                  <span className="nl-t">{body.title}</span>
                  <span className="nl-meta">
                    <span>{n.date || ''}</span>
                    <i />
                    <span>{(T.noticeTags && T.noticeTags[n.tagKey]) || n.tagKey}</span>
                    {fresh && <span className="nl-new">NEW</span>}
                  </span>
                  <span className="nl-go" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
