import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions.js';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
    	cartItems: state.user.cartItems
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		dispatchUpdatedCart: (newCart) => dispatch(updateCart(newCart))
	}
}

class AddToCartButton extends Component {

	render() {

		const { id, quantity, dispatchUpdatedCart, cartItems } = this.props;

		const buttonClick = (id, quantity, cartItems) => {

			const newCart = cartItems;

			newCart.push([id, quantity]);

			dispatchUpdatedCart(newCart);
		}

		return (
			<button className="btn btn-primary btn-block mb-3 mt-2 py-2" type="button"
				onClick={() => buttonClick(id, quantity, cartItems)}>Add To Cart</button>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);