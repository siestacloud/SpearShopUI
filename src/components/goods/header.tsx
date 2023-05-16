import { useState,useEffect } from "react";
import { Link, Links } from "../common/links/links";
import { Logo } from "../common/logo/logo";
import { Social } from "../common/social/social";


function Header() {

  const [MenuState, setMenuState] = useState(false)
  const HandleMenuToggle = () => { setMenuState(!MenuState) }
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  return (
    <header className="header">

      <div className={`header__wrapper ${scrolled ? "scrolled" : ""}`}>
        <Logo></Logo>
        <button className="header__burger" onClick={HandleMenuToggle}>
          <span></span>
        </button>
        <div className={`header__menu ${MenuState ? 'header__menu-active' : ''}`}>
          <Links></Links>
          <Social></Social>
          <Link></Link>
        </div>
      </div>

    </header>
  );
}




export default Header;
