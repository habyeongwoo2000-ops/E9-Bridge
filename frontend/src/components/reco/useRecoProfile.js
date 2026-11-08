/* 맞춤 지원 프로필 — 이 기기에 저장하고, 로그인했으면 계정(내 정보 요약의 reco 칸)에도 저장합니다.
   처음 여는 사람이 "내 상황 확인"을 해 두었으면 그 내용으로 상황을 미리 골라 둡니다. */

import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useSummary } from '../../context/SummaryContext.jsx';
import { cleanProfile, loadProfile, saveProfile } from '../../lib/reco.js';
import { load, save } from '../../lib/storage.js';
import { fmt, today } from '../../lib/dates.js';

/* 내 상황 확인(기한·사유·정산)에 넣은 값 → 지금 상황 */
function sitsFromSummary(sum) {
  if (!sum) return [];
  const out = [];
  if (sum.deadline && sum.deadline.leave) out.push('change');
  if (sum.reason && sum.reason.q1 === 'wage') out.push('wage');
  if (sum.payout && (sum.payout.exit || (sum.payout.elig && sum.payout.elig.type === 'leave'))) out.push('return');
  return out;
}

export function useRecoProfile() {
  const { me } = useAuth();
  const { sum, loaded, save: saveSum } = useSummary();
  const [profile, setProfile] = useState(loadProfile);
  const [prefilled, setPrefilled] = useState(false);
  const synced = useRef(false);

  /* 계정에 저장된 프로필이 있고 이 기기에는 없으면 가져옵니다. 없으면 내 상황 확인 값으로 채웁니다. */
  useEffect(() => {
    if (!loaded || synced.current) return;
    synced.current = true;
    const local = loadProfile();
    if (sum && sum.reco && !local.sido) { const p = cleanProfile(sum.reco); setProfile(p); saveProfile(p); return; }
    if (!local.sits.length && load('recoProfile') === null) {
      const sits = sitsFromSummary(sum);
      if (sits.length) { setProfile((p) => ({ ...p, sits })); setPrefilled(true); }
    }
  }, [loaded, sum]);

  const timer = useRef(null);
  const update = useCallback((patch) => {
    setProfile((p) => {
      const next = cleanProfile({ ...p, ...patch });
      saveProfile(next);
      if (me) { clearTimeout(timer.current); timer.current = setTimeout(() => saveSum('reco', next), 800); }
      return next;
    });
  }, [me, saveSum]);

  const reset = useCallback(() => {
    const empty = cleanProfile(null);
    setProfile(empty); saveProfile(empty); setPrefilled(false);
    if (me) saveSum('reco', empty);
  }, [me, saveSum]);

  return { profile, update, reset, prefilled };
}

/* 브라우저 알림 — 허락을 받았으면 하루 한 번만 띄웁니다. */
export function notifySupported() {
  return typeof window !== 'undefined' && 'Notification' in window;
}
export function maybeNotify(t, soon, fresh) {
  if (!notifySupported() || Notification.permission !== 'granted' || (!soon && !fresh)) return;
  const day = fmt(today());
  if (load('recoNotified') === day) return;
  save('recoNotified', day);
  try {
    // eslint-disable-next-line no-new
    new Notification(t.notifTitle, { body: t.notifBody.replace('{soon}', soon).replace('{fresh}', fresh), icon: '/assets/logo-mark.svg' });
  } catch (e) { /* 일부 휴대폰 브라우저는 페이지에서 바로 알림을 만들 수 없습니다 */ }
}
