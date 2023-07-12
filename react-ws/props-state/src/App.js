import React from 'react';
import Product from './Product';
import Products from './Products';

const App = (props) => {
  let product={id:10,name:'Mobile',price:87733}
  return (
    <div className='container'>
      <h1>{props.title} app</h1> <hr/>
      <Products/>
    </div>
  );
};

export default App;