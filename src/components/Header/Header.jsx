import React from 'react';
import CheckoutButton from 'components/CheckoutButton';
import CheckoutBanner from 'components/CheckoutBanner';
import Link from 'gatsby-link';
import logo from 'images/header-logo.svg';


const eventID = '47804001054';

const Header = ({ siteTitle }) => (
  <section id="header">
    <CheckoutBanner />
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
              <CheckoutButton id={eventID} />
            </nav>
          </header>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
