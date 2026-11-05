/* 자주 묻는 질문 — 사업장 변경에서 가장 많이 나오는 질문
   질문·답 문장은 언어 파일의 faqQ_<key> / faqA_<key> 를 씁니다.
   근거 줄(법 조문 · 확인일)은 법령 이름이 한국어로만 공식 표기되므로 한국어 그대로 둡니다.
   /faq#faq-dorm_standard 처럼 들어오면 그 질문을 펼쳐 둡니다(다른 화면에서 바로 연결할 때). */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import '../styles/pages/anchors.css';

/* 분류 → 질문(키 · 근거). 근거는 data/kb.js 의 FAQ_KB src 와 같게 둡니다. */
const GROUPS = [
  { cat: 'count', items: [
    ['limit_count', '외국인근로자의 고용 등에 관한 법률 제25조 · 고용노동부 사업장 변경제도 안내 · 2026-08-23'],
    ['employer_fault', '외국인근로자의 고용 등에 관한 법률 제25조 · 고용노동부 사업장 변경제도 안내 · 2026-08-23'],
    ['dorm_standard', '근로기준법 제100조 · 외국인근로자 숙식정보 제공 및 비용징수 지침 · 2026-08-23']
  ] },
  { cat: 'period', items: [
    ['apply_1month', '외국인근로자의 고용 등에 관한 법률 제25조제3항 · 2026-08-23'],
    ['search_3month', '외국인근로자의 고용 등에 관한 법률 제25조제3항 · 2026-08-23'],
    ['no_side_work', '외국인근로자의 고용 등에 관한 법률 · 출입국관리법 · 2026-08-23']
  ] },
  { cat: 'stay', items: [
    ['unpaid_wage', '근로기준법 제36조·제43조 · 고용노동부 임금체불 신고 안내 · 2026-08-23'],
    ['stay_length', '외국인근로자의 고용 등에 관한 법률 제18조·제18조의2 · 제18조의4(재입국 취업 특례) · 2026-08-23'],
    ['e74_change', '출입국관리법 시행령 별표1의2 · 법무부 숙련기능인력(E-7-4) 점수제 안내 · 2026-08-23']
  ] },
  { cat: 'help', items: [
    ['where_help', '외국인종합안내센터(1345) · 고용노동부 고객상담센터(1350) · 2026-08-23']
  ] }
];

export default function Faq() {
  const { T } = useI18n();
  useDocTitle('faqTitle');
  const loc = useLocation();

  useEffect(() => {
    const id = decodeURIComponent((loc.hash || '').slice(1));
    if (!id || id.indexOf('faq-') !== 0) return undefined;
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el && el.tagName === 'DETAILS') { el.open = true; el.scrollIntoView({ block: 'start' }); }
    }, 80);
    return () => clearTimeout(t);
  }, [loc.hash]);

  return (
    <>
      <SubVisual crumbs={['navFaq']} en="FAQ" title="faqTitle" />
      <main id="top">
        <section id="faq" className="band">
          <div className="wrap">
            <p className="sec-lead">{T.faqLead}</p>

            <div className="faq-groups">
              {GROUPS.map((g) => (
                <section className="faq-group" key={g.cat} aria-labelledby={'faqCat_' + g.cat}>
                  <h3 className="faq-cat" id={'faqCat_' + g.cat}>{T['faqCat_' + g.cat]}</h3>
                  <div className="faq-list">
                    {g.items.map(([key, src]) => (
                      <details className="faq-item" key={key} id={'faq-' + key}>
                        <summary><span>{T['faqQ_' + key]}</span></summary>
                        <div className="faq-a">
                          <p>{T['faqA_' + key]}</p>
                          <p className="faq-src"><span>{T.faqSrcLabel}</span>: {src}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <p className="callout is-warn">{T.disclaimer}</p>
          </div>
        </section>
      </main>
    </>
  );
}
