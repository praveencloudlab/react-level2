import React from 'react';
import {useDispatch } from 'react-redux';
import Counter from './Counter';
import Box from './Box';

const App = () => {
  const dispatch = useDispatch();
      const increment = () => 
      {
         dispatch({ type: 'INCREMENT' });
      };
      const decrement = () => 
      { 
          dispatch({ type: 'DECREMENT' });
      };

      const evenincrement = () => 
      { 
        dispatch({ type: 'EVEN-INCREMENT' });
      };
      const evendecrement = () => 
      { 
          dispatch({ type: 'EVEN-DECREMENT' });
      };


  return (
    <div className='container'>
      <h1>App Component</h1> <hr/>


    <div className='row'>
      <div className='col-4 bg-info'>
          
          <button onClick={increment}>Increment</button> 
          <button onClick={decrement}>Decrement</button>
          <hr/>
          <button onClick={evenincrement}>Even-Increment</button> 
          <button onClick={evendecrement}>Even-Decrement</button>
      </div>
      <div className='col-8 bg-secondary'>
        <Counter/>
      </div>

      <hr/>
      <Box/>

    </div>
    </div>
  );
};

export default App;