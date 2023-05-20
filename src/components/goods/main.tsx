import { Route, Routes } from "react-router-dom";
import { General } from "../pages/general/general";
import { Product } from "../pages/product/product";


function Main() {
  return (
    <main className='main'>
      <div className="main__wrapper">
        <Routes>
          <Route path={`/*`} element={<General />} />
          <Route path={`/product/${12345}`} element={<Product/>} />

        </Routes>
      </div>
    </main>
  );
}

export default Main;
