import bav from "./img/bav.jpg";
import ital from "./img/ital.jpg";
import rus from "./img/rus.jpeg";
import veng from "./img/veng.jpeg";
import fran from "./img/fran.jpg";

export function Categories() {
  return (
    <div className="categories m-box">
      <div className="categories__column">
        <h2>Категории</h2>
        <ul className="categories__items">
          <li className="categories__item">Одежда</li>
          <li className="categories__item">Костюмы</li>
          <li className="categories__item">Брюки</li>
          <li className="categories__item">Рубашки</li>
        </ul>
        <div className="categories__row">
          <p>Помощь</p>
          <p>Соглашение & Условия</p>
        </div>
      </div>
    </div>
  );
}



export function CategoriesRow() {
  return (
    <div className="categories m-box">
      <div className="categories__column m-fl-center">
        <h2>Категории</h2>
        <div className="categories__row">
          <div className="categories__element">
            <div className="categories__element-img" style={{ backgroundImage: `url(${bav})` }} />
            <p>Баварская кухня</p>
          </div>
          <div className="categories__element">
            <div className="categories__element-img" style={{ backgroundImage: `url(${ital})` }} />
            <p>Итальянская кухня</p>
          </div>
          <div className="categories__element">
            <div className="categories__element-img" style={{ backgroundImage: `url(${rus})` }} />
            <p>Русская кухня</p>
          </div>
          <div className="categories__element">
            <div className="categories__element-img" style={{ backgroundImage: `url(${veng})` }} />
            <p>Венгерская кухня</p>
          </div>
          <div className="categories__element">
            <div className="categories__element-img" style={{ backgroundImage: `url(${fran})` }} />
            <p>Французкая кухня</p>
          </div>
        </div>
      </div>
    </div>
  );
}



