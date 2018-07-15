import React, { Component } from 'react';
import '../css/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({id, productCardClick, productName, price}) => {

	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3">			
			<Link to={'/product/' + id}>
				<button className="card mb-4 mx-auto" type="button">
					<img className="card-img-top" src="" alt="Product"></img>			
					
					<div className="card-body card-width">
						<p className="card-title text-center font-weight-bold">{productName}</p>
						<p className="card-text text-center">${price.toFixed(2)} CAD</p>
					</div>
				</button>
			</Link>	
		</div>
	);
	
}

export default ProductCard;