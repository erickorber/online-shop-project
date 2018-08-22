import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../actions.js';
import '../css/AddToCartButton.css';
import QuantityDropdownSelector from '../components/QuantityDropdownSelector.js';

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

		const { id, dispatchUpdatedCart, cartItems } = this.props;
		let currentQuantity = 1;

		const changeQuantity = (event) => {
			currentQuantity = Number(event.target.value);

		}

		const buttonClick = (id, quantity, cartItems) => {

			let n = 0;

			const newCart = cartItems.map(

				(item, i) => {

					//If this item isn't the one that needs updating, then
					//just return it as-is.
					if (item[0] !== id) {
						n++;
						return item;
					}

					//Otherwise, increase the quantity accordingly.
					const newQuantity = quantity + item[1];
					return [item[0], newQuantity];

				}

			);

			

			if (n === newCart.length) {
				newCart.push([id, quantity]);				
			}

			dispatchUpdatedCart(newCart);
		}

		return (
			<div className="mb-3">
				
				<button className="btn btn-primary add-to-cart-button" type="button"
						onClick={() => buttonClick(id, currentQuantity, cartItems)}>Add To Cart</button>

				<QuantityDropdownSelector currentQuantity={currentQuantity} 
					changeQuantity={changeQuantity} addToCartCSS={true} />

			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);