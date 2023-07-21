import React from 'react';
import {useSelector} from 'react-redux';
const Counter = () => {
    const count = useSelector(state => state.count); 
    const evencount = useSelector(state => state.even); 

    return (
        <div>
            <h1>Counter: {count} </h1>
            <h1>EVent-Counter: {evencount} </h1>
        </div>
    );
};

export default Counter;