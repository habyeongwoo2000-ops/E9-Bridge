import { Link } from 'react-router-dom';
import { nearby } from '../config/nearby.js';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { lifeLabels } from '../i18n/life.js';
import ExternalLink from './ExternalLink.jsx';

const details = {
  grocery: ['ingredients'],
  telecom: ['prepaid', 'visitQuestion'],
  medical: ['hours', 'interpretation']
};

export default function PlaceCard({ place, saved, onToggle }) {
  const { lang } = useI18n();
  const t = lifeLabels(lang);

  return (
    <li>
      <div className="life-section-heading">
        <h3>{nearby.demo ? t.example + ' · ' + t[place.category] : place.name}</h3>
        {place.distance !== undefined && <span className="life-count">{new Intl.NumberFormat(lang, { maximumFractionDigits: 1 }).format(place.distance)} km</span>}
      </div>
      <p lang="ko">{place.address}</p>
      {details[place.category]?.map(field => place[field] && <p key={field}><strong>{t[field]}</strong> {place[field]}</p>)}
      {place.checked && <p>{t.checked} {place.checked}</p>}
      <div className="form-actions">
        {!nearby.demo && place.phone && <a className="btn btn-ghost btn-sm" href={'tel:' + place.phone}>{t.call} {place.phone}</a>}
        <ExternalLink className="btn btn-go btn-sm" href={nearby.mapUrl(place)}>{t.map}</ExternalLink>
        {place.source && <ExternalLink className="btn btn-ghost btn-sm" href={place.source}>{t.source}</ExternalLink>}
        {onToggle ? (
          <button type="button" className="btn btn-ghost btn-sm life-save" aria-pressed={saved} onClick={onToggle}>
            {saved ? '♥ ' + t.saved : '♡ ' + t.save}
          </button>
        ) : <Link className="btn btn-ghost btn-sm" to="/login?next=nearby">{t.loginToSave}</Link>}
      </div>
    </li>
  );
}
