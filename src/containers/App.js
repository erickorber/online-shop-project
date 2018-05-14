import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import Header from '../components/Header.js';

import { setPageToLoadFromHeaderLink } from '../actions.js';

const mapStateToProps = state => {
	return {
		pageValue: state.pageValue
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onHeaderLinkClick: (clickedLink) => dispatch(setPageToLoadFromHeaderLink(clickedLink.target.value)) 
	}
}

class App extends Component {

  constructor() {
  	super();
  	this.state = {}
  }

  render() {

  	const { pageValue, onHeaderLinkClick } = this.props;

    return (
      <div>
        <Header page = {pageValue} click = {onHeaderLinkClick} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
