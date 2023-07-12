import React from 'react';

const Product = ({prod}) => {
   let{id,name,price}=prod;
    return (
        <div>

            <h2>Name: {name}</h2>
        </div>
    );
};

export default Product;