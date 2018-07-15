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
import { Route, Switch } from 'react-router';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		pathname: state.router.location.pathname,
    cartItems: state.user.cartItems
	}
}

class App extends Component {

  getTotalCartQuantity(cartArray) {
      
    let totalQuantity = 0;

    cartArray.forEach((item, i) => {
      totalQuantity += item[1];
    });

    return totalQuantity;
  }

  render() {

  	const { pathname, cartItems, loadPage } = this.props;

    const totalQuantity = this.getTotalCartQuantity(cartItems);

    return (
      <div>
        <Header page = {pathname} click={loadPage} totalQuantity={totalQuantity} />
        <Switch>
          <Route exact path="/" render={() => (
            <Shop products = { products } />
            )}/>
          <Route exact path="/shop" render={() => (
            <Shop products = { products } />
          )}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/cart" render={() => (
            <Cart cartArray = { cartItems } />
          )}/>
          <Route exact path="/product/:id" component={Product}/>

        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
