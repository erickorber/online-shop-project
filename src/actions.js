import {
	LOAD_PAGE, 
	LOAD_PRODUCT, 
	UPDATE_CART, 
	REQUEST_PRODUCT_LIST_PENDING,
	REQUEST_PRODUCT_LIST_SUCCESS,
	REQUEST_PRODUCT_LIST_FAILED 
} from './constants.js';

export const setPageToLoad = (pageValue) => ({
	type: LOAD_PAGE,
	payload: pageValue
})

export const setProductToLoad = (productId) => ({
	type: LOAD_PRODUCT,
	payload: productId
})

export const updateCart = (cartItems) => ({
	type: UPDATE_CART,
	payload: cartItems
})

export const requestProductList = () => (dispatch) => {
	
	dispatch({ type: REQUEST_PRODUCT_LIST_PENDING });
	fetchFromServer();
	
	async function fetchFromServer() {
		try{
			const response = await fetch('http://localhost:3000/full-product-list');
			const data = await response.json();
			dispatch({ type: REQUEST_PRODUCT_LIST_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: REQUEST_PRODUCT_LIST_FAILED, payload: error });
		}
	}
}
