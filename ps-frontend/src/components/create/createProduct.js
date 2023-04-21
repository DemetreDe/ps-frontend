import React, { useRef } from "react";
import './createProduct.css';

let CreateProduct = function () {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            <form className="product-form" onSubmit={handleSubmit}>
                <ul>
                    <li className="left-inputs">
                        <h3>New Product</h3>
                        <input type="text" placeholder="Product.." />
                        <input type="number" placeholder="Price.." />
                        <input type="number" placeholder="Actual Price.." />
                    </li>
                    <li>
                        <textarea type="text" placeholder="Description.." />
                    </li>
                </ul>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default CreateProduct;