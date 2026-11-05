/* 인터뷰 — 사업장을 옮겨 본 사람들의 이야기
   데이터가 비어 있으면 목록 대신 "준비 중" 안내만 보입니다.
   지어낸 인터뷰를 채워 두느니 빈 화면을 보이는 편이 낫습니다 —
   읽는 사람이 남의 경험을 근거로 자기 일을 결정하기 때문입니다.
   누구인지는 가명·국적·나이·연차·업종만 씁니다. 이름과 회사는 데이터에 아예 넣지 않습니다. */

import SubVisual from '../components/SubVisual.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import '../styles/pages/anchors.css';
import INTERVIEWS from '../data/interviews.js';
import { CONTACT_MAIL } from '../components/Footer.jsx';

const SORTED = (INTERVIEWS || []).slice().sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));

function photoSrc(p) { return '/' + String(p || '').replace(/^\//, ''); }

export default function Interviews() {
  const { T, lang } = useI18n();
  useDocTitle(T.itvTitle ? 'itvTitle' : 'navInterview');
  const has = SORTED.length > 0;

  return (
    <>
      <SubVisual crumbs={['navInterview']} en="Interviews" title="navInterview" />
      <main id="top">
        <section id="interviews" className="band">
          <div className="wrap">
            <p className="sec-lead">{T.itvLead}</p>

            {!has && (
              <div className="itv-empty" id="itvEmpty">
                <p>{T.itvEmpty}</p>
                <p className="itv-empty-sub">{T.itvEmptySub}</p>
                <a className="btn btn-go" href={'mailto:' + CONTACT_MAIL}>{T.itvContact}</a>
              </div>
            )}

            {has && (
              <div className="itv-list" id="itvList">
                {SORTED.map((it) => {
                  const body = it[lang] || it.en || it.ko;
                  if (!body) return null;
                  const alias = (lang !== 'ko' && it.aliasL && it.aliasL[lang]) || it.alias || '?';
                  const facts = [];
                  if (it.country && T.itvCountries) facts.push(T.itvCountries[it.country] || it.country);
                  if (it.age) facts.push(String(T.itvAge || '{a}').replace('{a}', it.age));
                  if (it.years) facts.push(String(T.itvYears || '{y}').replace('{y}', it.years));
                  if (it.field && T.itvFields) facts.push(T.itvFields[it.field] || it.field);
                  return (
                    <article className="itv-card" key={it.key} id={it.key}>
                      <div className="itv-who">
                        <span className="itv-alias">{String(T.itvAlias || '{n}').replace('{n}', alias)}</span>
                        {facts.length > 0 && <span className="itv-facts">{facts.join(' · ')}</span>}
                      </div>
                      {/* 얼굴이 보이는 사진이므로 본인 동의를 받은 것만 photo 를 채웁니다.
                          loading="lazy" — 목록이 길어져도 처음 여는 속도가 느려지지 않게 합니다. */}
                      {it.photo && (
                        <figure className="itv-photo">
                          <img src={photoSrc(it.photo)} loading="lazy"
                               alt={(lang !== 'ko' && it.photoAltL && it.photoAltL[lang]) || it.photoAlt || ''} />
                        </figure>
                      )}
                      {body.intro && <p className="itv-intro">{body.intro}</p>}
                      {(body.qa || []).map((row, i) => (
                        <div className="itv-qa" key={i}>
                          <p className="itv-q">{row.q}</p>
                          <p className="itv-a">{row.a}</p>
                        </div>
                      ))}
                      {/* 사이트를 써 본 소감이 있으면 인터뷰 카드 안에 이어 붙입니다. */}
                      {body.useQuote && (
                        <div className="itv-usequote">
                          {T.itvUseQuoteLabel && <p className="itv-usequote-label">{T.itvUseQuoteLabel}</p>}
                          <blockquote className="itv-quote"><p>{body.useQuote}</p></blockquote>
                        </div>
                      )}
                      {it.date && <p className="itv-date">{it.date}</p>}
                    </article>
                  );
                })}
              </div>
            )}

            <p className="disclaim">{T.itvPrivacy}</p>
          </div>
        </section>
      </main>
    </>
  );
}
