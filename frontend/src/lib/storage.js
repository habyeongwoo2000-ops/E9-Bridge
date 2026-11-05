/* 이 기기(브라우저)에만 남기는 값 — 키 앞에 'eum.' 을 붙입니다.
   사파리 개인정보 보호 모드처럼 저장소를 막은 곳에서는 조용히 넘어갑니다. */
const STORE = 'eum.';

export function save(k, v) { try { localStorage.setItem(STORE + k, v); } catch (e) { /* 막힌 저장소 */ } }
export function load(k) { try { return localStorage.getItem(STORE + k); } catch (e) { return null; } }
export function drop(k) { try { localStorage.removeItem(STORE + k); } catch (e) { /* 막힌 저장소 */ } }

export function sGet(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
export function sSet(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* 막힌 저장소 */ } }
export function sDrop(k) { try { sessionStorage.removeItem(k); } catch (e) { /* 막힌 저장소 */ } }
