import React from 'react';

const Product = (props) => {
	return (
		<div className="container">
			<div className="row page-title-spacing">
				<div className="col-12">
					<h3 className="slight-shadow text-center">Product Name</h3>
				</div>
				<div className="col-12">
					<h4 className="slight-shadow text-center">$XX.xx CAD</h4>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">

					<img className="card-img-top rounded mb-3"
					src="" alt="product-name"></img>

					<button className="btn btn-primary btn-block mb-3 mt-2 py-2" type="button" value="add cart">Add To Cart</button>

				</div>
				<div className="col-md-6">	
					<p className="mt-2">Product Description</p>
				</div>
			</div>
		</div>
	);
}

export default Product;