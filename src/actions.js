import { LOAD_PAGE, LOAD_PRODUCT } from './constants.js';

export const setPageToLoad = (pageValue) => ({
	type: LOAD_PAGE,
	payload: pageValue
})

export const setProductToLoad = (productId) => ({
	type: LOAD_PRODUCT,
	payload: productId
})