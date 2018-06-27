import { LOAD_PAGE, LOAD_PRODUCT, UPDATE_CART } from './constants.js';

export const setPageToLoad = (pageValue) => ({
	type: LOAD_PAGE,
	payload: pageValue
})

export const setProductToLoad = (productId) => ({
	type: LOAD_PRODUCT,
	payload: productId
})

export const updateCart = (cartIds) => ({
	type: UPDATE_CART,
	payload: cartIds
})

