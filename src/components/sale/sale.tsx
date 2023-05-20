import { Btn } from "../btn/btn";
import bav from "./img/bav.jpg";

export function Sale() {
  return (
    <div className="sale m-box">
      <div className="sale__row">
        <div className="sale__column">
          <h2 className="sale__head">Карусель скидок 2023!</h2>
          <Btn></Btn>
        </div>
        <div className="sale__img" style={{ backgroundImage: `url(${bav})` }} ></div>
      </div>
    </div>
  );
}



