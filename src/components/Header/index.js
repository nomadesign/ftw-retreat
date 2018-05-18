import React from 'react';
import Link from 'gatsby-link';
import logo from 'images/header-logo.svg';

import './style.scss';

const Header = ({ siteTitle }) => (
  <div className='container'>
    <div className='row'>
      <div className='col-12'>
        <header className='header'>
          <img src={logo} alt={siteTitle} />
          <h3 className='body-2'>Coming Fall 2018</h3>
        </header>
      </div>
    </div>
  </div>
);

export default Header;
