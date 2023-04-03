
import React from 'react';
import { useParams } from 'react-router-dom';
import products from "../../../resources/products.json"
import image from "../../../resources/images/placeholder02.png"
import "./productDetails.css"

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id)
    const product = products.find((product) => product.id === parseInt(id))

    const handleEdit = () => {
        // Navigate to the Edit Product page
    };

    const handleDelete = () => {
        // Implement your logic for deleting a product here
    };

    return (
        <div className="product-details">
            <div className="product-image">
                <img className="product-image__img" src={image} alt={product.name} />
            </div>
            <div className="product-info">
                <h2 className="product-info__name">{product.name}</h2>
                <p className="product-info__price">Price: ${product.price}</p>
                <p className="product-info__actual-price">Actual Price: ${product.actual_price}</p>
                <p className="product-info__description">Description: {product.description}</p>
                <div className="buttons-container">
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;