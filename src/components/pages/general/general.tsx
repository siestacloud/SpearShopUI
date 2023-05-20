import {  RowMenu, SubMenu } from "../../common/menu/menu";
import { News } from "../../common/news/news";
import { Sale } from "../../common/sale/sale";
import { Trend } from "../../common/trend/trend";


export function General() {
  return (
    <>
      <div className="m-row">
        <SubMenu />
        <News />
      </div>
      <RowMenu />
      <Trend />
      <Sale />
      <Trend />
    </>
  );
}



