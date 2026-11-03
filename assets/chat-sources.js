/* Shared, curated source registry. URLs never come from model-generated text. */
(function (root) {
  'use strict';
  var law = 'https://www.law.go.kr/법령/';
  var foreign = '외국인근로자의고용등에관한법률';
  var change = [{ label: '외국인근로자고용법 제25조', url: law + foreign + '/제25조' }];
  var wage = [{ label: '근로기준법 제36조', url: law + '근로기준법/제36조' },
    { label: '근로기준법 제49조', url: law + '근로기준법/제49조' }];
  var insurance = [{ label: '외국인근로자고용법 제13조', url: law + foreign + '/제13조' },
    { label: '외국인근로자고용법 시행령 제21조', url: law + foreign + '시행령/제21조' }];
  var returning = [{ label: '외국인근로자고용법 제15조', url: law + foreign + '/제15조' }];
  var help = [{ label: 'EPS · 고용허가제 공식 안내', url: 'https://www.eps.go.kr/' },
    { label: 'Hi Korea · 체류·비자 공식 안내', url: 'https://www.hikorea.go.kr/' }];
  var byTitle = {
    '사업장 변경 신청 기한': change, '구직 기간 3개월': change, '사업장 변경 횟수 제한': change,
    '사업장 변경이 가능한 법정 사유': change, '신청 장소와 준비물': help,
    '임금체불': wage, '출국만기보험': insurance, '귀국비용보험': returning,
    '보험금 청구 소멸시효': insurance.concat(returning),
    '최저임금': [{ label: '최저임금법', url: law + '최저임금법' },
      { label: '최저임금위원회 · 연도별 금액 확인', url: 'https://www.minimumwage.go.kr/' }],
    '공식 창구': help
  };
  var byKey = {
    'apply-deadline': change, 'job-period': change, 'limit-count': change, reasons: change,
    'employer-fault': change, 'unpaid-wage': wage, 'exit-insurance': insurance,
    'claim-limit': insurance.concat(returning, [wage[1]]), 'how-to': help, 'where-help': help,
    'no-side-work': [{ label: '출입국관리법', url: law + '출입국관리법' }],
    'dorm-standard': [{ label: '근로기준법 제100조', url: law + '근로기준법/제100조' }],
    'stay-length': [{ label: '외국인근로자고용법 제18조', url: law + foreign + '/제18조' }],
    'e74-change': [{ label: '출입국관리법 시행령', url: law + '출입국관리법시행령' }, help[1]]
  };
  var labels = { ko: '공식 출처 링크', en: 'Official sources', vi: 'Nguồn chính thức',
    id: 'Sumber resmi', km: 'ប្រភពផ្លូវការ', ne: 'आधिकारिक स्रोतहरू' };
  function unique(links) {
    return links.filter(function (link, i) { return links.findIndex(function (other) { return other.url === link.url; }) === i; });
  }
  var known = unique(Object.keys(byTitle).reduce(function (a, k) { return a.concat(byTitle[k]); }, [])
    .concat(Object.keys(byKey).reduce(function (a, k) { return a.concat(byKey[k]); }, [])));
  function safe(links) {
    if (!Array.isArray(links)) return [];
    return unique(links.reduce(function (out, link) {
      var registered = known.find(function (item) { return link && item.url === link.url; });
      return registered ? out.concat(registered) : out;
    }, []));
  }
  var api = { byTitle: byTitle, byKey: byKey, labels: labels, safe: safe };
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.EUM_CHAT_SOURCES = api;
})(typeof window !== 'undefined' ? window : this);
