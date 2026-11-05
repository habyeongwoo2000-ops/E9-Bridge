/* 언론이 본 E-9 노동 현실 — 연세대 첫 화면 "연세는 지금" 구성을 본떴습니다.
   ------------------------------------------------------------------
   · 왼쪽: 분류 탭(전체·사업장 변경·임금·보험금·안전·주거) + 지금 고른 기사 제목·요약·링크 + 이전/다음
   · 오른쪽: 그림 카드가 가로로 이어지는 슬라이드(오른쪽 끝이 화면 밖으로 살짝 넘칩니다).
     카드를 누르거나 밀어서(휴대폰) 넘기면 왼쪽 기사가 바뀝니다.
   · 기사 제목은 언론사가 쓴 한국어 제목을 그대로 옮깁니다(번역하지 않음, lang="ko").
     요약(nwS…)과 카드 위 핵심 숫자(nwK…)는 E9-Bridge가 쓴 문장이고 6개 언어로 번역해 둡니다.
   · 사진: 기사와 비슷한 장면의 "무료 사용 허락" 사진(Unsplash 라이선스·PAKUTASO 이용약관)을
     frontend/public/assets/news/ 에 둡니다. 언론사 기사 사진은 저작권 때문에 쓰지 않습니다.
     사진 파일이 없거나 못 불러오면 직접 그린 그림(NewsArt.jsx)이 대신 나옵니다.

   ■ 기사를 바꿀 때: ARTICLES 의 제목·날짜·주소를 원문과 똑같이 적고,
     요약(nwS…)·핵심 숫자(nwK…)를 6개 언어 파일에서 함께 고치세요.
   ------------------------------------------------------------------ */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import NewsArt from './NewsArt.jsx';

/* 사진이 있으면 사진, 못 불러오면 그림으로 바꿉니다(파일을 아직 안 넣었을 때도 화면이 비지 않게). */
function CardPic({ a, label }) {
  const [broken, setBroken] = useState(false);
  if (!a.img || broken) return <span className="nwx-img"><NewsArt kind={a.art} /></span>;
  return (
    <>
      <span className="nwx-img"><img src={a.img} alt="" loading="lazy" onError={() => setBroken(true)} /></span>
      {/* 무료 사진이라도 찍은 사람을 밝혀 둡니다 */}
      <span className="nwx-credit">{label} {a.credit}</span>
    </>
  );
}

const ARTICLES = [
  { id: 'a', img: '/assets/news/a-documents.jpg', credit: 'Wesley Tingey / Unsplash', tab: 'change', art: 'change', outlet: '뉴시스', date: '2026-07-30', tag: 'nwTagChange',
    title: '"회사 바꿔달라" 외국인력 민원 3년새 3배…의무근무 \'1.5년\' 단축 추진',
    url: 'https://www.newsis.com/view/NISX20260729_0003728864', to: '/check#deadline', toKey: 'dlTitle' },
  { id: 'b', img: '/assets/news/b-warehouse.jpg', credit: 'Bernd Dittrich / Unsplash', tab: 'change', art: 'deadline', outlet: 'CBS노컷뉴스', date: '2025-07-27', tag: 'nwTagChange',
    title: '지게차에 결박 당하고, 조롱당해도…왜 가만히 있었을까',
    url: 'https://www.nocutnews.co.kr/news/6375895', to: '/check#reason', toKey: 'ckTitle' },
  { id: 'c', img: '/assets/news/c-won.jpg', credit: 'susi-paku / PAKUTASO', tab: 'money', art: 'wage', outlet: '서울경제', date: '2026-05-18', tag: 'nwTagWage',
    title: '외국인 체불 1600억…\'이직 제한\' 약점 파고든 사업주',
    url: 'https://www.sedaily.com/article/20045502', to: '/legal', toKey: 'secNoLegal' },
  { id: 'd', img: '/assets/news/d-airport.jpg', credit: 'Artur Tumasjan / Unsplash', tab: 'money', art: 'payout', outlet: '헤럴드경제', date: '2026-09-07', tag: 'secNoPay',
    title: '외국인 노동자 휴면보험금 323억 \'역대최대\'…보험금 찾아주기 \'비상\'',
    url: 'https://biz.heraldcorp.com/article/10864625', to: '/check#payout', toKey: 'secNoPay' },
  { id: 'e', img: '/assets/news/e-hardhats.jpg', credit: 'Pop & Zebra / Unsplash', tab: 'safe', art: 'safety', outlet: '한국경제', date: '2026-07-21', tag: 'nwTagAcc',
    title: '올 중대재해 사망 6명 중 1명 외국인',
    url: 'https://www.hankyung.com/article/2026072176631', to: '/legal', toKey: 'secNoLegal' },
  { id: 'f', img: '/assets/news/f-greenhouse.jpg', credit: 'ELFA / PAKUTASO', tab: 'safe', art: 'heat', outlet: '한겨레', date: '2026-08-04', tag: 'nwTagHouse',
    title: '46.7도 치솟는 비닐하우스 \'집\'…이주노동자의 \'폭염과 사투\' [현장]',
    url: 'https://v.daum.net/v/20260804050659632', to: '/faq#faq-dorm_standard', toKey: 'faqTitle' }
];

const TABS = [['all', 'nwAll'], ['change', 'nwTagChange'], ['money', 'nwTabMoney'], ['safe', 'nwTabSafe']];

const pad = (n) => ('0' + n).slice(-2);

export default function NewsSection() {
  const { T } = useI18n();
  const [tab, setTab] = useState('all');
  const [i, setI] = useState(0);
  const railRef = useRef(null);
  const scrolling = useRef(false);
  const timer = useRef(null);

  const list = useMemo(() => ARTICLES.filter((a) => tab === 'all' || a.tab === tab), [tab]);
  const cur = list[Math.min(i, list.length - 1)];

  /* 카드 i 가 레일 맨 앞에 오도록 옮깁니다. */
  const go = useCallback((n, smooth = true) => {
    const k = (n + list.length) % list.length;
    setI(k);
    const rail = railRef.current;
    const card = rail && rail.children[k];
    if (!rail || !card) return;
    scrolling.current = true;
    rail.scrollTo({ left: card.offsetLeft - rail.children[0].offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => { scrolling.current = false; }, 600);
  }, [list.length]);

  // 탭을 바꾸면 첫 카드로 돌아갑니다.
  useEffect(() => { setI(0); go(0, false); }, [tab]); // eslint-disable-line react-hooks/exhaustive-deps

  /* 손으로 밀어 넘겼을 때(휴대폰) 맨 앞에 온 카드를 지금 기사로 삼습니다. */
  const onScroll = () => {
    if (scrolling.current) return;
    const rail = railRef.current;
    if (!rail || !rail.children.length) return;
    const step = rail.children[1] ? rail.children[1].offsetLeft - rail.children[0].offsetLeft : rail.clientWidth;
    const k = Math.max(0, Math.min(list.length - 1, Math.round(rail.scrollLeft / step)));
    if (k !== i) setI(k);
  };

  return (
    <section className="nwx" id="news" aria-labelledby="nwTitle">
      <div className="wrap">
        <div className="nwx-head">
          <p className="sec-eyebrow" aria-hidden="true">In the News</p>
          <h2 className="sec-title" id="nwTitle">{T.nwTitle}</h2>
          <p className="nwx-lead">{T.nwLead}</p>
        </div>

        <div className="nwx-body">
          <div className="nwx-text">
            <div className="nwx-tabs" role="tablist" aria-label={T.nwTitle}>
              {TABS.map(([k, key]) => (
                <button key={k} type="button" role="tab" aria-selected={tab === k}
                        className={'nwx-tab' + (tab === k ? ' is-on' : '')} onClick={() => setTab(k)}>{T[key]}</button>
              ))}
            </div>

            {cur && (
              <article className="nwx-art" key={cur.id} aria-live="polite">
                <p className="nwx-tag">{T[cur.tag]}</p>
                <h3 className="nwx-h" lang="ko">
                  <a href={cur.url} target="_blank" rel="noopener noreferrer">{cur.title}</a>
                </h3>
                <p className="nwx-meta"><b>{cur.outlet}</b><span aria-hidden="true">·</span><time dateTime={cur.date}>{cur.date}</time></p>
                <p className="nwx-sum">{T['nwS' + cur.id]}</p>
                <div className="nwx-links">
                  <a className="more" href={cur.url} target="_blank" rel="noopener noreferrer">{T.nwOrig}</a>
                  <Link className="nwx-bridge" to={cur.to}><span>{T.nwBridge}</span> {T[cur.toKey]}<span aria-hidden="true"> →</span></Link>
                </div>
              </article>
            )}

            <div className="nwx-ctrl">
              <span className="nwx-count" aria-hidden="true"><b>{pad(i + 1)}</b> / {pad(list.length)}</span>
              <button type="button" className="circ" aria-label={T.carPrev} onClick={() => go(i - 1)}>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12.5 4 6.5 10l6 6" /></svg>
              </button>
              <button type="button" className="circ" aria-label={T.carNext} onClick={() => go(i + 1)}>
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7.5 4l6 6-6 6" /></svg>
              </button>
            </div>
          </div>

          <div className="nwx-rail" ref={railRef} onScroll={onScroll}>
            {list.map((a, k) => (
              <button key={a.id} type="button" className={'nwx-card' + (k === i ? ' is-on' : '')}
                      aria-label={a.title} aria-pressed={k === i} onClick={() => go(k)}>
                <CardPic a={a} label={T.nwPhoto} />
                <span className="nwx-cap">
                  <span className="nwx-cap-tag">{T[a.tag]}</span>
                  <span className="nwx-cap-k">{T['nwK' + a.id]}</span>
                  <span className="nwx-cap-o">{a.outlet} · {a.date}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="nwx-note">{T.nwNote} {T.nwArtNote}</p>
      </div>
    </section>
  );
}
