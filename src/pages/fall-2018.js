import React from 'react';
import Link from 'gatsby-link';
import Footer from 'components/Footer';
import { CheckoutButton, CheckoutEmbed } from 'components/Eventbrite';

const eventID = '47644151941';

const Fall2018 = () => (
  <div>
    <section className="privacy">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="title-1">Fall 2018</p>
            <h1>testing button below</h1>
            <CheckoutButton id={eventID} />
            <h1>testing embed below</h1>
            <CheckoutEmbed id={eventID} />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Fall2018;
