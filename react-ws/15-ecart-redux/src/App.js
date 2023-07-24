import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AddProductForm from './components/AddProductForm'; 
import { useSelector } from 'react-redux';

const App = () => {
  const products = useSelector(state => state.cart.items);

  return (
<div className='container'> <div className='row'>
<div className='col-10'>
<div className='text-center'>
<h1>ecart app</h1> </div>
</div>
<div className='col-2 mt-3'>
<button type="button" className="btn btn-primary position-relative"> Cart
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
<b>{products.length}</b>
<span className="visually-hidden">unread messages</span> </span>
</button> </div>
</div>
<hr />
<div className='row'>
<div className='col-3'> <nav>
<ul> <li>
<Link to="/">Home</Link> </li>
<li>
<Link to="products">Products</Link>
</li> <li>
<Link to="cart">Cart</Link> </li>
<li>
<Link to="add-product">Add Product</Link>
</li> </ul>
</nav>
</div>
<div className='col-9'>
<Routes>
<Route path="/" element={<ProductList />} />
<Route path="add-product" element={<AddProductForm />} /> <Route path="products" element={<ProductList />} />
<Route path="cart" element={<Cart />} />
</Routes> </div>
</div> </div>
  );
};

export default App;