import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCartServerList } from '../../actions.js';
import UpdateCartQuantity from '../UpdateCartQuantity.js';
import DeleteButton from '../DeleteButton.js';
import '../../css/Cart.css';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		serverList: state.cartServerList.serverList,
		error: state.cartServerList.error,
		isPending: state.cartServerList.isPending,
	    cart: state.user.cartItems
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		onServerListRequest: (cart) => dispatch(requestCartServerList(cart))
	}
}

class Cart extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	readyToProceed: false
	    };

   	    this.handleCheckout = this.handleCheckout.bind(this);
	}

	componentDidMount() {
		this.checkIfReadyToProceed();
	}

	componentDidUpdate(prevProps) {
		this.checkIfReadyToProceed();
	}

	checkIfReadyToProceed() {
		
		//This condition prevents an endless loop
		if (!this.state.readyToProceed) {

			//Variable to check if the serverList contains all the items in the cart.
			//It is allowed to contain more items than necessary, just not less.
			const requiredProductsPresent = 
				this.areRequiredProductsPresent(this.props.cart, this.props.serverList);
			
			//Just make sure we aren't already making a request to the server
			if (!this.props.isPending) {

				//If the serverList contains all items currently in the cart,
				//then we may proceed. If not, then we must send a request to
				//our server.
				if (requiredProductsPresent) {
					this.setState({
						readyToProceed: true
					});
				} else {
					this.props.onServerListRequest(this.props.cart);
				}
			}
		}
	}

	handleCheckout() {

	    postToServer(this.props.cart, "http://localhost:3000/checkout");

	    async function postToServer(items, serverAddress) {

			try{

				const response = await fetch(serverAddress, {
					method: 'POST',
					mode: 'cors',
					body: JSON.stringify(items),
					headers: {
						'Content-Type': 'application/json'
					}
				});

				const redirectURL = await response.json();

				//Redirect the user to PayPal for checkout
				window.location = redirectURL;

			} catch (error) {
				console.log(error);
			}
		}
	}

	displayItemsInCart(cartForDisplaying, cart) {
		
		const tableRows = [];
		
		cartForDisplaying.forEach((item) => {

			tableRows.push(
				<tr key={item.id}>
					<th scope="row">
						<img className="w-100 cart-img mx-auto my-1" src={'http://localhost:3000/images/product/' + item.imgURL} 
						alt={item.name}></img>
						<p className="cart-name">{item.name}</p>
					</th>
					<td className="text-center">
						<UpdateCartQuantity id={item.id} 
							currentQuantity={item.quantity} cartItems={cart} />
						<DeleteButton id={item.id} cartItems={cart} />
					</td>
					<td className="text-center">${item.price}</td>
				</tr>
			);

		});

		return tableRows;
	}

	displayTotalPrice(cartForDisplaying) {

		let totalPrice = 0;

		cartForDisplaying.forEach((cartItem) => {
			totalPrice += (cartItem.price * cartItem.quantity);
		});

		return totalPrice.toFixed(2);
	}

	areRequiredProductsPresent(cart, serverList) {

		if (cart.length === 0) {
			return true;
		}

		if (cart.length > serverList.length) {
			return false;
		}

		cart.forEach((cartItem) => {

			const checkId = (productFromServer) => {
				return productFromServer.id === cartItem.id;
			}

			const correctProduct = serverList.find(checkId);

			if (correctProduct === undefined) {
				return false;
			}

		});

		return true;
	}

	render() {

		const { cart, serverList, error, isPending } = this.props;

		//This is the array that will be used to display the cart details on the page
		const cartForDisplaying = [];

		//Doing some necessary checking to avoid errors, along with unnecessary extra
		//requests to the server
		if (this.state.readyToProceed) {

			//Just checking to make sure the product info needed from the server has 
			//already been successfully downloaded.
			if (serverList !== undefined
				&& serverList.length > 0) {

				//Now that the product info from the server is ready to use, cycle through
				//each item in the cart array stored as a redux state
				cart.forEach((cartItem) => {

					//To find the correct match (see comments below), we compare the id
					//of the object downloaded from the server to the id of our current
					//cart array item, and return true if they are identical. If they are
					//not identical, the next item in the array of downloaded objects
					//will be checked until a positive match is found.
					const checkId = (productFromServer) => {
						return productFromServer.id === cartItem.id;
					}

					//We want to single out, from the array of objects that
					//were downloaded from our back-end server, the one object
					//that matches up with our current item in the cart array
					const correctProduct = serverList.find(checkId);

					cartForDisplaying.push({
						id: correctProduct.id,
						name: correctProduct.name,
						imgURL: correctProduct.img_url,
						price: correctProduct.price,
						quantity: cartItem.quantity
					});

				});
			}	
		}

		let pageContent;

		//Handle errors if they exist, by indicating
		//to the user that something has gone wrong.
		if (error !== '') {
			
			pageContent =
				(<div className="row page-title-spacing">
					<div className="col-12">
						<h3 className="slight-shadow text-center">Sorry, there was an error 
						in retrieving your cart items.</h3>
					</div>
				</div>);

		} else {

			//If no errors exist, but the required content is still pending from the server,
			//or it isn't ready yet locally for some reason, then show nothing
			if (isPending || !this.state.readyToProceed) {

				pageContent = (<div></div>);

			} else {

				//If no errors, and the content is ready, but the cart is empty, then
				//indicate that to the user
				if (cart.length === 0) {
			
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

				//Otherwise, with no errors, the content ready, and the cart containing
				//at LEAST one item, then display the cart contents.
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
								  		{this.displayItemsInCart(cartForDisplaying, cart)}
								  		<tr>
								  			<th scope="row" colSpan="2">Total</th>
								  			<td className="text-center">${this.displayTotalPrice(cartForDisplaying)}</td>
								  		</tr>
								  	</tbody>
								</table>
							</div>

							<div className="row my-2">
								<div className="col-8 offset-2">
									<button className="btn btn-primary btn-block" type="button" onClick={this.handleCheckout}>Pay with PayPal</button>
								</div>
							</div>
						</div>);

				}

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