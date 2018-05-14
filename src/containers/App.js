import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from '../components/Header.js';

class App extends Component {

  constructor() {
  	super();
  	this.state = {
  		pageValue : 'Product'
  	}
  }

  onLinkClick = (clickedLink) => {
	this.setState({ pageValue : clickedLink.target.value });
	console.log(this.state.pageValue);
  }

  render() {
    return (
      <div>
        <Header page = {this.state.pageValue} click = {this.onLinkClick} />
      </div>
    );
  }
}

export default App;
