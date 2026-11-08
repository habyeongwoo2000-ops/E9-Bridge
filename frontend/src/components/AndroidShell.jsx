import { Link, NavLink } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { lifeLabels } from '../i18n/life.js';
import { recoLabels } from '../i18n/reco.js';
import { useAuth } from '../context/AuthContext.jsx';
import '../styles/pages/android.css';

const icons = {
  '/check': <><rect x="8" y="10" width="32" height="30" rx="3" /><path d="M8 19h32M16 6v8M32 6v8" /><path className="ac" d="m17 29 5 5 10-10" /></>,
  '/recommend': <><path d="M24 6l5 10 11 1.6-8 7.8 2 11L24 31l-10 5.4 2-11-8-7.8L19 16z" /><circle className="ac" cx="24" cy="22" r="4" /></>,
  '/nearby': <><path d="M37 20c0 9-13 20-13 20S11 29 11 20a13 13 0 1 1 26 0Z" /><circle className="ac" cx="24" cy="20" r="4.5" /></>,
  '/guide': <><rect x="11" y="9" width="26" height="32" rx="3" /><path d="M18 9V6h12v3M24 21h7M24 31h7" /><path className="ac" d="m16 21 2 2 3-4m-5 12 2 2 3-4" /></>
};

function useDestinations() {
  const { lang } = useI18n();
  const life = lifeLabels(lang);
  return [
    ['/check', life.workStay || lifeLabels('en').workStay],
    ['/recommend', recoLabels(lang).navReco],
    ['/guide', life.guide],
    ['/nearby', life.nearby]
  ];
}

export function AndroidHeader() {
  const { T, lang, setLang, langs, langName } = useI18n();
  const { me } = useAuth();
  return (
    <header className="android-header">
      <div className="wrap android-header-row">
        <NavLink to="/" end className="brand" aria-label={T.crumbHome}>
          <img className="brand-mark" src="/assets/logo-mark.svg" alt="" width="42" height="42" />
          <span className="brand-text"><strong>E9-Bridge</strong></span>
        </NavLink>
        <div className="lang">
          <label className="lang-label" htmlFor="langSelect">{T.langLabel}</label>
          <select id="langSelect" aria-label={T.langLabel} value={lang} onChange={(event) => setLang(event.target.value)}>
            {langs.map((code) => <option key={code} value={code}>{langName(code)}</option>)}
          </select>
        </div>
        <NavLink className="auth-btn" to={me ? '/account' : '/login'}>{me ? T.acTitle : T.navLogin}</NavLink>
      </div>
    </header>
  );
}

export function AndroidNavigation() {
  const { T } = useI18n();
  const destinations = useDestinations();

  return (
    <nav className="android-nav" aria-label={T.navLabel}>
      <div className="wrap android-nav-items">
        {destinations.map(([to, label]) => (
          <NavLink key={to} to={to}>
            <span className="android-nav-icon" aria-hidden="true"><svg viewBox="0 0 48 48">{icons[to]}</svg></span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export function AndroidHome() {
  const { T } = useI18n();
  const destinations = useDestinations();
  return (
    <main id="top" className="android-home">
      <section className="android-hero">
        <div className="wrap">
          <h1>E9-Bridge</h1>
          <p>{T.brandSub}</p>
        </div>
      </section>
      <section className="wrap android-services">
        <div className="sec-head">
          <p className="sec-eyebrow" aria-hidden="true">E9-Bridge Service</p>
          <h2 className="sec-title">{T.svcTitle}</h2>
        </div>
        <ul className="svc-list">
          {destinations.map(([to, label]) => (
            <li key={to}><Link to={to}>
              <span className="svc-ic" aria-hidden="true"><svg viewBox="0 0 48 48">{icons[to]}</svg></span>
              <span className="svc-name">{label}</span>
            </Link></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
