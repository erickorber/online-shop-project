import React from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = ({ page, click, totalQuantity }) => {

  const onLinkClick = (pageToLoad) => {
    click(pageToLoad);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <button id="header-toggler" className="navbar-brand header-btn" type="button" onClick={() => onLinkClick("Shop")}></button>
      
      <button className=" cart-header-btn header-btn text-center align-middle" type="button" onClick={() => onLinkClick("Cart")}>
        <span className="fa-layers fa-fw text-center align-middle">
          <FontAwesomeIcon id="cart-header-icon" className="text-center align-middle" icon={faShoppingCart} />
          <span className="fa-layers-counter">{totalQuantity}</span>
        </span>
      </button>

      <button className="navbar-toggler header-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {isCurrentPageActive("Shop", page, onLinkClick)}
          </li>
          <li className="nav-item">
            {isCurrentPageActive("About", page, onLinkClick)}
          </li>
          <li className="nav-item">
            {isCurrentPageActive("Contact", page, onLinkClick)}
          </li>
        </ul>
      </div>
    </nav>
  );
}

function isCurrentPageActive(linkText, propsPageValue, clickFunction, submitValue = linkText) {
  if (submitValue === propsPageValue) {
    return <button className="nav-link active px-3 mx-auto header-btn" onClick={() => clickFunction(submitValue)}>{linkText}</button>;
  }
  return <button className="nav-link px-3 mx-auto header-btn" onClick={() => clickFunction(submitValue)}>{linkText}</button>;
}

export default Header;
