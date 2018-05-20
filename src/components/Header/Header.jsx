import React from 'react';
import logo from 'images/header-logo.svg';

const Header = ({ siteTitle }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <header className="header">
          <img src={logo} alt={siteTitle} />
          <h3 className="body-2">Coming Fall 2018</h3>
        </header>
      </div>
    </div>
  </div>
);

export default Header;
