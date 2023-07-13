import React,{useState} from 'react';
import BtnGren from './BtnGen';
import BtnGen from './BtnGen';

const App = () => {
  let nums=[10,-5,15,5,20,-15,-10,-30,30]
  const[hitsCount,setHitsCount]=useState(0);
 
   function handleHitsTotal(msg){
      setHitsCount(hitsCount+msg)
   }

   let handleReset=()=>{
      setHitsCount(0);
   };

   function renderButtons(){
      return nums.map(number=>{
        return(
            <div className="col-4">
                <BtnGen parentFun={(msg)=>handleHitsTotal(msg)} lable={number}/>
            </div>
        )
            
           
      })

    }
  return (
    <div className='container'>
      <h1>Counter APP</h1> <hr/>
     
    
      <div className='col-12'>
        <div className='card'>
          <div className='card-header'><h5>Counter APP</h5></div>
            <div className='card-body'>
                <p className='text-center'><button onClick={()=>handleReset()}>Reset All Count</button></p>
             <div className='row'>
                
                {renderButtons()}
              </div>
             </div>
             <div className='card-footer text-center'>
          <h4>Total Count : {hitsCount}</h4>
         </div>
         </div>
        
     </div>
    </div>
  );
};

export default App;