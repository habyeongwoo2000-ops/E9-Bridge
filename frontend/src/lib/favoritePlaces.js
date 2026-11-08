import { useState } from 'react';
import { load, save } from './storage.js';

function readIds(key) {
  try {
    const ids = JSON.parse(load(key));
    return Array.isArray(ids) ? ids.filter(id => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export function useFavoritePlaces(username) {
  const key = username ? 'favoritePlaces.' + username : '';
  const [state, setState] = useState(() => ({ key, ids: key ? readIds(key) : [] }));
  const ids = state.key === key ? state.ids : (key ? readIds(key) : []);

  function toggle(id) {
    if (!key) return;
    const stored = readIds(key);
    const next = stored.includes(id) ? stored.filter(value => value !== id) : [...stored, id];
    save(key, JSON.stringify(next));
    setState({ key, ids: next });
  }

  return { ids, toggle };
}
