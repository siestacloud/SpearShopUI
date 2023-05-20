import { Btn } from "../btn/btn";
import big from "./img/big.png";


interface props {
  style: string
}

export function News({ style }: props) {
  return (
    <div className={`news ${style}`} >
      <div className="news__desc">
        <h1>Большая скидка</h1>
        <p>Лучший выбор на 2023г</p>
        <h2>Заряд бодрости <br />на весь день</h2>
        <Btn />
      </div>
      <img className="news__img" src={big} alt="no img" />
    </div>
  );
}



