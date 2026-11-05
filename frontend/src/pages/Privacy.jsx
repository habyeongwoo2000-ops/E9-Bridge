/* 개인정보처리방침 — 무엇을 받고 무엇을 받지 않는지
   받을 수 있는데도 일부러 받지 않는 것이 많습니다. 그 점을 먼저 보여 줍니다. */

import SubVisual from '../components/SubVisual.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import { CONTACT_MAIL } from '../components/Footer.jsx';

const NONE = ['pvNone1', 'pvNone2', 'pvNone3', 'pvNone4', 'pvNone5', 'pvNone6'];
const KEEP = ['Account', 'Social', 'Profile', 'Post', 'Date', 'Summary'];
const THIRD = ['Ai', 'Db', 'Host'];
const RIGHT = ['pvRight1', 'pvRight2', 'pvRight3', 'pvRight4'];

export default function Privacy() {
  const { T } = useI18n();
  useDocTitle('pvTitle');

  return (
    <>
      <SubVisual crumbs={['navPrivacy']} en="Privacy" title="pvTitle" />
      <main id="top">
        <section id="privacy" className="band">
          <div className="wrap wrap-narrow">
            <p className="sec-lead">{T.pvLead}</p>

            <h3 className="ac-head">{T.pvSecNone}</h3>
            <p className="sec-lead">{T.pvNoneLead}</p>
            <ul className="dont-list">{NONE.map((k) => <li key={k}>{T[k]}</li>)}</ul>

            <h3 className="ac-head">{T.pvSecKeep}</h3>
            <dl className="ac-list">
              {KEEP.map((k) => [
                <dt key={k + 't'}>{T['pvKeep' + k + 'T']}</dt>,
                <dd key={k + 'd'}>{T['pvKeep' + k + 'D']}</dd>
              ])}
            </dl>

            <h3 className="ac-head">{T.pvSecPhoto}</h3>
            <p>{T.pvPhoto}</p>

            <h3 className="ac-head">{T.pvSecThird}</h3>
            <p className="sec-lead">{T.pvThirdLead}</p>
            <dl className="ac-list">
              {THIRD.map((k) => [
                <dt key={k + 't'}>{T['pvThird' + k + 'T']}</dt>,
                <dd key={k + 'd'}>{T['pvThird' + k + 'D']}</dd>
              ])}
            </dl>

            <h3 className="ac-head">{T.pvSecTime}</h3>
            <p>{T.pvTime}</p>

            <h3 className="ac-head">{T.pvSecRight}</h3>
            <ul className="dont-list is-can">{RIGHT.map((k) => <li key={k}>{T[k]}</li>)}</ul>

            <h3 className="ac-head">{T.pvSecChild}</h3>
            <p>{T.pvChild}</p>

            <h3 className="ac-head">{T.pvSecContact}</h3>
            <p>{T.pvContactLead}</p>
            <p className="legal-link"><a href={'mailto:' + CONTACT_MAIL}>{CONTACT_MAIL}</a></p>

            <p className="src">{T.pvUpdated}</p>
            <p className="disclaim">{T.disclaimer}</p>
          </div>
        </section>
      </main>
    </>
  );
}
