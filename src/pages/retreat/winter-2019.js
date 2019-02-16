import React from 'react';
import Shell from 'layouts/Shell';
import Footer from 'modules/Footer';
import Link from 'gatsby-link';

const RetreatWinter2019 = () => (
  <Shell>
    <section className="past-retreat">

      <div className="container">
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <h1 className="headline">Winter 2019 in Eleuthera</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-2" />
          <div className="col-8">
            <p className="subhead-2">
              A short flight away from Nassau, the 100-mile-long island of Eleuthera has one highway and many pink sand beaches. Our homebase for the retreat is a cozy 6-bedroom house with a lush garden and pool, just minutes to the beach. Nap under poinciana trees in the garden, read in the swing chairs, and connect with other women leaders in tech on the veranda overlooking the historical Governor’s Harbour and the sea.
            </p>
          </div>
        </div>

        <section className="testimonial testimonial--retreat">
          <div className="container">
            <div className="row">
              <div className="col-2" />
              <div className="col-8">
                <h4 className="caption-1">Photos coming soon</h4>
              </div>
            </div>
          </div>
        </section>

      </div>

    </section>


    <Footer showRegistration="true" />
  </Shell>
);

export default RetreatWinter2019;
