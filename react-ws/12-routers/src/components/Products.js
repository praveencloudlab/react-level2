import React,{useState,useEffect} from 'react';
import ProductService from '../api/ApiService'
import ProductInfo from './ProductInfo';
const Products = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        ProductService.getAllProducts()
        .then(products =>setProducts(products.data))
        .catch(err=>console.log(err))
    },[])

    const renderProducts =()=>{
        return products.map((product,idx)=>{
            return(
                <ProductInfo product={product} key={product.productId}/>
            )
        });
    }
    return (
        <div>
           
           <table className='table'>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Edit</th>
                    </tr>
                </thead>

                <tbody>
                {renderProducts()}
                </tbody>
           </table>
           


        </div>
    );
};

export default Products;