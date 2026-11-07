import ExternalLink from './ExternalLink.jsx';

const ministryGuide = 'https://www.mohw.go.kr/menu.es?mid=a10702040200';

export default function ConvenienceMedicine({ labels }) {
  return (
    <aside className="life-medicine" aria-labelledby="medicine-title">
      <h2 id="medicine-title">{labels.medicine}</h2>
      <p>{labels.medicineIntro}</p>
      <ul className="life-medicine-types">
        {labels.medicineTypes.map(type => <li key={type}>{type}</li>)}
      </ul>
      <p>{labels.medicineNote}</p>
      <ExternalLink className="btn btn-ghost btn-sm" href={ministryGuide}>{labels.medicineSource}</ExternalLink>
    </aside>
  );
}
