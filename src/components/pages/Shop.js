import React from 'react';

const Shop = (props) => {
	return (
		<div className="container">
			<div className="row page-title-spacing">
				<div className="col-12">
					<h2 className="text-center slight-shadow">Featured Products</h2>
				</div>
			</div>

			<div className="row">		
				<div className="col-12 col-sm-6 col-md-4 col-lg-3">			
					<button className="card mx-2 mb-4" type="button">
		
						<img className="card-img-top" src="" alt="Product"></img>			
						
						<div className="card-body">
							<h5 className="card-title text-center">Product Name</h5>
							<p className="card-text text-center">$X.xx</p>
						</div>
					
					</button>
				</div>
			</div>
		</div>
	);
}

export default Shop;