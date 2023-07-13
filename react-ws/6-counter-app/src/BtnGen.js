import React,{useState} from 'react';

const BtnGen = ({lable,parentFun}) => {
    const[hitsCount,setHitsCount] =useState(0);
    let handleHitCount=()=>{
        setHitsCount(hitsCount+1);
        //invoke parent function
        parentFun(lable);
    }
    return (
            <div className='card mt-3'>
                <div className='card-body text-center'>
                <span><h5>{hitsCount}</h5></span>
                <hr/>
                <button onClick={()=>handleHitCount()} className='btn btn-primary'><h5>{lable}</h5></button>     
                </div>       
            </div>
           
           );
};

export default BtnGen;