import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js';
import '../css/App.css';

import { setPageToLoadFromHeaderLink } from '../actions.js';

const mapStateToProps = (state) => {
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
