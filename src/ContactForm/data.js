import { SERVER_ADDRESS } from '../constants.js';

const data = {
	"serverAddress" : SERVER_ADDRESS + "/contact-form-submit",
	"recaptchaSiteKey" : process.env.RECAPTCHA_SITE_KEY
}

export default data;