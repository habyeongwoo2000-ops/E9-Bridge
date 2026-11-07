import { Link } from 'react-router-dom';
import { nearby } from '../config/nearby.js';
import { places } from '../data/places.js';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { lifeLabels } from '../i18n/life.js';
import { useFavoritePlaces } from '../lib/favoritePlaces.js';
import PlaceCard from './PlaceCard.jsx';
import '../styles/pages/life.css';

export default function FavoritePlaces({ username }) {
  const { lang } = useI18n();
  const t = lifeLabels(lang);
  const { ids, toggle } = useFavoritePlaces(username);
  const saved = places.filter(place => ids.includes(place.id));
  const number = new Intl.NumberFormat(lang);

  return (
    <section className="life-favorites">
      <div className="life-section-heading">
        <h2>{t.favorites}</h2>
        <span className="life-count">{t.resultsCount.replace('{n}', number.format(saved.length))}</span>
      </div>
      <p className="hint">{t.deviceOnly}</p>
      {nearby.categories.map(category => {
        const matches = saved.filter(place => place.category === category);
        return (
          <section key={category} className="life-favorite-group">
            <div className="life-section-heading">
              <h3>{t[category]}</h3>
              <span className="life-count">{number.format(matches.length)}</span>
            </div>
            {matches.length ? (
              <ul className="life-list">
                {matches.map(place => <PlaceCard key={place.id} place={place} saved onToggle={() => toggle(place.id)} />)}
              </ul>
            ) : <p className="hint">{t.noFavorites}</p>}
          </section>
        );
      })}
      <Link className={saved.length ? 'btn btn-ghost' : 'btn btn-go'} to="/nearby">{t.nearby} →</Link>
    </section>
  );
}
