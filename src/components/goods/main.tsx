import { Categories, CategoriesRow } from "../common/categories/categories";
import { News } from "../common/news/news";
import { Sale } from "../common/sale/sale";
import { Trend } from "../common/trend/trend";

function Main() {
  return (
    <main className='main'>
      <div className="main__wrapper">
        <div className="main__row">
          <Categories />
          <News />
        </div>
        <CategoriesRow/>
        <Trend/>
        <Sale/>
        <Trend/>
      </div>
    </main>
  );
}

export default Main;
