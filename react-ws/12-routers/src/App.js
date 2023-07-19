import React from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <div className='container'>
        <div className='alert alert-info text-center'>
          <h1>ecart App</h1>
        </div>
        <hr/>

        <Home/>

    </div>
  );
};

export default App;