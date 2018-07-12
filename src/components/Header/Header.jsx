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
          <nav className="header-nav">
            <Link to="/FAQ">
              FAQ
            </Link>
            <Link to="/" className="button">
              Book Now!
            </Link>
          </nav>
        </header>
      </div>
    </div>
  </div>
);

export default Header;
