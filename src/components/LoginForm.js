import React from 'react';

const LoginForm = () => {
	return (
		<form id="login-form" action="login">
			<div className="form-row justify-content-center">
				<div className="col-12 col-md-6 col-lg-4">
					<input type="email" className="form-control mb-3" placeholder="Email" autoComplete="email"/>
				</div>
			</div>
			<div className="form-row justify-content-center">
				<div className="col-12 col-md-6 col-lg-4">
					<input type="password" className="form-control mb-3" placeholder="Password"/>
				</div>
			</div>
			<div className="form-row justify-content-center">
				<div className="col-12 col-md-6 col-lg-4">
					<button type="submit" className="btn btn-lg btn-primary btn-block mb-2">Login</button>
				</div>
			</div>
		</form>
	);
}

export default LoginForm;