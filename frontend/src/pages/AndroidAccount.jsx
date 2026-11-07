import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useI18n } from '../i18n/I18nProvider.jsx';
import SubVisual from '../components/SubVisual.jsx';
import FavoritePlaces from '../components/FavoritePlaces.jsx';

export default function AndroidAccount() {
  const { T } = useI18n();
  const { me, ready, logout } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');

  async function signOut() {
    setStatus('working');
    if (await logout()) navigate('/', { replace: true });
    else setStatus('failed');
  }

  return (
    <main id="top">
      <SubVisual crumbs={['navAccount']} en="My Page" title="acTitle" />
      <div className="wrap life-page">
        {!ready ? <p role="status">{T.authWorking}</p> : me ? (
          <>
            <div className="life-account-row">
              <strong>{me.nickname || me.username}</strong>
              <button type="button" className="btn btn-ghost btn-sm" disabled={status === 'working'} onClick={signOut}>{T.navLogout}</button>
            </div>
            {status === 'failed' && <p role="alert">{T.errNet}</p>}
            <FavoritePlaces key={me.username} username={me.username} />
          </>
        ) : <Link className="btn btn-go" to="/login?next=account">{T.navLogin}</Link>}
      </div>
    </main>
  );
}
