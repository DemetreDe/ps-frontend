import React from "react";
import "./productTile.css";
import image from "../../../resources/images/placeholder02.png";

const ProductTile = ({ product }) => {
  return (
    <div className="product-tile">
      <img className="product-image" src={image} alt={product.name} />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default ProductTile;
