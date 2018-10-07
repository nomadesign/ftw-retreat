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
          <div className="col-4">
            <a href="mailto:contact@forthewomenretreat.com" target="_blank" rel="noopener noreferrer" className="media footer-social">
              <img src={iconEmail} width="24" className="media-figure" alt="email" />
              <div className="media-body">contact@forthewomenretreat.com</div>
            </a>
            <a href="https://www.instagram.com/ftwretreat" target="_blank" rel="noopener noreferrer" className="media footer-social">
              <img src={iconInstagram} width="24" className="media-figure" alt="instagram" />
              <div className="media-body">@ftwretreat</div>
            </a>

          </div>
          <div className="col-8 footer-quote">
            <p className="body-2">“It’s very important to learn again the art of resting and relaxing.”</p>
            <p className="body-3">⏤ Thich Nhat Hanh</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <InstagramFeed />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
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
