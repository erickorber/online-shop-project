import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCartServerList } from '../../actions.js';
import UpdateCartQuantity from '../UpdateCartQuantity.js';
import DeleteButton from '../DeleteButton.js';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		serverList: state.cartServerList.serverList,
		error: state.cartServerList.error,
		isPending: state.cartServerList.isPending,
	    cart2DArrayProp: state.user.cartItems
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		onServerListRequest: (cartIds) => dispatch(requestCartServerList(cartIds))
	}
}

class Cart extends Component {

	componentDidMount() {
		if (this.props.cart2DArrayProp.length > 0) {
			this.props.onServerListRequest(this.props.cart2DArrayProp);
		}	
	}

	displayItemsInCart(list, cart) {
		const tableRows = [];
		
		for (let i = 0; i < list.length; i++) {
			tableRows.push(
				<tr key={list[i][0].id}>
					<th scope="row">{list[i][0].name}</th>
					<td className="text-center">
						<UpdateCartQuantity id={cart[i][0]} 
							currentQuantity={cart[i][1]} cartItems={cart} />
						<DeleteButton id={cart[i][0]} cartItems={cart} />
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

		const { cart2DArrayProp, serverList, error, isPending } = this.props;

		const cart2DArrayForHTMLTable = [];

		if (serverList !== undefined
			&& serverList.length > 0) {

			for (let i = 0; i < cart2DArrayProp.length; i++) {

				const checkId = (serverProduct) => {
					return serverProduct.id === cart2DArrayProp[i][0];
				}

				cart2DArrayForHTMLTable.push([serverList.find(checkId), cart2DArrayProp[i][1]]);
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

		} else if (isPending) {

			pageContent = (<div></div>);

		} else if (cart2DArrayProp.length === 0) {
			
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

		} else if (cart2DArrayForHTMLTable.length > 0) {
			
			if (cart2DArrayForHTMLTable.length <= serverList.length) {

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
							  		{this.displayItemsInCart(cart2DArrayForHTMLTable, cart2DArrayProp)}
							  		<tr>
							  			<th scope="row" colSpan="2">Total</th>
							  			<td className="text-center">${this.displayTotalPrice(cart2DArrayForHTMLTable)}</td>
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

			} else {
				pageContent = (<div></div>);
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