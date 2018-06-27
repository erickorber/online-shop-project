import { LOAD_PAGE, LOAD_PRODUCT } from './constants.js';
import { combineReducers } from 'redux';

const initialNavigationState = {
	pageValue: 'Shop'
}

const initialProductState = {
	productId: '3'
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

export const rootReducer = combineReducers({
	navigation: navigationReducer,
	product: productReducer
})