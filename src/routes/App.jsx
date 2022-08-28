import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import ShowProduct from "../pages/showProduct";
import Context from "../context/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ShowProduct />} />
          </Routes>
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
