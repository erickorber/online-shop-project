import React from 'react';
import { products } from '../../products.js';

const Cart = ({cartArray}) => {

	const cartProducts = [];

	for (let i = 0; i < cartArray.length; i++) {

		const checkId = (jsonProduct) => {
			return jsonProduct.id === cartArray[i][0];
		}

		cartProducts.push([products.find(checkId), cartArray[i][1]]);
	}

	const displayItemsInCart = (list) => {
		
		const tableRows = [];
		
		for (let i = 0; i < list.length; i++) {
			tableRows.push(
				<tr key={i}>
					<th scope="row">{list[i][0].name}</th>
					<td className="text-center">{list[i][1]}</td>
					<td className="text-center">${list[i][0].price.toFixed(2)}</td>
				</tr>
			);
		}

		return tableRows;
	}

	const displayTotalPrice = (list) => {

		let totalPrice = 0;

		for (let i = 0; i < list.length; i++) {
			totalPrice += (list[i][0].price * list[i][1]);
		}

		return totalPrice.toFixed(2);
	}

	return (
		<div className="container">
			<div className="row page-title-spacing">
				<div className="col-12">
					<h2 className="text-center slight-shadow">Your Cart</h2>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					{ (cartProducts.length !== 0) ? 
						
						(<table className="table table-bordered table-striped">
						  	<thead>
						    	<tr>
								    <th scope="col">Product</th>
								    <th scope="col" className="text-center">Quantity</th>
								    <th scope="col" className="text-center">Price</th>
						    	</tr>
						  	</thead>
						  	<tbody>
						  		{displayItemsInCart(cartProducts)}
						  		<tr>
						  			<th scope="row" colSpan="2">Total</th>
						  			<td className="text-center">${displayTotalPrice(cartProducts)}</td>
						  		</tr>
						  	</tbody>
						</table>)
						:
						(<p className="text-center">There doesn't seem to be anyhing in your cart right now. 
							Check out the shop if you'd like to order something special!</p>)

					}
				</div>
			</div>
			<div className="row my-2">
				<div className="col-8 offset-2">
					<button className="btn btn-primary btn-block" type="button" value="add cart">PayPal Placeholder</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;