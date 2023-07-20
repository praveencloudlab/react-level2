import React,{useContext} from 'react';
import Box from './Box';
import {MyProvider } from './Store';
import Product from './Product';

const App = () => {

   
  // Create A CONTEXT
//const MyContext =React.createContext();
  return (
    <div className='container'>
      <h1>App component</h1> <hr/>

      <MyProvider>
          <Box/>
          <Product/>
      </MyProvider>
      
      
    </div>
  );
};

export default App;