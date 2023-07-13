import React from 'react';
import Product from './Product';

const Products = () => {
    let products =  [{id:1,name:'Samsung Mobile',price:98344,inStock:true},
                    {id:2,name:'Laptop',price:135000,inStock:false},
                    {id:3,name:'Wirelsss Mouse',price:1200,inStock:true},
                    {id:4,name:'Keyboard',price:2300,inStock:true},
                    {id:5,name:'Play Station',price:56000,inStock:false},
                ]

            

    
 
    function renderProducts(){
        return products.map(product=>{
            return(
               <Product key={product.id} prod={product}/>
            ) 
        })
    }           
    return (
        <div>
        
        <h1>Products</h1>
        <hr/>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>instock</th>
                    <th>Remove</th>
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