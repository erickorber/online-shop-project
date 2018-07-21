import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCartList } from '../../actions.js';
import UpdateCartQuantity from '../../containers/UpdateCartQuantity.js';
import DeleteButton from '../../containers/DeleteButton.js';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		cartListFromServer: state.cartList.cartList,
		error: state.cartList.error,
		isPending: state.cartList.isPending
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		onCartListRequest: (cartIds) => dispatch(requestCartList(cartIds))
	}
}

class Cart extends Component {

	componentDidMount() {
		if (this.props.cartArray.length > 0) {
			this.props.onCartListRequest(this.props.cartArray);			
		}
	}

	displayItemsInCart(list,  cart) {
		
		const tableRows = [];
		
		for (let i = 0; i < list.length; i++) {
			tableRows.push(
				<tr key={list[i][0].id}>
					<th scope="row">{list[i][0].name}</th>
					<td className="text-center">
						<UpdateCartQuantity id={list[i][0].id} 
							currentQuantity={list[i][1]} cartItems={cart} />
						<DeleteButton id={list[i][0].id} cartItems={cart} />
					</td>
					<td className="text-center">${list[i][0].price}</td>
				</tr>
			);
		}

		return tableRows;
	}

	displayTotalPrice(list) {

		let totalPrice = 0;

		for (let i = 0; i < list.length; i++) {
			totalPrice += (list[i][0].price * list[i][1]);
		}

		return totalPrice;
	}

	render() {

		const { cartArray, cartListFromServer, error, isPending } = this.props;

		const cartProducts = [];

		if (cartListFromServer !== undefined
			&& cartListFromServer.length > 0) {

			for (let i = 0; i < cartArray.length; i++) {
				const quantity = cartArray[i][1];
				cartProducts.push([cartListFromServer[i], quantity]);
			}
		}

		let pageContent;

		if (error !== '') {
			
			pageContent =
				(<div className="row page-title-spacing">
					<div className="col-12">
						<h3 className="slight-shadow text-center">Sorry, there was an error 
						in retrieving your cart items.</h3>
					</div>
				</div>);

		} else if (cartArray.length === 0) {
			
			pageContent =
				(<div>
					<div className="row page-title-spacing">
						<div className="col-12">
							<h2 className="text-center slight-shadow">Your Cart</h2>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<p className="text-center">There doesn't seem to be anyhing 
								in your cart right now. Check out the shop if you'd like 
								to order something special!</p>
						</div>
					</div>
				</div>);

		} else if (cartArray.length > 0) {
			
			if (isPending) {
				pageContent = <div></div>;
			} else {
				pageContent =
					(<div>
						<div className="row page-title-spacing">
							<div className="col-12">
								<h2 className="text-center slight-shadow">Your Cart</h2>
							</div>
						</div>

						<div className="row">
							<table className="table table-bordered table-striped">
							  	<thead>
							    	<tr>
									    <th scope="col">Product</th>
									    <th scope="col" className="text-center">Quantity</th>
									    <th scope="col" className="text-center">Price</th>
							    	</tr>
							  	</thead>
							  	<tbody>
							  		{this.displayItemsInCart(cartProducts, cartArray)}
							  		<tr>
							  			<th scope="row" colSpan="2">Total</th>
							  			<td className="text-center">${this.displayTotalPrice(cartProducts)}</td>
							  		</tr>
							  	</tbody>
							</table>
						</div>

						<div className="row my-2">
							<div className="col-8 offset-2">
								<button className="btn btn-primary btn-block" type="button" value="add cart">PayPal Placeholder</button>
							</div>
						</div>
					</div>);
			}
		}

		return (
			<div className="container">
				{pageContent}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);