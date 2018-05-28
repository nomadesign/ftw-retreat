import React from 'react';
import SubscribeForm from 'components/SubscribeForm';
import imgHero01 from 'images/hero-01.jpg';
import imgHero02 from 'images/hero-02.jpg';
import imgHeroShape from 'images/hero-shape.svg';
import imgSignature from 'images/history-signature.svg';
import imgAvatarBecca from 'images/avatar-becca.png';
import imgOrganizerShape from 'images/organizer-shape.svg';
import imgOrganizerKuan from 'images/organizer-kuan.jpg';
import iconEmail from 'images/icon-email.svg';
import iconInstagram from 'images/icon-instagram.svg';

const IndexPage = () => {

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-1" />
            <div className="col-11">
              <h1 className="headline">
                A beautiful retreat for creative women
              </h1>
              <SubscribeForm />
            </div>
          </div>


          <div className="row">
            <div className="col-5">
              <img src={imgHero01} className="hidden-sm" />
            </div>
            <div className="col-7">
              <div className="hero-shape-wrapper">
                <img src={imgHeroShape} className="hero-shape" />
                <img src={imgHero02} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="history">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <p className="title-1">
                <strong>Five all-inclusive days of pliable time.</strong> Honor the
                introverted reader, the wild painter, the brilliant
                photographer, the clever writer, and the big dreamer in all of us.
              </p>
            </div>
            <div className="col-1" />
            <div className="col-7">
              <p className="subhead-2">
                The For The Women (FTW) Retreat started as an experiment.
                What could a yoga retreat be without the yoga? What could a
                personal retreat with a collective of creative women look like?
              </p>
              <p className="subhead-2">
                Last winter, on a beautiful, tranquil beach in Jamaica,
                we gathered for the inaugural FTW Retreat in a white house
                with a pool and plenty of nooks.
              </p>
              <p className="subhead-2">
                The unstructured days were filled with quiet reflections and
                creative endeavors. We came together for authentic home cooking,
                stories, and laughter. And we left feeling rested, renewed, and
                inspired.
              </p>
              <p className="subhead-2">
                This fall, we invite you to join us for the official first edition
                of FTW Retreat in North America. To advance our own divinity,
                step with grace into possibilities and our own divinity,
                advance, we retreat as women together. We will rest, create,
                and step into an experience that’s both a personal retreat and
                a group vacation with your girlfriends. You won’t find this
                anywhere else.
              </p>
              <p className="subhead-2">
                The details are in the works. Sign up to be the first
                to know when registration is open.
              </p>
              <p className="subhead-2">
                Kuan Luo
                <img src={imgSignature} className="history-signature" />
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="organizer">
        <div className="container">
          <div className="row organizer-wrapper">
            <div className="col-8">
              <div className="organizer-card">
                <h3 className="subhead-1">About the organizer</h3>
                <p className="body-2">
                  Kuan has a knack for designing experiences that bring people
                  together. Trained as a journalist, yoga instructor and product
                  designer, she sees design and travel as inseparable tools for
                  humanity to tell our own stories. Kuan dreamed of FTW Retreat
                  last year, and is committed to bringing women together to support
                  one another from an authentic, heartful, and creative place.
                </p>
              </div>

              <img src={imgOrganizerKuan} className="organizer-kuan" />
              <img src={imgOrganizerShape} className="organizer-shape" />
            </div>
          </div>
        </div>
      </section>


      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hr />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title-1">Testimonials</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-1" />
            <div className="col-5">
              <div className="testimonial-erin">
                <p className="body-2 ">
                  “I loved this retreat! It was peaceful, calm, and lovely.
                  All the ladies were able to separate and come together harmoniously
                  and without judgment. I chose to spend time working on the trip,
                  but loved participating in group meals, game nights, and idle
                  chit chat. It was a great, supportive and kind group and a beautiful trip.”
                </p>
                <div className="media">
                  <div className="media-body">
                    <h4 className="caption-1">Erin W.</h4>
                    <span className="caption-2">New York, NY</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="testimonial-becca">
                <p className="body-2">
                  “We ventured to Jamaica on our FTW Retreat. In our villa, we
                  found time to relax. Something special happens when a group
                  of women gets to take a trip together. Everyone brought their
                  own work or life projects and we were able to focus, get some
                  "us" time, and enjoy the sun in a beautiful place.
                  We ate and drank well and enjoyed our beautiful surroundings!”
                </p>
                <div className="media">
                  <div className="media-body">
                    <h4 className="caption-1">Becca R.</h4>
                    <span className="caption-2">Brooklyn, NY</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1" />
          </div>
        </div>
      </section>

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
              <p className="body-2">
                “It’s very important to learn again the art of resting and relaxing.”
              </p>
              <p className="body-3">
                ⏤ Thich Nhat Hanh
              </p>
            </div>
            <div className="col-4 footer-contact">
              <a href="mailto:contact@forthewomenretreat.com" className="media">
                <img src={iconEmail} width="24" className="media-figure" />
                <div className="media-body">
                  contact@forthewomenretreat.com
                </div>
              </a>
              <a href="https://www.instagram.com/ftwretreat" className="media">
                <img src={iconInstagram} width="24" className="media-figure" />
                <div className="media-body">
                  @ftwretreat
                </div>
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default IndexPage;
