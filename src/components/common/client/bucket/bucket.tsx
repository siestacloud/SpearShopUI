import { ProductInBucket } from "../../product/product";
import { Title } from "../../title/title";

export function Bucket() {


  return (
    <div className="bucket ">
      <Title title="Корзина" desc=""></Title>
      <div className="bucket__row ">
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>
        <ProductInBucket></ProductInBucket>

      </div>
      <div className="bucket__box m-box">

      <button type="submit" className="bucket__btn ">Оформить заказ</button>
      </div>

      {/* <div className="buck"></div> */}
    </div>
  );
}
