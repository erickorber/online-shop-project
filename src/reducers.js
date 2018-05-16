import { LOAD_HEADER_LINK } from './constants.js';

const initialState = {
	pageValue: 'Products'
}

export const loadPageFromHeaderLink = (state = initialState, action = {}) => {
	switch(action.type) {
		case LOAD_HEADER_LINK:
			return Object.assign({}, state, {pageValue: action.payload});
		default:
			return state;
	}
}