import React from 'react';
import Link from 'gatsby-link';
import Shell from 'layouts/Shell';
import Footer from 'modules/Footer';

const NotFoundPage = () => (
  <Shell>
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
  </Shell>
);

export default NotFoundPage;
