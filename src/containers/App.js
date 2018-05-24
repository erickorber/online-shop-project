import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import Header from '../components/Header.js';
import About from '../components/About.js'
import Error404 from '../components/Error404.js'
import Contact from '../components/Contact.js'
import ProductList from '../components/ProductList.js'
import Product from '../components/Product.js'

import { setPageToLoad, setProductToLoad } from '../actions.js';

const mapStateToProps = (state) => {
	return {
		pageValue: state.pageValue,
    productId: state.productId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLinkClick: (clickedLink) => dispatch(setPageToLoad(clickedLink.target.value)),
    onProductClick: (id) => dispatch(setProductToLoad(id.target.value))  
	}
}

class App extends Component {

  getPageToLoad(page, productClick, id) {
    switch (page) {
      case 'About' :
        return <About />
      case 'Contact' :
        return <Contact />
      case 'Error404' :
        return <Error404 />
      case 'Product' : 
        return <Product productId = {id} />
      case 'ProductList' :
        return <ProductList productClickFunction = {productClick} />
      default:
        return <Error404 />
    }
  }

  render() {

  	const { pageValue, onLinkClick, productId, onProductClick } = this.props;

    return (
      <div>
        <Header page = {pageValue} click = {onLinkClick} />
        {this.getPageToLoad(pageValue, onProductClick, productId)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
