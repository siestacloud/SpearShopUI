import { Route, Routes } from "react-router-dom";
import bav from "./img/bav.jpg";
import { useAppState } from "../../../hooks/appHook";
import { ControlAreaSection } from "../../../models/stateApp";
import { Nav } from "../../common/client/nav/nav";
import { Bucket } from "../../common/client/bucket/bucket";
import { Favorite } from "../../common/client/favorite/favorite";
import { Settings } from "../../common/client/settings/settings";

export function Area({ uri }: ControlAreaSection) {

  return (
    <div className="area m-box" >
      <div className="area__row">
        <Nav />

        {uri === "/area/settings" ? <Settings /> : <></>}
        {uri === "/area/bucket" ? <Bucket /> : <></>}
        {uri === "/area/favorite" ? <Favorite /> : <></>}

      </div>
    </div>
  );
}
