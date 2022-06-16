import React from 'react';
import { addToDb, removeFromDb } from '../../hooks/fakedb';
import './Product.css';

const Product = (props) => {
    const { id, name, price } = props.product;

    const handleAddToCart = (id) => {
        addToDb(id);
    }

    const handleRemoveCart = id => {
        removeFromDb(id);
    }

    return (
        <div className='product'>
            <h2>Name: {name}</h2>
            <p>Price: ${price}</p>
            <p>It is Id: {id}</p>
            <button onClick={() => handleAddToCart(id)}>Add to Cart</button>
            <button onClick={() => handleRemoveCart(id)}>Remove</button>
        </div>
    );
};

export default Product;