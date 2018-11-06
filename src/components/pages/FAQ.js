import React from 'react';

const FAQ = (props) => {
	return (
		<div className="container">
			<div className="row page-title-spacing">
				<div className="col-12">
					<h2 className="text-center slight-shadow">Frequently Asked Questions</h2>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<p className="mx-1">
<strong>Where is the store based?</strong><br />
Richmond Hill, Ontario<br />
<br />
<strong>When do you ship out your orders?</strong><br />
I ship out orders whenever I can, about once a week. You will receive a shipping confirmation email right after your order has been shipped.<br />
<br />
<strong>How long will it take to receive my order?</strong><br />
Within Canada: 6-15 business days<br />
USA: 7-30 business days<br />
International: between 2 weeks to 2 months. This is just an approximation as shipping speed may be hindered by your country's customs check.<br />
<br />
<em>Please note that in order to keep shipping costs low, I do not provide tracking information with orders. If you require tracking, please contact the shop so that I can get a quote for you.</em>
					</p>
				</div>
			</div>
		</div>
	);
}

export default FAQ;