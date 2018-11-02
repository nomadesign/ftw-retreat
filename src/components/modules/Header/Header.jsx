import React from 'react';
import Link from 'gatsby-link';
import logo from 'images/header-logo.svg';
import iconChevronDown from 'images/icon-chevron-down.svg';

const Header = ({ siteTitle }) => (
  <section id="header">
    <Link to="/book" className="checkout-banner">
      <div className="subhead-1">
        Registration for Feb 7-11, 2019 FTWRetreat in Eleuthera, the Bahamas is open. <u>Click to reserve your spot</u>.
      </div>
    </Link>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <header className="header">
            <Link to="/">
              <img src={logo} alt={siteTitle} className="header-logo" />{' '}
            </Link>
            <nav className="header-nav">
              <span className="header-nav-link">
                Past Retreats
                <img src={iconChevronDown} />
                <div className="header-sub-menu">
                  <Link to="/retreat/fall-2018">
                    Fall 2018 in Québec
                  </Link>
                </div>
              </span>
              <Link to="/faq" className="header-nav-link">
                FAQ
              </Link>
              <a
                href="https://medium.com/@ftwretreat"
                className="header-nav-link"
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
