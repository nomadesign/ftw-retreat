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
import imgTestimonialLara from 'images/testimonial/lara.png';
import imgTestimonialBersabel from 'images/testimonial/bersabel.png';
import imgTestimonialSaron from 'images/testimonial/saron.png';
import imgTestimonialAmy from 'images/testimonial/amy.png';
import imgTestimonialLaraShape from 'images/testimonial/lara-shape.svg';
import imgTestimonialBersabelShape from 'images/testimonial/bersabel-shape.svg';
import imgTestimonialSaronShape from 'images/testimonial/saron-shape.svg';
import imgTestimonialAmyShape from 'images/testimonial/amy-shape.svg';

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
              As the striking autumn colors take over the peaks of the Laurentian Mountains, we gathered in the slopeside house outside of Montréal with a sun deck, a hot tub, and plenty of nooks. In the mornings, we went for hikes in the forest and took gondola rides to the summit to see the foliage. The afternoons were dedicated to writing, knitting, napping, reading, coloring and connecting with each other. We left learned how valuable it is to surround ourselves with a community of women doing similar work, and came home with a great sense of inspiration and courage.
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


        <section className="testimonial testimonial--retreat">
          <div className="container">
            <div className="row">
              <div className="col-2" />
              <div className="col-8">
                <div className="testimonial-right">
                  <p className="title-1">
                    “FTW Retreat was the perfect time and space to be creative (I shipped the first draft of my book!), to revel in some stillness in nature, and to learn from other boss women.”
                  </p>
                  <div className="media">
                    <img src={imgTestimonialLaraShape} className="testimonial-shape testimonial-shape--lara" />
                    <img src={imgTestimonialLara} width="48" className="media-figure" />
                    <div className="media-body">
                      <h4 className="caption-1">Lara Hogan</h4>
                      <span className="caption-2">Engineering leadership coach and consultant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


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

        <section className="testimonial testimonial--retreat">
          <div className="container">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="testimonial-left">
                  <p className="title-1">
                    “Thanks for crafting a perfect weekend of relaxation, great food and meaningful conversation - I left feeling incredibly recharged and inspired.”
                  </p>
                  <div className="media">
                    <img src={imgTestimonialAmyShape} className="testimonial-shape testimonial-shape--amy" />
                    <img src={imgTestimonialAmy} width="48" className="media-figure" />
                    <div className="media-body">
                      <h4 className="caption-1">Amy Pan</h4>
                      <span className="caption-2">Product management consultant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


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
