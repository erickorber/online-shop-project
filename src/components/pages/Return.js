import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../actions.js';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
   		cartReduxState: state.user.cartItems
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
  	return {
    	dispatchUpdatedCart: (newCart) => dispatch(updateCart(newCart))
  	}
}

class Return extends Component {
	
	componentDidMount() {
		this.props.dispatchUpdatedCart([]);
	}

	render() {
		return (
			<div className="container">
				<div className="row page-title-spacing">
					<div className="col-12">
						<h2 className="text-center slight-shadow">Transaction successful! Thank you for your purchase!</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Return);