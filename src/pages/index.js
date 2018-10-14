import React from 'react';
import Shell from 'layouts/Shell';
import CheckoutButton from 'modules/CheckoutButton';
import SubscribeModal from 'modules/SubscribeModal';
import SubscribeForm from 'modules/SubscribeForm';
import Footer from 'modules/Footer';
import imgHero01 from 'images/hero-01.jpg';
import imgHero02 from 'images/hero-02.jpg';
import imgHouse from 'images/house.png';
import imgHouseSM from 'images/house-sm.jpg';
import imgHouseShape from 'images/house-shape.svg';
import imgHeroShape from 'images/hero-shape.svg';
import imgAgendaShape1 from 'images/agenda-shape-1.svg';
import UnderlineAgenda from 'images/agenda-underline.svg';
import UnderlineHero from 'images/hero-underline.svg';
import UnderlineDescription1 from 'images/description-underline-1.svg';
import UnderlineDescription2 from 'images/description-underline-2.svg';
import UnderlineDescription3 from 'images/description-underline-3.svg';
import imgOrganizerShape from 'images/organizer-shape.svg';
import imgOrganizerKuan from 'images/organizer-kuan.jpg';
import iconWebsite from 'images/icon-website.svg';
import iconTwitter from 'images/icon-twitter.svg';

const IndexPage = () => {
  return (
    <Shell>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-1" />
            <div className="col-11">
              <h1 className="headline">A 5-day creative retreat for women leaders in tech</h1>
              <h2 className="title-2">
                Spring 2018 retreat is in the works
                <img src={UnderlineHero} className="hero-underline" />
              </h2>
              <SubscribeForm />
            </div>
          </div>
        </div>

        <div className="container hero-images-container">
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

      <section className="description">
        <div className="container">
          <div className="description-glance">
            <div className="row">
              <div className="col-4">
                <h3 className="title-3">
                  Intentionally small
                  <img src={UnderlineDescription1} className="description-underline-1" />
                </h3>
                <p className="subhead-2">
                  Share tales with 10 women leaders to foster deeper conversations and connections
                </p>
              </div>

              <div className="col-4">
                <h3 className="title-3">
                  All-inclusive
                  <img src={UnderlineDescription2} className="description-underline-2" />
                </h3>
                <p className="subhead-2">
                  Nourishing meals daily, lodging and transportation to/from the airport are included
                </p>
              </div>

              <div className="col-4">
                <h3 className="title-3">
                  Individual work time
                  <img src={UnderlineDescription3} className="description-underline-3" />
                </h3>
                <p className="subhead-2">
                  After a morning activity outdoors, the afternoons are dedicated to creative reflections
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1" />
            <div className="col-9">
              <p className="title-1">
                <strong>Being a leader in tech and a woman at the same time is a lonely affair.</strong> Join For the
                Women (FTW) Retreat, a 5-day creative retreat for women leaders in tech to connect, share doubts and
                dreams, and learn from each other.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <div className="description-history">
                <p className="subhead-2">
                  As the striking autumn colors take over the peaks of the Laurentian Mountains, we will gather in the
                  slopeside house outside of Montréal with a sun deck, a hot tub, and plenty of nooks.
                </p>
                <p className="subhead-2">
                  The mornings are dedicated to the beauty of the outdoors. Go for a hike, a bike ride, a gondola trip
                  to the summit, or just take in the view for inspiration. The afternoons are dedicated to what fuels
                  your creative force at work. Work on a novel, dream the big picture of your company, read two books,
                  put on a sheet mask and nap, sew that jumpsuit, whatever you need to do to tap into your inner wisdom
                  and flourish.
                </p>
                <p className="subhead-2">
                  You will be amazed by what can be revealed when you dedicate 5 days to connect with other badass women
                  leaders in tech and embrace of your own truth.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="agenda">
        <div className="container agenda-container">
          <div className="row">
            <div className="col-12">
              <div className="agenda-wrapper">
                <h1 className="title-1">
                  Agenda
                  <img src={UnderlineAgenda} className="agenda-underline" />
                </h1>

                <div className="agenda-items">
                  <div className="agenda-item">
                    <h3 className="body-1">Day 1</h3>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">4-6 PM</span>
                      <div className="agenda-item-title">Check-In</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">6:30 PM</span>
                      <div className="agenda-item-title">Dinner</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">8:30 PM</span>
                      <div className="agenda-item-title">Introductions + opening circle</div>
                    </div>
                  </div>

                  <div className="agenda-item">
                    <h3 className="body-1">Day 2</h3>
                    <div className="agenda-item-entry">
                      <div className="agenda-item-title">Breakfast (self-service)</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        10:00 AM
                      </span>
                      <div className="agenda-item-title">
                        Group outdoor activity
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">12:30 PM</span>
                      <div className="agenda-item-title">Lunch</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">2-5 PM</span>
                      <div className="agenda-item-title">Creative time</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">6:30 PM</span>
                      <div className="agenda-item-title">Dinner</div>
                    </div>
                  </div>

                  <div className="agenda-item">
                    <h3 className="body-1">Day 3</h3>
                    <div className="agenda-item-entry">
                      <div className="agenda-item-title">Breakfast (self-service)</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        10:00 AM
                      </span>
                      <div className="agenda-item-title">
                        Group outdoor activity
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">12:30 PM</span>
                      <div className="agenda-item-title">Lunch</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">2-5 PM</span>
                      <div className="agenda-item-title">Creative time</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">6:30 PM</span>
                      <div className="agenda-item-title">Dinner</div>
                    </div>
                  </div>

                  <div className="agenda-item">
                    <h3 className="body-1">Day 4</h3>
                    <div className="agenda-item-entry">
                      <div className="agenda-item-title">Breakfast (self-service)</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        10:00 AM
                      </span>
                      <div className="agenda-item-title">
                        Group outdoor activity
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">12:30 PM</span>
                      <div className="agenda-item-title">Lunch</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">2-5 PM</span>
                      <div className="agenda-item-title">Creative time</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">6:30 PM</span>
                      <div className="agenda-item-title">Dinner</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">8:30 PM</span>
                      <div className="agenda-item-title">Closing circle</div>
                    </div>
                  </div>

                  <div className="agenda-item">
                    <h3 className="body-1">Day 5</h3>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">9:00 AM</span>
                      <div className="agenda-item-title">Breakfast</div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">11:00 AM</span>
                      <div className="agenda-item-title">Packing out</div>
                    </div>
                  </div>
                </div>
              </div>

              <img src={imgAgendaShape1} className="agenda-shape-1" />
            </div>
          </div>
        </div>
      </section>


      <section className="testimonial">
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
                  “I loved this retreat! It was peaceful, calm, and lovely. All the ladies were able to separate and
                  come together harmoniously and without judgment. I chose to spend time working on the trip, but loved
                  participating in group meals, game nights, and idle chit chat. It was a great, supportive and kind
                  group and a beautiful trip.”
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
                  “We ventured to Jamaica on our FTW Retreat. In our villa, we found time to relax. Something special
                  happens when a group of women gets to take a trip together. Everyone brought their own work or life
                  projects and we were able to focus, get some "us" time, and enjoy the sun in a beautiful place. We ate
                  and drank well and enjoyed our beautiful surroundings!”
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

      <section className="organizer">
        <div className="container">
          <div className="row organizer-wrapper">
            <div className="col-8">
              <div className="organizer-card">
                <h3 className="subhead-1">About the organizer</h3>
                <p className="body-2">
                  Kuan has a knack for designing experiences that bring people together. Trained as a journalist, yoga
                  instructor and product designer, she sees design and travel as inseparable tools for humanity to tell
                  our own stories. Before Kuan dreamed of FTW Retreat, she led design at Cockroach Labs and Grand St.
                  (acquired by Etsy) amongst other tech ventures.
                </p>
                <a href="https://twitter.com/kuanluo" target="_blank" rel="noopener noreferrer">
                  <img src={iconTwitter} alt="Twitter" width="24" height="24" />
                </a>
                <a href="https://kuanluo.com" target="_blank" rel="noopener noreferrer">
                  <img src={iconWebsite} alt="Website" width="24" height="24" />
                </a>
              </div>

              <img src={imgOrganizerKuan} className="organizer-kuan" />
              <img src={imgOrganizerShape} className="organizer-shape" />
            </div>
          </div>
        </div>
      </section>

      <Footer showRegistration="true" />

      <SubscribeModal />
    </Shell>
  );
};

export default IndexPage;
