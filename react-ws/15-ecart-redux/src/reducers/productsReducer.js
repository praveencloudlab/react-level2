const initialState = [];
const productsReducer = (state = [], action) => {
switch (action.type) {
case 'ADD_PRODUCT':
const { name, price } = action.payload;
return [...state, {['id']:state.length+1,name,price}];
case 'REMOVE_PRODUCT':
return state.filter(product => product.id !== action.payload); case 'UPDATE_PRODUCT':
const { payload } = action;
let obj=state.map(product => product.id === payload.id ? payload : product);
return state.map(product => product.id === payload.id ? payload : product);
default: return state;
} };
export default productsReducer;