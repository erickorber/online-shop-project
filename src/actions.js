import {
	UPDATE_CART, 
	REQUEST_PRODUCT_LIST_PENDING,
	REQUEST_PRODUCT_LIST_SUCCESS,
	REQUEST_PRODUCT_LIST_FAILED,
	REQUEST_PRODUCT_PENDING,
	REQUEST_PRODUCT_SUCCESS,
	REQUEST_PRODUCT_FAILED  
} from './constants.js';

export const updateCart = (cartItems) => ({
	type: UPDATE_CART,
	payload: cartItems
})

export const requestProductList = () => (dispatch) => {
	
	dispatch({ type: REQUEST_PRODUCT_LIST_PENDING });
	fetchFromServer();
	
	async function fetchFromServer() {
		try{
			const response = await fetch('http://localhost:3000/');
			const data = await response.json();
			dispatch({ type: REQUEST_PRODUCT_LIST_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: REQUEST_PRODUCT_LIST_FAILED, payload: error });
		}
	}
}

export const requestProduct = (urlName) => (dispatch) => {
	
	dispatch({ type: REQUEST_PRODUCT_PENDING });
	fetchFromServer();
	
	async function fetchFromServer() {
		try{
			const response = await fetch('http://localhost:3000/product/' + urlName);
			const data = await response.json();
			dispatch({ type: REQUEST_PRODUCT_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: REQUEST_PRODUCT_FAILED, payload: error });
		}
	}
}