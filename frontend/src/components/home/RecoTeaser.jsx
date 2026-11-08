/* 첫 화면 "나에게 맞는 지원" — 조건을 골라 두었으면 상위 3건과 마감 임박·새 지원 수를 보여 줍니다. */

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import { recoLabels, fill } from '../../i18n/reco.js';
import { PROGRAMS, recommend, alertsOf, profileFilled } from '../../lib/reco.js';
import { useRecoProfile } from '../reco/useRecoProfile.js';

export default function RecoTeaser() {
  const { T, lang } = useI18n();
  const t = recoLabels(lang);
  const { profile } = useRecoProfile();
  const ready = profileFilled(profile);
  const list = useMemo(() => (ready ? recommend(profile) : []), [profile, ready]);
  const alerts = useMemo(() => alertsOf(list), [list]);
  const where = ready ? ((T.ntRegions && T.ntRegions[profile.sido]) || profile.sido) + (profile.city ? ' ' + profile.city : '') : '';

  return (
    <section className="band rt" id="reco" aria-labelledby="rtTitle">
      <div className="wrap rt-in">
        <div className="rt-text">
          <p className="sec-eyebrow" aria-hidden="true">Support for you</p>
          <h2 className="sec-title" id="rtTitle">{t.hmTitle}</h2>
          <p className="rt-lead">{fill(t.hmLead, { n: PROGRAMS.length })}</p>
          <Link className="btn btn-go" to="/recommend">{ready ? t.hmSee : t.hmStart}</Link>
        </div>
        {ready ? (
          <div className="rt-card">
            <p className="rt-for">{fill(t.hmFor, { where })}</p>
            <ul className="rt-badges">
              <li><b>{list.filter((r) => r.fit).length}</b><span>{t.navReco}</span></li>
              <li className="is-soon"><b>{alerts.soon.length}</b><span>{t.alSoon}</span></li>
              <li className="is-new"><b>{alerts.fresh.length}</b><span>{t.alNew}</span></li>
            </ul>
            <ol className="rt-top">
              {list.slice(0, 3).map((r) => (
                <li key={r.p.key}>
                  <Link to={'/recommend#rc-' + r.p.key}>
                    <span className="rt-sc">{r.score}%</span>
                    <span className="rt-tt">{(r.p.n[lang] || r.p.n.en).title}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <ol className="rt-steps" aria-hidden="true">
            <li><b>1</b>{t.sido}</li>
            <li><b>2</b>{t.sits}</li>
            <li><b>3</b>{t.title}</li>
          </ol>
        )}
      </div>
    </section>
  );
}
