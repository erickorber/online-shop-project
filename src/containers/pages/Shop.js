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

		const { productList, error } = this.props;

		let pageContent;
		let productCardList;

		if (error !==  '') {
			pageContent = (
					<div className="row page-title-spacing">
						<div className="col-12">
							<h3 className="slight-shadow text-center">Sorry, there was an error in retrieving this content.</h3>
						</div>
					</div>
			);
		} else if (productList === undefined || productList.length === 0) {
			pageContent = <div></div>;
		} else {

			productCardList = productList.map((product, i) => {
				return (
					<ProductCard 
						key = { i }
						urlName = { productList[i].url_name } 
						productName = { productList[i].name } 
						price = { productList[i].price } 
					/>
				);
			});

			pageContent = (
				<div>
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

		return (
			<div className="container">
				{pageContent}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);