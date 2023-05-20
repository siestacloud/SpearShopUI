import bav from "./img/bav.jpg";
import ital from "./img/ital.jpg";
import rus from "./img/rus.jpeg";
import veng from "./img/veng.jpeg";
import fran from "./img/fran.jpg";


interface props {
  style: string
}

export function SubMenu({ style }: props) {
  return (
    <div className={`menu ${style}`}>
      <div className="menu__column">
        <h2>Категории</h2>
        <ul className="menu__items">
          <li className="menu__item">Одежда</li>
          <li className="menu__item">Костюмы</li>
          <li className="menu__item">Брюки</li>
          <li className="menu__item">Рубашки</li>
        </ul>
        <div className="menu__row">
          <p>Помощь</p>
          <p>Соглашение & Условия</p>
        </div>
      </div>
    </div>
  );
}



export function RowMenu() {
  return (
    <div className="menu m-box">
      <div className="menu__column m-fl-center">
        <h2>Категории</h2>
        <div className="menu__row">
          <div className="menu__element">
            <div className="menu__element-img" style={{ backgroundImage: `url(${bav})` }} />
            <p>Баварская кухня</p>
          </div>
          <div className="menu__element">
            <div className="menu__element-img" style={{ backgroundImage: `url(${ital})` }} />
            <p>Итальянская кухня</p>
          </div>
          <div className="menu__element">
            <div className="menu__element-img" style={{ backgroundImage: `url(${rus})` }} />
            <p>Русская кухня</p>
          </div>
          <div className="menu__element">
            <div className="menu__element-img" style={{ backgroundImage: `url(${veng})` }} />
            <p>Венгерская кухня</p>
          </div>
          <div className="menu__element">
            <div className="menu__element-img" style={{ backgroundImage: `url(${fran})` }} />
            <p>Французкая кухня</p>
          </div>
        </div>
      </div>
    </div>
  );
}



