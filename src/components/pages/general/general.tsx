import { RowMenu, SubMenu } from "../../common/menu/menu";
import { News } from "../../common/news/news";
import { Sale } from "../../common/sale/sale";
import { Trend } from "../../common/trend/trend";


export function General() {
  return (
    <>
      <div className="general m-row">
        <SubMenu style="m-box m-fb20" />
        <News style="m-box m-fb78 m-stretch" />
      </div>
      <RowMenu />
      <Trend />
      <Sale />
      <Trend />
    </>
  );
}



