import { LOAD_PAGE, LOAD_PRODUCT } from './constants.js';

const initialState = {
	pageValue: 'Shop',
	productId: 'none'
}

export const navigationReducer = (state = initialState, action = {}) => {
	switch(action.type) {
		case LOAD_PAGE:
			return Object.assign({}, state, {pageValue: action.payload});
		case LOAD_PRODUCT:
			return Object.assign({}, state, {productId: action.payload});
		default:
			return state;
	}
}