import React from "react";
import ProductTile from "./tile/ProductTile";
import products from "../../resources/products.json";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductTile key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductPage;
