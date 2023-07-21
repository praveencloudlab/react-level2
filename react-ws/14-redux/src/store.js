import { configureStore } from '@reduxjs/toolkit';
const initialState = { count: 0,even:0,odd:1 };
function counterReducer(state = initialState, action) { 
switch (action.type) {
case 'INCREMENT':
return { ...state, count: state.count + 1 };
case 'EVEN-INCREMENT':
return { ...state, even: state.even + 2 };
case 'EVEN-DECREMENT':
return { ...state, even: state.even - 2 };
case 'DECREMENT':
return { ...state, count: state.count - 1 };
default: return state;
} 
}
const store = configureStore({ reducer: counterReducer });
export default store;

