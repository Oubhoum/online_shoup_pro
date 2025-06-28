import { cartActions } from "../slices/cartSlice"

// Add Item To Cart
export function addToCart(newItem) {

    return (dispatch) => {
        dispatch(cartActions.addItemToCart(newItem));
    };

};

// Remove Item From Cart

export function removeFormCart(id) {

    return (dispatch) => {
        dispatch(cartActions.removeItemFromCart(id))
    };

};
