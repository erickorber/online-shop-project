import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions.js';
import QuantityDropdownSelector from '../components/QuantityDropdownSelector.js';

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		dispatchUpdatedCart: (newCart) => dispatch(updateCart(newCart))
	}
}

class UpdateCartQuantity extends Component {

	render() {

		const { id, currentQuantity, cartItems, dispatchUpdatedCart } = this.props;

		const updateQuantity = (event) => {
			
			const newCart = cartItems.map(

				(item) => {

					//If this item isn't the one that needs updating, then
					//just return it as-is
					if (item.id !== id) {
						return item;
					}

					//Once the item that needs updating is found, return it
					//with the updated quantity value
					return {
						id: item.id,
						quantity: Number(event.target.value)
					};

				}

			);

			dispatchUpdatedCart(newCart);
		}

		return (
			<QuantityDropdownSelector currentQuantity={currentQuantity} 
					changeQuantity={updateQuantity} />
		);
	}
}

export default connect(null, mapDispatchToProps)(UpdateCartQuantity);