/* 쪽 번호 — 게시판·마이페이지·최신 제도가 함께 씁니다.
   번호는 10개씩 끊어 보입니다(1~10, 11~20 …). blockArrows 를 주면 « » 로 10쪽씩 넘깁니다. */

import { useI18n } from '../i18n/I18nProvider.jsx';

export default function Pager({ page, pages, onGo, blockArrows = false, id }) {
  const { T } = useI18n();
  if (!pages || pages <= 1) return null;
  const block = 10;
  const start = Math.floor((page - 1) / block) * block + 1;
  const end = Math.min(pages, start + block - 1);
  const nums = [];
  for (let n = start; n <= end; n++) nums.push(n);

  return (
    <nav className="pager" id={id} aria-label="page">
      {blockArrows && (
        <button type="button" className="pg-arrow" aria-label={T.ntPrevBlock} disabled={start <= 1}
                onClick={() => start > 1 && onGo(start - block)}>«</button>
      )}
      <button type="button" className="pg-arrow" aria-label={T.boardPrev} disabled={page <= 1}
              onClick={() => page > 1 && onGo(page - 1)}>‹</button>
      <span className="pg-nums">
        {nums.map((n) => (
          <button key={n} type="button" className={'pg-num' + (n === page ? ' is-on' : '')}
                  aria-current={n === page ? 'page' : undefined} onClick={() => onGo(n)}>{n}</button>
        ))}
      </span>
      <button type="button" className="pg-arrow" aria-label={T.boardNext} disabled={page >= pages}
              onClick={() => page < pages && onGo(page + 1)}>›</button>
      {blockArrows && (
        <button type="button" className="pg-arrow" aria-label={T.ntNextBlock} disabled={end >= pages}
                onClick={() => end < pages && onGo(end + 1)}>»</button>
      )}
    </nav>
  );
}
