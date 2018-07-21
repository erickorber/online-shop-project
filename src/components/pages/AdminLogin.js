import React from 'react';
import LoginForm from '../LoginForm.js';

const AdminLogin = (props) => {
	return (
		<div className="container">
			<div className="row page-title-spacing">
				<div className="col-12">
					<h2 className="text-center slight-shadow">Admin Login</h2>
				</div>
			</div>
			<LoginForm />
		</div>
	);
}

export default AdminLogin;