import React from 'react';
import Link from 'gatsby-link';
import SubscribeForm from 'modules/SubscribeForm';
import iconEmail from 'images/icon-email.svg';
import iconInstagram from 'images/icon-instagram.svg';
import InstagramFeed from 'modules/InstagramFeed';

const Footer = ({ showRegistration }) => (
  <section id="Footer" className="footer">
    {showRegistration && (
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <SubscribeForm />
          </div>
        </div>
      </div>
    )}


    <div className="footer-wrapper">
      <div className="container">

        <div className="row">
          <div className="col-12 center">
            <div className="footer-quote">
              <p className="subhead-1">“It’s very important to learn again the art of resting and relaxing.”</p>
              <p className="body-3">⏤ Thich Nhat Hanh</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 center">
            <h3 className="footer-instagram">
              Follow us on Instagram{' '}
              <a href="https://www.instagram.com/ftwretreat" target="_blank" rel="noopener noreferrer">
                @ftwretreat
              </a>
            </h3>
            <InstagramFeed />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <a href="mailto:contact@forthewomenretreat.com" target="_blank" rel="noopener noreferrer" className="media footer-social">
              <img src={iconEmail} width="24" className="media-figure" alt="email" />
              <div className="media-body">contact@forthewomenretreat.com</div>
            </a>
          </div>
          <div className="col-6 footer-align-right">
            <Link to="/privacy/" className="footer-privacy">
              Privacy Policy
            </Link>{' '}
            <span className="footer-privacy"> - </span>{' '}
            <Link to="/conduct/" className="footer-privacy">
              Code of Conduct
            </Link>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Footer;
