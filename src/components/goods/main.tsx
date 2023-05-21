import { Route, Routes } from "react-router-dom";
import { General } from "../pages/general/general";
import { Category } from "../pages/category/category";
import { Auth } from "../pages/auth/auth";


function Main() {
  return (
    <main className='main'>
      <div className="main__wrapper">
        <Routes>
          <Route path={`/*`} element={<General />} />
          <Route path={`/category/product/${12345}`} element={<Category />} />
          <Route path={`/login`} element={<Auth togle={"login"} />} />
          <Route path={`/register`} element={<Auth togle={"register"}/>} />
          <Route path={`/recover`} element={<Auth togle={"recover"}/>} />

        </Routes>
      </div>
    </main>
  );
}

export default Main;
