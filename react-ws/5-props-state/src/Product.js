import React from 'react';

const Product = ({prod}) => {
   let{id,name,price,inStock}=prod;
    return (
        <tr>
         <td>{id}</td>
         <td>{name}</td>
         <td>{price}</td>
         <td>{inStock?"instock":"out of stock"}</td>
         <td><button>Remove</button></td>
         <td><button>Edit</button></td>
        </tr>
      
    );
};

export default Product;