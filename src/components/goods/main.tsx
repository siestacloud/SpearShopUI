import { Categories } from "../categories/categories";
import { News } from "../news/news";
import { Trend } from "../trend/trend";

function Main() {
  return (
    <main className='main'>
      <div className="main__wrapper">
        <div className="main__row">
          <Categories />
          <News />
        </div>
        <Trend/>
      </div>
    </main>
  );
}

export default Main;
