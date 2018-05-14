import React from 'react';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Shop Logo Image</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {isCurrentPageActive("Product", props.page)}
          </li>
          <li className="nav-item">
            {isCurrentPageActive("About", props.page)}
          </li>
          <li className="nav-item">
            {isCurrentPageActive("Contact", props.page)}
          </li>
        </ul>
      </div>
    </nav>
  );
}

function isCurrentPageActive(linkText, propsPageValue) {
  if (linkText === propsPageValue) {
    return <a className="nav-link active" href="#">{linkText}</a>;
  }
  return <a className="nav-link" href="#">{linkText}</a>;
}

export default Header;
