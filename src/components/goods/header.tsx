import { Logo } from "../logo/logo";
import { useScroll } from "../../hooks/useScroll";
import { BurgerMenu } from "../burger/burger";
import { Search } from "../search/search";


function Header() {

  
  const [ScrollState] = useScroll();

  return (
    <header className="header">
      <div className={`header__wrapper ${ScrollState ? "scrolled" : ""}`}>
        <Logo logo="HitShop" />
        <Search></Search>
        <BurgerMenu/>
      </div>
    </header>
  );
}


export default Header;