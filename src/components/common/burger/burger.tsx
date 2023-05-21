import bag from './img/bag.svg';

import { useToggle } from "../../../hooks/useToggle";

export function BurgerMenu() {
  const [MenuState, setMenuState] = useToggle(false);

  return (
    <article className="burger">
      <button className="burger__btn" onClick={setMenuState}>
        <span></span>
      </button>
      {/* настроить контент по макету */}
      <div className={`burger__menu ${MenuState ? 'burger__menu-active' : ''}`}>
        <div className='burger__love'  ></div>
        
        <div className='burger__bag'  ></div>
      </div>
    </article>
  )
}

