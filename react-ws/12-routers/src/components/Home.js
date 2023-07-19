import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Products from './Products';
import EditProduct from './EditProduct';
import ProductForm from './ProductForm';

import App from '../App';
const Home = () => {
    return (
        <div>
        
        <div className='row'>
            <div className='col-2'>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to={"products"}>Display</Link>
                </li>
                <li className="nav-item">
                     <Link className="nav-link" to={"add-product"}>New Product</Link>
                </li>
            </ul>
        </div>

            <div className='col-10'>
                 <Routes>
                     <Route path='products' element={<Products/>}/>
                     <Route path='edit' element={<EditProduct/>}/>
                     <Route path='add-product' element={<ProductForm/>}/>
                     <Route path='add-product/:pid' element={<ProductForm/>}/>




                </Routes>
            </div>
          </div>


           

            <br/>
           

              
        
        </div>
    );
};

export default Home;