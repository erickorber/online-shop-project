import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions.js';
import '../css/AddToCartButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/DeleteButton.css';

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		dispatchUpdatedCart: (newCart) => dispatch(updateCart(newCart))
	}
}

class DeleteButton extends Component {

	updateQuantity(id, cartItems, dispatchUpdatedCart) {
		
		const newCart = [];

		cartItems.forEach(

			(item, i) => {

				if (item[0] !== id) {
					newCart.push([item[0], item[1]]);
				}

			}

		);

		dispatchUpdatedCart(newCart);
	}

	render() {

		const { id, cartItems, dispatchUpdatedCart } = this.props;

		return (
			<div>
				<button className="btn delete-btn mt-2" type="button"
					onClick={() => this.updateQuantity(id, cartItems, dispatchUpdatedCart)}>
					<FontAwesomeIcon className="text-center align-middle" icon={faTrashAlt} />
				</button>
				
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(DeleteButton);