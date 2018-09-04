import React, { Component } from 'react';
import validator from 'email-validator';
import Recaptcha from 'react-recaptcha';
import '../css/ContactForm.css';

class ContactForm extends Component {
	
	constructor(props) {
	    super(props);
	    this.state = {
	    	hasComponentMounted: false,
	    	submitResponse: '',
	    	firstName: '',
	    	email: '',
	    	subject: '',
	    	message: '',
	    	recaptchaVerified: false 
	    };

	    this.handleNameChange = this.handleNameChange.bind(this);
	    this.handleEmailChange = this.handleEmailChange.bind(this);
	    this.handleSubjectChange = this.handleSubjectChange.bind(this);
	    this.handleMessageChange = this.handleMessageChange.bind(this);
	    this.onRecaptchaVerified = this.onRecaptchaVerified.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({
			hasComponentMounted: true
		});
	}

	handleNameChange(event) {
		this.setState({
			firstName: event.target.value
		});
	}

	handleEmailChange(event) {
		this.setState({
			email: event.target.value
		});
	}

	handleSubjectChange(event) {
		this.setState({
			subject: event.target.value
		});
	}

	handleMessageChange(event) {
		this.setState({
			message: event.target.value
		});
	}

	onRecaptchaVerified() {
		this.setState({
			recaptchaVerified: true
		});
	}

	handleSubmit(event) {
	    event.preventDefault();
	    
	    const messageForServer = JSON.stringify({
	    	"firstName" : this.state.firstName.trim(),
	    	"email" : this.state.email.trim(),
	    	"subject" : this.state.subject.trim(),
	    	"message" : this.state.message.trim()
	    });

	    const totalTests = 2;
	    let testsPassed = 0;

	    //If component has already mounted
	    if (this.state.hasComponentMounted) {
	    	testsPassed++;
	    }

	    //If email valid
	    if (validator.validate(this.state.email.trim())) {
	   		testsPassed++;
	    }

	    if (testsPassed === totalTests) {
	    	let currentComponent = this;
	    	postToServer(messageForServer, currentComponent);
	    } else {
	        this.setState({
		    	submitResponse: 'fail'
		    });
	    }

	    async function postToServer(messageJSON, currentComponent) {

			try{

				const response = await fetch('http://localhost:3000/contact-form-submit', {
					method: 'POST',
					body: messageJSON,
					headers: {
						'Content-Type': 'application/json'
					}
				});

				const data = await response.json();
				currentComponent.setState({
					submitResponse: data
				});

			} catch (error) {
				currentComponent.setState({
					submitResponse: 'fail'
				});
			}
		}
	}

	renderResponse() {

		let responseJSX;

		if (this.state.submitResponse === "success") {
			responseJSX = (
				<div className="alert alert-success" role="alert">
				  <strong>Your message has been sent!</strong> We will get back to you shortly.
				</div>
			);
		} 
		if (this.state.submitResponse === 'fail') {
			responseJSX = (
				<div className="alert alert-danger" role="alert">
				  <strong>Uh oh! An error occured.</strong> Sorry about that.. Please try again soon.
				</div>
			);
		}

		if (this.state.submitResponse === '') {
			responseJSX = (
				<form onSubmit={this.handleSubmit}>
					<div className="form-row">
						<div className="col-12 col-md-6">
							<input type="text" className="form-control mb-3" placeholder="First Name"
								value={this.state.firstName} onChange={this.handleNameChange} required/>
						</div>
						<div className="col-12 col-md-6">
							<input type="email" className="form-control mb-3" placeholder="Email" autoComplete="email"
								value={this.state.email} onChange={this.handleEmailChange} required/>
						</div>
					</div>
					<div className="form-row">
						<div className="col-12">
							<input type="text" className="form-control mb-3" placeholder="Subject"
								value={this.state.subject} onChange={this.handleSubjectChange} required/>
						</div>
					</div>
					<div className="form-row">
						<div className="col-12">
							<textarea className="form-control mb-3" placeholder="Message" rows="5"
								value={this.state.message} onChange={this.handleMessageChange} required></textarea>
						</div>
					</div>
					<div className="form-row">
						<div className="col-12">
							<Recaptcha sitekey="6LctMm4UAAAAAEVrlrUy2HLjPIJEWugx7TzF7jef"
								className="mb-3" render="explicit" verifyCallback={this.onRecaptchaVerified}/>
						</div>
					</div>
					<div className="form-row">
						<div className="col-12">
							{this.state.recaptchaVerified === true ? (
								<button type="submit" className="submit-btn btn btn-lg btn-primary btn-block mx-auto mb-4">Send Message</button>
							) : (
								<button className="submit-btn btn btn-lg btn-primary btn-block mx-auto mb-4" disabled>Send Message</button>
							)}
						</div>
					</div>
				</form>
			);
		}

		return responseJSX;
	}
	
	render() {
		return (
			<div>
				{this.renderResponse()}
			</div>
		);
	}
}

export default ContactForm;