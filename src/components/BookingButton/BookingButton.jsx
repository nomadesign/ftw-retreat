import React from 'react';
import Link from 'gatsby-link';

const Footer = ({ showMoreQuestions, buttonLabel }) => (
  <section className="booking-button">
    <Link to="/" className="button">
      {buttonLabel}
    </Link>
    {showMoreQuestions && (
      <div className="booking-button-faq">
        Got more questions? Check out our <Link to="/faq" className="underline">FAQ</Link>.
      </div>
    )}
  </section>
);

export default Footer;
