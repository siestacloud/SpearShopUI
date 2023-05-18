import one from "./img/1.svg";

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



