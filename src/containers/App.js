import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import Header from '../components/Header.js';
import About from '../components/pages/About.js';
import Error404 from '../components/pages/Error404.js';
import Contact from '../components/pages/Contact.js';
import Shop from './pages/Shop.js';
import Product from './pages/Product.js';
import Cart from '../containers/pages/Cart.js';
import AdminLogin from '../components/pages/AdminLogin.js';
import Return from '../components/pages/Return.js';
import { Route, Switch } from 'react-router';
import { getCookie } from 'redux-cookie';
import { updateCart } from '../actions.js';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		pathname: state.router.location.pathname,
    cartReduxState: state.user.cartItems
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
  return {
    loadCartFromCookie: () => dispatch(getCookie('cart2DArrayCookie')),
    dispatchUpdatedCart: (newCart) => dispatch(updateCart(newCart))
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

  makeDeepCopy(arrayToCopy) {
    const newArray = arrayToCopy.map(
      (item, i) => {
        return item;
      }
    );

    return newArray;
  }

  render() {

  	const { pathname, cartReduxState, loadCartFromCookie, dispatchUpdatedCart } = this.props;

    let cartIdQuantityPair;  

    //Only check to see if cookies are required if the redux state is empty
    if (cartReduxState.length === 0) {
      //If cookies are enabled
      if (navigator.cookieEnabled && loadCartFromCookie() !== undefined) {

        cartIdQuantityPair = this.makeDeepCopy(JSON.parse(loadCartFromCookie()));

        if (cartIdQuantityPair.length > 0) {
          dispatchUpdatedCart(cartIdQuantityPair);          
        }
      } else {
        cartIdQuantityPair = this.makeDeepCopy(cartReduxState);
      }
    } else {
      cartIdQuantityPair = this.makeDeepCopy(cartReduxState);
    }

    const totalQuantity = this.getTotalCartQuantity(cartIdQuantityPair);

    return (
      <div>
        <Header page = {pathname} totalQuantity={totalQuantity} />
        <Switch>
          <Route exact path="/" component={Shop}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/product/:urlName" component={Product}/>
          <Route exact path="/admin" component={AdminLogin}/>
          <Route exact path="/success" component={Return}/>
          <Route path="*" component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
