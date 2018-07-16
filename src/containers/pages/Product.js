import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestProduct } from '../../actions.js';
import AddToCartButton from '../AddToCartButton.js';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		product: state.product.product,
		error: state.product.error,
		isPending: state.product.isPending
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		onProductRequest: (urlName) => dispatch(requestProduct(urlName))
	}
}

class Product extends Component {

	componentDidMount() {
		this.props.onProductRequest(this.props.match.params.urlName);
	}

	render() {

		const { product, error } = this.props;

		let pageContent;

		if (error !==  '') {
			pageContent = (
				<div className="container">
					<div className="row page-title-spacing">
						<div className="col-12">
							<h3 className="slight-shadow text-center">Sorry, there was an error in retrieving this content.</h3>
						</div>
					</div>
				</div>
			);
		} else if (product === undefined) {
			pageContent = <div className="container"></div>;
		} else if (product === "product not found") {
			pageContent = (
				<div className="container">
					<div className="row page-title-spacing">
						<div className="col-12">
							<h3 className="slight-shadow text-center">Sorry, the product you're looking for couldn't be found.</h3>
						</div>
					</div>
				</div>
			);
		} else {
			pageContent = (
				<div className="container">
					<div className="row page-title-spacing">
						<div className="col-12">
							<h3 className="slight-shadow text-center">{ product.name }</h3>
						</div>
						<div className="col-12">
							<h4 className="slight-shadow text-center">${ product.price.toFixed(2) } CAD</h4>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6">

							<img className="card-img-top rounded mb-3"
							src="" alt={ product.name }></img>

							<AddToCartButton id = {product.id} />

						</div>
						<div className="col-md-6">	
							<p className="mt-2">{ product.description }</p>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				{pageContent}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);