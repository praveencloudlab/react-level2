import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
const rootReducer = combineReducers(
    {
         cart: cartReducer,
         products: productsReducer,
         user: userReducer,
    });
export default rootReducer;