import { productActions } from "../slices/productSlice";

// fetch products
export function fetchProducts() {

    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:5000/products");
            const data = await response.json();
            dispatch(productActions.setProducts(data));
        } catch (error) {
            console.log(error);
        }
    };

}

// Get product by id
export function getProductById(productId) {

    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:5000/products/${productId}`);
            const data = await response.json();
            dispatch(productActions.setProduct(data));
        } catch (error) {
            console.log(error);
        }
    };

}
