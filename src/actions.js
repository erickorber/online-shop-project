import {
	UPDATE_CART, 
	REQUEST_PRODUCT_LIST_PENDING,
	REQUEST_PRODUCT_LIST_SUCCESS,
	REQUEST_PRODUCT_LIST_FAILED,
	REQUEST_CART_LIST_PENDING,
	REQUEST_CART_LIST_SUCCESS,
	REQUEST_CART_LIST_FAILED,
	REQUEST_PRODUCT_PENDING,
	REQUEST_PRODUCT_SUCCESS,
	REQUEST_PRODUCT_FAILED,
	SERVER_ADDRESS  
} from './constants.js';
import { setCookie } from 'redux-cookie';

export const updateCart = (cartItems) => (dispatch) => {
	if (navigator.cookieEnabled) {
		dispatch(setCookie('cartCookie', cartItems, { expires: 365 }));
	} 
	
	//We will always be prioritizing this state here, not the cookie 
	dispatch({type: UPDATE_CART, payload: cartItems});
}

export const requestProductList = () => (dispatch) => {
	
	dispatch({ type: REQUEST_PRODUCT_LIST_PENDING });
	fetchFromServer();
	
	async function fetchFromServer() {
		try{
			const response = await fetch(SERVER_ADDRESS);
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
			const response = await fetch(SERVER_ADDRESS + '/product/' + urlName);
			const data = await response.json();
			dispatch({ type: REQUEST_PRODUCT_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: REQUEST_PRODUCT_FAILED, payload: error });
		}
	}
}

export const requestCartServerList = (cart) => (dispatch) => {
	
	dispatch({ type: REQUEST_CART_LIST_PENDING });
	
	let idsForURL = "";

	cart.forEach((item) => {
		idsForURL = idsForURL.concat(item.id);
	});

    fetchFromServer(idsForURL);

	async function fetchFromServer(idList) {
		try{
			const response = await fetch(SERVER_ADDRESS + '/cart/' + idList);
			const data = await response.json();
			dispatch({ type: REQUEST_CART_LIST_SUCCESS, payload: data });
		} catch (error) {
			dispatch({ type: REQUEST_CART_LIST_FAILED, payload: error });
		}
	}
}