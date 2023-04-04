import React from "react";
import "./productTile.css";
import image from "../../../resources/images/placeholder02.png";
import { Link } from "react-router-dom";

const ProductTile = ({ product }) => {

  return (
    <div className="product-tile">
      <Link style={{ textDecoration: 'none' }} to={{ pathname: `/products/${product.id}` }}>
        <img className="product-tile-image" src={image} alt={product.name} />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductTile;
