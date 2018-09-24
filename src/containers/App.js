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
import Return from '../containers/pages/Return.js';
import { Route, Switch } from 'react-router';
import { getCookie } from 'redux-cookie';
import { updateCart } from '../actions.js';

//This is what the state currently is
const mapStateToProps = (state) => {
	return {
		pathname: state.router.location.pathname,
    cart: state.user.cartItems
	}
}

//This is for when you'd like to update the state
const mapDispatchToProps = (dispatch) => {
  return {
    loadCartFromCookie: () => dispatch(getCookie('cartCookie')),
    dispatchUpdatedCart: (newCart) => dispatch(updateCart(newCart))
  }
}

class App extends Component {

  getTotalCartQuantity(cartArray) {

    let totalQuantity = 0;

    cartArray.forEach((item) => {
      totalQuantity += item.quantity;
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

  	const { pathname, cart, loadCartFromCookie, dispatchUpdatedCart } = this.props;

    let cartIdQuantityPair;  

    //If the cart has items in it, then either the data from the cookie has already
    //been loaded, or there were no cookies saved to begin with. In any case, there is
    //no need to deal with cookies at this point. But if the cart is empty, check to see
    //if a cookie needs to be (or even can be) loaded to populate the cart with
    //previously added products.
    if (cart.length === 0) {
      
      //If cookies are enabled and a saved cookie exists (meaning that upon calling it,
      //data was actually returned, instead of undefined), the load the data from that
      //cookie. Assuming the cookie data does not indicate an empty cart (which might
      //occur if the user adds items and then later manually deletes them all), then
      //update the cart state using Redux to match the saved cookie data. 
      if (navigator.cookieEnabled && loadCartFromCookie() !== undefined) {

        cartIdQuantityPair = this.makeDeepCopy(JSON.parse(loadCartFromCookie()));

        //If the saved cookie data does not indicate an empty cart,
        //then update the cart state.
        if (cartIdQuantityPair.length > 0) {
          dispatchUpdatedCart(cartIdQuantityPair);          
        }

      } else {
        cartIdQuantityPair = this.makeDeepCopy(cart);
      }
    } else {
      cartIdQuantityPair = this.makeDeepCopy(cart);
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
