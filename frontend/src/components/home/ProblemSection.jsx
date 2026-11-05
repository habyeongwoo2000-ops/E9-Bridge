/* 우리가 풀려는 문제 — 숫자 네 개로 문제의 크기를 보이고,
   "그래서 E9-Bridge는" 아래에서 문제 하나하나를 사이트의 기능과 이어 줍니다.

   ■ 숫자를 고칠 때: 문구는 i18n/extra/home.js (pbS1N …), 출처 주소는 아래 STATS.
     기준 시점이 다른 숫자(예: 산재 사망 비율)는 기준을 반드시 함께 적습니다. */

import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider.jsx';

const STATS = [
  { n: 1, url: 'https://www.index.go.kr/unify/idx-info.do?idxCd=1501' },        // e-나라지표 고용허가제 고용동향 (2025-12 말)
  { n: 2, url: 'https://www.newsis.com/view/NISX20260729_0003728864' },        // 뉴시스 2026-07-30 (고용노동부 자료)
  { n: 3, url: 'https://www.sedaily.com/article/20045502' },                   // 서울경제 2026-05-18 (고용노동부 자료)
  { n: 4, url: 'https://biz.heraldcorp.com/article/10864625' }                 // 헤럴드경제 2026-09-07
];

/* 문제 → 해결(사이트 기능). links 의 key 는 언어 파일의 기능 이름입니다. */
const PAIRS = [
  { n: 1, links: [{ to: '/check#deadline', key: 'dlTitle' }] },
  { n: 2, links: [{ to: '/check#reason', key: 'ckTitle' }] },
  { n: 3, links: [{ to: '/check#payout', key: 'secNoPay' }] },
  { n: 4, links: [{ to: '/notices', key: 'navUpdates' }, { to: '/legal', key: 'secNoLegal' }] }
];

export default function ProblemSection() {
  const { T } = useI18n();
  return (
    <section className="band pb" id="problem" aria-labelledby="pbTitle">
      <div className="wrap">
        <div className="pb-head">
          <div>
            <p className="sec-eyebrow" aria-hidden="true">Why E9-Bridge</p>
            <h2 className="pb-title" id="pbTitle">{T.pbTitle}</h2>
          </div>
          <p className="pb-lead">{T.pbLead}</p>
        </div>

        <ul className="pb-stats">
          {STATS.map((s) => (
            <li className="pb-stat" key={s.n}>
              <p className="pb-num">{T['pbS' + s.n + 'N']}</p>
              <p className="pb-lbl">{T['pbS' + s.n + 'L']}</p>
              <p className="pb-src">
                <span>{T['pbS' + s.n + 'At']}</span>
                <span aria-hidden="true"> · </span>
                <a href={s.url} target="_blank" rel="noopener noreferrer">{T.pbSrcLabel}: {T['pbS' + s.n + 'Src']}</a>
              </p>
            </li>
          ))}
        </ul>

        <div className="pb-solve">
          <h3 className="pb-solve-h">{T.pbSolveTitle}</h3>
          <ol className="pb-rows">
            {PAIRS.map((p) => (
              <li className="pb-row" key={p.n}>
                <div className="pb-prob">
                  <span className="pb-tag">{T.pbProblemTag}</span>
                  <p>{T['pbP' + p.n]}</p>
                </div>
                <span className="pb-arrow" aria-hidden="true" />
                <div className="pb-sol">
                  <span className="pb-tag is-sol">E9-Bridge</span>
                  <p>{T['pbA' + p.n]}</p>
                </div>
                <div className="pb-go">
                  {p.links.map((l) => <Link key={l.to} className="pb-link" to={l.to}>{T[l.key]}</Link>)}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
