import React from 'react';
import Shell from 'layouts/Shell';
import Footer from 'modules/Footer';
import Link from 'gatsby-link';
import imgRetreat01 from 'images/retreats/2018/fall/01.jpg';
import imgRetreat02 from 'images/retreats/2018/fall/02.jpg';
import imgRetreat03 from 'images/retreats/2018/fall/03.jpg';
import imgRetreat04 from 'images/retreats/2018/fall/04.jpg';
import imgRetreat05 from 'images/retreats/2018/fall/05.jpg';
import imgRetreat06 from 'images/retreats/2018/fall/06.jpg';
import imgRetreat07 from 'images/retreats/2018/fall/07.jpg';
import imgRetreat08 from 'images/retreats/2018/fall/08.jpg';
import imgRetreat09 from 'images/retreats/2018/fall/09.jpg';
import imgRetreat10 from 'images/retreats/2018/fall/10.jpg';
import imgRetreat11 from 'images/retreats/2018/fall/11.jpg';
import imgRetreat12 from 'images/retreats/2018/fall/12.jpg';
import imgRetreat13 from 'images/retreats/2018/fall/13.jpg';

const RetreatFall2018 = () => (
  <Shell>
    <section className="past-retreat">

      <div className="container">
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <h1 className="headline">Fall 2018 in Québec</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-2" />
          <div className="col-8">
            <p className="subhead-2">
              As the striking autumn colors take over the peaks of the Laurentian Mountains, we gathered in the slopeside house outside of Montréal with a sun deck, a hot tub, and plenty of nooks. We went for hikes in the forest and gondola trips to the summit to see the foliage in the mornings. The afternoons were dedicated to writing, knitting, napping, reading, coloring and connecting with each other.
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
          <div className="col-8">
            <img src={imgRetreat07} className="past-reatreat-img" />
          </div>
          <div className="col-4">
            <img src={imgRetreat08} className="past-reatreat-img" />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <img src={imgRetreat09} className="past-reatreat-img" />
          </div>
          <div className="col-4">
            <img src={imgRetreat10} className="past-reatreat-img" />
          </div>
          <div className="col-5">
            <img src={imgRetreat11} className="past-reatreat-img" />
          </div>
        </div>

        <div className="row">
          <div className="col-5">
            <img src={imgRetreat12} className="past-reatreat-img" />
          </div>
          <div className="col-7">
            <img src={imgRetreat13} className="past-reatreat-img" />
          </div>
        </div>

      </div>

    </section>
    <Footer showRegistration="true" />
  </Shell>
);

export default RetreatFall2018;
