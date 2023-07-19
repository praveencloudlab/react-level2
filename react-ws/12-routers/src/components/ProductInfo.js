import React from 'react';
import { Link } from 'react-router-dom';

const ProductInfo = ({product}) => {
    let{productId,productTitle,description}=product;
    let{price}=product.price;
    let{stock}=product.stock;
    return (
        <>
          <tr>
            <td>{productId}</td>
            <td>{productTitle}</td>  
            <td>{description}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td><Link to={`/add-product/${productId}`}>Edit</Link></td>
          </tr>  
        </>
    );
};

export default ProductInfo;