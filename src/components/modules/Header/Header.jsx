import React from 'react';
import Link from 'gatsby-link';
import logo from 'images/header-logo.svg';
import iconChevronDown from 'images/icon-chevron-down.svg';

const Header = ({ siteTitle }) => (
  <section id="header">
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
            </nav>
          </header>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
