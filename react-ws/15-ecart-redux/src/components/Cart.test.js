import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import App from './App';
import Cart from './Cart';

test('renders learn react link', () => {
    const store = configureStore({
        reducer: {
          cart: cartReducer
        }
      });
    
      const { getByText } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );

  expect(getByText(/No products available./i)).toBeInTheDocument();
});
