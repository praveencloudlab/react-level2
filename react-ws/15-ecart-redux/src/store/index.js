import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer'; 
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import { Provider } from 'react-redux';
import Cart from '../components/Cart';

const store = configureStore(
    { 
        reducer: 
                {
                     products: productsReducer, 
                     cart: cartReducer,
                     user: userReducer,
                }           
    , });

   
    export default store;
