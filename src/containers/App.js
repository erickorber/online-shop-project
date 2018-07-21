import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import Header from '../components/Header.js';
import About from '../components/pages/About.js';
import Error404 from '../components/pages/Error404.js';
import Contact from '../components/pages/Contact.js';
import Shop from './pages/Shop.js';
import Product from './pages/Product.js';
import Cart from '../components/pages/Cart.js';
import AdminLogin from '../components/pages/AdminLogin.js';
import { Route, Switch } from 'react-router';
import { getCookie } from 'redux-cookie';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		pathname: state.router.location.pathname,
    cartItems: state.user.cartItems
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
  return {
    loadCartFromCookie: () => dispatch(getCookie('cartItems'))
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

  	const { pathname, cartItems, loadCartFromCookie } = this.props;

    let cartItemsToUse = cartItems;

    if (navigator.cookieEnabled && loadCartFromCookie() !== undefined) {
      cartItemsToUse = JSON.parse(loadCartFromCookie());
    }

    const totalQuantity = this.getTotalCartQuantity(cartItemsToUse);

    return (
      <div>
        <Header page = {pathname} totalQuantity={totalQuantity} />
        <Switch>
          <Route exact path="/" component={Shop}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/cart" render={() => (
            <Cart cartArray = { cartItemsToUse } />
          )}/>
          <Route exact path="/product/:urlName" component={Product}/>
          <Route exact path="/admin" component={AdminLogin}/>
          <Route path="*" component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
