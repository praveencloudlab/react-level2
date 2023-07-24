import React from 'react';
import { useSelector } from 'react-redux'; 
import ProductItem from './ProductItem';
const ProductList = () => {
    const products = useSelector(state => state.products); // gets from store
    return (
        <div>
<h2>Products</h2> <hr/>
{products.length === 0 ? (
<p>No products available.</p> ):(
<div className='row'> {products.map(product => (
<ProductItem key={product.id} product={product} />
))} </div>
)} </div>
    );
};

export default ProductList;