/* 하위 쪽 머리 — 남색 띠 위의 이동 경로(홈 › …)와 영어 장식 글자, 그 아래 큰 쪽 제목

   <SubVisual crumbs={['navFaq', 'navBoard']} en="Q&A Board" title="navBoard" />
   crumbs 는 언어 키 목록입니다. 맨 앞에 홈 아이콘이 자동으로 붙습니다. */

import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider.jsx';

export default function SubVisual({ crumbs = [], en, title, label }) {
  const { T } = useI18n();
  return (
    <>
      <div className="subvis">
        <div className="wrap">
          <nav className="crumb" aria-label="breadcrumb">
            <Link to="/" className="crumb-home" aria-label={T.crumbHome}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
                <path d="M3.5 10.5 12 4l8.5 6.5V20a1 1 0 0 1-1 1h-5v-6h-5v6h-5a1 1 0 0 1-1-1z" />
              </svg>
            </Link>
            {crumbs.map((k) => (
              <Fragment key={k}>
                <span className="crumb-sep" aria-hidden="true" />
                <span>{T[k]}</span>
              </Fragment>
            ))}
            {label && <><span className="crumb-sep" aria-hidden="true" /><span>{label}</span></>}
          </nav>
          {en && <p className="subvis-en" aria-hidden="true">{en}</p>}
        </div>
      </div>
      <div className="wrap page-head"><h1>{label || T[title]}</h1></div>
    </>
  );
}
