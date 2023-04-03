import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./components/products/ProductPage";
import NavBar from "./components/navBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
