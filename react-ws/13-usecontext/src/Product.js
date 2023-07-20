import React,{useContext} from 'react';
import { MyContext } from './Store';

const Product = () => {
    const {name,greeting,updateGreeting}=useContext(MyContext);

    return (
        <div>
            <h1>Product component</h1> <hr/>
            <h2>Hello {name}! {greeting}</h2>
            <button onClick={()=>updateGreeting('Good Evening')}>Change Greeting</button>
        </div>
    );
};

export default Product;