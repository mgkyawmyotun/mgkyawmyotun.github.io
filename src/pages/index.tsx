import * as React from 'react';
import { Introduction } from '../components/Introduction';
import '../scss/index.scss';
const IndexPage: React.FC = () => {
  React.useEffect(() => {
    const mode = localStorage.getItem('mode');
    const html = document.querySelector('html');
    console.log(mode);
    if (mode === 'dark') {
      html.classList.add('dark');
    }
    return;
  }, []);
  return (
    <div>
      <Introduction />
    </div>
  );
};
export default IndexPage;
