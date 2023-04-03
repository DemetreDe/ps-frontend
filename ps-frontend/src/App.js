import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./components/login/login"
import Products from "./components/products/productPage";
import NavBar from "./components/navBar/navBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
