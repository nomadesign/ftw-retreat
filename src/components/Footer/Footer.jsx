import React from 'react';
import Link from 'gatsby-link';
import SubscribeForm from 'components/SubscribeForm';
import iconEmail from 'images/icon-email.svg';
import iconInstagram from 'images/icon-instagram.svg';

const Footer = () => (
  <section className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 center">
          <SubscribeForm />
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12">
          <hr />
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-8 footer-quote">
          <p className="body-2">“It’s very important to learn again the art of resting and relaxing.”</p>
          <p className="body-3">⏤ Thich Nhat Hanh</p>
        </div>
        <div className="col-4 footer-contact">
          <a href="mailto:contact@forthewomenretreat.com" className="media">
            <img src={iconEmail} width="24" className="media-figure" />
            <div className="media-body">contact@forthewomenretreat.com</div>
          </a>
          <a href="https://www.instagram.com/ftwretreat" className="media">
            <img src={iconInstagram} width="24" className="media-figure" />
            <div className="media-body">@ftwretreat</div>
          </a>
          <Link to="/privacy/" className="media">
            <img src={iconEmail} width="24" className="media-figure" />
            <div className="media-body">privacy policy</div>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
