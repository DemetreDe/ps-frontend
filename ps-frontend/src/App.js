import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./components/products/products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
