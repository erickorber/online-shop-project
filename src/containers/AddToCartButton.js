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

			const newCart = cartItems;

			let n = 0;

			//If the item being added to cart already is in the cart,
			//then just update the quantity
			for (var i = 0; i < newCart.length; i++) {
				if(newCart[i][0] === id) {
					newCart[i][1] += quantity;
					break;
				} else {
					n++;
				}
			}

			if (n === newCart.length) {
				newCart.push([id, quantity]);				
			}

			dispatchUpdatedCart(newCart);
		}

		return (
			<div>
				
				<button className="btn btn-primary add-to-cart-button" type="button"
						onClick={() => buttonClick(id, currentQuantity, cartItems)}>Add To Cart</button>

				<QuantityDropdownSelector currentQuantity={currentQuantity} 
					changeQuantity={changeQuantity} />

			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);