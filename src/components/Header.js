import React from 'react';
import '../css/Header.css';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <button className="navbar-brand mr-5" type="button" value="ProductList" onClick={props.click}></button>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            {isCurrentPageActive("ProductList", props.page, props.click)}
          </li>
          <li className="nav-item">
            {isCurrentPageActive("About", props.page, props.click)}
          </li>
          <li className="nav-item">
            {isCurrentPageActive("Contact", props.page, props.click)}
          </li>
        </ul>
      </div>
    </nav>
  );
}

function isCurrentPageActive(linkText, propsPageValue, clickFunction) {
  if (linkText === propsPageValue) {
    return <button className="nav-link active px-3 mx-auto" value={linkText} onClick={clickFunction}>{linkText}</button>;
  }
  return <button className="nav-link px-3 mx-auto" value={linkText} onClick={clickFunction}>{linkText}</button>;
}

export default Header;
