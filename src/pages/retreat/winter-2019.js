import React from 'react';
import Shell from 'layouts/Shell';
import Footer from 'modules/Footer';
import imgRetreat01 from 'images/retreats/2019/winter/01.jpg';
import imgRetreat02 from 'images/retreats/2019/winter/02.jpg';
import imgRetreat03 from 'images/retreats/2019/winter/03.jpg';
import imgRetreat04 from 'images/retreats/2019/winter/04.jpg';
import imgRetreat05 from 'images/retreats/2019/winter/05.jpg';
import imgRetreat06 from 'images/retreats/2019/winter/06.jpg';
import imgRetreat07 from 'images/retreats/2019/winter/07.jpg';
import imgRetreat08 from 'images/retreats/2019/winter/08.jpg';
import imgRetreat09 from 'images/retreats/2019/winter/09.jpg';

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

        <div className="row">
          <div className="col-4">
            <img src={imgRetreat01} className="past-reatreat-img" />
          </div>
          <div className="col-8">
            <img src={imgRetreat02} className="past-reatreat-img" />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src={imgRetreat03} className="past-reatreat-img" />
          </div>
          <div className="col-4">
            <img src={imgRetreat04} className="past-reatreat-img" />
          </div>
          <div className="col-4">
            <img src={imgRetreat05} className="past-reatreat-img" />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <img src={imgRetreat06} className="past-reatreat-img" />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <img src={imgRetreat07} className="past-reatreat-img" />
          </div>
          <div className="col-4">
            <img src={imgRetreat08} className="past-reatreat-img" />
          </div>
          <div className="col-5">
            <img src={imgRetreat09} className="past-reatreat-img" />
          </div>
        </div>

      </div>

    </section>


    <Footer showRegistration="true" />
  </Shell>
);

export default RetreatWinter2019;
