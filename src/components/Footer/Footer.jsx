import React from 'react';
import Link from 'gatsby-link';
import SubscribeForm from 'components/SubscribeForm';
import iconEmail from 'images/icon-email.svg';
import iconInstagram from 'images/icon-instagram.svg';

const Footer = ({ showRegistration }) => (
  <section className="footer">
    {showRegistration && (
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <SubscribeForm />
          </div>
        </div>
      </div>
    )}

    <div className="container">
      <div className="row">
        <div className="col-12">
          <hr />
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-8 ">
          <p className="body-2">“It’s very important to learn again the art of resting and relaxing.”</p>
          <p className="body-3">⏤ Thich Nhat Hanh</p>
        </div>
        <div className="col-4">
          <a href="mailto:contact@forthewomenretreat.com" target="_blank" className="media">
            <img src={iconEmail} width="24" className="media-figure" />
            <div className="media-body">contact@forthewomenretreat.com</div>
          </a>
          <a href="https://www.instagram.com/ftwretreat" target="_blank" className="media">
            <img src={iconInstagram} width="24" className="media-figure" />
            <div className="media-body">@ftwretreat</div>
          </a>
          <br />
          <Link to="/privacy/" className="footer-privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
