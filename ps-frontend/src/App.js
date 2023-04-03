import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Products from "./components/products/products";
import Login from "./components/login/login"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
