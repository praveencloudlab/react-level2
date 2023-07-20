import React,{useContext} from 'react';
import { MyContext } from './Store';

const Box = () => {
    const {name,greeting,updateGreeting}=useContext(MyContext);
    return (
        <div>
            <h1>Box component</h1>
            <hr/>
            <h2>Hello {name}! {greeting}</h2>
            <br/>
            <button onClick={()=>updateGreeting('Good Noon')}>Change Greeting</button>
            
        </div>
    );
};

export default Box;