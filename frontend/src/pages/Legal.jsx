/* 법률 자문 받기
   ------------------------------------------------------------------
   ① 먼저 "내 경우엔 어디로?" 를 고르게 합니다. 기관을 나열하기만 하면 답이 안 됩니다.
   ② 전화번호를 카드의 주인공으로 두고, 눌러서 바로 걸리게 합니다.
   ③ 무료와 유료를 배지와 색으로 갈라 둡니다. 돈이 없는 사람에게는 이 구분이
      이 쪽에서 가장 중요한 정보입니다.
   2026-11-04: 고용노동부(1350 · moel.go.kr · 노동포털 온라인 진정)를 무료 목록 맨 앞에 더했습니다.
   ------------------------------------------------------------------ */

import SubVisual from '../components/SubVisual.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import '../styles/pages/legal.css';

const MOEL = 'https://www.moel.go.kr';
const LABOR_PORTAL = 'https://labor.moel.go.kr';

/* 무료·유료 기관 카드 하나 */
function Org({ kind, badge, nameKey, ko, tel, telLabel, note, bodyKey, ruleKey, links, T }) {
  return (
    <article className={'legal-org ' + kind}>
      <p className="legal-badge">{T[badge]}</p>
      <h4 className="legal-name">
        <span className="legal-name-loc">{T[nameKey]}</span>
        <span className="legal-name-ko" lang="ko">{ko}</span>
      </h4>
      <a className="legal-tel is-big" href={'tel:' + tel}>{telLabel || tel}</a>
      {note && <p className="legal-tel-note">{note}</p>}
      <p>{T[bodyKey]}</p>
      {ruleKey && <p className="legal-rule">{T[ruleKey]}</p>}
      <p className="legal-link">
        {links.map((l, i) => (
          <span key={l.href}>
            {i ? <span className="legal-link-sep" aria-hidden="true"> · </span> : null}
            <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            {l.note ? <span className="legal-link-note"> ({l.note})</span> : null}
          </span>
        ))}
      </p>
    </article>
  );
}

export default function Legal() {
  const { T } = useI18n();
  useDocTitle('lgTitle');

  return (
    <>
      <SubVisual crumbs={['secNoLegal']} en="Legal Aid" title="lgTitle" />
      <main id="top">
        <section id="legal" className="band band-legal">
          <div className="wrap">
            <p className="sec-lead">{T.lgLead}</p>

            {/* ① 어디로 걸어야 하는지 먼저 고르게 합니다. */}
            <h3 className="sub-h">{T.lgPickTitle}</h3>
            <div className="legal-pick">
              <article className="legal-pick-item">
                <p className="legal-pick-q">{T.lgPick1Q}</p>
                <p className="legal-pick-a">{T.lgPick1A}</p>
                <p className="legal-pick-go"><a className="legal-tel" href="tel:1350">1350</a> <span>{T.lgPick1Go}</span></p>
                {/* 고용노동부 누리집 — 진정 서식과 지방고용노동청 연락처가 모두 여기서 시작합니다. */}
                <p className="legal-pick-web">
                  <span>{T.lgPick1Web}</span>{' '}
                  <a href={MOEL} target="_blank" rel="noopener noreferrer">moel.go.kr ↗</a>
                </p>
              </article>
              <article className="legal-pick-item">
                <p className="legal-pick-q">{T.lgPick2Q}</p>
                <p className="legal-pick-a">{T.lgPick2A}</p>
                <p className="legal-pick-go"><a className="legal-tel" href="tel:1331">1331</a></p>
              </article>
              <article className="legal-pick-item">
                <p className="legal-pick-q">{T.lgPick3Q}</p>
                <p className="legal-pick-a">{T.lgPick3A}</p>
                <p className="legal-pick-go"><a className="legal-tel" href="tel:1345">1345</a> <span>{T.lgPick3Go}</span></p>
              </article>
            </div>

            {/* ③ 무료 — 고용노동부 · 대한법률구조공단 · 국가인권위원회 */}
            <h3 className="sub-h">{T.lgFreeHeading}</h3>
            <div className="legal-list is-3">
              <Org T={T} kind="is-free" badge="lgBadgeFree" nameKey="lgMoelName" ko="고용노동부"
                   tel="1350" note={T.lgMoelNote} bodyKey="lgMoelBody" ruleKey="lgMoelRule"
                   links={[{ href: MOEL, label: 'moel.go.kr' }, { href: LABOR_PORTAL, label: 'labor.moel.go.kr', note: T.lgMoelPortal }]} />
              <Org T={T} kind="is-free" badge="lgBadgeFree" nameKey="lgKlacName" ko="대한법률구조공단"
                   tel="132" note={T.lgTelFree} bodyKey="lgKlacBody" ruleKey="lgKlacRule"
                   links={[{ href: 'https://www.klac.or.kr', label: 'klac.or.kr' }]} />
              <Org T={T} kind="is-free" badge="lgBadgeFree" nameKey="lgNhrckName" ko="국가인권위원회"
                   tel="1331" note={T.lgTelFree} bodyKey="lgNhrckBody" ruleKey="lgNhrckRule"
                   links={[{ href: 'https://www.humanrights.go.kr', label: 'humanrights.go.kr' }]} />
            </div>

            <h3 className="sub-h">{T.lgPaidHeading}</h3>
            <p className="sec-lead">{T.lgPaidLead}</p>
            <div className="legal-list">
              <Org T={T} kind="is-paid" badge="lgBadgePaid" nameKey="lgKvisaName" ko="법률사무소 K"
                   tel="0312178579" telLabel="031-217-8579" bodyKey="lgKvisaBody" ruleKey="lgKvisaRule"
                   links={[{ href: 'https://www.kvisa.co.kr', label: 'kvisa.co.kr' }]} />
              <Org T={T} kind="is-paid" badge="lgBadgePaid" nameKey="lgMajungName" ko="법무법인 마중"
                   tel="0231431158" telLabel="02-3143-1158" bodyKey="lgMajungBody" ruleKey="lgMajungRule"
                   links={[{ href: 'https://majungforeign.kr', label: 'majungforeign.kr' }]} />
            </div>

            <p className="disclaim">{T.lgPaidNote}</p>
            <p className="src">{T.lgChecked}</p>
            <p className="src">{T.lgMoelChecked}</p>
            <p className="disclaim">{T.disclaimer}</p>
          </div>
        </section>
      </main>
    </>
  );
}
