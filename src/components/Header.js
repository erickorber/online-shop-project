import React from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ page, totalQuantity }) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link to={'/'} className="navbar-brand logo-link"></Link>
      
      {/* Shown only on mobile-sized screens */}
      <Link to={'/cart'} className="d-lg-none header-link">
          <span className="fa-layers fa-fw mt-2">
            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            { (totalQuantity > 0) &&
              <span className="fa-layers-counter">{totalQuantity}</span>
            }
          </span>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {isCurrentPageActive("Shop", page, "/")}
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
      <Link to={'/cart'} className="d-none d-lg-inline mr-5 header-link">
        <span className="fa-layers fa-fw text-center">
          <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
          { (totalQuantity > 0) &&
            <span className="fa-layers-counter">{totalQuantity}</span>
          }
        </span>
      </Link>
    </nav>
  );
}

function isCurrentPageActive(linkText, propsPageValue, submitValue) {
  if (submitValue === propsPageValue) {
    return <Link to={submitValue} className="nav-link header-link text-center active">{linkText}</Link>;
  }
  return <Link to={submitValue} className="nav-link header-link text-center">{linkText}</Link>;
}

export default Header;
