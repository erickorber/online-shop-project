import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import Header from '../components/Header.js';
import About from '../components/pages/About.js';
import Error404 from '../components/pages/Error404.js';
import Contact from '../components/pages/Contact.js';
import Shop from '../components/pages/Shop.js';
import Product from '../components/pages/Product.js';
import Cart from '../components/pages/Cart.js';
import { products } from '../products.js';
import { setPageToLoad } from '../actions.js';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		pageValue: state.navigation.pageValue,
    	productId: state.product.productId
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
	return {
		onLinkClick: (clickedLink) => dispatch(setPageToLoad(clickedLink.target.value)) 
	}
}

class App extends Component {

  getPageToLoad(page, id) {
    switch (page) {
      case 'About' :
        return <About />
      case 'Contact' :
        return <Contact />
      case 'Error404' :
        return <Error404 />
      case 'Product' : 
        return <Product id = {id} />
      case 'Shop' :
        return <Shop products = { products } />
      case 'Cart' :
      	return <Cart productIdArray = {[[1, 1], [3, 2], [2, 1]]} />
      default:
        return <Error404 />
    }
  }

  render() {

  	const { pageValue, onLinkClick, productId } = this.props;

    return (
      <div>
        <Header page = {pageValue} click = {onLinkClick} />
        {this.getPageToLoad(pageValue, productId)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
