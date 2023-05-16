import { useToggle } from "../../hooks/useToggle";

export function BurgerMenu() {
  const [MenuState, setMenuState] = useToggle(true);

  return (
    <article className="burger">
      <button className="burger__btn" onClick={setMenuState}>
        <span></span>
      </button>
      {/* настроить контент по макету */}
      <div className={`burger__menu ${MenuState ? 'burger__menu-active' : ''}`}>
        <p>menu 1</p>
        <p>menu 2</p>
        <p>menu 3</p>
      </div>
    </article>
  )
}

