import React from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ page, totalQuantity }) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link to={'/'}><button id="header-toggler" className="navbar-brand header-btn" type="button"></button></Link>
      
      {/* Shown only on mobile-sized screens */}
      <Link to={'/cart'}>
        <button className="d-lg-none cart-header-btn header-btn text-center align-middle" type="button">
          <span className="fa-layers fa-fw text-center align-middle">
            <FontAwesomeIcon id="cart-header-icon" className="text-center align-middle" icon={faShoppingCart} />
            { (totalQuantity > 0) &&
              <span className="fa-layers-counter">{totalQuantity}</span>
            }
          </span>
        </button>
      </Link>

      <button className="navbar-toggler header-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {isCurrentPageActive("Shop", page, "/shop")}
          </li>
          <li className="nav-item">
            {isCurrentPageActive("About", page, "/about")}
          </li>
          <li className="nav-item">
            {isCurrentPageActive("Contact", page, "/contact")}
          </li>
        </ul>
      </div>

    {/* Shown only on desktop-sized screens */}
      <Link to={'/cart'}>
        <button className="d-none d-lg-inline mr-4 cart-header-btn header-btn text-center align-middle" type="button">
          <span className="fa-layers fa-fw text-center align-middle">
            <FontAwesomeIcon id="cart-header-icon" className="text-center align-middle" icon={faShoppingCart} />
            { (totalQuantity > 0) &&
              <span className="fa-layers-counter">{totalQuantity}</span>
            }
          </span>
        </button>
      </Link>
    </nav>
  );
}

function isCurrentPageActive(linkText, propsPageValue, submitValue) {
  if (submitValue === propsPageValue) {
    return <Link to={submitValue}><button className="nav-link active px-3 mx-auto header-btn">{linkText}</button></Link>;
  }
  return <Link to={submitValue}><button className="nav-link px-3 mx-auto header-btn">{linkText}</button></Link>;
}

export default Header;
