import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Cart from "./Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
