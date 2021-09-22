import { Mode } from './../components/Introduction';
const isBrowser = typeof window !== 'undefined';
export function switchToDarkMode(mode: Mode) {
  document.querySelector('html').classList.toggle('dark');
  if (isBrowser) localStorage.setItem('mode', mode);
}
export function getMode(): Mode {
  if (!isBrowser) return;
  return localStorage.getItem('mode') as Mode;
}
