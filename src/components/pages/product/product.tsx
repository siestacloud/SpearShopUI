import {  SubMenu } from "../../common/menu/menu";
import { News } from "../../common/news/news";
import { Trend } from "../../common/trend/trend";


export function Product() {
  return (
    <>
      <div className="m-row">
        <SubMenu />
        <News />
      </div>
      <Trend />

    </>
  );
}



