import React from 'react';
import '../css/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({urlName, productName, price, img}) => {

	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3">			
			<Link to={'/product/' + urlName} className="card mx-auto card-width product-link d-flex flex-wrap">
				<div className="">
						<img className="card-img-top rounded mx-auto my-2" src={'http://localhost:3000/images/product/' + img} alt="Product"></img>
				</div>
				
				<div className="card-body mx-auto">
					<p className="text-center product-card-text mb-1 font-weight-bold">{productName}</p>
					<p className="text-center product-card-text">${price} CAD</p>
				</div>
			</Link>	
		</div>
	);
	
}

export default ProductCard;