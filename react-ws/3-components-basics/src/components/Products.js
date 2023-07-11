import React from 'react';
const Products = () => {

    let products=[
        {id:1,name:'Laptop',price:15000},
        {id:2,name:'Mobile',price:45000},
        {id:3,name:'Tablet',price:34000},
    ]

    let renderProducts=()=>{
       return products.map(product=>{
            return(
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
                
            )
        })
    }


    return (
        <div>
            <h1>Products</h1>
            <hr/>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
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