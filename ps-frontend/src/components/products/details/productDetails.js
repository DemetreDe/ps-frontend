
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
                <form className="product-info-form" >
                    <ul>
                        <li className="product-info-form-left-inputs">
                            <h3>Viewing {product.name}</h3>
                            <input type="text" placeholder={product.name} />
                            <input type="number" placeholder={product.price} />
                            <input type="number" placeholder={product.actual_price} />
                        </li>
                        <li>
                            <textarea type="text" placeholder={product.description} />
                        </li>
                    </ul>
                    <ul className='product-info-form-edit-buttons'>
                        <li>
                            <button onClick={handleEdit}>Edit</button>
                        </li>
                        <li>
                            <button onClick={handleDelete}>Delete</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;