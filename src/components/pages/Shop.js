import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestProductList } from '../../actions.js';
import ProductCard from '../../components/ProductCard.js';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		productList: state.productList.productList,
		error: state.productList.error,
		isPending: state.productList.isPending
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		onProductListRequest: () => dispatch(requestProductList())
	}
}

class Shop extends Component {

	componentDidMount() {
		this.props.onProductListRequest();
	}

	render() {

		const { productList } = this.props;

		const productCardList = productList.map((product, i) => {
			return (
				<ProductCard 
					key = { i }
					urlName = { productList[i].urlName } 
					productName = { productList[i].name } 
					price = { productList[i].price } 
				/>
			);
		});

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
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);