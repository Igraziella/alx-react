import REACT from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from './utils';

function Footer() {
return (
    <>
        <div className="App-footer" data-testid="app-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
    </>
  );
}

export default Footer;