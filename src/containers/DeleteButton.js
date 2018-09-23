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

		//"Deleting" in this case is really just creating a new
		//array that doesn't include the item that is to be deleted
		cartItems.forEach(

			(item, i) => {

				if (item.id !== id) {
					newCart.push({
						id: item.id,
						quantity: item.quantity
					});
				}

			}

		);

		dispatchUpdatedCart(newCart);
	}

	render() {

		const { id, cartItems, dispatchUpdatedCart } = this.props;

		return (
			<div>
				<button className="btn w-100 delete-btn mt-2" type="button"
					onClick={() => this.updateQuantity(id, cartItems, dispatchUpdatedCart)}>
					<p className="delete-text text-center pr-2 d-none d-md-inline">Remove</p>
					<FontAwesomeIcon className="text-center" icon={faTrashAlt} />
				</button>				
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(DeleteButton);