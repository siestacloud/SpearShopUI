import { useAppState } from '../../hooks/appHook';
import { Logo } from '../common/logo/logo';
import { Social } from '../common/social/social';
import { Subscribe } from '../common/subscribe/subscibe';

function Footer() {


  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Subscribe></Subscribe>
        <div className='footer__row'>
          <Logo></Logo>
          <div className='footer__col'>
            <Social></Social>
            <p>Copyright 2022. All Rights Reserved</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
