/* "내 상황 확인" 화면에서 여러 번 쓰는 작은 조각들 */

import { useI18n } from '../../i18n/I18nProvider.jsx';

/* 남은 날 카드 — 지났으면 빨강(지난 날 수), 오늘이면 빨강(오늘 마감), 7일 이내면 노랑, 그 밖은 파랑.
   상태를 색만으로 말하지 않고 글자(일 남음 · 일 지남 · 오늘 마감)를 함께 씁니다. */
export function DCard({ id, label, days, dateText, rule }) {
  const { T } = useI18n();
  let cls = 'dcard';
  let num;
  let unit;
  if (days < 0) { cls += ' is-stop'; num = Math.abs(days); unit = T.daysOver; }
  else if (days === 0) { cls += ' is-stop'; num = '0'; unit = T.dueToday; }
  else { cls += days <= 7 ? ' is-warn' : ' is-ok'; num = days; unit = T.daysUnit; }
  return (
    <article className={cls} id={id}>
      <p className="dcard-k">{label}</p>
      <p className="dcard-n"><span className="num">{num}</span><span className="unit">{unit}</span></p>
      <p className="dcard-d">{dateText}</p>
      <p className="dcard-r">{rule}</p>
    </article>
  );
}

/* 결과 아래의 "내 정보에 저장했습니다" 한 줄 (로그인했을 때만 생깁니다) */
export function MyNote({ note }) {
  const { T } = useI18n();
  if (!note) return null;
  return <p className={'my-note' + (note.kind ? ' is-' + note.kind : '')} role="status">{T[note.key] || ''}</p>;
}

/* 보기 하나를 고르는 문항 — opts: [[값, 언어 키], …]
   required 는 첫 보기에만 둡니다. 같은 name 묶음 전체가 필수가 됩니다. */
export function Question({ n, legend, name, opts, value, onChange, children }) {
  const { T } = useI18n();
  return (
    <fieldset className="q">
      <legend><span className="qn">{n}</span><span>{T[legend]}</span></legend>
      {opts.map(([v, k], i) => (
        <label className="opt-row" key={v}>
          <input type="radio" name={name} value={v} required={i === 0} checked={value === v} onChange={() => onChange(v)} />
          <span>{T[k]}</span>
        </label>
      ))}
      {children}
    </fieldset>
  );
}

/* 사진을 긴 변 1600px 이하 JPEG(품질 0.82)로 줄여 base64 로 돌려줍니다.
   휴대폰 사진(5~10MB)을 그대로 올리면 느리고 서버 한도를 넘습니다. */
export function shrink(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const max = 1600;
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * scale);
      c.height = Math.round(img.height * scale);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      const url = c.toDataURL('image/jpeg', 0.82);
      URL.revokeObjectURL(img.src);
      resolve(url.split(',')[1]);
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}
