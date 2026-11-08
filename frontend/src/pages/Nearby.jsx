import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import PlaceCard from '../components/PlaceCard.jsx';
import ConvenienceMedicine from '../components/ConvenienceMedicine.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { nearby } from '../config/nearby.js';
import { places } from '../data/places.js';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { lifeLabels } from '../i18n/life.js';
import { findPlaces } from '../lib/nearby.js';
import { currentPosition } from '../lib/location.js';
import { useFavoritePlaces } from '../lib/favoritePlaces.js';
import '../styles/pages/life.css';

export default function Nearby() {
  const { lang } = useI18n();
  const t = lifeLabels(lang);
  const { me } = useAuth();
  const favorites = useFavoritePlaces(me?.username);
  const [category, setCategory] = useState(nearby.categories[0]);
  const [area, setArea] = useState({ region: '' });
  const [status, setStatus] = useState('idle');
  const request = useRef(0);
  const results = findPlaces(places, nearby, category, area);
  const regionName = area.position ? t.currentLocation : nearby.regions.find(region => region.id === area.region)?.label;
  const resultCount = t.resultsCount.replace('{n}', new Intl.NumberFormat(lang).format(results.length));
  const statusText = status === 'loading' ? t.locating : status === 'failed' ? t.failed :
    regionName ? (results.length ? '' : t.empty) : t.prompt;

  async function locate() {
    const id = ++request.current;
    setStatus('loading');
    try {
      const position = await currentPosition();
      if (request.current !== id) return;
      setArea({ position });
      setStatus('idle');
    } catch {
      if (request.current === id) setStatus('failed');
    }
  }

  function chooseRegion(event) {
    request.current++;
    setArea({ region: event.target.value });
    setStatus('idle');
  }

  return (
    <main id="top">
      <SubVisual label={t.nearby} en="Nearby" />
      <div className="wrap life-page">
        <div className="life-categories" role="group" aria-label={t.category}>
          {nearby.categories.map(key => (
            <button key={key} type="button" className="chip" aria-pressed={category === key}
                    onClick={() => setCategory(key)}>{t[key]}</button>
          ))}
        </div>
        {nearby.demo && <p className="life-note">{t.demo}</p>}
        <div className="life-controls">
          <label className="field">{t.region}
            <select value={area.region || ''} onChange={chooseRegion}>
              <option value="">{t.choose}</option>
              {nearby.regions.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}
            </select>
          </label>
          <button type="button" className="btn btn-go" onClick={locate} disabled={status === 'loading'}>{t.locate}</button>
        </div>
        <div className="life-result-status" role="status">
          {statusText && <p>{statusText}</p>}
          {regionName && status !== 'loading' && (
            <div className="life-result-context"><span>{regionName}</span><strong>{resultCount}</strong></div>
          )}
        </div>
        <ul className="life-list">
          {results.map((place) => (
            <PlaceCard key={place.id} place={place} saved={favorites.ids.includes(place.id)}
                       onToggle={me ? () => favorites.toggle(place.id) : undefined} />
          ))}
        </ul>
        {category === 'medical' && <ConvenienceMedicine labels={t} />}
        <Link className="btn btn-ghost" to="/guide">{t.guide} →</Link>
      </div>
    </main>
  );
}
