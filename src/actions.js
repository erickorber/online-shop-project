import { LOAD_HEADER_LINK, LOAD_PRODUCT_PAGE } from './constants.js';

export const setPageToLoadFromHeaderLink = (pageValue) => ({
	type: LOAD_HEADER_LINK,
	payload: pageValue
})

export const setProductPageToLoadFromId = (productId) => ({
	type: LOAD_PRODUCT_PAGE,
	payload: productId
})