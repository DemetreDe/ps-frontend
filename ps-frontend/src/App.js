import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./components/login/login"
import Products from "./components/products/productPage";
import ProductDetails from "./components/products/details/productDetails";
import NavBar from "./components/navBar/navBar";
import "./App.css";
import AuthContext from "./components/context/auth-context";

function App() {
  return (
    <div className="App">
      <AuthContext.Provider value={{
        isLoggedIn: false,
      }}>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
