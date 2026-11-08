/* 시·도 지도 — 내 조건에 맞는 사업 수만큼 진하게 칠합니다. 지역을 누르면 그 지역을 고릅니다.
   지도 모양: @svg-maps/south-korea (CC BY 4.0, https://github.com/VictorCazanave/svg-maps)
   광주·전남은 2026-07-01 통합(jeonnamgwangju)이라 두 조각을 같은 지역으로 칠합니다. */

import KOREA from '@svg-maps/south-korea';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import { recoLabels, fill } from '../../i18n/reco.js';

const ID_TO_SIDO = {
  'north-chungcheong': 'chungbuk', 'south-chungcheong': 'chungnam', 'north-jeolla': 'jeonbuk',
  'south-jeolla': 'jeonnamgwangju', gwangju: 'jeonnamgwangju', 'north-gyeongsang': 'gyeongbuk', 'south-gyeongsang': 'gyeongnam'
};
const sidoOf = (id) => ID_TO_SIDO[id] || id;

/* 연한 하늘색 → 남색 */
function shade(x) {
  const a = [234, 241, 253], b = [11, 45, 92];
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * x));
  return 'rgb(' + c.join(',') + ')';
}

export default function KoreaMap({ counts, value, onPick }) {
  const { T, lang } = useI18n();
  const t = recoLabels(lang);
  const max = Math.max(1, ...Object.values(counts));
  const name = (c) => (T.ntRegions && T.ntRegions[c]) || c;

  return (
    <div className="km-wrap">
      <svg className="km-map" viewBox={KOREA.viewBox} role="group" aria-label={t.mapTitle}>
        {KOREA.locations.map((loc) => {
          const s = sidoOf(loc.id);
          const n = counts[s] || 0;
          const on = value === s;
          return (
            <path key={loc.id} d={loc.path} className={'km-area' + (on ? ' is-on' : '')}
                  style={{ fill: on ? 'var(--blue)' : shade(n / max) }}
                  role="button" tabIndex={0} aria-pressed={on}
                  aria-label={name(s) + ' ' + fill(t.mapCount, { n })}
                  onClick={() => onPick(s)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(s); } }}>
              <title>{name(s) + ' · ' + fill(t.mapCount, { n })}</title>
            </path>
          );
        })}
      </svg>
      <ol className="km-legend">
        {Object.keys(counts).sort((a, b) => counts[b] - counts[a]).map((s) => (
          <li key={s}>
            <button type="button" className={value === s ? 'is-on' : undefined} aria-pressed={value === s} onClick={() => onPick(s)}>
              <i style={{ background: shade(counts[s] / max) }} aria-hidden="true" />
              <span>{name(s)}</span><b>{counts[s]}</b>
            </button>
          </li>
        ))}
      </ol>
      <p className="km-credit">{t.mapCredit}</p>
    </div>
  );
}
