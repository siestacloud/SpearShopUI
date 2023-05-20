import { SubMenu } from "../../common/menu/menu";
import { News } from "../../common/news/news";
import { Trend } from "../../common/trend/trend";


export function Category() {
  return (
    <>
      <div className="product m-row">
        <div className="m-column m-fb20">
          <SubMenu style="m-box" />
          <SubMenu style="m-box" />
        </div>
        <News style="m-fb78 m-box" />
      </div>
      <Trend />
    </>
  );
}



