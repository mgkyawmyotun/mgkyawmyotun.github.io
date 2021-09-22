import { Mode } from './../components/Introduction';
export function switchToDarkMode(mode: Mode) {
  document.querySelector('html').classList.toggle('dark');
  localStorage.setItem('mode', mode);
}
export function getMode(): Mode {
  return localStorage.getItem('mode') as Mode;
}
