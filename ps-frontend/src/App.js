import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login/login"
import Products from "./components/products/productPage";
import ProductDetails from "./components/products/details/productDetails"
import NavBar from "./components/navBar/navBar";
import "./App.css";
import ProtectedRoute from "./util/ProtectedRoute";
import OpenRoute from "./util/OpenRoute";


function App() {

  return (
    <React.Fragment>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/products" element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          } />
          <Route path="/products/:id" element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          } />
          <Route path="/login" element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          } />
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
