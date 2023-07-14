import {useState,useEffect} from 'react';

const App = () => {

  const[counter,setCounter]=useState(1);
  const[even,setEven]=useState(2);
  const[users,setUsers]=useState([]);

  async function loadUsers() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
     return data.json();
  }

  // to execute statemets on only once in life cycle
  useEffect(()=>{
   // console.log(">> only once");
    loadUsers()
    .then(users =>setUsers(users))
  },[])

  // every time invokes on every state changes
  useEffect(()=>{
    console.log(">> state changed..");
  })

  // execute only when counter state is changed
  useEffect(()=>{
    console.log(">> couter changed");
  },[counter])

    // execute only when even state is changed
    useEffect(()=>{
      console.log(">> even changed");
    },[even])

      // execute only when even or counter state is changed
      useEffect(()=>{
        console.log(">> even or couter changed");
      },[even,counter])
  
 const renderUsers=()=>{
  return users.map(user=>{
    return(
      <>
        <li >{user.name}</li>
      </>
    )
  })
 }

  return (
    <div className='container'>
          <h1>useEfffect Hook</h1> <hr/>
          <button onClick={()=>setCounter(counter+1)}>Increment</button>
          <button onClick={()=>setEven(even+2)}>Even-Increment</button>
          <h1>Counter: {counter}</h1>
          <h1>Even: {even}</h1>
          {renderUsers()}
    </div>
  );
};

export default App;