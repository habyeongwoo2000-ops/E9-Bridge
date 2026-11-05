/* 내 정보 한눈에 (로그인 개인화)
   로그인한 사람이 기한 계산 · 사유 자가진단 · 출국 정산에서 [계산] 버튼을 누르면
   "입력한 값"을 계정에 저장합니다(백엔드 accountController summarySave).
   첫 화면은 저장된 값을 받아 지금 고른 언어로 다시 계산해 한 번에 보여 줍니다.
   로그인하지 않았으면 아무것도 서버로 보내지 않습니다. */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getJSON, postJSON } from '../lib/api.js';
import { useAuth } from './AuthContext.jsx';

const SumCtx = createContext(null);

export function SummaryProvider({ children }) {
  const { me } = useAuth();
  const [sum, setSum] = useState(null);     // null = 아직 모름 / {} = 비어 있음
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    setLoaded(false);
    if (!me) { setSum(null); setLoaded(true); return undefined; }
    getJSON('/api/account?part=summary')
      .then((d) => { if (alive) setSum((d && d.summary) || {}); })
      .catch(() => { if (alive) setSum({}); })
      .then(() => { if (alive) setLoaded(true); });
    return () => { alive = false; };
  }, [me]);

  /* 한 부분(deadline·reason·payout)을 저장합니다. 성공하면 true. 로그인 안 했으면 null. */
  const save = useCallback(async (part, data) => {
    if (!me) return null;
    const out = await postJSON('/api/account', { action: 'summarySave', part, data });
    if (!out.ok || !out.data || !out.data.ok) { console.warn('summary save failed', out.status); return false; }
    setSum(out.data.summary || ((s) => s));
    return true;
  }, [me]);

  const clear = useCallback(async () => {
    const out = await postJSON('/api/account', { action: 'summaryClear' });
    if (!out.ok) return false;
    setSum({});
    return true;
  }, []);

  /* 요약을 메일로 — 서버에 메일 설정이 없으면(501) 화면이 메일 앱(mailto:)으로 대신 보냅니다. */
  const mail = useCallback((to, subject, text) => postJSON('/api/account', { action: 'summaryMail', to, subject, text }), []);

  const value = useMemo(() => ({ sum, loaded, save, clear, mail }), [sum, loaded, save, clear, mail]);
  return <SumCtx.Provider value={value}>{children}</SumCtx.Provider>;
}

export function useSummary() {
  const v = useContext(SumCtx);
  if (!v) throw new Error('useSummary must be used inside <SummaryProvider>');
  return v;
}
