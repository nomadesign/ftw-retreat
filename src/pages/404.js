import React from 'react';
import Link from 'gatsby-link';
import Footer from 'components/Footer';

const NotFoundPage = () => (
  <div>
    <section className="privacy">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="title-1">Not Found</p>
            <p className="body-2">
              This page doesn't exist. <Link to="/">Head back home.</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default NotFoundPage;
