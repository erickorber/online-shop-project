import React from 'react';
import '../css/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({id, productCardClick, productName, price}) => {

	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3">			
			<Link to={'/product/' + id} className="card mx-auto card-width mb-4 product-link">
				<img className="card-img-top" src="" alt="Product"></img>			
				
				<div className="card-body mx-auto">
					<p className="card-title text-center font-weight-bold">{productName}</p>
					<p className="card-text text-center">${price.toFixed(2)} CAD</p>
				</div>
			</Link>	
		</div>
	);
	
}

export default ProductCard;