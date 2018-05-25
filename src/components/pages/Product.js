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

					<div className="btn btn-block mb-4 mt-2">
						Buy Now Button
					</div>

				</div>
				<div className="col-md-6">	
					<p className="mt-2">Curabitur ullamcorper sem quam, lacinia faucibus ligula sodales 
					id. Nullam a eros in risus dictum efficitur. Nam porta, orci et porttitor sodales,
					 ante magna gravida ipsum, vitae dictum ipsum nisi porta quam. Nulla facilisi. Pellentesque 
					 a urna mi. Pellentesque et porta metus. Fusce molestie viverra nibh, ac ultrices metus 
					 pharetra id. Morbi feugiat libero nec massa efficitur, vel luctus tellus dignissim. Ut 
					 sit amet ligula vel nulla gravida aliquam nec eget velit. Donec molestie magna 
					 in lorem tincidunt egestas.</p>
				</div>
			</div>
		</div>
	);
}

export default Product;