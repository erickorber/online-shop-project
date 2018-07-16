import { combineReducers } from 'redux';
import {
	LOAD_PAGE, 
	LOAD_PRODUCT, 
	UPDATE_CART, 
	REQUEST_PRODUCT_LIST_PENDING,
	REQUEST_PRODUCT_LIST_SUCCESS,
	REQUEST_PRODUCT_LIST_FAILED 
} from './constants.js';

const initialNavigationState = {
	pageValue: 'Cart'
}

const initialProductState = {
	productId: 1
}

const initialUserState = {
	cartItems: []
}

const initialProductListState = {
	isPending: false,
	productList: [],
	error: ''
}

export const navigationReducer = (state = initialNavigationState, action = {}) => {
	switch(action.type) {
		case LOAD_PAGE:
			return Object.assign({}, state, {pageValue: action.payload});
		case LOAD_PRODUCT:
			return Object.assign({}, state, {pageValue: 'Product'});
		default:
			return state;
	}
}

export const productReducer = (state = initialProductState, action = {}) => {
	switch(action.type) {
		case LOAD_PRODUCT:
			return Object.assign({}, state, {productId: action.payload});
		default:
			return state;
	}
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

export const rootReducer = combineReducers({
	navigation: navigationReducer,
	product: productReducer,
	user: userReducer,
	productList: productListReducer
})