/* 공통 바닥글 — 공식 창구 · 이 서비스가 하지 않는 것 · 문의 · 소셜 · 면책 */

import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider.jsx';
import ViewSwitch from './ViewSwitch.jsx';

export const CONTACT_MAIL = 'habyeongwoo2000@gmail.com';
export const SNS = {
  instagram: 'https://www.instagram.com/e9_bridge/',
  facebook: 'https://www.facebook.com/profile.php?id=61591144925891&locale=ko_KR'
};

export default function Footer() {
  const { T } = useI18n();
  return (
    <footer className="band-ink" id="siteFoot">
      <div className="wrap">
        <div className="ft-brand">
          <img src="/assets/logo-mark-white.svg" alt="" width="40" height="40" />
          <div><strong>E9-Bridge</strong><em>{T.brandSub}</em></div>
        </div>
        <h2>{T.ofTitle}</h2>
        <p className="sec-lead">{T.ofLead}</p>
        <ul className="official">
          <li><b><a href="tel:1345">1345</a></b><span>{T.of1345}</span></li>
          <li><b><a href="tel:1350">1350</a></b><span>{T.of1350}</span></li>
          <li><b><a href="https://www.eps.go.kr" target="_blank" rel="noopener noreferrer">eps.go.kr</a></b><span>{T.ofEps}</span></li>
          <li><b><a href="https://www.hikorea.go.kr" target="_blank" rel="noopener noreferrer">hikorea.go.kr</a></b><span>{T.ofHi}</span></li>
        </ul>

        <div className="official-notdo">
          <p className="official-notdo-h">{T.ndTitle}</p>
          <p>· <span>{T.nd1}</span></p>
          <p>· <span>{T.nd2}</span></p>
          <p>· <span>{T.nd3}</span></p>
        </div>

        {/* 문의 · 소셜 — 로고를 누르면 새 창으로 열립니다 */}
        <div className="ft-contact">
          <a className="ft-mail" href={'mailto:' + CONTACT_MAIL}>
            <span>{T.ftMail}</span>
            <span className="ft-mail-addr">{CONTACT_MAIL}</span>
          </a>
          <div className="ft-social">
            <a href={SNS.instagram} target="_blank" rel="noopener noreferrer" className="ft-sns" aria-label={T.ftInstagram || 'Instagram'}>
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false">
                <defs>
                  <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
                    <stop offset="0" stopColor="#fdf497" />
                    <stop offset=".05" stopColor="#fdf497" />
                    <stop offset=".45" stopColor="#fd5949" />
                    <stop offset=".6" stopColor="#d6249f" />
                    <stop offset=".9" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="url(#igGrad)" />
                <rect x="4.6" y="4.6" width="14.8" height="14.8" rx="4.2" fill="none" stroke="#fff" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="3.7" fill="none" stroke="#fff" strokeWidth="1.7" />
                <circle cx="17.2" cy="6.9" r="1.15" fill="#fff" />
              </svg>
            </a>
            <a href={SNS.facebook} target="_blank" rel="noopener noreferrer" className="ft-sns" aria-label={T.ftFacebook || 'Facebook'}>
              <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10.5" fill="#1877F2" />
                <path fill="#fff" d="M15.1 12.6l.42-3.03h-2.9V7.6c0-.83.28-1.56 1.5-1.56h1.52V3.32c-.27-.04-.84-.12-1.92-.12-2.26 0-3.82 1.38-3.82 3.9v2.47H7.98v3.03h2.92v7.83c.58.09 1.17.13 1.77.13s1.19-.04 1.77-.13v-7.83z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="official-foot">
          <p>{T.disclaimer}</p>
          <p>E9-Bridge · <span>{T.brandSub}</span> · <span>{T.ftTeam}</span></p>
          <p><Link className="foot-privacy" to="/privacy">{T.navPrivacy}</Link></p>
          <ViewSwitch />
        </div>
      </div>
    </footer>
  );
}
