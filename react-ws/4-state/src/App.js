import {useState} from 'react';
const App = () => {

  const[num,setNum]=useState(1); // immutable content
  const[even,setEven]=useState(2); // immutable content
  const[odd,abc]=useState(1); // immutable content
  const[product,setProduct]=useState({id:10,name:'Laptop',price:87434}); // immutable content
  const[products,setProducts]=useState([{id:10,name:'Laptop',price:87434},{id:11,name:'Mobile',price:8745}]);
  const[isMarried,setIsMarried]=useState();
  function incrementCounter(){
    setNum(num+1); // if state uodated, then component is rerendered
  }

  function decrementCounter(){
    if(num>0)
     setNum(num-1);
  }

  function testStatus(e){
    console.log(e.target.value);
    setIsMarried(e.target.value);
  }

  return (
    <div className='container'>
      <h1>State management demo</h1> <hr/>
      <button onClick={()=>setNum(num+1)}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={()=>setEven(even+2)}>Increment Even numbers</button>
      <button onClick={()=>abc(odd+2)}>Increment Odd numbers</button>

       <br/>
      <h2>Number: {num}</h2>
      <h2>Even: {even}</h2>
      <h2>Odd: {odd}</h2>
      <h2>{product.name}</h2>
      <hr/>
      <select onChange={(e)=>testStatus(e)}>
        <option>Single</option>
        <option>Married</option>
       
      </select>
      <br/>
      {isMarried==='Married'?<input type='text' placeholder='number of children'/>:''}
      <br/>
     
    </div>
  );
};

export default App;