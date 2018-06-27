import React from 'react';

const ContactForm = () => {
	return (
		<form id="contact-form" action="sendMessage">
			<div className="form-row">
				<div className="col-12 col-md-6">
					<input type="text" className="form-control mb-3" placeholder="First Name"/>
				</div>
				<div className="col-12 col-md-6">
					<input type="email" className="form-control mb-3" placeholder="Email" autoComplete="email"/>
				</div>
			</div>
			<div className="form-row">
				<div className="col-12">
					<input type="text" className="form-control mb-3" placeholder="Subject"/>
				</div>
			</div>
			<div className="form-row">
				<div className="col-12">
					<textarea className="form-control mb-3" placeholder="Message" rows="5"></textarea>
				</div>
			</div>
			<div className="form-row">
				<div className="col-12">
					<button type="submit" className="btn btn-lg btn-primary btn-block mb-2">Send Message</button>
				</div>
			</div>
		</form>
	);
}

export default ContactForm;