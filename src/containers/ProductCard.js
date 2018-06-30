import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProductToLoad } from '../actions.js';

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		productCardClick: (id) => dispatch(setProductToLoad(id))
	}
}

class ProductCard extends Component {

	render() {

		const { id, productCardClick, productName, price } = this.props;

		return (
			<div className="col-12 col-sm-6 col-md-4 col-lg-3">			
				<button className="card mx-2 mb-4" type="button" onClick={() => productCardClick(id)}>
					<img className="card-img-top" src="" alt="Product"></img>			
					
					<div className="card-body">
						<h5 className="card-title text-center">{productName}</h5>
						<p className="card-text text-center">${price.toFixed(2)} CAD</p>
					</div>
				</button>		
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(ProductCard);