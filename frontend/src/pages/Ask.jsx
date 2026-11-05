/* 챗봇 질문 — 지금은 숨겨 둔 기능입니다 (config/features.js 의 chatbot: false).
   ------------------------------------------------------------------
   답을 찾는 순서
     1) 추천 질문 칩 → 지식베이스(KB)의 정해진 답을 그 자리에서 보여 줍니다(서버를 기다리지 않음).
     2) 자주 묻는 질문(FAQ_KB)과 충분히 닮았으면 FAQ 답을 바로 보여 주고,
        원하면 [AI에게 물어보기]로 이어서 묻게 합니다.
     3) 그 밖에는 서버(/api/ask, Gemini)에 묻습니다.
        서버가 안 되면 브라우저 안의 지식베이스에서 찾아 보고, 그것도 없으면
        "지금 붐빈다" 또는 "공식 창구에 물어보라"고 안내합니다.
   모든 답에는 근거(출처)와 "참고용 정보" 문구가 붙습니다.
   ------------------------------------------------------------------ */

import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubVisual from '../components/SubVisual.jsx';
import { useI18n, useDocTitle } from '../i18n/I18nProvider.jsx';
import { apiPost } from '../lib/api.js';
import { sDrop, sGet } from '../lib/storage.js';
import { KB, FAQ_KB } from '../data/kb.js';

/* 추천 질문 칩은 순서대로 지식베이스 항목과 짝을 이룹니다. */
const CHIP_KEYS = ['apply-deadline', 'job-period', 'limit-count', 'unpaid-wage',
  'exit-insurance', 'how-to', 'employer-fault', 'e74-change'];

/* ---------- 자주 묻는 질문 바로 답변 ----------
   질문에 그 주제의 낱말이 충분히 들어 있거나, FAQ 질문 문장과 많이 닮았으면 FAQ 답을 씁니다.
   애매하면(점수가 낮거나 두 주제가 비슷하면) 찾지 않은 것으로 보고 AI 에게 넘깁니다.
   틀린 FAQ 답을 보여 주느니 조금 기다려 AI 답을 받는 편이 낫기 때문입니다. */
function normQ(v) {
  return String(v || '').toLowerCase()
    .replace(/[?？!！.,，。·"'“”‘’~()[\]{}:;]/g, ' ').replace(/\s+/g, ' ').trim();
}
function grams(v) {
  const t = v.replace(/\s+/g, ''); const m = {}; let n = 0;
  for (let i = 0; i < t.length - 1; i++) { const g = t.substr(i, 2); m[g] = (m[g] || 0) + 1; n++; }
  return { m, n };
}
/* 글자 두 개씩 끊어 겹치는 비율(0~1). 띄어쓰기가 없는 크메르어에서도 동작합니다. */
function dice(a, b) {
  const A = grams(a); const B = grams(b);
  if (!A.n || !B.n) return 0;
  let hit = 0;
  Object.keys(A.m).forEach((g) => { if (B.m[g]) hit += Math.min(A.m[g], B.m[g]); });
  return (2 * hit) / (A.n + B.n);
}
/* 영문·숫자 낱말은 낱말 경계를 봅니다 (times 안의 mes 같은 우연한 일치를 막습니다). */
function kwHit(text, kw) {
  if (/^[a-z0-9 -]+$/.test(kw)) {
    return new RegExp('(^|[^a-z0-9])' + kw.replace(/[-]/g, '\\-') + '($|[^a-z0-9])').test(text);
  }
  return text.indexOf(kw) !== -1;
}
export function faqMatch(T, question) {
  const t = normQ(question);
  if (t.length < 2) return null;
  let best = null; let bs = 0; let second = 0;
  FAQ_KB.forEach((f) => {
    if (!T['faqA_' + f.key]) return;
    let sc = 0;
    f.keywords.forEach((k) => {
      const kk = normQ(k);
      if (kk && kwHit(t, kk)) sc += Math.min(kk.replace(/\s/g, '').length, 8);
    });
    const d = dice(t, normQ(T['faqQ_' + f.key]));
    const total = sc + (d >= 0.35 ? d * 10 : 0);
    if (total > bs) { second = bs; bs = total; best = f; }
    else if (total > second) second = total;
  });
  return best && bs >= 5 && bs >= second * 1.4 ? best : null;
}

/* 서버가 안 될 때 브라우저 안의 지식베이스에서 찾습니다. 낱말이 길게 겹칠수록 점수가 큽니다. */
function findEntry(q) {
  const text = q.toLowerCase();
  let best = null; let bestScore = 0;
  KB.forEach((item) => {
    let score = 0;
    item.keywords.forEach((k) => { if (text.indexOf(String(k).toLowerCase()) !== -1) score += String(k).length; });
    if (score > bestScore) { bestScore = score; best = item; }
  });
  return bestScore > 0 ? best : null;
}

/* 답 말풍선 하나 */
function Answer({ a, onMore }) {
  const { T } = useI18n();
  const ref = useRef(null);
  useEffect(() => { if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, [a]);
  if (a.wait) {
    return <div className="bubble bubble-a" ref={ref}><p><span className="spin" />{T.askThinking}</p></div>;
  }
  return (
    <div className="bubble bubble-a" ref={ref}>
      {a.tag && <span className="flag flag-faq">{a.tag}</span>}
      {a.review && <span className="flag">{T.askReview}</span>}
      {a.mt && <span className="flag">{T.askMtReview || 'Translation needs review'}</span>}
      {String(a.text || '').split('\n').filter((l) => l.trim()).map((l, i) => <p key={i}>{l.trim()}</p>)}
      {a.src && <p className="bubble-src">{T.askSourceLabel + ': ' + a.src}</p>}
      {a.offline && <p className="bubble-dis">{T.askOffline}</p>}
      <p className="bubble-dis">{T.disclaimer}</p>
      {a.more && (
        <button type="button" className="btn btn-ghost btn-sm ask-more" onClick={() => onMore(a)}>{T.askAskAi}</button>
      )}
    </div>
  );
}

let nextId = 1;

export default function Ask() {
  const { T, lang } = useI18n();
  const loc = useLocation();
  useDocTitle('askTitle');

  const [input, setInput] = useState('');
  const [thread, setThread] = useState([]);   // [{ id, u:'질문' } | { id, a:{…} }]
  const firstLang = useRef(lang);

  /* 공지에서 "이 공지에 대해 질문하기" 로 넘어온 질문 — ?q= 또는 sessionStorage 에 실려 옵니다.
     (일부 호스트가 쿼리를 버리는 일이 있어 두 곳에 함께 담아 보냅니다) */
  const [carried] = useState(() => {
    let c = null;
    try { c = new URLSearchParams(loc.search).get('q'); } catch (e) { c = null; }
    if (!c) c = sGet('eum.carryQ');
    return c ? c.slice(0, 600) : null;
  });

  const add = (item) => { const id = nextId++; setThread((t) => t.concat({ id, ...item })); return id; };
  const update = (id, a) => setThread((t) => t.map((m) => (m.id === id ? { ...m, a } : m)));

  const isMt = (hit) => !!(hit[lang] && hit.mt && hit.mt.indexOf(lang) !== -1);

  const askAi = (question) => {
    const id = add({ a: { wait: true } });
    apiPost('/api/ask', { question, lang })
      .then((data) => {
        if (!data || !data.answer) throw new Error('empty');
        update(id, { text: data.answer });
      })
      .catch((e) => {
        /* 서버가 잠깐 안 되더라도, 브라우저 안의 지식베이스에 답이 있으면 그 답을 줍니다. */
        const hit = findEntry(question);
        if (hit) { update(id, { text: hit[lang] || hit.en, src: hit.src, offline: true, review: hit.review, mt: isMt(hit) }); return; }
        /* 몰려서 실패한 것이면 그렇게 말해 줍니다. "답을 못 찾았다"고만 하면 다시 눌러 볼 생각을 못 합니다. */
        update(id, { text: e && e.retryable ? T.askBusy : T.askFallback, offline: true });
      });
  };

  const answer = (question) => {
    add({ u: question });
    const faq = faqMatch(T, question);
    if (faq) {
      add({ a: { text: T['faqA_' + faq.key], src: faq.src, tag: T.askFaqHit, more: question } });
      return;
    }
    askAi(question);
  };

  const onMore = (a) => {
    // 버튼을 한 번 누르면 없앱니다.
    setThread((t) => t.map((m) => (m.a === a ? { ...m, a: { ...a, more: null } } : m)));
    askAi(a.more);
  };

  const onChip = (c, i) => {
    setInput(c);
    const hit = KB.find((item) => item.key === CHIP_KEYS[i]);
    if (hit) {
      add({ u: c });
      add({ a: { text: hit[lang] || hit.en, src: hit.src, review: hit.review, mt: isMt(hit) } });
    } else answer(c);
  };

  const submit = (e) => {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    answer(q);
    setInput('');
  };

  /* 넘어온 질문은 화면이 뜬 뒤 잠깐 있다가 바로 물어봅니다. */
  useEffect(() => {
    sDrop('eum.carryQ');
    if (!carried) return undefined;
    setInput(carried);
    const t = setTimeout(() => answer(carried), 300);
    return () => clearTimeout(t);
    // 처음 한 번만 — React StrictMode 에서 두 번 불려도 앞의 타이머는 정리됩니다.
  }, []);

  /* 언어를 바꾸면 지난 대화를 지웁니다 — 앞 언어의 답과 새 언어의 답이 섞이지 않게. */
  useEffect(() => {
    if (lang === firstLang.current) return;
    firstLang.current = lang;
    setThread([]);
  }, [lang]);

  return (
    <>
      <SubVisual crumbs={['navFaq', 'navChatbot']} en="AI Chat" title="askTitle" />
      <main id="top">
        <section id="ask" className="band">
          <div className="wrap">
            <div className="chips" id="askChips">
              {(T.chips || []).map((c, i) => (
                <button key={i} type="button" className="chip" onClick={() => onChip(c, i)}>{c}</button>
              ))}
            </div>

            <form className="ask-form" id="askForm" onSubmit={submit}>
              <label className="sr" htmlFor="askInput">{T.askTitle}</label>
              <input type="text" id="askInput" placeholder={T.askPlaceholder} value={input}
                     onChange={(e) => setInput(e.target.value)} />
              <button type="submit" className="btn btn-go">{T.askSend}</button>
            </form>

            <div className="thread" id="thread">
              {thread.map((m) => (m.u != null
                ? <div className="bubble bubble-u" key={m.id}>{m.u}</div>
                : <Answer key={m.id} a={m.a} onMore={onMore} />))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
