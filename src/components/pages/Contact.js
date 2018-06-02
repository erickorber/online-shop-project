import React from 'react';
import ContactForm from '../ContactForm.js';

const Contact = (props) => {
	return (
		<div className="container">
			<div className="row page-title-spacing">
				<div className="col-12">
					<h2 className="text-center slight-shadow">Contact Page Title</h2>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<p className="text-center section-bottom-spacing">If you have any
						questions, comments or concerns, feel free to use the form below to
						contact me!</p>
				</div>
			</div>

			<ContactForm />
		</div>
	);
}

export default Contact;