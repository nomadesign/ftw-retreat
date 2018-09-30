import React from 'react';
import Link from 'gatsby-link';
import logo from 'images/header-logo.svg';

const Header = ({ siteTitle }) => (
  <section id="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <header className="header">
            <Link to="/">
              <img src={logo} alt={siteTitle} />{' '}
            </Link>
            <nav className="header-nav">
              <Link to="/faq" className="header-nav-faq">
                FAQ
              </Link>
              <a
                href="https://medium.com/@ftwretreat"
                className="header-nav-faq"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </nav>
          </header>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
