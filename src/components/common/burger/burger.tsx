import bag from './img/bag.svg';
import love from './img/love.svg';
import general from './img/general.svg';
import login from './img/login.svg';

import { useToggle } from "../../../hooks/useToggle";
import { Link } from 'react-router-dom';

export function BurgerMenu() {
  const [MenuState, setMenuState] = useToggle(false);

  return (
    <article className="burger">
      <button className="burger__btn" onClick={setMenuState}>
        <span></span>
      </button>
      {/* настроить контент по макету */}
      <div className={`burger__menu ${MenuState ? 'burger__menu-active' : ''}`}>
        <Link to={`/`}><div  style={{ backgroundImage: `url(${general})` }}  className='burger__img'  ></div></Link>
        <Link to={`/`}><div  style={{ backgroundImage: `url(${bag})` }}  className='burger__img'  ></div></Link>
        <Link to={`/`}><div  style={{ backgroundImage: `url(${love})` }}  className='burger__img'  ></div></Link>
        <Link to={`/login`}><div  style={{ backgroundImage: `url(${login})` }}  className='burger__img'  ></div></Link>
        
        
      </div>
    </article>
  )
}

