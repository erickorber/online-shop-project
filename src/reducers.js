import { LOAD_HEADER_LINK, LOAD_PRODUCT_PAGE } from './constants.js';

const initialState = {
	pageValue: 'Products',
	productId: 'none'
}

export const navigationReducer = (state = initialState, action = {}) => {
	switch(action.type) {
		case LOAD_HEADER_LINK:
			return Object.assign({}, state, {pageValue: action.payload});
		case LOAD_PRODUCT_PAGE:
			return Object.assign({}, state, {productId: action.payload});
		default:
			return state;
	}
}