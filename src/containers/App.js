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

  	const { pathname, cartItems } = this.props;

    const totalQuantity = this.getTotalCartQuantity(cartItems);

    return (
      <div>
        <Header page = {pathname} totalQuantity={totalQuantity} />
        <Switch>
          <Route exact path="/" component={Shop}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/cart" render={() => (
            <Cart cartArray = { cartItems } />
          )}/>
          <Route exact path="/product/:urlName" component={Product}/>
          <Route path="*" component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
