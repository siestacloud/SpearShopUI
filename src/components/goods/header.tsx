import { useState, useEffect } from "react";
import { Logo } from "../logo/logo";
import { useToggle } from "../../hooks/useToggle";
import { useScroll } from "../../hooks/useScroll";
import { BurgerMenu } from "../burger/burger";


function Header() {

  const [ScrollState] = useScroll();


  return (
    <header className="header">
      <div className={`header__wrapper ${ScrollState ? "scrolled" : ""}`}>
        <Logo logo="HitShop" />
        <BurgerMenu/>
      </div>

    </header>
  );
}


export default Header;