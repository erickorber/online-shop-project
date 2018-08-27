import { combineReducers } from 'redux';
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
	MESSAGE_SENT_RESPONSE_PENDING,
	MESSAGE_SENT_RESPONSE_SUCCESS,
	MESSAGE_SENT_RESPONSE_FAILED  
} from './constants.js';

const initialUserState = {
	cartItems: []
}

const initialProductListState = {
	isPending: false,
	productList: [],
	error: ''
}

const initialProductState = {
	isPending: false,
	product: undefined,
	error: ''
}

const initialCartServerListState = {
	isPending: false,
	serverList: [],
	error: ''
}

const initialContactFormResponseState = {
	isPending: false,
	response: '',
	error: ''
}

export const userReducer = (state = initialUserState, action = {}) => {
	switch(action.type) {
		case UPDATE_CART:
			return Object.assign({}, state, {cartItems: action.payload});
		default:
			return state;
	}
}

export const productListReducer = (state = initialProductListState, action = {}) => {
	switch(action.type) {
		case REQUEST_PRODUCT_LIST_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_PRODUCT_LIST_SUCCESS:
			return Object.assign({}, state, { isPending: false, productList: action.payload });
		case REQUEST_PRODUCT_LIST_FAILED:
			return Object.assign({}, state, { isPending: false, error: action.payload });	
		default:
			return state;
	}
}

export const productReducer = (state = initialProductState, action = {}) => {
	switch(action.type) {
		case REQUEST_PRODUCT_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_PRODUCT_SUCCESS:
			return Object.assign({}, state, { isPending: false, product: action.payload });
		case REQUEST_PRODUCT_FAILED:
			return Object.assign({}, state, { isPending: false, error: action.payload });	
		default:
			return state;
	}
}

export const cartServerListReducer = (state = initialCartServerListState, action = {}) => {
	switch(action.type) {
		case REQUEST_CART_LIST_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_CART_LIST_SUCCESS:
			return Object.assign({}, state, { isPending: false, serverList: action.payload });
		case REQUEST_CART_LIST_FAILED:
			return Object.assign({}, state, { isPending: false, error: action.payload });	
		default:
			return state;
	}
}

export const contactFormResponseReducer = (state = initialContactFormResponseState, action = {}) => {
	switch(action.type) {
		case MESSAGE_SENT_RESPONSE_PENDING:
			return Object.assign({}, state, { isPending: true });
		case MESSAGE_SENT_RESPONSE_SUCCESS:
			return Object.assign({}, state, { isPending: false, response: action.payload });
		case MESSAGE_SENT_RESPONSE_FAILED:
			return Object.assign({}, state, { isPending: false, error: action.payload });	
		default:
			return state;
	}
}

export const rootReducer = combineReducers({
	user: userReducer,
	productList: productListReducer,
	product: productReducer,
	cartServerList: cartServerListReducer,
	contactFormResponse: contactFormResponseReducer
})