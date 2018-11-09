import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestProduct } from '../../actions.js';
import AddToCartButton from '../AddToCartButton.js';
import '../../css/Product.css';
import { FRONT_END_ADDRESS, DEFAULT_CURRENCY } from '../../constants.js';
import nl2br from 'react-newline-to-break';

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
							<h4 className="slight-shadow text-center">${ product.price + ' ' + DEFAULT_CURRENCY }</h4>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6">

							<img className="product-img d-block mx-auto mb-3"
							src={FRONT_END_ADDRESS + '/images/product/' + product.img_url} alt={ product.name }></img>

							{/* Shown only on mobile-sized portrait screens */}
							<div className="d-sm-none">
								<AddToCartButton id = {product.id} />
							</div>

						</div>
						<div className="col-md-6">	
							<p className="mt-2">{ nl2br(product.description) }</p>

							{/* Shown only on screens larger than a mobile-sized portrait view */}
							<div className="d-none d-sm-block">
								<AddToCartButton id = {product.id} />
							</div>
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