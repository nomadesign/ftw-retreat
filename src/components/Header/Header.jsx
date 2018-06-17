import React from 'react';
import Link from 'gatsby-link';
import logo from 'images/header-logo.svg';

const Header = ({ siteTitle }) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <header className="header">
          <Link to="/">
            <img src={logo} alt={siteTitle} />{' '}
          </Link>
          <h3 className="body-2 hidden-sm">Oct 4-8, 2018</h3>
        </header>
      </div>
    </div>
  </div>
);

export default Header;
