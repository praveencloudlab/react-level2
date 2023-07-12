import React from 'react';
import Product from './Product';

const Products = () => {
    let products =[{id:1,name:'Mobile',price:98344},
                    {id:2,name:'Laptop',price:135000},
                    {id:3,name:'Mouse',price:1200},
                    {id:4,name:'Keyboard',price:2300},
                    {id:5,name:'Play Station',price:56000},
                ]
    
    function renderProducts(){
        return products.map(product=>{
            return(
               <Product prod={product}/>
            ) 
        })
    }           
    return (
        <div>
        
        <h1>Products</h1>
        <hr/>
        {renderProducts()}
          
            
        </div>
    );
};

export default Products;