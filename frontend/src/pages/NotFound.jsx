/* 없는 주소 — 첫 화면과 주요 기능으로 안내합니다. */
import { Link } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';

export default function NotFound() {
  const { T } = useI18n();
  useDocTitle(null);
  return (
    <>
      <SubVisual crumbs={[]} en="404" title="docTitle" />
      <main id="top">
        <section className="band">
          <div className="wrap">
            <p className="sec-lead">404 · {T.navCheck} · {T.navUpdates}</p>
            <p><Link className="btn btn-go" to="/">{T.crumbHome}</Link></p>
          </div>
        </section>
      </main>
    </>
  );
}
