import * as React from 'react';
import { Introduction } from '../components/intro';
import { Location } from '../components/Location';
import '../scss/index.scss';
const IndexPage: React.FC = () => {
  React.useEffect(() => {
    const mode = localStorage.getItem('mode');
    const html = document.querySelector('html');
    if (mode === 'dark') {
      html.classList.add('dark');
    }
    return;
  }, []);
  return (
    <div>
      <Introduction />
      <Location />
    </div>
  );
};
export default IndexPage;
