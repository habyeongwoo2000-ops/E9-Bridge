/* E9-Bridge — 화면 동작
   서버 없이 브라우저에서만 돕니다. 입력한 값은 이 기기의 localStorage 에만 남습니다. */

(function () {
  'use strict';

  var STORE = 'eum.';
  /* core.js 가 미리 정한 언어입니다. 그 언어 파일 하나만 받아 둔 상태이므로
     여기서 곧바로 씁니다. 다른 언어로 바꾸면 그때 그 파일을 받아 옵니다. */
  var lang = (typeof EUM_LANG === 'string' && I18N[EUM_LANG]) ? EUM_LANG : 'ko';
  // 초안 언어는 core.js 가 함께 받아 둔 영어로 빠진 문장을 메웁니다.
  if (typeof eumMergeDraft === 'function') eumMergeDraft(lang);
  var T = I18N[lang] || I18N.ko || {};

  /* ---------- 작은 도구들 ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function save(k, v) { try { localStorage.setItem(STORE + k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(STORE + k); } catch (e) { return null; } }
  function drop(k) { try { localStorage.removeItem(STORE + k); } catch (e) {} }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* ---------- 언어 ---------- */
  /* 언어를 고르는 순서
     1) ?lang=vi 같은 주소 지정 — 상담사나 지인이 링크로 언어를 정해 보낼 때
     2) 이 기기에 저장된 선택
     3) 기기 언어 목록 (전체 태그 → 기본 코드 → 옛 코드)
     4) 셋 다 없으면 영어로 보여주고, 아직 지원하지 않는 언어라고 알립니다

     화면 문자열은 전부 i18n.js 에 박아 둡니다. 실시간 번역을 부르지 않으므로
     언어를 바꿔도 추가 비용이 없고 오프라인에서도 동작합니다.
     언어를 늘리려면 i18n.js·data.js·index.html 세 곳을 함께 고쳐야 합니다
     (README 4장 "언어 추가"). */

  // 브라우저가 옛 코드나 세 글자 코드를 보내는 경우를 흡수합니다.
  var LANG_ALIAS = { in: 'id', ind: 'id', vie: 'vi', kor: 'ko', eng: 'en', khm: 'km', nep: 'ne' };

  /* 지원 목록에 있는 코드만 통과시킵니다. ?lang=constructor 같은 입력도 여기서 막힙니다.
     I18N 은 아직 안 받아 온 언어가 비어 있으므로 목록으로 판단합니다. */
  function isLang(code) {
    return typeof code === 'string' && EUM_LANGS.indexOf(code) >= 0;
  }

  function pickLang(tag) {
    var t = String(tag || '').toLowerCase().replace(/_/g, '-').trim();
    if (!t) return null;
    if (isLang(t)) return t;                                // 나중에 zh-tw 처럼 지역까지 넣을 때
    var base = t.split('-')[0];
    if (isLang(base)) return base;                          // vi-VN → vi
    if (isLang(LANG_ALIAS[base])) return LANG_ALIAS[base];  // in → id
    return null;
  }

  function detect() {
    var fromUrl = null;
    try { fromUrl = pickLang(new URLSearchParams(location.search).get('lang')); } catch (e) {}
    if (fromUrl) return { code: fromUrl, auto: false, matched: true, source: 'url' };

    var stored = pickLang(load('lang'));
    if (stored) return { code: stored, auto: false, matched: true, source: 'stored' };

    var list = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || ''];
    for (var i = 0; i < list.length; i++) {
      var hit = pickLang(list[i]);
      if (hit) return { code: hit, auto: true, matched: true, source: 'device' };
    }

    return { code: 'en', auto: true, matched: false, source: 'fallback' };
  }

  function applyLang(code) {
    var want = isLang(code) ? code : 'en';

    /* 그 언어 파일을 아직 안 받았으면 받아 온 뒤 다시 부릅니다.
       못 받으면(전파 지연·오프라인) 지금 언어를 그대로 두어, 화면이
       빈 채로 남지 않게 합니다. */
    if (!I18N[want]) {
      eumLoadLang(want, function (ok) { if (ok) applyLang(want); });
      return;
    }

    lang = want;
    T = I18N[lang];
    document.documentElement.lang = lang;
    /* 탭 제목: "사유 자가진단 · E9-Bridge — 사업장 변경 안내" 처럼 페이지 이름을 앞에 붙입니다.
       페이지 이름 키는 <body data-page-title="ckTitle"> 로 지정합니다 (홈은 없음). */
    if (T.docTitle) {
      var pk = document.body.getAttribute('data-page-title');
      document.title = (pk && T[pk]) ? (T[pk] + ' · ' + T.docTitle) : T.docTitle;
    }
    $$('[data-i18n]').forEach(function (n) {
      var v = T[n.getAttribute('data-i18n')];
      if (typeof v === 'string') n.textContent = v;
    });
    $$('[data-i18n-ph]').forEach(function (n) {
      var v = T[n.getAttribute('data-i18n-ph')];
      if (typeof v === 'string') n.placeholder = v;
    });
    $$('[data-i18n-aria]').forEach(function (n) {
      var v = T[n.getAttribute('data-i18n-aria')];
      if (typeof v === 'string') n.setAttribute('aria-label', v);
    });
    /* 선택기 항목을 EUM_LANGS 로 다시 채웁니다. HTML 에는 5개가 박혀 있지만,
       언어 파일을 늘리면 core.js 의 목록만 고쳐도 12개 페이지가 함께 바뀝니다.
       (HTML 을 12군데 고치다 보면 한두 곳이 반드시 빠집니다.) */
    var sel = $('#langSelect');
    if (sel) {
      var want = EUM_LANGS.join(',');
      if (sel.getAttribute('data-built') !== want) {
        sel.innerHTML = '';
        EUM_LANGS.forEach(function (code) {
          var o = document.createElement('option');
          o.value = code;
          o.textContent = (typeof EUM_LANG_NAMES !== 'undefined' && EUM_LANG_NAMES[code]) || code;
          sel.appendChild(o);
        });
        sel.setAttribute('data-built', want);
      }
      sel.value = lang;
    }

    /* 검수 전 언어를 고르면 그 사실을 화면에 적어 둡니다.
       번역이 덜 된 것을 다 된 것처럼 두면, 영어로 남은 문장을
       "내 언어로 확인했다"고 잘못 믿게 됩니다. */
    var draft = typeof EUM_DRAFT_LANGS !== 'undefined' && EUM_DRAFT_LANGS.indexOf(lang) !== -1;
    var bar = $('#draftBar');
    if (draft && !bar) {
      bar = el('div', 'draft-bar');
      bar.id = 'draftBar';
      var host = document.querySelector('main') || document.body;
      host.insertBefore(bar, host.firstChild);
    }
    if (bar) {
      bar.hidden = !draft;
      if (draft) bar.textContent = T.draftNote || 'This language is a draft. Some sentences remain in English.';
    }

    /* 페이지마다 들어 있는 기능이 다릅니다. 각 함수가 자기 요소가 없으면
       조용히 넘어가므로 여기서는 그냥 다 부릅니다. */
    renderNotices();
    renderHomeNotices();
    renderHomeItv();
    heroCaption();
    menuLabel();
    renderInterviews();
    renderChips();
    renderPayList();
    renderBoard();
    renderMyQuestions();
    boardMsg(boardMsgKey, boardMsgKind); // 안내 문구도 새 언어로 다시 씁니다
    authMsg(authMsgKey, authMsgKind);
    paintAuth();
    paintMy();
    $$('.my-note[data-key]').forEach(function (n) { n.textContent = T[n.getAttribute('data-key')] || ''; });
    paintPager();
    syncStick();                         // 라벨 길이가 바뀌면 헤더 높이도 바뀝니다
    fitNav();                            // 메뉴 글자가 길어 한 줄에 안 들어가면 전체 메뉴로
    if (shown('#payResult')) calcPay();
    if (shown('#insResult')) calcIns();
    if (shown('#eligResult')) calcElig();
    if (shown('#ddayResult')) calcDday();
    if (shown('#quizResult')) showQuizResult();
    clearThread();

    /* 첫 화면 깜빡임 가리개를 걷습니다. HTML 에는 한국어가 박혀 있어서
       다른 언어 사용자는 이 시점 전까지 한국어를 보게 됩니다. (head 의 부트 코드 참고) */
    document.documentElement.removeAttribute('data-lang-pending');
  }

  function shown(sel) {
    var n = $(sel);
    return !!n && !n.hidden;
  }

  /* ---------- 날짜 ---------- */
  function addMonths(d, n) {
    var t = new Date(d.getFullYear(), d.getMonth() + n, 1);
    var last = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
    t.setDate(Math.min(d.getDate(), last));
    return t;
  }
  function midnight(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function today() { return midnight(new Date()); }
  function diffDays(a, b) { return Math.round((midnight(a) - midnight(b)) / 86400000); }
  function fmt(d) {
    var m = ('0' + (d.getMonth() + 1)).slice(-2), day = ('0' + d.getDate()).slice(-2);
    return d.getFullYear() + '-' + m + '-' + day;
  }

  /* 화면에 보여줄 마감일. 숫자는 ISO 그대로 둡니다 — 근로자가 대조할 고용센터
     서류와 EPS 누리집이 같은 표기를 쓰기 때문입니다. 요일만 사용자 언어로 붙입니다.
     고용센터는 주말에 닫으므로 마감일이 무슨 요일인지가 실제 행동을 바꿉니다. */
  var weekdayFmt = {};

  function weekdayOf(d) {
    /* 브라우저에 따라 크메르어·네팔어 요일 이름이 없어서 영어로 나옵니다.
       그 언어를 모르는 브라우저면 언어 파일의 weekdays 를 씁니다. */
    var known = true;
    try { known = !Intl.DateTimeFormat.supportedLocalesOf || Intl.DateTimeFormat.supportedLocalesOf([lang]).length > 0; }
    catch (e) { known = false; }
    if (!known && T.weekdays && T.weekdays.length === 7) return T.weekdays[d.getDay()];
    if (!(lang in weekdayFmt)) {
      /* 태국어는 기본 달력이 불교력이라 2026년이 2569년으로 나옵니다.
         서류의 연도와 어긋나면 안 되므로 그레고리력을 못박습니다.
         (요일 자체는 달력과 무관하지만 표기 규칙을 한곳에 모아 둡니다.) */
      var loc = lang === 'th' ? 'th-TH-u-ca-gregory' : lang;
      try {
        weekdayFmt[lang] = new Intl.DateTimeFormat(loc, { weekday: 'long' });
      } catch (e) {
        weekdayFmt[lang] = null; // Intl 이 없거나 언어를 모르면 요일 없이 갑니다
      }
    }
    if (!weekdayFmt[lang]) return '';
    try { return weekdayFmt[lang].format(d); } catch (e) { return ''; }
  }

  function fmtDay(d) {
    var w = weekdayOf(d);
    return w ? fmt(d) + ' (' + w + ')' : fmt(d);
  }

  /* ---------- 기한 계산 ---------- */
  function paintCard(card, numEl, days) {
    card.classList.remove('is-ok', 'is-warn', 'is-stop');
    var unit = $('.unit', card);
    if (days < 0) {
      card.classList.add('is-stop'); numEl.textContent = Math.abs(days); unit.textContent = T.daysOver;
    } else if (days === 0) {
      card.classList.add('is-stop'); numEl.textContent = '0'; unit.textContent = T.dueToday;
    } else {
      card.classList.add(days <= 7 ? 'is-warn' : 'is-ok');
      numEl.textContent = days; unit.textContent = T.daysUnit;
    }
  }

  function calcDday() {
    var leaveIn = $('#leaveDate');
    if (!leaveIn) return;              // 이 페이지에 기한 계산기가 없습니다
    var leaveV = leaveIn.value;
    if (!leaveV) return;
    var leave = midnight(new Date(leaveV + 'T00:00:00'));
    var now = today();
    var msg = $('#ddayMsg');

    if (leave > now) {
      $('#ddayResult').hidden = false;
      $('.dday-cards').hidden = true;
      $('#liveTimeline').hidden = true;
      msg.className = 'callout is-stop';
      msg.textContent = T.dlBadDate;
      return;
    }
    $('.dday-cards').hidden = false;
    $('#liveTimeline').hidden = false;

    var applyV = $('#applyDate').value;
    var applyDue = addMonths(leave, 1);
    var applied = applyV ? midnight(new Date(applyV + 'T00:00:00')) : null;
    var jobDue = addMonths(applied || applyDue, 3);

    var applyDays = diffDays(applyDue, now);
    var jobDays = diffDays(jobDue, now);

    save('leave', leaveV);
    if (applyV) save('apply', applyV); else drop('apply');

    $('#ddayResult').hidden = false;
    paintCard($('#cardApply'), $('#applyNum'), applyDays);
    paintCard($('#cardJob'), $('#jobNum'), jobDays);
    $('#applyDateOut').textContent = fmtDay(applyDue);
    $('#jobDateOut').textContent = fmtDay(jobDue);
    // 아래 타임라인 라벨은 자리가 좁아 요일 없이 날짜만 둡니다.
    $('#lbLeave').textContent = fmt(leave);
    $('#lbApply').textContent = fmt(applied || applyDue);
    $('#lbJob').textContent = fmt(jobDue);

    var span = diffDays(jobDue, leave) || 1;
    var pos = Math.max(0, Math.min(100, (diffDays(now, leave) / span) * 100));
    $('#liveFill').style.width = pos + '%';
    $('#livePin').style.left = pos + '%';

    var lines = [];
    if (applyDays < 0) { msg.className = 'callout is-stop'; lines.push(T.msgOver); }
    else if (applyDays <= 7) { msg.className = 'callout is-warn'; lines.push(T.msgWarn); }
    else { msg.className = 'callout'; lines.push(T.msgOk); }

    if (jobDays < 0) lines.push(T.msgJobOver);
    else if (jobDays <= 14) lines.push(T.msgJobWarn);
    if (!applyV) lines.push(T.msgEstimate);
    msg.textContent = lines.join(' ');
  }

  /* ---------- 자가진단 ---------- */
  var lastQuiz = null;

  /* showQuizResult 와 이메일 전송용 quizEmailBody 가 같은 판정을 쓰므로
     여기서 한 번만 계산합니다. */
  function quizFields() { return lastQuiz ? quizCompute(lastQuiz) : null; }

  /* 세 답(q1·q2·q3)만으로 판정합니다. 첫 화면의 "내 정보 한눈에"도
     계정에 저장해 둔 답으로 이 함수를 불러 같은 결과를 그립니다. */
  function quizCompute(qq) {
    var q1 = qq.q1, q2 = qq.q2, q3 = qq.q3;
    var employerFault = q1 !== 'own';
    var overLimit = q3 === '3';

    var kind, tag, title, body;
    if (overLimit) {
      kind = 'stop';
      tag = T.resCountTag; title = T.resCountTitle; body = T.resCountBody;
    } else if (employerFault) {
      kind = null;
      tag = T.resEmpTag; title = T.resEmpTitle; body = T.resEmpBody;
    } else {
      kind = 'warn';
      tag = T.resOwnTag; title = T.resOwnTitle; body = T.resOwnBody;
    }

    var ev = q2 === 'yes' ? T.evYes : (q2 === 'some' ? T.evSome : T.evNo);
    var count = T.countLine.replace('{n}', q3 === '3' ? '3+' : q3);

    return { kind: kind, tag: tag, title: title, body: body, ev: ev, count: count };
  }

  function showQuizResult() {
    var f = quizFields();
    if (!f) return;
    var box = $('#quizResult');

    box.hidden = false;
    box.classList.remove('is-warn', 'is-stop');
    if (f.kind) box.classList.add('is-' + f.kind);

    $('#resultTag').textContent = f.tag;
    $('#resultTitle').textContent = f.title;
    $('#resultBody').textContent = f.body + ' ' + f.ev + ' ' + f.count;

    var ul = $('#resultDocs');
    ul.innerHTML = '';
    T.docs.forEach(function (d) { ul.appendChild(el('li', null, d)); });
    $('#resultSrc').textContent = T.askSourceLabel + ': 외국인근로자의 고용 등에 관한 법률 제25조 · ' +
      T.ntCheckedLabel + ' ' + CHECKED_ON;

    // 언어를 바꾸거나 다시 제출하면 전에 눌렀던 "메일 앱을 열었습니다" 같은
    // 안내는 지금 상황과 안 맞으므로 지웁니다. 입력해 둔 이메일 주소는 남깁니다.
    var emsg = $('#resultEmailMsg');
    if (emsg) { emsg.textContent = ''; emsg.className = 'result-email-msg'; }
  }

  /* 결과를 이메일로 보내기 — 서버 없이 동작해야 하므로(README 5장 "알림 발송"은
     서버가 필요해 아직 없다고 명시) mailto: 로 이 기기의 이메일 앱을 열어
     본문을 채워 둡니다. 실제 전송은 그 앱에서 사용자가 한 번 더 눌러야 됩니다. */
  function quizEmailBody() {
    var f = quizFields();
    if (!f) return '';

    var lines = [f.title, '', f.body + ' ' + f.ev + ' ' + f.count];

    lines.push('', T.ckDocsTitle);
    (T.docs || []).forEach(function (d) { lines.push('- ' + d); });

    lines.push('', T.askSourceLabel + ': 외국인근로자의 고용 등에 관한 법률 제25조 · ' +
      T.ntCheckedLabel + ' ' + CHECKED_ON);

    // 사진을 올려 읽은 내용이 있으면 함께 담습니다.
    var readOut = $('#docReadOut');
    if (readOut && !readOut.hidden && readOut.textContent.trim()) {
      lines.push('', T.ckReadOk, readOut.textContent.replace(/\s+/g, ' ').trim());
    }

    lines.push('', T.disclaimer);
    return lines.join('\n');
  }

  function sendQuizEmail() {
    var input = $('#resultEmail'), msg = $('#resultEmailMsg');
    if (!input || !msg) return;
    var addr = input.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addr)) {
      msg.textContent = T.ckEmailBad; msg.className = 'result-email-msg is-bad';
      input.focus();
      return;
    }

    // encodeURIComponent 는 '@'도 %40 으로 바꿔서, 그대로 두면 일부 메일
    // 앱이 받는 사람 주소를 알아보지 못합니다. '@'만 다시 풀어 둡니다.
    var addrPart = encodeURIComponent(addr).replace(/%40/g, '@');
    var url = 'mailto:' + addrPart +
      '?subject=' + encodeURIComponent(T.ckEmailSubject) +
      '&body=' + encodeURIComponent(quizEmailBody());

    // 여기서는 전송 성공 여부를 알 수 없습니다 — 메일 앱을 여는 것까지가
    // 이 기기 안에서 할 수 있는 전부입니다. 안내문도 그렇게 씁니다.
    window.location.href = url;
    msg.textContent = T.ckEmailOpened; msg.className = 'result-email-msg is-good';
  }

  /* ---------- 출국 정산 ---------- */
  /* 안내문 안의 전화번호를 눌러서 바로 걸리게 만듭니다.
     1600-0266 · 1350 · 132 처럼 자릿수가 제각각이라 한 번에 걸러 냅니다.
     휴대폰으로 보는 사람이 번호를 손으로 옮겨 적지 않아도 됩니다. */
  function withTelLinks(text, box) {
    var re = /(\d{3,4}-\d{3,4}|\b1\d{3}\b|\b13[0-9]\b)/g;
    var last = 0, m;
    while ((m = re.exec(text)) !== null) {
      if (m.index > last) box.appendChild(document.createTextNode(text.slice(last, m.index)));
      var a = document.createElement('a');
      a.className = 'pay-tel';
      a.href = 'tel:' + m[0].replace(/-/g, '');
      a.textContent = m[0];
      box.appendChild(a);
      last = m.index + m[0].length;
    }
    if (last < text.length) box.appendChild(document.createTextNode(text.slice(last)));
  }

  function renderPayList() {
    var box = $('#payList');
    if (!box) return;
    box.innerHTML = '';
    (T.pyItems || []).forEach(function (it, i) {
      var card = el('div', 'pay-item');
      // 순서를 매겨 두면 "몇 개 중 몇 번째"가 한눈에 들어옵니다.
      card.appendChild(el('span', 'pay-num', String(i + 1)));
      var h = el('h4');
      h.appendChild(el('span', null, it.t));
      card.appendChild(h);
      card.appendChild(el('p', null, it.w));
      var where = el('p', 'pay-where');
      withTelLinks(it.r, where);
      card.appendChild(where);
      box.appendChild(card);
    });
    $('#paySrc').textContent = T.askSourceLabel + ': ' + PAY_SRC + ' · ' + T.ntCheckedLabel + ' ' + PAY_CHECKED;
  }

  function calcPay() {
    var exitIn = $('#exitDate');
    if (!exitIn) return;
    var v = exitIn.value;
    if (!v) return;
    var exit = midnight(new Date(v + 'T00:00:00'));
    var now = today();

    var reportDue = addMonths(exit, -1);
    var claimDue = new Date(exit.getFullYear(), exit.getMonth(), exit.getDate() - 7);
    var reportDays = diffDays(reportDue, now);
    var claimDays = diffDays(claimDue, now);

    save('exit', v);
    $('#payResult').hidden = false;
    paintCard($('#cardReport'), $('#reportNum'), reportDays);
    paintCard($('#cardClaim'), $('#claimNum'), claimDays);
    $('#reportDateOut').textContent = fmtDay(reportDue);
    $('#claimDateOut').textContent = fmtDay(claimDue);

    var msg = $('#payMsg');
    if (claimDays < 0) { msg.className = 'callout is-stop'; msg.textContent = T.pyMsgOver; }
    else if (claimDays <= 7 || reportDays < 0) { msg.className = 'callout is-warn'; msg.textContent = T.pyMsgWarn; }
    else { msg.className = 'callout'; msg.textContent = T.pyMsgOk; }
  }

  /* ---------- 출국만기보험 어림 계산 ----------
     회사는 근로계약 효력 발생일부터 15일 안에 출국만기보험에 들어야 하고,
     매달 통상임금의 8.3%(1/12)를 냅니다. 한 사업장에서 1년 이상 일한 뒤
     출국하거나 체류자격이 바뀌면 본인이 청구할 수 있습니다.

     법정 퇴직금(계속근로 1년에 30일분 평균임금)보다 보험금이 적으면
     그 차액은 회사가 따로 줘야 합니다. 그래서 두 값을 나란히 보여 줍니다.

     여기서 나오는 값은 어디까지나 어림값입니다. 실제로는 회사가 실제 낸
     보험료와 이자로 정해지고, 통상임금과 평균임금도 서로 다릅니다.
     화면에도 그 점을 크게 적어 둡니다. */
  var INS_RATE = 1 / 12;          // 통상임금의 8.3%
  var INS_MIN_DAYS = 365;         // 1년 이상

  function wonFmt(n) {
    var v = Math.round(n);
    try { return v.toLocaleString('ko-KR') + (T.wonUnit || '원'); }
    catch (e) { return String(v) + (T.wonUnit || '원'); }
  }

  /* ---------- 출국 정산 적격 판정 ---------- */
  /* 계속근로기간을 달 수로 셉니다. 「근로자퇴직급여 보장법」의 1년은 달을 기준으로
     보므로 날 수가 아니라 달 수로 비교합니다. 위 calcIns 는 보험료 어림을 위해
     날 수(INS_MIN_DAYS)를 쓰지만, 자격 판정은 달 기준이 맞습니다.
     예) 2025-03-10 입사 → 2026-03-09 는 11개월(1년 미만), 03-10 은 12개월(1년 이상). */
  function monthsWorked(from, to) {
    var m = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
    if (to.getDate() < from.getDate()) m -= 1;
    return m;
  }

  function radioVal(name) {
    var n = document.querySelector('input[name="' + name + '"]:checked');
    return n ? n.value : '';
  }

  /* 판정 한 줄을 카드로 그립니다. kind 는 ok / warn / no.
     상태는 색만으로 말하지 않습니다 — 레일 + 배지 + 글자를 함께 씁니다. */
  function verdictCard(name, kind, body, where) {
    var card = el('div', 'pay-item is-' + (kind === 'no' ? 'stop' : kind));
    var h = el('h4');
    h.appendChild(el('span', 'pay-check', kind === 'ok' ? '\u2713' : (kind === 'warn' ? '!' : '\u00d7')));
    h.appendChild(el('span', null, name));
    card.appendChild(h);
    var E = T.pyElig;
    card.appendChild(el('p', 'pay-verdict',
      kind === 'ok' ? E.vOk : (kind === 'warn' ? E.vWarn : E.vNo)));
    card.appendChild(el('p', null, body));
    if (where) card.appendChild(el('p', 'pay-where', where));
    return card;
  }

  /* 들어온 날 · 마지막 근무일은 위 보험 계산기와 같은 뜻이라 값을 서로 맞춰 둡니다.
     사용자가 같은 날짜를 두 번 넣지 않게 하려는 것뿐이고, 저장 키도 하나만 씁니다. */
  function mirrorDates(fromSel, toSel, key) {
    var a = $(fromSel), b = $(toSel);
    if (!a || !b) return;
    on(fromSel, 'change', function () {
      b.value = a.value;
      save(key, a.value);
    });
  }

  /* 적격 판정 — 입력값만으로 계산해 결과를 돌려줍니다(화면에 그리지 않습니다).
     inp: { start, end, exit, moved, hours, nat, type }  날짜는 'YYYY-MM-DD' 또는 ''
     돌려주는 값: { bad:true } 또는 { tenureCls, tenureText, items:[{n, kind, body, w}] }
     첫 화면 "내 정보 한눈에"도 계정에 저장한 값으로 이 함수를 부릅니다. */
  function eligCompute(inp) {
    var E = T.pyElig;
    var startV = inp.start || '', endV = inp.end || '', exitV = inp.exit || '';
    var moved = inp.moved || '', hours = inp.hours || '', nat = inp.nat || '', type = inp.type || '';
    var months = null;

    if (startV) {
      var start = midnight(new Date(startV + 'T00:00:00'));
      /* 마지막 근무일이 비어 있으면 출국 예정일까지, 그것도 없으면 오늘까지 셉니다. */
      var end = endV ? midnight(new Date(endV + 'T00:00:00'))
                     : (exitV ? midnight(new Date(exitV + 'T00:00:00')) : today());
      if (end < start) return { bad: true, tenureCls: 'callout is-stop', tenureText: E.badDates, items: [] };
      months = monthsWorked(start, end);
    }

    var over1y = months !== null && months >= 12;
    var nearly = months !== null && months >= 10 && months < 12;
    var out = { items: [] };

    if (months === null) {
      out.tenureCls = 'callout is-warn';
      out.tenureText = E.needHire;
    } else {
      var y = Math.floor(months / 12), mm = months % 12;
      var line = y > 0 ? E.tenureYM.replace('{y}', y).replace('{m}', mm)
                       : E.tenureM.replace('{m}', months);
      out.tenureCls = 'callout' + (over1y ? '' : (nearly ? ' is-warn' : ' is-stop'));
      out.tenureText = line + ' ' + (over1y ? E.tenureOver : (nearly ? E.tenureNear : E.tenureUnder));
    }

    var I = E.items;
    function add(it, kind, body) { out.items.push({ n: it.n, kind: kind, body: body, w: it.w }); }

    /* 1) 출국만기보험금 — 한 사업장에서 계속 1년 이상이어야 근로자에게 갑니다.
          1년 미만이면 그 사업장 몫은 사업주에게 귀속됩니다
          (외국인고용법 시행령 제21조 제2항 제2호 단서). */
    var matKind, matBody;
    if (over1y) { matKind = 'ok'; matBody = I.mat.ok; }
    else if (moved === 'prevOver') { matKind = 'warn'; matBody = I.mat.prevOver; }
    else if (moved === 'unsure' || months === null) { matKind = 'warn'; matBody = I.mat.unsure; }
    else { matKind = 'no'; matBody = I.mat.no; }
    if (matKind === 'ok') {
      matBody += ' ' + (type === 'change' ? I.mat.typeChange
                     : (type === 'reentry' ? I.mat.typeReentry : I.mat.typeLeave));
    }
    add(I.mat, matKind, matBody);

    /* 2) 퇴직금 차액 — 계속근로 1년 이상 + 4주 평균 1주 15시간 이상
          (근로자퇴직급여 보장법 제4조 제1항). 위 계산기의 차액 칸과 짝입니다. */
    var sevKind, sevBody;
    if (over1y && hours === 'yes') { sevKind = 'ok'; sevBody = I.sev.ok; }
    else if (over1y && hours === 'unsure') { sevKind = 'warn'; sevBody = I.sev.hoursUnsure; }
    else if (over1y && hours === 'no') { sevKind = 'no'; sevBody = I.sev.hoursNo; }
    else if (moved === 'prevOver' || moved === 'unsure') { sevKind = 'warn'; sevBody = I.sev.prevOver; }
    /* 입사일을 모르면 판정할 수 없습니다. '대상 아님'으로 단정하지 않습니다. */
    else if (months === null) { sevKind = 'warn'; sevBody = I.sev.noDate; }
    else { sevKind = 'no'; sevBody = I.sev.no; }
    add(I.sev, sevKind, sevBody);

    /* 3) 귀국비용보험 — 근로자가 낸 돈이라 근속기간과 무관하게 돌려받습니다
          (시행령 제22조). 국가군에 따라 납부액이 다릅니다. */
    var amt = nat === 'g3' ? E.amt3 : (nat === 'g2' ? E.amt2 : E.amt1);
    add(I.ret, 'ok', I.ret.ok.replace('{amt}', amt));

    /* 4) 국민연금 반환일시금 — E-9 체류자격은 상호주의와 무관하게 대상입니다. */
    add(I.pen, 'ok', I.pen.ok);

    /* 5) 못 받은 임금·수당 — 출국 뒤에도 3년 안에 청구할 수 있습니다 (근로기준법 제49조). */
    add(I.wage, 'warn', I.wage.ok);
    return out;
  }

  function eligInputs() {
    return {
      start: $('#eligStart') ? $('#eligStart').value : '',
      end: $('#eligEnd') ? $('#eligEnd').value : '',
      exit: $('#exitDate') ? $('#exitDate').value : '',
      moved: radioVal('pyMoved'), hours: radioVal('pyHours'),
      nat: radioVal('pyNat'), type: radioVal('pyType')
    };
  }

  function calcElig() {
    var box = $('#eligVerdicts');
    if (!box || !T.pyElig) return;

    var inp = eligInputs();
    save('insStart', inp.start); save('insEnd', inp.end);
    save('payMoved', inp.moved); save('payHours', inp.hours);
    save('payNat', inp.nat); save('payType', inp.type);

    $('#eligResult').hidden = false;
    var tenureEl = $('#eligTenure');
    var r = eligCompute(inp);
    tenureEl.className = r.tenureCls;
    tenureEl.textContent = r.tenureText;
    box.innerHTML = '';
    r.items.forEach(function (it) { box.appendChild(verdictCard(it.n, it.kind, it.body, it.w)); });
  }

  /* 쌓인 보험료 ≈ 월 통상임금 × 8.3% × 일한 달 수
     법정 퇴직금 ≈ 30일분 임금 × (재직일수 / 365)
     첫 화면 요약도 이 함수로 같은 값을 냅니다. */
  function insMoney(wage, start, end) {
    var days = diffDays(end, start);
    var saved = wage * INS_RATE * (days / 30.4375);
    var legal = wage * (days / 365);
    return { days: days, saved: saved, legal: legal, gap: legal - saved };
  }

  function calcIns() {
    var wageIn = $('#insWage'), startIn = $('#insStart'), endIn = $('#insEnd');
    if (!wageIn || !startIn) return;

    var wage = parseFloat(wageIn.value);
    if (!isFinite(wage) || wage <= 0) return;
    if (!startIn.value) return;

    var start = midnight(new Date(startIn.value + 'T00:00:00'));
    var end = endIn && endIn.value
      ? midnight(new Date(endIn.value + 'T00:00:00'))
      : today();

    var msg = $('#insMsg');
    $('#insResult').hidden = false;

    // 들어온 날이 그만두는 날보다 뒤면 계산이 성립하지 않습니다.
    if (end <= start) {
      $('#insWorkedOut').textContent = '–';
      $('#insFromOut').textContent = '–';
      $('#insEligOut').textContent = '–';
      $('#insSavedOut').textContent = '–';
      $('#insLegalOut').textContent = '–';
      $('#insGapRow').hidden = true;
      msg.className = 'callout is-stop';
      msg.textContent = T.insErrOrder;
      return;
    }

    var money = insMoney(wage, start, end);
    var days = money.days;                      // start → end 사이의 날 수
    var years = Math.floor(days / 365);
    var restDays = days - years * 365;
    var months = Math.floor(restDays / 30);

    var joinDue = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 15);
    var eligible = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate());

    var saved = money.saved, legal = money.legal, gap = money.gap;

    $('#insWorkedOut').textContent =
      (years > 0 ? years + (T.yearUnit || '년') + ' ' : '') +
      months + (T.monthUnit || '개월') +
      ' (' + days + (T.dayUnitPlain || '일') + ')';
    $('#insFromOut').textContent = fmtDay(joinDue) + ' ' + (T.insFromTail || '까지');
    $('#insEligOut').textContent = fmtDay(eligible);

    $('#insSavedOut').textContent = wonFmt(saved);
    $('#insLegalOut').textContent = wonFmt(legal);

    // 차액은 회사가 채워 줘야 하는 몫입니다. 1만원 넘게 벌어질 때만 보여
    // 반올림 때문에 생기는 잔돈으로 놀라지 않게 합니다.
    var gapRow = $('#insGapRow');
    if (gap > 10000) {
      gapRow.hidden = false;
      $('#insGapOut').textContent = wonFmt(gap);
    } else {
      gapRow.hidden = true;
    }

    var eligBox = $('#insEligBox');
    if (days < INS_MIN_DAYS) {
      // 1년을 못 채우면 근로자가 못 받고 회사로 돌아갑니다. 가장 중요한 안내입니다.
      var left = INS_MIN_DAYS - days;
      eligBox.className = 'ins-box is-warn';
      msg.className = 'callout is-warn';
      msg.textContent = T.insMsgShort.replace('{d}', String(left)) ;
    } else {
      eligBox.className = 'ins-box is-go';
      msg.className = 'callout';
      msg.textContent = T.insMsgOk;
    }
  }

  /* ---------- 공지 ---------- */
  /* 광역 16개 시·도(광주·전남은 2026-07-01 전남광주통합특별시로 합쳐졌습니다).
     지자체 정책은 data.js 에서 region 에 이 코드를 적습니다. region 이 없는 항목은 전국 제도입니다. */
  var NT_REGIONS = ['seoul', 'busan', 'daegu', 'incheon', 'daejeon', 'ulsan', 'sejong',
    'gyeonggi', 'gangwon', 'chungbuk', 'chungnam', 'jeonbuk', 'jeonnamgwangju', 'gyeongbuk', 'gyeongnam', 'jeju'];
  // 'all' · 'nation' · 지역 코드. 마지막에 고른 것을 기억해 다시 열어도 그 지역을 보여 줍니다.
  var ntPick = load('ntRegion') || 'all';
  // 한 쪽에 몇 개씩 보일지 — 사용자가 고르고, 고른 값을 기억합니다.
  var NT_PER_CHOICES = [10, 15, 20];
  var ntPer = Number(load('ntPer')) || 10;
  if (NT_PER_CHOICES.indexOf(ntPer) === -1) ntPer = 10;
  var ntPage = 1;
  var ntQ = '';

  /* 검색어를 띄어쓰기로 나눠, 모두 들어 있는 항목만 남깁니다(대소문자 무시).
     지금 언어의 제목·내용에 더해 출처·지역 이름·한국어 제목도 함께 봅니다 —
     기관 이름은 한국어로만 적혀 있고, 상담사가 한국어로 찾아 줄 때도 있습니다. */
  function ntMatch(n) {
    if (!ntQ) return true;
    var body = n[lang] || n.en;
    var hay = [body.title, body.points.join(' '), n.source, n.ko && n.ko.title,
      n.region ? regionName(n.region) : ''].join(' ').toLowerCase();
    return ntQ.toLowerCase().split(/\s+/).every(function (w) { return !w || hay.indexOf(w) !== -1; });
  }

  function paintNtFound(count) {
    var p = $('#ntFound'), clear = $('#ntQClear');
    if (clear) clear.hidden = !ntQ;
    if (!p) return;
    p.hidden = !ntQ;
    p.textContent = ntQ ? '"' + ntQ + '" · ' + count + (T.boardFoundUnit || '') : '';
  }

  function regionName(code) { return (T.ntRegions && T.ntRegions[code]) || code; }

  // 신청 마감일이 지났는지 — 지난 공고는 남겨 두되 "마감"으로 표시하고 아래로 내립니다.
  function ntClosed(n) { return !!(n.until && n.until < fmt(today())); }

  function renderNtFilter() {
    var box = $('#ntFilter');
    if (!box) return;
    box.innerHTML = '';

    function pick(v) { ntPick = v; ntPage = 1; save('ntRegion', v); renderNotices(); }
    function btn(v, label) {
      var b = el('button', 'chip' + (ntPick === v ? ' is-on' : ''), label);
      b.type = 'button';
      b.setAttribute('aria-pressed', ntPick === v ? 'true' : 'false');
      b.addEventListener('click', function () { pick(v); });
      box.appendChild(b);
    }
    btn('all', T.ntFilterAll);
    btn('nation', T.ntFilterNation);

    // 지역은 17개라 버튼 대신 고르기 상자로 둡니다. 올라온 정책 수를 함께 보여 줍니다.
    var count = {};
    NOTICES.forEach(function (n) { if (n.region) count[n.region] = (count[n.region] || 0) + 1; });
    var sel = el('select', 'nt-region' + (NT_REGIONS.indexOf(ntPick) !== -1 ? ' is-on' : ''));
    sel.setAttribute('aria-label', T.ntFilterRegion);
    sel.appendChild(el('option', null, T.ntFilterRegion)).value = '';
    NT_REGIONS.forEach(function (r) {
      var o = el('option', null, regionName(r) + ' (' + (count[r] || 0) + ')');
      o.value = r;
      sel.appendChild(o);
    });
    sel.value = NT_REGIONS.indexOf(ntPick) !== -1 ? ntPick : '';
    sel.addEventListener('change', function () { pick(sel.value || 'all'); });
    box.appendChild(sel);

    var per = el('select', 'nt-per');
    per.setAttribute('aria-label', T.ntPerLabel || 'Per page');
    NT_PER_CHOICES.forEach(function (n) {
      var o = el('option', null, String(T.ntPerUnit || '%d').replace('%d', n));
      o.value = String(n);
      per.appendChild(o);
    });
    per.value = String(ntPer);
    per.addEventListener('change', function () {
      ntPer = Number(per.value) || 10;
      ntPage = 1;
      save('ntPer', String(ntPer));
      renderNotices();
    });
    box.appendChild(per);
  }

  /* 게시판과 같은 모양의 쪽 번호입니다. 쪽을 옮기면 목록 맨 위로 돌아갑니다. */
  function paintNtPager(pages) {
    var nav = $('#ntPager');
    if (!nav) return;
    nav.hidden = pages <= 1;
    var box = $('#ntNums');
    box.innerHTML = '';
    function go(p) {
      ntPage = p;
      renderNotices();
      var top = $('#ntFilter');
      if (top) top.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // 쪽 번호는 10개씩 끊어 보입니다(1~10, 11~20 …). 지금 쪽이 들어 있는 묶음만 그립니다.
    var block = 10;
    var start = Math.floor((ntPage - 1) / block) * block + 1;
    var end = Math.min(pages, start + block - 1);
    for (var n = start; n <= end; n++) {
      (function (num) {
        var b = el('button', 'pg-num' + (num === ntPage ? ' is-on' : ''), String(num));
        b.type = 'button';
        if (num === ntPage) b.setAttribute('aria-current', 'page');
        b.addEventListener('click', function () { go(num); });
        box.appendChild(b);
      })(n);
    }
    var prev = $('#ntPrev'), next = $('#ntNext');
    prev.disabled = ntPage <= 1;
    next.disabled = ntPage >= pages;
    prev.onclick = function () { if (ntPage > 1) go(ntPage - 1); };
    next.onclick = function () { if (ntPage < pages) go(ntPage + 1); };
    // « » 는 10쪽 묶음 단위로 넘깁니다: 1~10 → 11~20 의 첫 쪽, 11~20 → 1~10 의 첫 쪽.
    var prevB = $('#ntPrevBlock'), nextB = $('#ntNextBlock');
    if (prevB && nextB) {
      prevB.disabled = start <= 1;
      nextB.disabled = end >= pages;
      prevB.onclick = function () { if (start > 1) go(start - block); };
      nextB.onclick = function () { if (end < pages) go(end + 1); };
    }
  }

  function renderNotices() {
    var list = $('#noticeList');
    if (!list) return;
    list.innerHTML = '';
    renderNtFilter();

    /* 최신 소식이 위로 오게 정렬합니다. 날짜가 없는 옛 항목은 뒤로 보냅니다.
       같은 날 발표된 항목은 data.js 에 적힌 순서를 그대로 지킵니다(안정 정렬).
       마감된 지자체 공고는 맨 아래로 보냅니다.
       원본 배열은 건드리지 않습니다 — 다른 곳에서 순서를 기대할 수 있습니다. */
    var sorted = NOTICES.filter(function (n) {
      if (!ntMatch(n)) return false;
      if (ntPick === 'nation') return !n.region;
      if (ntPick !== 'all') return n.region === ntPick;
      return true;
    }).sort(function (a, b) {
      var c = (ntClosed(a) ? 1 : 0) - (ntClosed(b) ? 1 : 0);
      return c || String(b.date || '').localeCompare(String(a.date || ''));
    });

    paintNtFound(sorted.length);
    if (!sorted.length) {
      list.appendChild(el('p', 'nt-empty', ntQ ? T.ntNoMatch : T.ntEmpty));
      paintNtPager(0);
      return;
    }

    var pages = Math.ceil(sorted.length / ntPer);
    if (ntPage > pages) ntPage = pages;
    paintNtPager(pages);

    sorted.slice((ntPage - 1) * ntPer, ntPage * ntPer).forEach(function (n) {
      var body = n[lang] || n.en;
      var closed = ntClosed(n);
      var art = el('article', 'notice' + (closed ? ' is-closed' : ''));
      art.id = n.key;

      var head = el('button', 'notice-head');
      head.type = 'button';
      head.setAttribute('aria-expanded', 'false');
      // 지자체 정책은 태그 자리에 지역 이름을 씁니다. 어느 지역 이야기인지가 먼저 보여야 합니다.
      var tagLabel = n.region ? regionName(n.region)
        : ((T.noticeTags && T.noticeTags[n.tagKey]) || n.tagKey);
      head.appendChild(el('span', 'notice-tag' + (n.region ? ' is-local' : ''), tagLabel));
      // 날짜를 제목 옆에 크게 둡니다. "언제 바뀐 것인가" 가 이 쪽의 핵심입니다.
      if (n.date) head.appendChild(el('span', 'notice-date', n.date));
      if (closed) head.appendChild(el('span', 'notice-closed', T.ntClosed));
      head.appendChild(el('p', 'notice-t', body.title));
      // 언제 마지막으로 확인했는지 — 펼치지 않아도 보이게 줄 오른쪽에 둡니다.
      if (n.checked) head.appendChild(el('span', 'notice-checked', T.ntCheckedLabel + ' ' + n.checked));
      head.appendChild(el('span', 'notice-arrow', '⌄'));
      head.addEventListener('click', function () {
        var open = art.classList.toggle('is-open');
        head.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      var wrap = el('div', 'notice-body');
      var ul = el('ul');
      body.points.forEach(function (p) { ul.appendChild(el('li', null, p)); });
      wrap.appendChild(ul);

      /* 질문 기능이 다른 페이지로 갈라져서 링크로 넘깁니다.
         진짜 <a> 라야 새 탭 열기와 JS 없는 환경에서도 동작합니다. */
      var ask = el('a', 'btn btn-ghost btn-sm', T.ntAskBtn);
      ask.href = 'ask.html?q=' + encodeURIComponent(body.title);
      /* 일부 호스트는 .html 을 clean URL 로 넘기면서 쿼리를 버립니다(로컬 serve 가 그렇습니다).
         같은 값을 sessionStorage 에도 넣어 두고 질문 페이지에서 남은 쪽을 씁니다. */
      ask.addEventListener('click', function () {
        try { sessionStorage.setItem('eum.carryQ', body.title); } catch (e) {}
      });
      wrap.appendChild(ask);

      var meta = el('div', 'notice-meta');
      meta.appendChild(el('span', null, T.ntSourceLabel + ': ' + ((lang !== 'ko' && n.sourceL && n.sourceL[lang]) || n.source)));
      meta.appendChild(el('span', null, T.ntCheckedLabel + ': ' + n.checked));
      if (n.until) meta.appendChild(el('span', null, T.ntUntil + ': ' + n.until));
      var a = el('a', null, T.ntOriginal);
      a.href = n.url; a.target = '_blank'; a.rel = 'noopener';
      meta.appendChild(a);
      wrap.appendChild(meta);

      art.appendChild(head);
      art.appendChild(wrap);
      list.appendChild(art);
    });

    /* 첫 화면 목록에서 눌러 들어온 경우(notices.html#n-minwage-2027) 그 항목을 펼쳐 둡니다. */
    var want = (location.hash || '').slice(1);
    var target = want && document.getElementById(want);
    if (target && target.classList.contains('notice')) {
      target.classList.add('is-open');
      var h = target.querySelector('.notice-head');
      if (h) h.setAttribute('aria-expanded', 'true');
      if (!noticeJumped) {
        noticeJumped = true;
        setTimeout(function () { target.scrollIntoView({ block: 'start' }); }, 60);
      }
    }
  }
  var noticeJumped = false;

  /* ---------- 인터뷰 ---------- */
  /* 데이터가 비어 있으면 목록 대신 "준비 중" 안내만 보입니다.
     지어낸 인터뷰를 채워 두느니 빈 화면을 보이는 편이 낫습니다 —
     읽는 사람이 남의 경험을 근거로 자기 일을 결정하기 때문입니다. */
  function renderInterviews() {
    var list = $('#itvList');
    if (!list) return;

    var has = typeof INTERVIEWS !== 'undefined' && INTERVIEWS && INTERVIEWS.length;
    var empty = $('#itvEmpty');
    if (empty) empty.hidden = !!has;
    list.hidden = !has;
    list.innerHTML = '';
    if (!has) return;

    var sorted = INTERVIEWS.slice().sort(function (a, b) {
      return String(b.date || '').localeCompare(String(a.date || ''));
    });

    sorted.forEach(function (it) {
      var body = it[lang] || it.en || it.ko;
      if (!body) return;

      var art = el('article', 'itv-card');

      /* 누구인지 — 가명·국적·연차·업종만 씁니다.
         이름과 회사는 데이터에 아예 넣지 않습니다. */
      var who = el('div', 'itv-who');
      var label = (T.itvAlias || '{n}').replace('{n}', (lang !== 'ko' && it.aliasL && it.aliasL[lang]) || it.alias || '?');
      who.appendChild(el('span', 'itv-alias', label));
      var facts = [];
      if (it.country && T.itvCountries) facts.push(T.itvCountries[it.country] || it.country);
      if (it.age) facts.push((T.itvAge || '{a}').replace('{a}', it.age));
      if (it.years) facts.push((T.itvYears || '{y}').replace('{y}', it.years));
      if (it.field && T.itvFields) facts.push(T.itvFields[it.field] || it.field);
      if (facts.length) who.appendChild(el('span', 'itv-facts', facts.join(' · ')));
      art.appendChild(who);

      /* 사진이 있으면 소개 글 위에 싣습니다. 얼굴이 보이는 사진이므로
         본인 동의를 받은 것만 photo 를 채워 두세요.
         loading="lazy" — 목록이 길어져도 처음 여는 속도가 느려지지 않게 합니다. */
      if (it.photo) {
        var fig = el('figure', 'itv-photo');
        var img = document.createElement('img');
        img.src = it.photo;
        img.alt = (lang !== 'ko' && it.photoAltL && it.photoAltL[lang]) || it.photoAlt || '';
        img.loading = 'lazy';
        fig.appendChild(img);
        art.appendChild(fig);
      }

      if (body.intro) art.appendChild(el('p', 'itv-intro', body.intro));

      (body.qa || []).forEach(function (row) {
        var qa = el('div', 'itv-qa');
        qa.appendChild(el('p', 'itv-q', row.q));
        qa.appendChild(el('p', 'itv-a', row.a));
        art.appendChild(qa);
      });

      /* 사이트를 써 본 소감이 있으면 인터뷰 카드 안에 그대로 이어 붙입니다.
         전에는 이 내용만 따로 모아 별도 섹션에 보여줬지만, 지금은 인터뷰
         하나에 모든 이야기를 함께 싣습니다. */
      if (body.useQuote) {
        var uq = el('div', 'itv-usequote');
        if (T.itvUseQuoteLabel) uq.appendChild(el('p', 'itv-usequote-label', T.itvUseQuoteLabel));
        var q = el('blockquote', 'itv-quote');
        q.appendChild(el('p', null, body.useQuote));
        uq.appendChild(q);
        art.appendChild(uq);
      }

      if (it.date) art.appendChild(el('p', 'itv-date', it.date));
      list.appendChild(art);
    });
  }

  /* ---------- 묻고 답하기 ---------- */
  /* 목록은 서버가 이미 해당 언어로 만들어 보내 줍니다. 여기서는 번역하지 않습니다.
     번역은 질문 등록 때와 답변 게시 때 각 1회뿐이고, 조회는 저장된 문자열을 그대로
     씁니다. 언어를 바꾸면 다시 받아 오지만 응답이 캐시되므로 비용이 늘지 않습니다. */
  var boardSeq = 0;                       // 늦게 온 응답이 새 화면을 덮지 않게
  var boardMsgKey = null, boardMsgKind = null;

  function boardMsg(key, kind) {
    boardMsgKey = key || null;
    boardMsgKind = kind || null;
    var box = $('#boardMsg');
    if (!box) return;
    box.textContent = boardMsgKey ? (T[boardMsgKey] || '') : '';
    box.className = 'board-msg' + (boardMsgKind ? ' is-' + boardMsgKind : '');
  }

  /* 목록에 보일 한 줄짜리 제목. 본문 첫 줄을 잘라 씁니다.
     따로 제목 칸을 두지 않은 이유는, 급한 사람에게 칸을 하나라도 덜 채우게
     하려는 것입니다. */
  function boardSubject(text) {
    var one = String(text || '').split(/\r?\n/)[0].trim();
    if (one.length > 60) one = one.slice(0, 60) + '…';
    return one || '—';
  }

  /* 날짜. 오늘 쓴 글은 시:분으로, 그 전은 날짜로 보여 줍니다. */
  function boardWhen(at) {
    if (!at) return '—';
    var d = new Date(at);
    if (isNaN(d.getTime())) return String(at).slice(0, 10);
    var now = new Date();
    var sameDay = d.getFullYear() === now.getFullYear() &&
                  d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
    function p(n) { return (n < 10 ? '0' : '') + n; }
    if (sameDay) return p(d.getHours()) + ':' + p(d.getMinutes());
    return String(d.getFullYear()).slice(2) + '.' + p(d.getMonth() + 1) + '.' + p(d.getDate());
  }

  /* 글 한 줄. 누르면 아래로 펼쳐집니다.
     잠긴 글(남의 비공개 글)은 서버가 본문을 아예 보내지 않으므로 펼치지 않습니다. */
  function boardRow(it, no) {
    var wrap = el('article', 'board-item' + (it.locked ? ' is-locked' : ''));

    var row = document.createElement(it.locked ? 'div' : 'button');
    row.className = 'board-row';
    if (!it.locked) { row.type = 'button'; row.setAttribute('aria-expanded', 'false'); }

    row.appendChild(el('span', 'bt-no', no != null ? String(no) : '—'));

    var qcell = el('span', 'bt-q');
    if (it.isPrivate) {
      var lock = el('span', 'board-lock');
      lock.textContent = '🔒';
      lock.setAttribute('aria-hidden', 'true');
      qcell.appendChild(lock);
    }
    qcell.appendChild(el('span', 'bt-subject',
      it.locked ? T.boardLockedSubject : boardSubject(it.body)));
    if (it.answered) qcell.appendChild(el('span', 'board-badge is-answered', T.boardAnsweredBadge));
    if (it.mine && it.isPrivate) qcell.appendChild(el('span', 'board-badge is-private', T.boardPrivateBadge));
    row.appendChild(qcell);

    row.appendChild(el('span', 'bt-user', it.username || '—'));
    row.appendChild(el('span', 'bt-at', boardWhen(it.at)));
    wrap.appendChild(row);

    if (it.locked) return wrap;

    var panel = el('div', 'board-panel');
    panel.hidden = true;
    panel.appendChild(el('p', 'board-body', it.body || ''));

    if (it.answer) {
      var a = el('div', 'board-a');
      a.appendChild(el('span', 'board-a-label', T.boardAnswer));
      a.appendChild(el('span', null, it.answer));
      panel.appendChild(a);
      if (it.src || it.checked) {
        var meta = el('div', 'board-meta');
        if (it.src) meta.appendChild(el('span', null, T.ntSourceLabel + ': ' + it.src));
        if (it.checked) meta.appendChild(el('span', null, T.ntCheckedLabel + ': ' + it.checked));
        panel.appendChild(meta);
      }
    } else {
      panel.appendChild(el('p', 'board-pending', T.boardNoAnswerYet));
    }

    // 관리자에게만 보이는 답변 작성/수정 칸. 비공개 글도 관리자는 볼 수 있으므로
    // 여기서 바로 답할 수 있습니다.
    if (me && me.isAdmin) panel.appendChild(boardAdminBox(it));

    wrap.appendChild(panel);

    row.addEventListener('click', function () {
      var open = panel.hidden;
      panel.hidden = !open;
      row.setAttribute('aria-expanded', open ? 'true' : 'false');
      wrap.classList.toggle('is-open', open);
    });

    return wrap;
  }

  function boardAdminBox(it) {
    var box = el('div', 'board-admin');
    box.appendChild(el('p', 'board-admin-label', T.adminAnswerLabel));

    var ta = document.createElement('textarea');
    ta.className = 'board-admin-ta';
    ta.rows = 3;
    ta.maxLength = 2000;
    ta.placeholder = T.adminAnswerPh || '';
    ta.value = it.answer || '';
    box.appendChild(ta);

    var src = document.createElement('input');
    src.type = 'text';
    src.className = 'board-admin-src';
    src.placeholder = T.adminSrcLabel || '';
    src.value = it.src || '';
    box.appendChild(src);

    var row = el('div', 'board-admin-row');
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-ghost btn-sm';
    btn.textContent = T.adminSaveBtn;
    row.appendChild(btn);
    var msg = el('span', 'board-admin-msg');
    row.appendChild(msg);
    box.appendChild(row);

    btn.addEventListener('click', function () {
      var text = ta.value.trim();
      if (text.length < 5 || text.length > 2000) {
        msg.textContent = T.errAnswerRule; msg.className = 'board-admin-msg is-bad';
        return;
      }
      btn.disabled = true;
      msg.textContent = T.authWorking; msg.className = 'board-admin-msg';
      submitAnswer(it.id, text, src.value.trim())
        .then(function (ok) {
          msg.textContent = ok ? T.adminAnswerOk : T.errNet;
          msg.className = 'board-admin-msg' + (ok ? ' is-good' : ' is-bad');
          if (ok) renderBoard(boardPage);
        })
        .then(function () { btn.disabled = false; });
    });

    return box;
  }

  function submitAnswer(id, answer, src) {
    return fetch('api/posts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'answer', id: id, answer: answer, src: src })
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
      .then(function (out) { return !!(out.ok && out.data && out.data.ok); })
      .catch(function (e) { console.warn('answer submit failed', e); return false; });
  }

  /* 쪽 넘김. 한 쪽에 10개씩 서버가 잘라 보냅니다. */
  var boardPage = 1, boardPages = 1, boardTotal = 0, boardPer = 10, boardQ = '';

  /* 1 2 3 … 처럼 번호를 직접 찍습니다. 쪽이 아무리 많아도 한 번에 10개까지만
     보여, 좁은 화면에서 줄이 넘치지 않게 합니다. */
  function paintPager() {
    var nav = $('#boardPager');
    if (!nav) return;
    nav.hidden = boardPages <= 1;

    var box = $('#pageNums');
    if (box) {
      box.innerHTML = '';
      var block = 10;
      var start = Math.floor((boardPage - 1) / block) * block + 1;
      var end = Math.min(boardPages, start + block - 1);
      for (var n = start; n <= end; n++) {
        (function (num) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'pg-num' + (num === boardPage ? ' is-on' : '');
          b.textContent = String(num);
          if (num === boardPage) b.setAttribute('aria-current', 'page');
          b.addEventListener('click', function () { renderBoard(num); });
          box.appendChild(b);
        })(n);
      }
    }
    $('#pagePrev').disabled = boardPage <= 1;
    $('#pageNext').disabled = boardPage >= boardPages;
  }

  function paintFound() {
    var p = $('#boardFound');
    var clear = $('#boardQClear');
    if (clear) clear.hidden = !boardQ;
    if (!p) return;
    if (!boardQ) { p.hidden = true; p.textContent = ''; return; }
    p.hidden = false;
    p.textContent = '"' + boardQ + '" · ' + boardTotal + (T.boardFoundUnit || '건');
  }

  /* 목록 한 쪽을 그립니다. 서버 응답과 아래 임시 저장본이 같은 모양이라 함께 씁니다. */
  function paintBoardList(list, data) {
    var items = (data && data.items) || [];
    boardPage = (data && data.page) || 1;
    boardPages = (data && data.pages) || 1;
    boardTotal = (data && data.total) || 0;
    boardPer = (data && data.perPage) || 10;

    list.innerHTML = '';
    if (!items.length) {
      list.appendChild(el('p', 'board-empty', boardQ ? T.boardNoResult : T.boardEmpty));
    } else {
      // 최신 글이 맨 위이므로, 번호는 전체 개수에서 거꾸로 셉니다.
      var first = boardTotal - (boardPage - 1) * boardPer;
      items.forEach(function (it, i) { list.appendChild(boardRow(it, first - i)); });
    }
    paintPager();
    paintFound();
  }

  /* 서버가 늦으면(첫 요청은 서버가 깨어나느라 몇 초 걸리기도 합니다) 무한정 기다리지 않습니다.
     15초가 지나면 끊고 한 번 더 시도합니다. */
  function fetchBoard(url, tries) {
    var ac = typeof AbortController === 'function' ? new AbortController() : null;
    var killer = ac ? setTimeout(function () { ac.abort(); }, 15000) : null;
    return fetch(url, { headers: { accept: 'application/json' }, signal: ac ? ac.signal : undefined })
      .then(function (r) {
        if (killer) clearTimeout(killer);
        return r.ok ? r.json() : Promise.reject(new Error('http ' + r.status));
      }, function (e) { if (killer) clearTimeout(killer); throw e; })
      .catch(function (e) {
        if (tries > 0) return new Promise(function (ok) { setTimeout(ok, 1200); })
          .then(function () { return fetchBoard(url, tries - 1); });
        throw e;
      });
  }

  function renderBoard(page) {
    var list = $('#boardList');
    if (!list) return;
    if (page) boardPage = page;
    var seq = ++boardSeq;

    var url = 'api/posts?page=' + boardPage + '&lang=' + encodeURIComponent(lang);
    if (boardQ) url += '&q=' + encodeURIComponent(boardQ);
    /* 로그인하지 않은 목록은 모두에게 같습니다. pub=1 을 붙이면 서버가 잠깐(30초) 저장해 둔
       목록을 바로 내줍니다. 로그인한 사람은 자기 비공개 글이 보여야 하므로 붙이지 않습니다. */
    if (!me) url += '&pub=1';

    /* 이 기기에서 마지막으로 본 같은 쪽을 먼저 보여 주고, 새 목록이 오면 바꿉니다.
       같은 쪽의 저장본이 없으면 "불러오는 중"을 보여 줍니다. */
    var cacheKey = 'board:' + url.replace(/&pub=1$/, '') + (me ? ':' + me.username : '');
    var cached = null;
    try { cached = JSON.parse(sessionStorage.getItem(cacheKey) || 'null'); } catch (e) {}
    list.setAttribute('aria-busy', 'true');
    if (cached) paintBoardList(list, cached);
    else if (page || !list.querySelector('.board-row')) {
      list.innerHTML = '';
      var wait = el('p', 'board-empty board-loading');
      wait.appendChild(el('span', 'spin'));
      wait.appendChild(document.createTextNode(T.boardLoading || ''));
      list.appendChild(wait);
    }

    fetchBoard(url, 1)
      .then(function (data) {
        if (seq !== boardSeq) return;
        try { sessionStorage.setItem(cacheKey, JSON.stringify(data)); } catch (e) {}
        paintBoardList(list, data);
        list.removeAttribute('aria-busy');
        if (page) list.scrollIntoView({ behavior: 'smooth', block: 'start' });
      })
      .catch(function (e) {
        if (seq !== boardSeq) return;
        list.removeAttribute('aria-busy');
        console.warn('board list unavailable', e);
        // 저장본을 보여 주고 있었다면 그대로 둡니다. 없을 때만 실패 안내와 다시 시도 버튼을 둡니다.
        if (cached) return;
        list.innerHTML = '';
        var p = el('p', 'board-empty', T.boardListFail + ' ');
        var again = el('button', 'btn btn-ghost btn-sm', T.boardRetry || 'Retry');
        again.type = 'button';
        again.addEventListener('click', function () { renderBoard(boardPage); });
        p.appendChild(again);
        list.appendChild(p);
        boardPages = 1;
        paintPager();
      });
  }

  /* ---------- 마이페이지 · 내가 남긴 질문 ----------
     질문게시판(#boardList)과 같은 글 한 줄 표시(boardRow)를 그대로 씁니다.
     다른 점은 서버에 mine=1 을 붙여 본인 글만 받아 오는 것과, 쪽 넘김 상태를
     따로 관리하는 것뿐입니다(게시판을 같은 화면에 함께 둘 일이 없어서
     boardPage 등을 그대로 나눠 써도 되지만, 헷갈리지 않게 이름을 다르게 둡니다). */
  var myqSeq = 0;
  var myqPage = 1, myqPages = 1, myqTotal = 0, myqPer = 10;

  function paintMyqPager() {
    var nav = $('#myqPager');
    if (!nav) return;
    nav.hidden = myqPages <= 1;

    var box = $('#myqNums');
    if (box) {
      box.innerHTML = '';
      var block = 10;
      var start = Math.floor((myqPage - 1) / block) * block + 1;
      var end = Math.min(myqPages, start + block - 1);
      for (var n = start; n <= end; n++) {
        (function (num) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'pg-num' + (num === myqPage ? ' is-on' : '');
          b.textContent = String(num);
          if (num === myqPage) b.setAttribute('aria-current', 'page');
          b.addEventListener('click', function () { renderMyQuestions(num); });
          box.appendChild(b);
        })(n);
      }
    }
    $('#myqPrev').disabled = myqPage <= 1;
    $('#myqNext').disabled = myqPage >= myqPages;
  }

  function renderMyQuestions(page) {
    var list = $('#myqList');
    if (!list || !me) return;
    if (page) myqPage = page;
    var seq = ++myqSeq;

    var url = 'api/posts?mine=1&page=' + myqPage + '&lang=' + encodeURIComponent(lang);

    fetch(url, { headers: { accept: 'application/json' } })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('http ' + r.status)); })
      .then(function (data) {
        if (seq !== myqSeq) return;
        var items = (data && data.items) || [];
        myqPage = (data && data.page) || 1;
        myqPages = (data && data.pages) || 1;
        myqTotal = (data && data.total) || 0;
        myqPer = (data && data.perPage) || 10;

        list.innerHTML = '';
        if (!items.length) {
          list.appendChild(el('p', 'board-empty', T.acMyQEmpty));
        } else {
          var first = myqTotal - (myqPage - 1) * myqPer;
          items.forEach(function (it, i) { list.appendChild(boardRow(it, first - i)); });
        }
        paintMyqPager();
        if (page) list.scrollIntoView({ behavior: 'smooth', block: 'start' });
      })
      .catch(function (e) {
        if (seq !== myqSeq) return;
        console.warn('my questions unavailable', e);
        list.innerHTML = '';
        list.appendChild(el('p', 'board-empty', T.boardListFail));
        myqPages = 1;
        paintMyqPager();
      });
  }

  function submitQuestion(text, isPrivate) {
    var btn = $('#boardSend');
    btn.disabled = true;
    boardMsg('boardSending');

    fetch('api/posts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ body: text, lang: lang, private: !!isPrivate })
    })
      .then(function (r) {
        return r.json().then(function (d) { return { ok: r.ok, data: d }; });
      })
      .then(function (out) {
        if (!out.ok) {
          // 로그인이 풀렸으면 글쓰기 상자를 닫고 안내로 바꿉니다.
          if (out.data && out.data.error === 'errNeedLogin') { setUser(null); paintAuth(); }
          boardMsg((out.data && out.data.error) || 'boardFail', 'bad');
          return;
        }
        $('#boardInput').value = '';
        if ($('#boardPrivate')) $('#boardPrivate').checked = false;
        boardMsg('boardSent', 'good');
        renderBoard(1);
      })
      .catch(function (e) {
        console.warn('board submit failed', e);
        boardMsg('boardFail', 'bad');
      })
      .then(function () { btn.disabled = false; });
  }

  /* ---------- 로그인 ---------- */
  /* 로그인 여부만 화면에 반영합니다. 실제 확인은 서버가 쿠키로 합니다.
     브라우저 쪽 값은 표시용일 뿐이라, 고쳐도 글이 써지지는 않습니다. */
  var me = null;

  function setUser(u) { me = u || null; }

  /* 머리말 메뉴 — 로그인했으면 [이름 ▾] 단추 하나만 두고
     계정 설정과 로그아웃은 그 안에 넣습니다. 좁은 화면에서 단추 두 개가
     나란히 서면 브랜드 이름이 밀려 줄바꿈되기 때문입니다. */
  function closeMenu() {
    var menu = $('#authMenu'), btn = $('#authToggle');
    if (menu) menu.hidden = true;
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    var menu = $('#authMenu'), btn = $('#authToggle');
    if (!menu || !btn) return;
    var open = menu.hidden;
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function paintAuth() {
    var slot = $('#authSlot'), menu = $('#authMenu');
    if (slot) {
      slot.innerHTML = '';
      if (me) {
        var name = me.nickname || me.username;
        var btn = el('button', 'auth-btn auth-toggle', name + (T.authHello || ''));
        btn.type = 'button';
        btn.id = 'authToggle';
        btn.setAttribute('aria-haspopup', 'true');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', 'authMenu');
        btn.addEventListener('click', function (e) { e.stopPropagation(); toggleMenu(); });
        slot.appendChild(btn);
      } else {
        var a = el('a', 'auth-btn', T.navLogin);
        a.href = 'login.html';
        slot.appendChild(a);
        if (menu) menu.hidden = true;
      }
    }
    // 로그아웃하면 메뉴가 열린 채로 남지 않게 합니다.
    if (!me) closeMenu();

    // 게시판: 로그인했으면 글쓰기 상자, 아니면 안내
    var form = $('#boardForm'), gate = $('#boardGate');
    if (form && gate) { form.hidden = !me; gate.hidden = !!me; }

    // 마이페이지: 로그인 안 했으면 안내만 보입니다
    var acBody = $('#acBody'), acGate = $('#acGate');
    if (acBody && acGate) { acBody.hidden = !me; acGate.hidden = !!me; }
  }

  /* 어떤 로그인 방법이 켜져 있는지는 서버만 압니다(키가 있는지 브라우저는 모릅니다).
     그래서 목록을 받아 와서 켜진 버튼만 보여 줍니다. 키를 안 넣은 버튼을
     띄워 두면 눌렀을 때만 실패해서, 사용자는 왜 안 되는지 알 수 없습니다. */
  var methods = [];

  function paintSocial() {
    var box = $('#socialBox');
    if (!box) return;
    if (!methods.length) { box.hidden = true; return; }
    box.hidden = false;

    var map = { google: '#btnGoogle', kakao: '#btnKakao' };
    Object.keys(map).forEach(function (name) {
      var b = $(map[name]);
      if (b) b.hidden = methods.indexOf(name) < 0;
    });
  }

  function loadMe() {
    return fetch('api/auth', { headers: { accept: 'application/json' } })
      .then(function (r) { return r.ok ? r.json() : { user: null }; })
      .then(function (d) {
        setUser(d && d.user);
        methods = (d && d.methods) || [];
      })
      .catch(function () { setUser(null); methods = []; })
      .then(function () {
        paintAuth(); paintSocial();
        syncAccountLang();
        loadMySummary();      // 첫 화면 "내 정보 한눈에"
        loginNext();          // login.html?next=... 이면 소셜 버튼도 그쪽으로 돌아오게
        // 로그인한 사람에게만 목록이 달라집니다(자기 비공개 글, 관리자 답변 칸).
        // 로그인하지 않았으면 처음 불러온 목록이 그대로 맞으므로 다시 부르지 않습니다.
        if ($('#boardList') && me) renderBoard(boardPage);
        // 마이페이지 "내가 남긴 질문"도 로그인 확인이 끝난 뒤에야 그릴 수 있습니다.
        if ($('#myqList')) renderMyQuestions(myqPage);
      });
  }

  /* 로그인한 계정의 언어를 화면 언어와 맞춥니다.
     · 계정에 저장된 언어가 있고 지금 화면과 다르면 → 계정 쪽을 따릅니다
       (다른 기기에서 로그인해도 저장해 둔 언어로 바로 보이게 됩니다).
     · 계정에 아직 저장된 언어가 없으면 → 지금 화면 언어(대개 이 기기 언어를
       자동 감지한 값)를 계정에 저장해, 다음에 다른 기기로 로그인할 때부터
       이 값을 따르게 합니다. */
  function syncAccountLang() {
    if (!me) return;
    if (me.lang && isLang(me.lang) && me.lang !== lang) {
      save('lang', me.lang);
      applyLang(me.lang);
      return;
    }
    if (!me.lang) pushAccountLang(lang);
  }

  function pushAccountLang(code) {
    if (!me || !isLang(code)) return;
    fetch('api/auth', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'lang', lang: code })
    })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { if (d && d.ok && me) me.lang = d.lang || code; })
      .catch(function (e) { console.warn('lang sync failed', e); });
  }

  function logout() {
    fetch('api/auth', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'logout' })
    })
      .catch(function () {})
      .then(function () {
        setUser(null); paintAuth();
        if ($('#boardList')) renderBoard(boardPage);
        if ($('#myqList')) { $('#myqList').innerHTML = ''; if ($('#myqPager')) $('#myqPager').hidden = true; }
      });
  }

  var authMsgKey = null, authMsgKind = null;

  function authMsg(key, kind) {
    authMsgKey = key || null;
    authMsgKind = kind || null;
    var box = $('#authMsg');
    if (!box) return;
    box.textContent = authMsgKey ? (T[authMsgKey] || T.errNet) : '';
    box.className = 'auth-msg' + (authMsgKind ? ' is-' + authMsgKind : '');
  }

  function authSend(action, payload, okKey, after) {
    authMsg('authWorking');
    fetch('api/auth', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(Object.assign({ action: action }, payload))
    })
      .then(function (r) {
        return r.json().then(function (d) { return { ok: r.ok, data: d }; });
      })
      .then(function (out) {
        if (!out.ok || !out.data || !out.data.ok) {
          authMsg((out.data && out.data.error) || 'errNet', 'bad');
          return;
        }
        setUser(out.data.user || null);
        authMsg(okKey, 'good');
        paintAuth();
        setTimeout(after, 700);
      })
      .catch(function (e) {
        console.warn('auth failed', e);
        authMsg('errNet', 'bad');
      });
  }

  /* ---------- 마이페이지 ---------- */

  var acInfo = null;

  function acMsg(box, key, kind) {
    var n = $(box);
    if (!n) return;
    n.textContent = key ? (T[key] || T.errNet) : '';
    n.className = 'auth-msg' + (kind ? ' is-' + kind : '');
  }

  /* 로그인 방법을 사람이 읽는 말로 바꿉니다. */
  function providerName(p) {
    if (p === 'google') return 'Google';
    if (p === 'kakao') return T.socialKakao ? '\uce74\uce74\uc624' : 'Kakao';
    return T.acWayPassword || '\uc544\uc774\ub514 \u00b7 \ube44\ubc00\ubc88\ud638';
  }

  function paintAccount() {
    if (!acInfo || !$('#acBody')) return;

    $('#acProvider').textContent = providerName(acInfo.provider);
    $('#acJoined').textContent = acInfo.joined || '-';

    // 소셜 계정의 아이디는 user_1a2b3c4d 같은 내부용 값이라 보여 줘도 쓸 데가 없습니다.
    var isPw = acInfo.provider === 'password';
    $('#acUsername').textContent = isPw ? acInfo.username : (T.acIdHidden || '-');

    var nick = $('#acNick');
    if (nick && !nick.value) nick.value = acInfo.nickname || '';

    // 비밀번호 칸은 비밀번호로 가입한 사람에게만 보입니다.
    var pwBlock = $('#pwBlock'), pwNote = $('#pwSocialNote'), idNote = $('#acIdNote');
    if (pwBlock) pwBlock.hidden = !isPw;
    if (pwNote) pwNote.hidden = isPw;
    if (idNote) idNote.hidden = !isPw;

    var birth = $('#acBirth');
    if (birth) birth.value = acInfo.birthdate || '';
    var nation = $('#acNation');
    if (nation) nation.value = acInfo.nationality || '';
    var gender = $('#acGender');
    if (gender) gender.value = acInfo.gender || '';
  }

  function loadAccount() {
    if (!$('#acBody')) return;
    return fetch('api/account', { headers: { accept: 'application/json' } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { acInfo = d; paintAccount(); })
      .catch(function () { acMsg('#nickMsg', 'errNet', 'bad'); });
  }

  function saveNick(nickname) {
    acMsg('#nickMsg', 'authWorking');
    fetch('api/account', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'nickname', nickname: nickname })
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
      .then(function (out) {
        if (!out.ok || !out.data || !out.data.ok) {
          acMsg('#nickMsg', (out.data && out.data.error) || 'errNet', 'bad');
          return;
        }
        acMsg('#nickMsg', 'acNickOk', 'good');
        if (acInfo) acInfo.nickname = out.data.nickname;
        // 머리말에 걸린 이름도 그 자리에서 바꿉니다.
        if (me) { me.nickname = out.data.nickname; paintAuth(); }
      })
      .catch(function (e) {
        console.warn('nickname failed', e);
        acMsg('#nickMsg', 'errNet', 'bad');
      });
  }

  function savePw(current, next) {
    acMsg('#pwMsg', 'authWorking');
    fetch('api/account', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'password', current: current, next: next })
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
      .then(function (out) {
        if (!out.ok || !out.data || !out.data.ok) {
          acMsg('#pwMsg', (out.data && out.data.error) || 'errNet', 'bad');
          return;
        }
        acMsg('#pwMsg', 'acPwOk', 'good');
        // 바꾼 비밀번호가 화면에 남아 있지 않게 지웁니다.
        $('#acPwNow').value = '';
        $('#acPwNew').value = '';
        $('#acPwNew2').value = '';
      })
      .catch(function (e) {
        console.warn('password failed', e);
        acMsg('#pwMsg', 'errNet', 'bad');
      });
  }

  function saveProfile(birthdate, nationality, gender) {
    acMsg('#profileMsg', 'authWorking');
    fetch('api/account', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'profile', birthdate: birthdate, nationality: nationality, gender: gender })
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
      .then(function (out) {
        if (!out.ok || !out.data || !out.data.ok) {
          acMsg('#profileMsg', (out.data && out.data.error) || 'errNet', 'bad');
          return;
        }
        acMsg('#profileMsg', 'acProfileOk', 'good');
        if (acInfo) {
          acInfo.birthdate = out.data.birthdate;
          acInfo.nationality = out.data.nationality;
          acInfo.gender = out.data.gender;
        }
      })
      .catch(function (e) {
        console.warn('profile failed', e);
        acMsg('#profileMsg', 'errNet', 'bad');
      });
  }

  /* ---------- 질문 답변 ---------- */
  /* ---------- 내 정보 한눈에 (로그인 개인화) ----------
     로그인한 사람이 기한 계산 · 사유 자가진단 · 출국 정산에서 [계산] 버튼을 누르면
     "입력한 값"을 계정에 저장합니다(api/account.js summarySave).
     첫 화면은 저장된 값을 받아 지금 고른 언어로 다시 계산해 한 번에 보여 줍니다.
     세 가지를 모두 넣었으면 첫 화면에 들어올 때 팝업으로 한 번 띄웁니다.
     로그인하지 않았으면 아무것도 서버로 보내지 않습니다(예전과 같습니다). */
  var mySum = null;            // { deadline, reason, payout } — 로그인 확인 뒤 채워집니다
  var MY_PARTS = ['deadline', 'reason', 'payout'];

  function myHas(part) {
    var v = mySum && mySum[part];
    if (!v) return false;
    if (part === 'payout') return !!(v.exit || v.ins || v.elig);
    return true;
  }

  function myCount() {
    var n = 0;
    MY_PARTS.forEach(function (p) { if (myHas(p)) n++; });
    return n;
  }

  function loadMySummary() {
    if (!me) { mySum = null; paintMy(); return; }
    fetch('api/account?part=summary', { headers: { accept: 'application/json' } })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { mySum = (d && d.summary) || {}; })
      .catch(function () { mySum = {}; })
      .then(function () { paintMy(); myMaybeAutoOpen(); });
  }

  /* 결과 아래에 "내 정보에 저장했습니다" 를 잠깐 적어 둡니다. */
  function myNote(anchorSel, key, kind) {
    var anchor = $(anchorSel);
    if (!anchor) return;
    var id = 'myNote-' + anchorSel.replace(/[^a-z0-9]/gi, '');
    var n = document.getElementById(id);
    if (!n) {
      n = el('p', 'my-note');
      n.id = id;
      n.setAttribute('role', 'status');
      anchor.parentNode.insertBefore(n, anchor.nextSibling);
    }
    n.className = 'my-note' + (kind ? ' is-' + kind : '');
    n.textContent = T[key] || '';
    n.setAttribute('data-key', key);
  }

  function mySave(part, data, anchorSel) {
    if (!me) return;
    fetch('api/account', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'summarySave', part: part, data: data })
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, data: d }; }); })
      .then(function (out) {
        if (!out.ok || !out.data || !out.data.ok) throw new Error('save');
        mySum = out.data.summary || mySum;
        if (anchorSel) myNote(anchorSel, 'mySaved', 'good');
        paintMy();
      })
      .catch(function (e) {
        console.warn('summary save failed', e);
        if (anchorSel) myNote(anchorSel, 'mySaveFail', 'bad');
      });
  }

  /* 첫 화면 카드 — 로그인 전/후 두 모습입니다. */
  function paintMy() {
    var card = $('#myCard');
    if (!card) return;
    var guest = $('#myGuest'), user = $('#myUser');
    guest.hidden = !!me;
    user.hidden = !me;
    if (!me) return;

    var n = myCount();
    $('#myProgress').textContent = (T.myProgress || '{n}/3').replace('{n}', n);
    $$('.my-step', card).forEach(function (li) {
      var part = li.getAttribute('data-part');
      var done = myHas(part);
      li.classList.toggle('is-done', done);
      $('.my-step-ico', li).textContent = done ? '✓' : '';
      $('.my-step-state', li).textContent = done ? T.myDone : T.myTodo;
      $('.my-step-go', li).textContent = done ? T.myEdit : T.myGo;
    });
    var open = $('#myOpen');
    if (open) open.disabled = n === 0;
    if ($('#myPop') && $('#myPop').open) paintMyPop();
  }

  /* 요약 내용을 줄 단위로 만듭니다. 팝업과 이메일이 같은 내용을 씁니다.
     돌려주는 값: [{ h: 제목 } | { k: 항목, v: 값, kind } | { p: 문장 }] */
  function myRows() {
    var rows = [];
    var now = today();
    // 숫자와 단위 사이 띄어쓰기 — 한국어는 "13일", 다른 언어는 "13 days".
    function unit(u) { return (lang === 'ko' || /^\s/.test(u || '')) ? (u || '') : ' ' + u; }
    function dayLine(d) {
      var days = diffDays(d, now);
      if (days < 0) return fmtDay(d) + ' · ' + Math.abs(days) + unit(T.daysOver);
      if (days === 0) return fmtDay(d) + ' · ' + T.dueToday;
      return fmtDay(d) + ' · ' + days + unit(T.daysUnit);
    }
    function kindOf(d) {
      var days = diffDays(d, now);
      return days < 0 || days === 0 ? 'stop' : (days <= 7 ? 'warn' : 'ok');
    }
    function asDay(v) { return midnight(new Date(v + 'T00:00:00')); }

    /* 1) 기한 */
    rows.push({ h: T.dlTitle });
    var dl = mySum && mySum.deadline;
    if (dl && dl.leave) {
      var leave = asDay(dl.leave);
      var applyDue = addMonths(leave, 1);
      var applied = dl.apply ? asDay(dl.apply) : null;
      var jobDue = addMonths(applied || applyDue, 3);
      rows.push({ k: T.myLeave, v: fmtDay(leave) });
      if (applied) rows.push({ k: T.myApplied, v: fmtDay(applied) });
      rows.push({ k: T.myApplyBy, v: dayLine(applyDue), kind: applied ? 'ok' : kindOf(applyDue) });
      rows.push({ k: T.myJobBy, v: dayLine(jobDue), kind: kindOf(jobDue) });
      if (!applied) rows.push({ p: T.msgEstimate });
    } else rows.push({ p: T.myNone });

    /* 2) 사유 자가진단 */
    rows.push({ h: T.ckTitle });
    var rs = mySum && mySum.reason;
    if (rs && rs.q1) {
      var f = quizCompute(rs);
      rows.push({ k: f.tag, v: f.title, kind: f.kind === 'stop' ? 'stop' : (f.kind === 'warn' ? 'warn' : 'ok') });
      rows.push({ p: f.body + ' ' + f.ev + ' ' + f.count });
      rows.push({ k: T.ckDocsTitle, v: (T.docs || []).join(', ') });
    } else rows.push({ p: T.myNone });

    /* 3) 출국 정산 */
    rows.push({ h: T.secNoPay });
    var py = mySum && mySum.payout;
    if (py && (py.exit || py.ins || py.elig)) {
      if (py.exit) {
        var exit = asDay(py.exit);
        var reportDue = addMonths(exit, -1);
        var claimDue = new Date(exit.getFullYear(), exit.getMonth(), exit.getDate() - 7);
        rows.push({ k: T.myExit, v: fmtDay(exit) });
        rows.push({ k: T.myReport, v: dayLine(reportDue), kind: kindOf(reportDue) });
        rows.push({ k: T.myClaim, v: dayLine(claimDue), kind: kindOf(claimDue) });
      }
      if (py.ins && py.ins.wage && py.ins.start) {
        var st = asDay(py.ins.start);
        var en = py.ins.end ? asDay(py.ins.end) : now;
        if (en > st) {
          var m = insMoney(py.ins.wage, st, en);
          rows.push({ k: T.myInsSaved, v: wonFmt(m.saved) });
          if (m.gap > 10000) rows.push({ k: T.myInsGap, v: wonFmt(m.gap), kind: 'warn' });
        }
      }
      if (py.elig && T.pyElig) {
        var r = eligCompute({
          start: py.elig.start, end: py.elig.end, exit: py.exit || '',
          moved: py.elig.moved, hours: py.elig.hours, nat: py.elig.nat, type: py.elig.type
        });
        if (r.tenureText) rows.push({ p: r.tenureText });
        r.items.forEach(function (it) {
          var E = T.pyElig;
          rows.push({ k: it.n, v: it.kind === 'ok' ? E.vOk : (it.kind === 'warn' ? E.vWarn : E.vNo),
                      kind: it.kind === 'no' ? 'stop' : it.kind });
        });
      }
    } else rows.push({ p: T.myNone });

    return rows;
  }

  function paintMyPop() {
    var body = $('#myPopBody');
    if (!body) return;
    body.innerHTML = '';
    var sec = null, dl = null;
    myRows().forEach(function (r) {
      if (r.h) {
        sec = el('section', 'my-sec');
        sec.appendChild(el('h3', null, r.h));
        body.appendChild(sec);
        dl = null;
        return;
      }
      if (r.p) { sec.appendChild(el('p', 'my-p', r.p)); dl = null; return; }
      if (!dl) { dl = el('dl', 'my-dl'); sec.appendChild(dl); }
      var row = el('div', 'my-row' + (r.kind ? ' is-' + r.kind : ''));
      row.appendChild(el('dt', null, r.k));
      row.appendChild(el('dd', null, r.v));
      dl.appendChild(row);
    });
    var stamp = [];
    MY_PARTS.forEach(function (p) { if (mySum && mySum[p] && mySum[p].at) stamp.push(mySum[p].at); });
    if (stamp.length) {
      stamp.sort();
      body.appendChild(el('p', 'my-stamp', T.myUpdated + ': ' + stamp[stamp.length - 1].slice(0, 10)));
    }
    body.appendChild(el('p', 'my-dis', T.disclaimer));
    $('#myPopDone').hidden = myCount() < 3;
  }

  /* 이메일 본문(글자). 서버는 이 글을 HTML 로 바꿀 때 글자를 이스케이프합니다. */
  function myText() {
    var lines = [T.myPopTitle];
    myRows().forEach(function (r) {
      if (r.h) { lines.push(''); lines.push('■ ' + r.h); }
      else if (r.p) lines.push(r.p);
      else lines.push('- ' + r.k + ': ' + r.v);
    });
    lines.push('', T.disclaimer, '', 'E9-Bridge · https://eum-six.vercel.app/?lang=' + lang);
    return lines.join('\n');
  }

  function openMyPop() {
    var pop = $('#myPop');
    if (!pop || !me) return;
    paintMyPop();
    var msg = $('#myMailMsg');
    if (msg) { msg.textContent = ''; msg.className = 'result-email-msg'; }
    if (typeof pop.showModal === 'function') { if (!pop.open) pop.showModal(); }
    else pop.setAttribute('open', '');
  }

  function closeMyPop() {
    var pop = $('#myPop');
    if (!pop) return;
    if (typeof pop.close === 'function' && pop.open) pop.close();
    else pop.removeAttribute('open');
  }

  /* 세 가지를 다 넣은 뒤 첫 화면에 오면 한 번 띄웁니다. 같은 내용으로는 다시 띄우지 않고,
     어느 하나라도 새로 저장하면 다음에 또 한 번 띄웁니다. */
  function myMaybeAutoOpen() {
    if (!$('#myPop') || !me || myCount() < 3) return;
    var sig = MY_PARTS.map(function (p) { return (mySum[p] && mySum[p].at) || ''; }).join('|');
    if (load('myPopSeen') === sig) return;
    save('myPopSeen', sig);
    openMyPop();
  }

  function sendMyMail(e) {
    if (e) e.preventDefault();
    var input = $('#myEmail'), msg = $('#myMailMsg'), btn = $('#myMailBtn');
    var addr = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addr)) {
      msg.textContent = T.ckEmailBad; msg.className = 'result-email-msg is-bad';
      input.focus();
      return;
    }
    var text = myText();
    btn.disabled = true;
    msg.textContent = T.myEmailSending; msg.className = 'result-email-msg';

    fetch('api/account', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'summaryMail', to: addr, subject: T.myEmailSubject, text: text })
    })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { status: r.status, data: d }; }); })
      .then(function (out) {
        if (out.status === 200 && out.data && out.data.ok) {
          msg.textContent = T.myEmailSent; msg.className = 'result-email-msg is-good';
          return;
        }
        if (out.status === 429) {
          msg.textContent = T.myEmailLimit; msg.className = 'result-email-msg is-bad';
          return;
        }
        /* 서버에 메일 설정이 아직 없으면(501) 이 기기의 메일 앱을 열어 대신 보냅니다. */
        if (out.status === 501 || out.status === 404 || out.status === 0) { myMailto(addr, text); return; }
        msg.textContent = T.myEmailFail; msg.className = 'result-email-msg is-bad';
      })
      .catch(function () { myMailto(addr, text); })
      .then(function () { btn.disabled = false; });
  }

  function myMailto(addr, text) {
    var msg = $('#myMailMsg');
    var url = 'mailto:' + encodeURIComponent(addr).replace(/%40/g, '@') +
      '?subject=' + encodeURIComponent(T.myEmailSubject) +
      '&body=' + encodeURIComponent(text);
    window.location.href = url;
    msg.textContent = T.ckEmailOpened; msg.className = 'result-email-msg is-good';
  }

  function clearMy() {
    if (!me) return;
    if (!window.confirm(T.myClearAsk)) return;
    fetch('api/account', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'summaryClear' })
    })
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error('http ' + r.status)); })
      .then(function () {
        mySum = {};
        drop('myPopSeen');
        closeMyPop();
        paintMy();
      })
      .catch(function (e) {
        console.warn('summary clear failed', e);
        var msg = $('#myMailMsg');
        if (msg) { msg.textContent = T.errNet; msg.className = 'result-email-msg is-bad'; }
      });
  }

  /* login.html?next=index.html — 로그인한 뒤 돌아갈 화면. 우리 사이트의 .html 이름만 받습니다. */
  function nextPage() {
    var v = null;
    try { v = new URLSearchParams(location.search).get('next'); } catch (e) {}
    return v && /^[a-z0-9_-]{1,40}\.html$/.test(v) ? v : null;
  }

  function loginNext() {
    var n = nextPage();
    if (!n) return;
    ['#btnGoogle', '#btnKakao'].forEach(function (sel) {
      var b = $(sel);
      if (b) b.setAttribute('href', b.getAttribute('href').replace(/ret=[^&]*/, 'ret=' + n));
    });
    // 로그인 ↔ 회원가입 사이를 오가도 돌아갈 곳을 잃지 않게 합니다.
    $$('a[href="signup.html"], a[href="login.html"]').forEach(function (a) {
      a.setAttribute('href', a.getAttribute('href') + '?next=' + n);
    });
  }

  /* 추천 질문 칩은 순서대로 지식베이스 항목과 짝을 이룹니다.
     답이 이미 정해져 있으니 서버(AI)를 기다리지 않고 바로 보여 줍니다. */
  var CHIP_KEYS = ['apply-deadline', 'job-period', 'limit-count', 'unpaid-wage',
    'exit-insurance', 'how-to', 'employer-fault', 'e74-change'];

  function renderChips() {
    var box = $('#askChips');
    if (!box) return;
    box.innerHTML = '';
    (T.chips || []).forEach(function (c, i) {
      var b = el('button', 'chip', c);
      b.type = 'button';
      b.addEventListener('click', function () {
        $('#askInput').value = c;
        var hit = null;
        KB.forEach(function (item) { if (item.key === CHIP_KEYS[i]) hit = item; });
        if (hit) answerLocal(c, hit);
        else answer(c);
      });
      box.appendChild(b);
    });
  }

  function answerLocal(question, hit) {
    var thread = $('#thread');
    if (!thread) return;
    thread.appendChild(el('div', 'bubble bubble-u', question));
    var box = el('div', 'bubble bubble-a');
    thread.appendChild(box);
    fillAnswer(box, hit[lang] || hit.en, hit.src, false, hit.review, null, isMt(hit));
  }

  /* 이 언어의 답이 기계 번역 초안인지 — 그렇다면 "번역 검토 필요"를 붙입니다. */
  function isMt(hit) { return !!(hit[lang] && hit.mt && hit.mt.indexOf(lang) !== -1); }

  function clearThread() { var t = $('#thread'); if (t) t.innerHTML = ''; }

  function findEntry(q) {
    var text = q.toLowerCase();
    var best = null, bestScore = 0;
    KB.forEach(function (item) {
      var score = 0;
      item.keywords.forEach(function (k) {
        if (text.indexOf(String(k).toLowerCase()) !== -1) score += String(k).length;
      });
      if (score > bestScore) { bestScore = score; best = item; }
    });
    return bestScore > 0 ? best : null;
  }

  function apiPost(path, payload, waitMs) {
    /* 브라우저 쪽에도 기다림의 한계를 둡니다. 서버가 답을 안 주면
       사용자는 버튼을 누른 채로 몇 분을 기다리게 됩니다. 그러면
       고장 난 줄 알고 창을 닫아 버립니다. 차라리 일찍 안내하는 편이 낫습니다. */
    var ac = typeof AbortController === 'function' ? new AbortController() : null;
    var killer = ac ? setTimeout(function () { ac.abort(); }, waitMs || 70000) : null;

    return fetch(path, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      signal: ac ? ac.signal : undefined
    }).then(function (r) {
      if (killer) clearTimeout(killer);
      return r;
    }, function (e) {
      if (killer) clearTimeout(killer);
      // 시간 초과도 "지금 붐빈다"와 같은 안내를 쓰도록 표시해 둡니다.
      if (e && (e.name === 'AbortError' || /abort/i.test(String(e.message || '')))) {
        var t = new Error('timeout');
        t.retryable = true;
        throw t;
      }
      throw e;
    }).then(function (r) {
      if (!r.ok) {
        // 왜 실패했는지 화면에서 구분할 수 있도록 상태를 함께 실어 보냅니다.
        var err = new Error('http ' + r.status);
        err.status = r.status;
        return r.json().catch(function () { return {}; }).then(function (d) {
          err.retryable = !!(d && d.retryable) || r.status === 503;
          throw err;
        });
      }
      return r.json();
    });
  }

  /* ---------- 자주 묻는 질문 바로 답변 ----------
     AI 를 부르기 전에 FAQ_KB(data.js)에서 먼저 찾습니다. 질문에 그 주제의 낱말이
     충분히 들어 있거나, FAQ 질문 문장과 많이 닮았으면 FAQ 답을 그 자리에서 보여 줍니다.
     애매하면(점수가 낮거나 두 주제가 비슷하면) 찾지 않은 것으로 보고 AI 에게 넘깁니다.
     틀린 FAQ 답을 보여 주느니 조금 기다려 AI 답을 받는 편이 낫기 때문입니다. */
  function normQ(v) {
    return String(v || '').toLowerCase()
      .replace(/[?？!！.,，。·"'“”‘’~()\[\]{}:;]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function grams(v) {
    var t = v.replace(/\s+/g, ''), m = {}, n = 0;
    for (var i = 0; i < t.length - 1; i++) { var g = t.substr(i, 2); m[g] = (m[g] || 0) + 1; n++; }
    return { m: m, n: n };
  }

  // 글자 두 개씩 끊어 겹치는 비율(0~1). 띄어쓰기가 없는 크메르어에서도 동작합니다.
  function dice(a, b) {
    var A = grams(a), B = grams(b);
    if (!A.n || !B.n) return 0;
    var hit = 0;
    for (var g in A.m) if (B.m[g]) hit += Math.min(A.m[g], B.m[g]);
    return (2 * hit) / (A.n + B.n);
  }

  function kwHit(text, kw) {
    // 영문·숫자 낱말은 낱말 경계를 봅니다 (times 안의 mes 같은 우연한 일치를 막습니다).
    if (/^[a-z0-9 \-]+$/.test(kw)) {
      return new RegExp('(^|[^a-z0-9])' + kw.replace(/[-]/g, '\\-') + '($|[^a-z0-9])').test(text);
    }
    return text.indexOf(kw) !== -1;
  }

  function faqMatch(question) {
    if (typeof FAQ_KB === 'undefined') return null;
    var t = normQ(question);
    if (t.length < 2) return null;
    var best = null, bs = 0, second = 0;
    FAQ_KB.forEach(function (f) {
      if (!T['faqA_' + f.key]) return;
      var sc = 0;
      f.keywords.forEach(function (k) {
        var kk = normQ(k);
        if (kk && kwHit(t, kk)) sc += Math.min(kk.replace(/\s/g, '').length, 8);
      });
      var d = dice(t, normQ(T['faqQ_' + f.key]));
      var total = sc + (d >= 0.35 ? d * 10 : 0);
      if (total > bs) { second = bs; bs = total; best = f; }
      else if (total > second) second = total;
    });
    return best && bs >= 5 && bs >= second * 1.4 ? best : null;
  }

  function answer(question) {
    var thread = $('#thread');
    if (!thread) return;
    thread.appendChild(el('div', 'bubble bubble-u', question));

    /* 자주 묻는 질문이면 기다리지 않고 바로 답합니다. */
    var faq = faqMatch(question);
    if (faq) {
      var fbox = el('div', 'bubble bubble-a');
      thread.appendChild(fbox);
      fillAnswer(fbox, T['faqA_' + faq.key], faq.src, false, false, T.askFaqHit);
      var more = el('button', 'btn btn-ghost btn-sm ask-more', T.askAskAi);
      more.type = 'button';
      more.addEventListener('click', function () {
        more.remove();
        askAi(question);
      });
      fbox.appendChild(more);
      return;
    }
    askAi(question);
  }

  function askAi(question) {
    var thread = $('#thread');
    if (!thread) return;
    var box = el('div', 'bubble bubble-a');
    var wait = el('p');
    wait.appendChild(el('span', 'spin'));
    wait.appendChild(document.createTextNode(T.askThinking));
    box.appendChild(wait);
    thread.appendChild(box);
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    apiPost('/api/ask', { question: question, lang: lang })
      .then(function (data) {
        if (!data || !data.answer) throw new Error('empty');
        fillAnswer(box, data.answer, null, false);
      })
      .catch(function (e) {
        /* 먼저 브라우저 안의 지식베이스에서 찾아 봅니다. 답이 있으면
           서버가 잠깐 안 되더라도 사용자는 답을 얻습니다. */
        var hit = findEntry(question);
        if (hit) { fillAnswer(box, hit[lang] || hit.en, hit.src, true, hit.review, null, isMt(hit)); return; }

        /* 지식베이스에도 없을 때 — 몰려서 실패한 것이면 그렇게 말해 줍니다.
           "답을 못 찾았다" 고만 하면 다시 눌러 볼 생각을 못 합니다. */
        if (e && e.retryable) fillAnswer(box, T.askBusy, null, true);
        else fillAnswer(box, T.askFallback, null, true);
      });
  }

  function fillAnswer(box, text, src, offline, review, tag, mt) {
    box.innerHTML = '';
    if (tag) box.appendChild(el('span', 'flag flag-faq', tag));
    if (review) box.appendChild(el('span', 'flag', T.askReview));
    if (mt) box.appendChild(el('span', 'flag', T.askMtReview || 'Translation needs review'));
    String(text).split('\n').forEach(function (line) {
      if (line.trim()) box.appendChild(el('p', null, line.trim()));
    });
    if (src) box.appendChild(el('p', 'bubble-src', T.askSourceLabel + ': ' + src));
    if (offline) box.appendChild(el('p', 'bubble-dis', T.askOffline));
    box.appendChild(el('p', 'bubble-dis', T.disclaimer));
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ---------- 사진에서 읽기 ---------- */
  function shrink(file) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onload = function () {
        var max = 1600;
        var scale = Math.min(1, max / Math.max(img.width, img.height));
        var c = document.createElement('canvas');
        c.width = Math.round(img.width * scale);
        c.height = Math.round(img.height * scale);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        var url = c.toDataURL('image/jpeg', 0.82);
        URL.revokeObjectURL(img.src);
        resolve(url.split(',')[1]);
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }

  function readDoc() {
    var f = $('#docFile').files && $('#docFile').files[0];
    if (!f) return;
    var out = $('#docReadOut');
    var btn = $('#docRead');

    out.hidden = false;
    out.className = 'read-out';
    out.innerHTML = '';
    var wait = el('p');
    wait.appendChild(el('span', 'spin'));
    wait.appendChild(document.createTextNode(T.ckReading));
    out.appendChild(wait);
    btn.disabled = true;

    shrink(f)
      .then(function (b64) {
        // 사진은 글보다 오래 걸립니다. 조금 더 기다려 줍니다.
        return apiPost('/api/read-doc', { image: b64, mediaType: 'image/jpeg', lang: lang }, 75000);
      })
      .then(function (d) { showRead(d); })
      .catch(function (e) {
        console.warn('read-doc failed', e);
        out.className = 'read-out is-warn';
        out.innerHTML = '';
        out.appendChild(el('p', null, T.ckReadFail));
      })
      .then(function () { btn.disabled = false; });
  }

  function showRead(d) {
    var out = $('#docReadOut');
    out.className = 'read-out';
    out.innerHTML = '';
    out.appendChild(el('h5', null, T.ckReadOk + (d.docType ? ' — ' + d.docType : '')));

    var dl = el('dl');
    function row(k, v) {
      dl.appendChild(el('dt', null, k));
      dl.appendChild(el('dd', null, v || T.ckReadNone));
    }
    row(T.ckReadEmployer, d.employer);
    row(T.ckReadEnd, d.endDate);
    row(T.ckReadReason, d.statedReason);
    out.appendChild(dl);

    /* 읽은 값을 화면에 채워 넣습니다. 판단은 아래 규칙 엔진이 합니다.
       사진 읽기는 사유 자가진단(reason.html)에 있고 퇴사일 칸은 첫 화면에
       있습니다. 그래서 요소가 없을 수 있어, 있을 때만 손댑니다.
       (없는 요소에 값을 넣으려다 오류가 나면, 서버가 잘 읽어 줬는데도
        화면에는 "사진을 읽지 못했습니다"가 뜹니다.) */
    var applied = false;
    var leave = $('#leaveDate');
    if (d.endDate && leave && !leave.value) {
      leave.value = d.endDate;
      if (typeof calcDday === 'function') calcDday();
      applied = true;
    }
    if (d.reasonCategory && d.reasonCategory !== 'unknown') {
      var radio = document.querySelector('input[name=q1][value="' + d.reasonCategory + '"]');
      if (radio) { radio.checked = true; applied = true; }
    }
    if (applied) out.appendChild(el('p', 'read-note', T.ckReadApplied));
    if (d.note) out.appendChild(el('p', 'read-note', d.note));
    out.appendChild(el('p', 'read-note', T.ckReadNote));
  }

  /* ---------- 섹션 바로가기 ---------- */
  /* 스티키 헤더 높이는 언어와 화면폭에 따라 달라집니다. 고정값으로 두면
     어떤 언어에서는 눌러서 이동했을 때 제목이 헤더에 가려집니다.
     실제 높이를 재서 CSS 변수로 넘기고, 거기서 scroll-margin-top 을 잡습니다. */
  function syncStick() {
    var bar = document.querySelector('.topbar');
    if (!bar) return;
    document.documentElement.style.setProperty('--stick', bar.offsetHeight + 'px');
  }

  function initSecNav() {
    var nav = $('#secnav');
    if (!nav) return;

    // 화면이 좁으면 활성 항목이 가로 스크롤 밖으로 나갑니다. 보이는 자리로 끌어옵니다.
    function keepInView(chip) {
      var left = chip.offsetLeft, right = left + chip.offsetWidth;
      var from = nav.scrollLeft, to = from + nav.clientWidth;
      if (left < from + 12) nav.scrollLeft = Math.max(0, left - 12);
      else if (right > to - 12) nav.scrollLeft = right - nav.clientWidth + 12;
    }

    /* 기능마다 페이지가 따로 있으므로 지금 열려 있는 파일 이름으로 현재 위치를 정합니다.
       Vercel 과 로컬 serve 는 기본이 clean URL 이라 주소에서 .html 이 사라집니다
       (reason.html → /reason). 그래서 양쪽 다 확장자를 떼고 비교합니다.
       주소가 "/" 로 끝나면 index 로 봅니다. */
    function fileOf(path) {
      var name = String(path || '').split(/[?#]/)[0].split('/').pop();
      name = (name || '').toLowerCase().replace(/\.html?$/, '');
      return name || 'index';
    }

    var here = fileOf(location.pathname);
    var topChip = null; // 공지/질문처럼 드롭다운 안에 있으면, 화면에 보이는 트리거(게시판)를 대신 강조합니다.
    Array.prototype.forEach.call(nav.querySelectorAll('a[href]'), function (a) {
      var on = fileOf(a.getAttribute('href')) === here;
      a.classList.toggle('is-on', on);
      if (on) {
        a.setAttribute('aria-current', 'page');
        var item = a.closest('.secnav-item');
        topChip = item ? item.querySelector(':scope > a') : a;
      } else {
        a.removeAttribute('aria-current');
      }
    });
    if (topChip) { topChip.classList.add('is-on'); keepInView(topChip); }
  }

  /* 게시판 옆에 접힌 공지·질문 드롭다운을 마우스를 올리거나 초점을 두면 보여 줍니다.
     화면 밖으로 잘리지 않도록 position:fixed 로 트리거 바로 아래에 직접 좌표를 맞춥니다. */
  function initSecDrop() {
    $$('.secnav-item').forEach(function (item) {
      var trigger = item.querySelector(':scope > a');
      var drop = item.querySelector('.secnav-drop');
      if (!trigger || !drop) return;
      var hideTimer;
      function show() {
        clearTimeout(hideTimer);
        var r = trigger.getBoundingClientRect();
        drop.style.top = (r.bottom + 6) + 'px';
        drop.style.left = r.left + 'px';
        drop.classList.add('is-open');
      }
      function hide() {
        hideTimer = setTimeout(function () { drop.classList.remove('is-open'); }, 150);
      }
      item.addEventListener('mouseenter', show);
      item.addEventListener('mouseleave', hide);
      item.addEventListener('focusin', show);
      item.addEventListener('focusout', hide);
    });
  }

  /* car-track 은 잘리는 창(overflow:hidden), car-list 가 그 안에서 실제로
     밀려나는 줄입니다. 이 둘을 하나로 합쳐 두면 transform 을 줄 때 잘리는
     창 자체가 같이 밀려나서 옆 화살표 버튼을 덮어버립니다. */
  function initCarousels() {
    $$('.carousel').forEach(function (car) {
      var track = car.querySelector('.car-track');
      var list = car.querySelector('.car-list');
      var prev = car.querySelector('.car-prev');
      var next = car.querySelector('.car-next');
      if (!track || !list || !prev || !next) return;
      var pos = 0;

      function cardStep() {
        var card = list.querySelector('.hcard');
        if (!card) return track.clientWidth;
        var gap = parseFloat(getComputedStyle(list).columnGap) || 14;
        return card.getBoundingClientRect().width + gap;
      }
      function maxPos() { return Math.max(0, list.scrollWidth - track.clientWidth); }
      function apply() {
        pos = Math.max(0, Math.min(pos, maxPos()));
        list.style.transform = 'translateX(-' + pos + 'px)';
      }
      prev.addEventListener('click', function () { pos -= cardStep(); apply(); });
      next.addEventListener('click', function () { pos += cardStep(); apply(); });
      window.addEventListener('resize', apply);
    });
  }


  /* =====================================================================
     2026-10 리디자인 — 머리말 · 전체 메뉴 · 메인 비주얼 · 첫 화면 목록
     ===================================================================== */

  /* ---------- 전체 메뉴 (좁은 화면) ---------- */
  function menuOpen() { return document.body.classList.contains('menu-open'); }
  function menuLabel() {
    var b = $('#menuBtn');
    if (!b) return;
    var k = menuOpen() ? 'menuClose' : 'menuOpen';
    if (T[k]) b.setAttribute('aria-label', T[k]);
    b.setAttribute('data-i18n-aria', k);
  }
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    var b = $('#menuBtn');
    if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuLabel();
    solidHeader();
  }

  /* 넓은 화면에서도 메뉴 글자가 길어(크메르어·네팔어 등) 한 줄에 안 들어가면
     머리말 가운데 메뉴 대신 [MENU] 단추로 바꿉니다. 글자가 겹치거나 잘리지 않게 합니다. */
  function fitNav() {
    var root = document.documentElement;
    var bar = $('.topbar-in'), nav = $('#secnav');
    if (!bar || !nav) return;
    root.classList.remove('nav-compact');
    if (window.innerWidth < 1200) return;
    var used = 0;
    Array.prototype.forEach.call(bar.children, function (c) {
      used += c === $('#siteNav') ? nav.scrollWidth : c.getBoundingClientRect().width;
    });
    var cs = getComputedStyle(bar);
    var gap = parseFloat(cs.columnGap) || 20;
    used += gap * (bar.children.length - 1);
    var room = bar.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    if (used > room - 8) root.classList.add('nav-compact');
  }

  /* 첫 화면은 사진 위에 머리말이 투명하게 떠 있다가, 내리면 흰 바탕이 됩니다. */
  function solidHeader() {
    var bar = $('.topbar');
    if (!bar) return;
    var solid = !document.body.classList.contains('is-home') || window.scrollY > 40 || menuOpen();
    bar.classList.toggle('is-solid', solid);
  }

  function initHeader() {
    on('#menuBtn', 'click', function () { setMenu(!menuOpen()); });
    // 메뉴 안의 링크를 누르면 닫습니다 (같은 쪽 #앵커로 갈 때도 화면이 가려지지 않게)
    $$('#siteNav a').forEach(function (a) {
      a.addEventListener('click', function () { if (menuOpen()) setMenu(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuOpen()) { setMenu(false); var b = $('#menuBtn'); if (b) b.focus(); }
    });
    window.addEventListener('resize', function () {
      fitNav();
      var compact = document.documentElement.classList.contains('nav-compact');
      if (menuOpen() && window.innerWidth >= 1200 && !compact) setMenu(false);
    });
    window.addEventListener('scroll', solidHeader, { passive: true });
    solidHeader();
    fitNav();
    // 글꼴이 늦게 도착하면 글자 폭이 바뀝니다. 한 번 더 잽니다.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fitNav(); syncStick(); });
  }

  /* ---------- 맨 위로 ---------- */
  function initToTop() {
    var b = el('button', 'to-top', 'TOP');
    b.type = 'button';
    b.setAttribute('aria-label', T.toTop || 'Top');
    b.setAttribute('data-i18n-aria', 'toTop');
    b.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      var skip = $('.skip'); if (skip) skip.focus({ preventScroll: true });
    });
    document.body.appendChild(b);
    function check() { b.classList.toggle('is-on', window.scrollY > 600); }
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  /* ---------- 메인 비주얼 (사진 슬라이드) ---------- */
  var hero = { i: 0, n: 0, timer: null, paused: false };
  var HERO_MS = 6000;

  function itvByKey(key) {
    if (typeof INTERVIEWS === 'undefined') return null;
    for (var i = 0; i < INTERVIEWS.length; i++) if (INTERVIEWS[i].key === key) return INTERVIEWS[i];
    return null;
  }
  function itvName(it) {
    return (lang !== 'ko' && it.aliasL && it.aliasL[lang]) || it.alias || '';
  }

  function heroCaption() {
    var cap = $('#hvCap');
    if (!cap) return;
    var slide = $$('.hv-slide')[hero.i];
    var it = slide && itvByKey(slide.getAttribute('data-itv'));
    cap.textContent = it ? (T.navInterview || '') + ' · ' + itvName(it) : '';
  }

  function heroShow(i) {
    var slides = $$('.hv-slide');
    if (!slides.length) return;
    hero.i = (i + slides.length) % slides.length;
    slides.forEach(function (sl, k) { sl.classList.toggle('is-on', k === hero.i); });
    var now = $('#hvNow');
    if (now) now.textContent = ('0' + (hero.i + 1)).slice(-2);
    heroCaption();
    heroRun();
  }

  function heroRun() {
    clearTimeout(hero.timer);
    var bar = $('#hvBar');
    if (bar) { bar.classList.remove('is-run'); void bar.offsetWidth; }
    if (hero.paused) return;
    if (bar) bar.classList.add('is-run');
    hero.timer = setTimeout(function () { heroShow(hero.i + 1); }, HERO_MS);
  }

  function heroPauseBtn() {
    var b = $('#hvPause');
    if (!b) return;
    var k = hero.paused ? 'hvPlay' : 'hvPause';
    b.setAttribute('data-i18n-aria', k);
    if (T[k]) b.setAttribute('aria-label', T[k]);
    b.innerHTML = hero.paused
      ? '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6 4l10 6-10 6z"/></svg>'
      : '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="3" height="12" rx="1"/><rect x="12" y="4" width="3" height="12" rx="1"/></svg>';
  }

  function initHero() {
    var slides = $$('.hv-slide');
    if (!slides.length) return;
    hero.n = slides.length;
    var all = $('#hvAll');
    if (all) all.textContent = ('0' + hero.n).slice(-2);
    // 움직임을 줄이도록 설정한 기기에서는 저절로 넘기지 않습니다.
    try { hero.paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    on('#hvPrev', 'click', function () { heroShow(hero.i - 1); });
    on('#hvNext', 'click', function () { heroShow(hero.i + 1); });
    on('#hvPause', 'click', function () { hero.paused = !hero.paused; heroPauseBtn(); heroRun(); });
    // 다른 탭으로 가면 멈췄다가 돌아오면 이어서 넘깁니다.
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) clearTimeout(hero.timer); else heroRun();
    });
    heroPauseBtn();
    heroShow(0);
  }

  /* ---------- 첫 화면: 인터뷰 소개 ---------- */
  var featI = 0;
  function featItems() {
    if (typeof INTERVIEWS === 'undefined') return [];
    return INTERVIEWS.filter(function (it) { return it.photo && (it[lang] || it.en || it.ko); })
      .sort(function (a, b) { return String(b.date || '').localeCompare(String(a.date || '')); });
  }
  function renderHomeItv() {
    var box = $('#itvFeat');
    if (!box) return;
    var items = featItems();
    if (!items.length) { box.hidden = true; return; }
    featI = (featI + items.length) % items.length;
    var it = items[featI];
    var body = it[lang] || it.en || it.ko;
    var img = $('#featImg');
    img.src = it.photo;
    img.alt = (lang !== 'ko' && it.photoAltL && it.photoAltL[lang]) || it.photoAlt || '';
    $('#featAlias').textContent = itvName(it);
    var text = body.useQuote || body.intro || ((body.qa && body.qa[0]) ? body.qa[0].a : '');
    $('#featText').textContent = text;
    var facts = [];
    if (it.country && T.itvCountries) facts.push(T.itvCountries[it.country] || it.country);
    if (it.years) facts.push((T.itvYears || '{y}').replace('{y}', it.years));
    if (it.field && T.itvFields) facts.push(T.itvFields[it.field] || it.field);
    if (it.date) facts.push(it.date);
    $('#featMeta').textContent = facts.join(' · ');
  }
  function initFeat() {
    on('#featPrev', 'click', function () { featI -= 1; renderHomeItv(); });
    on('#featNext', 'click', function () { featI += 1; renderHomeItv(); });
  }

  /* ---------- 첫 화면: 최신 제도 목록 ---------- */
  function renderHomeNotices() {
    var list = $('#homeNoticeList');
    if (!list || typeof NOTICES === 'undefined') return;
    list.innerHTML = '';
    var now = today();
    NOTICES.slice().sort(function (a, b) { return String(b.date || '').localeCompare(String(a.date || '')); })
      .slice(0, 5).forEach(function (n) {
        var body = n[lang] || n.en || n.ko;
        var li = el('li');
        var a = el('a');
        a.href = 'notices.html#' + n.key;
        a.appendChild(el('span', 'nl-t', body.title));
        var meta = el('span', 'nl-meta');
        meta.appendChild(el('span', null, n.date || ''));
        meta.appendChild(el('i'));
        meta.appendChild(el('span', null, (T.noticeTags && T.noticeTags[n.tagKey]) || n.tagKey));
        // 60일 안에 바뀐 제도에는 NEW 표시를 붙입니다.
        if (n.date && diffDays(now, midnight(new Date(n.date + 'T00:00:00'))) <= 60) {
          meta.appendChild(el('span', 'nl-new', 'NEW'));
        }
        a.appendChild(meta);
        a.appendChild(el('span', 'nl-go'));
        li.appendChild(a);
        list.appendChild(li);
      });
  }

  /* ---------- 시작 ---------- */
  /* 기능마다 페이지가 따로 있어서, 지금 열린 페이지에 없는 요소가 늘 있습니다.
     on() 은 요소가 있을 때만 연결합니다. */
  function on(sel, ev, fn) {
    var n = $(sel);
    if (n) n.addEventListener(ev, fn);
  }

  /* ---------- PC로 보기 · 모바일로 보기 (모든 페이지 맨 아래) ---------- */
  /* 휴대폰에서는 화면 폭(viewport)을 1200px 로 바꿔 PC 배치를 보여 줍니다.
     PC 브라우저는 화면 폭을 바꿀 수 없어서, 휴대폰 폭 미리보기 창을 띄워 같은 페이지를 보여 줍니다.
     미리보기 창 안의 페이지에는 이 줄을 다시 그리지 않습니다(창 속의 창이 생기지 않게). */
  var IN_FRAME = window.self !== window.top;
  function isPhone() { return Math.min(screen.width, screen.height) < 768; }
  function viewMode() { return load('view') || (isPhone() ? 'mobile' : 'pc'); }

  function openPreview() {
    if ($('#viewPreview')) return;
    var box = el('div', 'view-preview');
    box.id = 'viewPreview';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    var bar = el('div', 'view-preview-bar');
    bar.appendChild(el('span', null, T.viewPreview || 'Mobile preview'));
    var back = el('button', 'view-preview-close', T.viewPc || 'PC');
    back.type = 'button';
    back.addEventListener('click', function () { setView('pc'); });
    bar.appendChild(back);
    var frame = el('iframe');
    frame.src = location.href;
    frame.title = T.viewPreview || 'Mobile preview';
    box.appendChild(bar);
    box.appendChild(frame);
    document.body.appendChild(box);
    document.documentElement.classList.add('is-previewing');
    back.focus();
  }
  function closePreview() {
    var box = $('#viewPreview');
    if (box) box.remove();
    document.documentElement.classList.remove('is-previewing');
  }

  function applyView() {
    var mode = viewMode();
    if (isPhone()) {
      var meta = document.querySelector('meta[name=viewport]');
      if (meta) meta.setAttribute('content', mode === 'pc' ? 'width=1200' : 'width=device-width, initial-scale=1');
    } else if (mode === 'mobile') openPreview();
    else closePreview();
    $$('.view-switch button').forEach(function (b) {
      var on = b.getAttribute('data-mode') === mode;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }
  function setView(mode) { save('view', mode); applyView(); }

  function initViewSwitch() {
    if (IN_FRAME) return;
    var bar = el('div', 'view-switch');
    var label = el('span', 'view-switch-label', '화면');
    label.setAttribute('data-i18n', 'viewLabel');
    bar.appendChild(label);
    [['pc', 'viewPc', 'PC로 보기'], ['mobile', 'viewMobile', '모바일로 보기']].forEach(function (v, i) {
      if (i) bar.appendChild(el('span', 'view-switch-sep', '|'));
      var b = el('button', null, v[2]);
      b.type = 'button';
      b.setAttribute('data-mode', v[0]);
      b.setAttribute('data-i18n', v[1]);
      b.addEventListener('click', function () { setView(v[0]); });
      bar.appendChild(b);
    });
    document.body.appendChild(bar);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && $('#viewPreview')) setView('pc'); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initViewSwitch();
    var d = detect();
    // 링크(?lang=)로 들어온 선택도 다음 방문까지 유지합니다.
    if (d.source === 'url') save('lang', d.code);
    // 아직 지원하지 않는 언어면 안내 문구를 바꿔 끼웁니다 (화면은 영어로 나옵니다).
    if (!d.matched) {
      var toastText = $('#langToastText');
      if (toastText) toastText.setAttribute('data-i18n', 'langUnsupported');
    }
    applyLang(d.code);
    if (!IN_FRAME) applyView();

    var toast = $('#langToast');
    if (toast && d.auto && d.code !== 'ko') {
      toast.hidden = false;
      setTimeout(function () { toast.hidden = true; }, 7000);
    }
    on('#toastClose', 'click', function () { if (toast) toast.hidden = true; });

    on('#langSelect', 'change', function () {
      save('lang', this.value);
      applyLang(this.value);
      if (toast) toast.hidden = true;
      if (me) pushAccountLang(this.value);
    });

    // 섹션 바로가기 (모든 페이지 공통)
    syncStick();
    initSecNav();
    initSecDrop();
    initCarousels();
    initHeader();
    initHero();
    initFeat();
    initToTop();
    window.addEventListener('resize', syncStick);

    // 로그인 상태는 모든 페이지에서 확인합니다 (헤더 표시용)
    // 마이페이지는 로그인한 것이 확인된 뒤에야 내 정보를 부릅니다.
    loadMe().then(function () { if (me) loadAccount(); });

    // 묻고 답하기
    on('#boardForm', 'submit', function (e) {
      e.preventDefault();
      var text = $('#boardInput').value.trim();
      if (text.length < 5) { boardMsg('boardTooShort', 'bad'); return; }
      if (text.length > 1000) { boardMsg('boardTooLong', 'bad'); return; }
      var priv = $('#boardPrivate') ? $('#boardPrivate').checked : false;
      submitQuestion(text, priv);
    });
    on('#pagePrev', 'click', function () { if (boardPage > 1) renderBoard(boardPage - 1); });
    on('#pageNext', 'click', function () { if (boardPage < boardPages) renderBoard(boardPage + 1); });

    // 마이페이지 — 내가 남긴 질문
    on('#myqPrev', 'click', function () { if (myqPage > 1) renderMyQuestions(myqPage - 1); });
    on('#myqNext', 'click', function () { if (myqPage < myqPages) renderMyQuestions(myqPage + 1); });

    on('#boardSearch', 'submit', function (e) {
      e.preventDefault();
      boardQ = $('#boardQ').value.trim().slice(0, 60);
      renderBoard(1);
    });
    on('#boardQClear', 'click', function () {
      boardQ = '';
      if ($('#boardQ')) $('#boardQ').value = '';
      renderBoard(1);
    });

    // 최신 제도 검색 — 목록이 브라우저 안에 다 있으니 글자를 칠 때마다 바로 거릅니다.
    function ntSearch() {
      ntQ = $('#ntQ').value.trim().slice(0, 60);
      ntPage = 1;
      renderNotices();
    }
    on('#ntSearch', 'submit', function (e) { e.preventDefault(); ntSearch(); });
    on('#ntQ', 'input', ntSearch);
    on('#ntQClear', 'click', function () {
      $('#ntQ').value = '';
      ntSearch();
      $('#ntQ').focus();
    });

    // 로그인
    on('#loginForm', 'submit', function (e) {
      e.preventDefault();
      authSend('login', {
        username: $('#authId').value.trim(),
        password: $('#authPw').value
      }, 'authLoginOk', function () { location.href = nextPage() || 'board.html'; });
    });

    // 머리말 메뉴 — 바깥을 누르거나 Esc 를 누르면 닫힙니다.
    on('#menuLogout', 'click', function () { closeMenu(); logout(); });
    document.addEventListener('click', function (e) {
      var menu = $('#authMenu');
      if (!menu || menu.hidden) return;
      if (menu.contains(e.target)) return;
      closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // 마이페이지
    on('#acLogout', 'click', function (e) { e.preventDefault(); logout(); });

    on('#nickForm', 'submit', function (e) {
      e.preventDefault();
      var v = $('#acNick').value.trim();
      if (v.length < 2 || v.length > 20) { acMsg('#nickMsg', 'errNickRule', 'bad'); return; }
      saveNick(v);
    });

    on('#pwForm', 'submit', function (e) {
      e.preventDefault();
      var now = $('#acPwNow').value;
      var next = $('#acPwNew').value, next2 = $('#acPwNew2').value;
      if (next !== next2) { acMsg('#pwMsg', 'errPwMatch', 'bad'); return; }
      if (next.length < 8) { acMsg('#pwMsg', 'errPwRule', 'bad'); return; }
      if (now === next) { acMsg('#pwMsg', 'errPwSame', 'bad'); return; }
      savePw(now, next);
    });

    // 오늘 이후 날짜는 생년월일로 고를 수 없게 막습니다.
    var acBirth = $('#acBirth');
    if (acBirth) acBirth.max = new Date().toISOString().slice(0, 10);

    on('#profileForm', 'submit', function (e) {
      e.preventDefault();
      var birth = $('#acBirth').value;
      var today = new Date().toISOString().slice(0, 10);
      if (birth && birth > today) { acMsg('#profileMsg', 'errBirthFuture', 'bad'); return; }
      saveProfile(birth, $('#acNation').value, $('#acGender').value);
    });

    // 소셜 로그인이 실패하면 콜백이 ?err=... 를 달고 이 화면으로 돌려보냅니다.
    // 주소창은 바로 정리해서, 새로고침해도 오류가 다시 뜨지 않게 합니다.
    if ($('#loginForm')) {
      var err = null;
      try { err = new URLSearchParams(location.search).get('err'); } catch (e2) {}
      if (err === 'oauth' || err === 'oauthOff') {
        authMsg(err === 'oauthOff' ? 'errOauthOff' : 'errOauth', 'bad');
        try { history.replaceState(null, '', location.pathname + (nextPage() ? '?next=' + nextPage() : '')); } catch (e3) {}
      }
    }

    // 회원가입 — 비밀번호 확인은 보내기 전에 브라우저에서 먼저 거릅니다
    on('#signupForm', 'submit', function (e) {
      e.preventDefault();
      var pw = $('#authPw').value, pw2 = $('#authPw2').value;
      if (pw !== pw2) { authMsg('errPwMatch', 'bad'); return; }
      if (pw.length < 8) { authMsg('errPwRule', 'bad'); return; }
      authSend('signup', {
        username: $('#authId').value.trim(),
        password: pw,
        lang: lang            // 이 기기가 지금 쓰고 있는 언어를 함께 저장합니다
      }, 'authSignupOk', function () { location.href = nextPage() || 'board.html'; });
    });

    // 기한
    if ($('#ddayForm')) {
      $('#leaveDate').max = fmt(today());
      $('#applyDate').max = fmt(today());
      var savedLeave = load('leave'), savedApply = load('apply');
      if (savedLeave) {
        $('#leaveDate').value = savedLeave;
        if (savedApply) $('#applyDate').value = savedApply;
        calcDday();
      }
      on('#ddayForm', 'submit', function (e) {
        e.preventDefault();
        calcDday();
        // 계산이 실제로 됐을 때만(미래 날짜 오류가 아닐 때) 내 정보에 저장합니다.
        if (!$('#ddayResult').hidden && !$('.dday-cards').hidden) {
          mySave('deadline', { leave: $('#leaveDate').value, apply: $('#applyDate').value }, '#ddayResult');
        }
      });
      on('#ddayReset', 'click', function () {
        $('#ddayForm').reset();
        $('#ddayResult').hidden = true;
        drop('leave'); drop('apply');
      });
    }

    // 출국 정산
    if ($('#payForm')) {
      var savedExit = load('exit');
      if (savedExit) { $('#exitDate').value = savedExit; calcPay(); }
      on('#payForm', 'submit', function (e) {
        e.preventDefault();
        calcPay();
        if ($('#exitDate').value) mySave('payout', { exit: $('#exitDate').value }, '#payResult');
      });
      on('#payReset', 'click', function () {
        $('#payForm').reset();
        $('#payResult').hidden = true;
        drop('exit');
      });
    }

    // 출국만기보험 어림 계산 — 넣은 값은 이 기기에만 남깁니다(서버로 보내지 않습니다).
    if ($('#insForm')) {
      var sw = load('insWage'), ss = load('insStart'), se = load('insEnd');
      if (sw) $('#insWage').value = sw;
      if (ss) $('#insStart').value = ss;
      if (se) $('#insEnd').value = se;
      if (sw && ss) calcIns();

      on('#insForm', 'submit', function (e) {
        e.preventDefault();
        save('insWage', $('#insWage').value);
        save('insStart', $('#insStart').value);
        save('insEnd', $('#insEnd').value);
        calcIns();
        if (!$('#insResult').hidden && $('#insSavedOut').textContent !== '–') {
          mySave('payout', { ins: { wage: $('#insWage').value, start: $('#insStart').value, end: $('#insEnd').value } }, '#insResult');
        }
      });
      on('#insReset', 'click', function () {
        $('#insForm').reset();
        $('#insResult').hidden = true;
        drop('insWage'); drop('insStart'); drop('insEnd');
      });
    }

    // 출국 정산 적격 판정
    if ($('#eligForm')) {
      var es = load('insStart'), ee = load('insEnd');
      if (es) $('#eligStart').value = es;
      if (ee) $('#eligEnd').value = ee;
      [['pyMoved', 'payMoved'], ['pyHours', 'payHours'],
       ['pyNat', 'payNat'], ['pyType', 'payType']].forEach(function (pair) {
        var v = load(pair[1]);
        if (!v) return;
        var n = document.querySelector('input[name="' + pair[0] + '"][value="' + v + '"]');
        if (n) n.checked = true;
      });

      // 두 카드의 날짜 칸을 서로 맞춰 둡니다 (같은 뜻이라 두 번 넣을 필요가 없습니다)
      mirrorDates('#eligStart', '#insStart', 'insStart');
      mirrorDates('#eligEnd', '#insEnd', 'insEnd');
      mirrorDates('#insStart', '#eligStart', 'insStart');
      mirrorDates('#insEnd', '#eligEnd', 'insEnd');

      // 입사일과 답이 모두 남아 있을 때만 지난 결과를 되살립니다
      if (es && load('payMoved')) calcElig();

      on('#eligForm', 'submit', function (e) {
        e.preventDefault();
        calcElig();
        var ei = eligInputs();
        var part = { elig: ei };
        if (ei.exit) part.exit = ei.exit;
        mySave('payout', part, '#eligResult');
      });
      on('#eligReset', 'click', function () {
        $('#eligForm').reset();
        $('#eligResult').hidden = true;
        ['payMoved', 'payHours', 'payNat', 'payType'].forEach(function (k) { drop(k); });
      });
    }

    // 내 정보 한눈에 — 팝업
    on('#myOpen', 'click', openMyPop);
    on('#myPopX', 'click', closeMyPop);
    on('#myPopClose', 'click', closeMyPop);
    on('#myMailForm', 'submit', sendMyMail);
    on('#myClear', 'click', clearMy);
    // 팝업 바깥(어두운 부분)을 누르면 닫습니다.
    on('#myPop', 'click', function (e) { if (e.target === this) closeMyPop(); });

    // 자가진단
    on('#quizForm', 'submit', function (e) {
      e.preventDefault();
      lastQuiz = {
        q1: $('input[name=q1]:checked').value,
        q2: $('input[name=q2]:checked').value,
        q3: $('input[name=q3]:checked').value
      };
      showQuizResult();
      mySave('reason', lastQuiz, '#quizResult');
      $('#quizResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    on('#quizReset', 'click', function () {
      $('#quizForm').reset();
      lastQuiz = null;
      $('#quizResult').hidden = true;
      $('#docPreview').hidden = true;
      $('#docReadOut').hidden = true;
      if ($('#resultEmail')) $('#resultEmail').value = '';
      if ($('#resultEmailMsg')) { $('#resultEmailMsg').textContent = ''; $('#resultEmailMsg').className = 'result-email-msg'; }
    });

    // 서류 미리보기 (기기 안에서만)
    on('#docFile', 'change', function () {
      var f = this.files && this.files[0];
      if (!f) return;
      $('#docImg').src = URL.createObjectURL(f);
      $('#docPreview').hidden = false;
      $('#docReadOut').hidden = true;
    });
    on('#docRead', 'click', readDoc);
    on('#docClear', 'click', function () {
      $('#docFile').value = '';
      $('#docPreview').hidden = true;
      $('#docReadOut').hidden = true;
    });
    on('#resultEmailSend', 'click', sendQuizEmail);

    // 질문
    on('#askForm', 'submit', function (e) {
      e.preventDefault();
      var q = $('#askInput').value.trim();
      if (!q) return;
      answer(q);
      $('#askInput').value = '';
    });

    /* 공지에서 "이 공지에 대해 질문하기" 를 눌러 넘어온 경우입니다.
       페이지가 갈라지면서 같은 화면 스크롤이 아니라 ask.html?q=... 이동이 됐습니다. */
    var carried = null;
    try { carried = new URLSearchParams(location.search).get('q'); } catch (e) {}
    if (!carried) { try { carried = sessionStorage.getItem('eum.carryQ'); } catch (e) {} }
    try { sessionStorage.removeItem('eum.carryQ'); } catch (e) {}
    if (carried && $('#askInput')) {
      carried = carried.slice(0, 600);
      $('#askInput').value = carried;
      setTimeout(function () { answer(carried); }, 300);
    }
  });
})();
