import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import { updateProduct } from '../actions/productsActions';
const ProductItem = ({ product }) => {

    const dispatch = useDispatch();
        const handleAddToCart = (e) => {
            const updatedProduct = { ...product, inCart: true }; 
            dispatch(addToCart(updatedProduct));
       
        };
    return (
        <div className='col-4'>
        <div className="card mt-2">
        <div className="card-header"> <h2>{product.name}</h2></div> <div className="card-body">
        <div className="card-text"> <p>Description:{product.description}</p> <p>Price: {product.price}</p>
        <hr/>
        {!product.inCart && (
        <>
        <button onClick={handleAddToCart}>Add to Cart</button>
        </> )}
        </div> </div>
        </div>
        </div>
    );
};

export default ProductItem;