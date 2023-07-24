import { addProduct, removeProduct } 
from '../actions/productsActions'; 
export function addNewProduct(dispatch, product) {
    dispatch(addProduct(product)); 
}
export function removeExistingProduct(dispatch, product) { 
    dispatch(removeProduct(product));
}