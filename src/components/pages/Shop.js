import React from 'react';
import ProductCard from '../../components/ProductCard.js';

const Shop = ({products}) => {

	const productCardList = products.map((product, i) => {
		return (
			<ProductCard 
				key = { i }
				urlName = { products[i].urlName } 
				productName = { products[i].name } 
				price = { products[i].price } 
			/>
		);
	})

	return (
		<div className="container">
			<div className="row page-title-spacing">
				<div className="col-12">
					<h2 className="text-center slight-shadow">Featured Products</h2>
				</div>
			</div>

			<div className="row">	
				{productCardList}	
			</div>
		</div>
	);
}

export default Shop;