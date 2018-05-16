import { LOAD_HEADER_LINK } from './constants.js';

export const setPageToLoadFromHeaderLink = (pageValue) => ({
	type: LOAD_HEADER_LINK,
	payload: pageValue
})