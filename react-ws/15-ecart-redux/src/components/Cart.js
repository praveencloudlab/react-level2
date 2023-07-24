import React from 'react';
import { useSelector } from 'react-redux'; 
import ProductItem from './ProductItem';


const Cart = () => {
    const products = useSelector(state => state.cart.items);

    return (
       <div>
<h2>Products</h2> {products.length === 0 ? (
<p>No products available.</p> ):(
<div> {products.map(product => (
<ProductItem key={product.id} product={product} /> ))}
</div> )}
</div>
    );
};

export default Cart;