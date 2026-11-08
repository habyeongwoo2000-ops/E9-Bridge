/* 맞춤 지원 찾기 — 대회 주제(지역 주민 맞춤형 공공지원사업 추천) 화면
   ------------------------------------------------------------------
   1. 내 조건(시·도·시군구·업종·체류 기간·상황·관심 분야) → 맞춤 추천 목록
   2. 추천마다 "왜 추천했는지" 근거(✓ 맞음 · ! 확인 필요 · ✕ 안 맞음)
   3. 마감 임박 · 새로 생긴 사업 알림 (+ 이 기기 브라우저 알림)
   4. 사업마다 신청 준비 체크리스트와 내 진행 상황(관심 → 신청함 → 받음)
   5. 정부24 공공서비스 API 실시간 결과 (백엔드 /api/benefits)
   6. 시·도 지도 — 지역마다 내 조건에 맞는 사업 수, 누르면 그 지역으로
   점수는 lib/reco.js 의 규칙으로만 계산합니다(AI 아님).
   ------------------------------------------------------------------ */

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import ProgramCard from '../components/reco/ProgramCard.jsx';
import KoreaMap from '../components/reco/KoreaMap.jsx';
import Gov24Live from '../components/reco/Gov24Live.jsx';
import ExternalLink from '../components/ExternalLink.jsx';
import { useRecoProfile, maybeNotify, notifySupported } from '../components/reco/useRecoProfile.js';
import { useI18n } from '../i18n/I18nProvider.jsx';
import { recoLabels, fill } from '../i18n/reco.js';
import { isAndroidApp } from '../config/platform.js';
import { currentPosition } from '../lib/location.js';
import {
  SIDO, CITIES, INDUSTRIES, STAYS, SITUATIONS, CATS, PROGRAMS,
  recommend, countBySido, alertsOf, markSeen, loadTrack, saveTrack, nearestSido, mapSearchUrl
} from '../lib/reco.js';
import '../styles/pages/reco.css';

const PAGE = 8;

function Chips({ legend, opts, keys, value, multi, onChange }) {
  const on = (k) => (multi ? value.indexOf(k) !== -1 : value === k);
  const flip = (k) => {
    if (!multi) return onChange(value === k ? '' : k);
    return onChange(on(k) ? value.filter((x) => x !== k) : [...value, k]);
  };
  return (
    <fieldset className="rp-field">
      <legend>{legend}</legend>
      <div className="rp-chips">
        {keys.map((k) => (
          <button key={k} type="button" className="chip" aria-pressed={on(k)} onClick={() => flip(k)}>{opts[k]}</button>
        ))}
      </div>
    </fieldset>
  );
}

export default function Recommend() {
  const { T, lang } = useI18n();
  const t = recoLabels(lang);
  useEffect(() => { document.title = t.title + ' | E9-Bridge'; }, [t.title]);

  const { profile, update, reset, prefilled } = useRecoProfile();
  const [shown, setShown] = useState(PAGE);
  const [track, setTrack] = useState(loadTrack);
  const [loc, setLoc] = useState('idle');
  const [perm, setPerm] = useState(() => (notifySupported() ? Notification.permission : 'unsupported'));
  const resRef = useRef(null);

  const list = useMemo(() => recommend(profile), [profile]);
  const counts = useMemo(() => countBySido(profile), [profile]);
  const alerts = useMemo(() => alertsOf(list), [list]);
  const regionName = (c) => (T.ntRegions && T.ntRegions[c]) || c;

  /* 떠날 때 지금 목록을 "본 것"으로 적어 둡니다 → 다음 방문 때 새로 생긴 것만 "새로 생김" */
  const listRef = useRef(list);
  listRef.current = list;
  useEffect(() => () => markSeen(listRef.current), []);
  useEffect(() => { setShown(PAGE); }, [profile]);
  useEffect(() => { maybeNotify(t, alerts.soon.length, alerts.fresh.length); }, [alerts, t]);

  const onTrack = (key, v) => setTrack((cur) => { const next = { ...cur, [key]: v }; saveTrack(next); return next; });
  const tracking = list.filter((r) => track[r.p.key] && (track[r.p.key].s === 'want' || track[r.p.key].s === 'applied'));

  const pickSido = (s) => update({ sido: s, city: '' });
  const locate = async () => {
    setLoc('loading');
    try { const pos = await currentPosition(); pickSido(nearestSido(pos.lat, pos.lng)); setLoc('idle'); }
    catch (e) { setLoc('failed'); }
  };
  const askNotify = async () => {
    try { const r = await Notification.requestPermission(); setPerm(r); if (r === 'granted') maybeNotify(t, alerts.soon.length, alerts.fresh.length); }
    catch (e) { setPerm('denied'); }
  };

  /* 지도 아래: 그 지역에서 찾아갈 곳(센터·쉼터·진료소) */
  const agencies = profile.sido
    ? PROGRAMS.filter((p) => p.region === profile.sido && /센터|쉼터|진료소|상담소|복지회/.test(p.n.ko.title)).slice(0, 8)
    : [];

  const jump = (key) => {
    const i = list.findIndex((r) => r.p.key === key);
    if (i >= shown) setShown(i + 1);
    setTimeout(() => { const el = document.getElementById('rc-' + key); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 80);
  };

  /* 첫 화면에서 카드를 눌러 들어오면(/recommend#rc-키) 그 카드로 내려갑니다. */
  const where = useLocation();
  useEffect(() => {
    const h = decodeURIComponent((where.hash || '').slice(1));
    if (h.indexOf('rc-') === 0) jump(h.slice(3));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [where.hash]);

  return (
    <main id="top">
      <SubVisual label={t.title} en="Support for you" />
      <div className="wrap reco-page">
        <p className="rp-lead">{t.lead}</p>

        <div className="rp-grid">
          {/* ① 내 조건 */}
          <section className="rp-panel" aria-labelledby="rpProfile">
            <div className="rp-panel-head">
              <h2 id="rpProfile">{t.profileTitle}</h2>
              <button type="button" className="rp-reset" onClick={reset}>{t.reset}</button>
            </div>
            {prefilled && <p className="rp-pre">{t.fromCheck}</p>}
            <div className="rp-selects">
              <label>
                <span>{t.sido}</span>
                <select value={profile.sido} onChange={(e) => pickSido(e.target.value)}>
                  <option value="">{t.sidoPick}</option>
                  {SIDO.map((s) => <option key={s} value={s}>{regionName(s)}</option>)}
                </select>
              </label>
              <label>
                <span>{t.city}</span>
                <select value={profile.city} disabled={!profile.sido || !(CITIES[profile.sido] || []).length}
                        onChange={(e) => update({ city: e.target.value })}>
                  <option value="">{t.cityAny}</option>
                  {(CITIES[profile.sido] || []).map((c) => <option key={c} value={c} lang="ko">{c}</option>)}
                </select>
              </label>
            </div>
            <Chips legend={t.ind} opts={t.indOpts} keys={INDUSTRIES} value={profile.ind} onChange={(v) => update({ ind: v })} />
            <Chips legend={t.stay} opts={t.stayOpts} keys={STAYS} value={profile.stay} onChange={(v) => update({ stay: v })} />
            <Chips legend={t.sits} opts={t.sitOpts} keys={SITUATIONS} value={profile.sits} multi onChange={(v) => update({ sits: v })} />
            <Chips legend={t.needs} opts={t.catOpts} keys={CATS} value={profile.needs} multi onChange={(v) => update({ needs: v })} />
          </section>

          {/* ⑥ 지도 */}
          <section className="rp-panel rp-map" aria-labelledby="rpMap">
            <div className="rp-panel-head">
              <h2 id="rpMap">{t.mapTitle}</h2>
              <button type="button" className="btn btn-ghost btn-sm" onClick={locate} disabled={loc === 'loading'}>
                {loc === 'loading' ? t.locating : t.locate}
              </button>
            </div>
            <p className="rp-small">{t.mapLead}</p>
            {loc === 'failed' && <p className="rp-small rp-warn">{t.locFail}</p>}
            <KoreaMap counts={counts} value={profile.sido} onPick={pickSido} />
            {profile.sido && (
              <div className="rp-ag">
                <h3>{fill(t.agTitle, { sido: regionName(profile.sido) })}</h3>
                {agencies.length ? (
                  <ul>
                    {agencies.map((p) => (
                      <li key={p.key}>
                        <ExternalLink href={mapSearchUrl(p)}><span lang="ko">{p.n.ko.title}</span></ExternalLink>
                        {p.phones[0] && <a href={'tel:' + p.phones[0].replace(/-/g, '')}>{p.phones[0]}</a>}
                      </li>
                    ))}
                  </ul>
                ) : <p className="rp-small">{t.agNone}</p>}
              </div>
            )}
          </section>
        </div>

        {/* ③ 알림 */}
        <section className="rp-alerts" aria-label={t.alSoon + ' · ' + t.alNew}>
          <div className="rp-al">
            <p><b>{alerts.soon.length}</b><span>{t.alSoon}</span></p>
            {alerts.soon.slice(0, 3).map((r) => (
              <button key={r.p.key} type="button" onClick={() => jump(r.p.key)}>{(r.p.n[lang] || r.p.n.en).title} · {r.p.n.until}</button>
            ))}
          </div>
          <div className="rp-al is-new">
            <p><b>{alerts.fresh.length}</b><span>{t.alNew}</span></p>
            {alerts.fresh.slice(0, 3).map((r) => (
              <button key={r.p.key} type="button" onClick={() => jump(r.p.key)}>{(r.p.n[lang] || r.p.n.en).title}</button>
            ))}
          </div>
          <div className="rp-al is-track">
            <p><b>{tracking.length}</b><span>{t.alTrack}</span></p>
            {tracking.slice(0, 3).map((r) => (
              <button key={r.p.key} type="button" onClick={() => jump(r.p.key)}>{(r.p.n[lang] || r.p.n.en).title} · {t.statusOpts[track[r.p.key].s]}</button>
            ))}
          </div>
          {!isAndroidApp && perm !== 'unsupported' && (
            <div className="rp-notify">
              {perm === 'granted' ? <span>🔔 {t.alNotifyOn}</span>
                : perm === 'denied' ? <span>{t.alNotifyNo}</span>
                : <button type="button" className="btn btn-ghost btn-sm" onClick={askNotify}>🔔 {t.alNotify}</button>}
            </div>
          )}
        </section>

        {/* ①② 추천 목록 */}
        <section className="rp-results" ref={resRef} aria-labelledby="rpRes">
          <h2 id="rpRes">{fill(t.resTitle, { n: list.filter((r) => r.fit).length })}</h2>
          {!profile.sido && <p className="rp-pre">{t.resNeedSido}</p>}
          {!list.length && <p className="rp-pre">{t.resEmpty}</p>}
          <ol className="rc-list">
            {list.slice(0, shown).map((r, i) => (
              <ProgramCard key={r.p.key} r={r} rank={i + 1} track={track} onTrack={onTrack} />
            ))}
          </ol>
          {list.length > shown && (
            <button type="button" className="btn btn-ghost rp-more" onClick={() => setShown((n) => n + PAGE)}>
              {fill(t.showMore, { n: Math.min(PAGE, list.length - shown) })}
            </button>
          )}
        </section>

        {/* ⑤ 정부24 실시간 */}
        <Gov24Live sido={profile.sido} />

        <p className="rp-note">{t.dataNote}</p>
      </div>
    </main>
  );
}
