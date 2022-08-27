import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import ShowProduct from "../pages/showProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ShowProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
