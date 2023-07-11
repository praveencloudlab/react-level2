import React from 'react';
import Products from './components/Products';
const App = () => {
  let name='Praveen';
  let names=['Praveen', 'Bucky','Roy'];


  function renderNames(){
    return names.map(name=>{
      return(
        <li>{name}</li>
      )
    })
  }

  return (
    <div className='container'>
      <h1>App Component</h1>
      <hr/>
      <h2>Welcome - {name} </h2>
      <h2>
        <ol>
           {renderNames()}
        </ol>
       
      </h2>
      <Products/>
    </div>
  );
};

export default App;