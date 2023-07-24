import { addToCart, removeFromCart, emptyCart } 
from '../actions/cartActions';
export function addItemToCart(dispatch, item) {
dispatch(addToCart(item)); 
}
export function removeItemFromCart(dispatch, item) { 
    dispatch(removeFromCart(item));
}
export function emptyCartItems(dispatch) { 
    dispatch(emptyCart());
}
export function emptyCartItems(dispatch) {
dispatch(emptyCart()); 
}