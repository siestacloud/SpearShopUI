import { Route, Routes } from "react-router-dom";
import { General } from "../pages/general/general";
import { Category } from "../pages/category/category";


function Main() {
  return (
    <main className='main'>
      <div className="main__wrapper">
        <Routes>
          <Route path={`/*`} element={<General />} />
          <Route path={`/category/product/${12345}`} element={<Category/>} />

        </Routes>
      </div>
    </main>
  );
}

export default Main;
