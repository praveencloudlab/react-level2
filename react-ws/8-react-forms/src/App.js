import {useState} from 'react';

const App = () => {
  const[userName,setUserName] =useState('');
  function handleSubmit(e){
    e.preventDefault();

    const form=e.target;
    console.log(form);
    console.log(form.userName.value);
    console.log(form.password.value);
    
   
    //console.log(e.target['userName'].value);
    //setUserName(e.target['userName'].value);
  }

  function handleChange(e){
    console.log(e.target.value);
    setUserName(e.target.value);
  }

  return (
    <div className='container'>

      <h1>React Form</h1> <hr/>


      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>User Name</label>
          <input name="userName" defaultValue='some value' onChange={(e)=>handleChange(e)} />
        </div>

        <div>
          <label>Password</label>
          <input type='password' name="password" defaultValue='' onChange={(e)=>handleChange(e)} />
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>   
      <hr/>
      <h2>user: {userName}</h2>   
    </div>
  );
};

export default App;