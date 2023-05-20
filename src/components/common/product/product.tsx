import { Btn } from "../btn/btn";
import mainImg from "./img/1.jpg";



interface props {
  style: string
}
export function Product({ style }: props) {
  return (
    <div className={`product ${style}`} >
      <div className="m-row m-p20 m-h100">
        <div className="product__img m-fb40" style={{ backgroundImage: `url(${mainImg})` }}>i</div>
        <div className="product__imgs m-fb15">
          <div className="product__img-min" style={{ backgroundImage: `url(${mainImg})` }}>q</div>
          <div className="product__img-min" style={{ backgroundImage: `url(${mainImg})` }}>q</div>
        </div>
        <div className="m-col-sb-s   m-fb45 ">
          <h2 className="product__name">Баварский завтрак</h2>
          <p className="product__info"><span>Цена: </span> <span className="m-yello">199р</span></p>
          <p className="product__info"><span>Категория: </span> <span className="m-yello">завтрак</span></p>
          <p className="product__info"><span>Рейтинг: </span> <span className="m-green">10/10</span></p>
          <p className="product__desc">Lorem ipsum dolor sit amet   animi nesciunt minus consectetur adipisicing elit. Ea amet  animi nesciunt minus pariatur illo amet consectetur adipisicing  animi nesciunt minus.</p>
          <div className="m-row">
            <Btn></Btn>
            <Btn></Btn>
          </div>
        </div>
      </div>
    </div>
  );
}



