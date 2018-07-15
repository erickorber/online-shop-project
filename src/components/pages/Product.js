import React from 'react';
import { products } from '../../products.js';
import AddToCartButton from '../../containers/AddToCartButton.js';

const Product = (props) => {

	const checkId = (product) => {
		return product.id === Number(props.match.params.id);
	}

	const productToDisplay = products.find(checkId);

	return (
		<div className="container">
			<div className="row page-title-spacing">
				<div className="col-12">
					<h3 className="slight-shadow text-center">{ productToDisplay.name }</h3>
				</div>
				<div className="col-12">
					<h4 className="slight-shadow text-center">${ productToDisplay.price.toFixed(2) } CAD</h4>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">

					<img className="card-img-top rounded mb-3"
					src="" alt={ productToDisplay.name }></img>

					<AddToCartButton id = {productToDisplay.id} />

				</div>
				<div className="col-md-6">	
					<p className="mt-2">{ productToDisplay.description }</p>
				</div>
			</div>
		</div>
	);
}

export default Product;