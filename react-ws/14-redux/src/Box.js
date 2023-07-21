import React from 'react';
import {useSelector} from 'react-redux';
const Box = () => {
    const count = useSelector(state => state.count); 
    const evenData = useSelector(state => state.even); 


    return (
        <div>
            <div className="card">
                <div className="card-header">Box Component</div>
                <div className="card-body">
                    <h3>Even-Counter: {evenData}</h3>
                    <h3>Counter: {count}</h3>
                </div>
            </div>
        </div>
    );
};

export default Box;