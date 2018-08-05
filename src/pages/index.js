import React from 'react';
import Link from 'gatsby-link';
import CheckoutButton from 'components/CheckoutButton';
import SubscribeModal from 'components/SubscribeModal';
import Footer from 'components/Footer';
import imgHero01 from 'images/hero-01.jpg';
import imgHero02 from 'images/hero-02.jpg';
import imgHouse from 'images/house.png';
import imgHouseSM from 'images/house-sm.jpg';
import imgHouseShape from 'images/house-shape.svg';
import imgHeroShape from 'images/hero-shape.svg';
import imgAgendaShape1 from 'images/agenda-shape-1.svg';
import imgAgendaShape2 from 'images/agenda-shape-2.svg';
import UnderlineHero from 'images/hero-underline.svg';
import UnderlineAgenda from 'images/agenda-underline.svg';
import UnderlineDescription1 from 'images/description-underline-1.svg';
import UnderlineDescription2 from 'images/description-underline-2.svg';
import UnderlineDescription3 from 'images/description-underline-3.svg';
import imgAvatarBecca from 'images/avatar-becca.png';
import imgOrganizerShape from 'images/organizer-shape.svg';
import imgOrganizerKuan from 'images/organizer-kuan.jpg';
import iconWebsite from 'images/icon-website.svg';
import iconTwitter from 'images/icon-twitter.svg';


const eventID = '47804001054';

const IndexPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-1" />
            <div className="col-11">
              <h1 className="headline">A 5-day creative retreat for women leaders in tech</h1>
              <h2 className="title-2">
                October 4-8, 2018
                <span className="hero-place-dot"> ∙ </span>
                <span className="hero-place">Mont Tremblant, Québec</span>
                <img src={UnderlineHero} className="hero-underline" />
              </h2>
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
                  10 Women
                  <img src={UnderlineDescription1} className="description-underline-1" />
                </h3>
                <p className="subhead-2">
                  The retreat is intentionally small so we can share meals and tales around one table.
                </p>
              </div>

              <div className="col-4">
                <h3 className="title-3">
                  5 Days
                  <img src={UnderlineDescription2} className="description-underline-2" />
                </h3>
                <p className="subhead-2">
                  Five days of pliable days. Honor the reader, artist and outdoorswoman in all of us.
                </p>
              </div>

              <div className="col-4">
                <h3 className="title-3">
                  Agenda Free
                  <img src={UnderlineDescription3} className="description-underline-3" />
                </h3>
                <p className="subhead-2">
                  Sleep in or wake up early for a sunrise hike. The retreat is yours to play.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1" />
            <div className="col-9">
              <p className="title-1">
              <strong>The For The Women (FTW) Retreat started as an experiment.</strong> What could a yoga retreat be without the yoga? What could a personal retreat with a collective of creative women look like?
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-2" />
            <div className="col-8">

              <div className="description-history">
                <p className="subhead-2">
                  This October, we invite you to join us for the official first edition of FTW Retreat in Québec, Canada. As the striking autumn colors quietly take over the peaks of the Laurentian Mountains, we will gather in the modern house on the slopeside with a hot tub, a sun deck and plenty of nooks.
                </p>
                <p className="subhead-2">
                  The unstructured days will be filled with quiet reflections and creative endeavors. We will come together for authentic home cooking, stories, and laughter. And we will leave feeling rested, renewed, and inspired.
                </p>
                <p className="subhead-2">
                  To advance into possibilities with grace, we retreat as women together. We will rest, and create an experience that’s both a personal retreat and a group vacation with your girlfriends. You won’t find this anywhere else.
                </p>
              </div>

              <CheckoutButton id={eventID} showSecondaryCTA={true} />
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
                    <h2 className="caption-2">Thursday, Oct 4</h2>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">4-6 PM</span>
                      <div className="agenda-item-title">
                        Check-In
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        6:30 PM
                      </span>
                      <div className="agenda-item-title">
                        Dinner
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        8:30 PM
                      </span>
                      <div className="agenda-item-title">
                        Introductions + opening circle
                      </div>
                    </div>
                  </div>

                  <div className="agenda-item">
                    <h3 className="body-1">Day 2</h3>
                    <h2 className="caption-2">Friday, Oct 5</h2>
                    <div className="agenda-item-entry">
                      <div className="agenda-item-title">
                        Self-serving breakfast
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        10:00 AM
                      </span>
                      <div className="agenda-item-title">
                        Hike in Mt. Tremblant National Park
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        12:30 PM
                      </span>
                      <div className="agenda-item-title">
                        Lunch
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        2-5 PM
                      </span>
                      <div className="agenda-item-title">
                        Creative time
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        6:30 PM
                      </span>
                      <div className="agenda-item-title">
                        Dinner
                      </div>
                    </div>
                  </div>


                  <div className="agenda-item">
                    <h3 className="body-1">Day 3</h3>
                    <h2 className="caption-2">Saturday, Oct 6</h2>
                    <div className="agenda-item-entry">
                      <div className="agenda-item-title">
                        Self-serving breakfast
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        10:00 AM
                      </span>
                      <div className="agenda-item-title">
                        Funicular ride up Mt. Tremblant
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        12:30 PM
                      </span>
                      <div className="agenda-item-title">
                        Lunch
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        2-5 PM
                      </span>
                      <div className="agenda-item-title">
                        Creative time
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        6:30 PM
                      </span>
                      <div className="agenda-item-title">
                        Dinner
                      </div>
                    </div>
                  </div>



                  <div className="agenda-item">
                    <h3 className="body-1">Day 4</h3>
                    <h2 className="caption-2">Sunday, Oct 7</h2>
                    <div className="agenda-item-entry">
                      <div className="agenda-item-title">
                        Self-serving breakfast
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        10:00 AM
                      </span>
                      <div className="agenda-item-title">
                        Explore town of Mt. Tremblant
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        12:30 PM
                      </span>
                      <div className="agenda-item-title">
                        Lunch
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        2-5 PM
                      </span>
                      <div className="agenda-item-title">
                        Creative time
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        6:30 PM
                      </span>
                      <div className="agenda-item-title">
                        Dinner
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        8:30 PM
                      </span>
                      <div className="agenda-item-title">
                        Closing circle
                      </div>
                    </div>
                  </div>


                  <div className="agenda-item">
                    <h3 className="body-1">Day 5</h3>
                    <h2 className="caption-2">Monday, Oct 8</h2>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        9:00 AM
                      </span>
                      <div className="agenda-item-title">
                        Breakfast
                      </div>
                    </div>
                    <div className="agenda-item-entry">
                      <span className="agenda-item-time">
                        11:00 AM
                      </span>
                      <div className="agenda-item-title">
                        Packing out
                      </div>
                    </div>
                  </div>



                </div>
              </div>


              <img src={imgAgendaShape1} className="agenda-shape-1" />
            </div>
          </div>
        </div>
      </section>

      <section className="house">

        <div className="container house-images-container">
          <div className="row">
            <div className="col-12">
              <img src={imgHouseShape} className="house-shape" />
              <img src={imgHouseSM} className="house-image-s" />
              <img src={imgHouse} className="house-image-l" />
            </div>
          </div>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <h3 className="title-1">The House in Mont Tremblant, Québec</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <p className="subhead-2">
                A picturesque drive just 1.5 hours from Montreal, the eight-bedroom, contemporary residence will be our homebase for the retreat. Watch the fall leaves spectacle from the deck, indulge in a soak in the outdoor hot tub, and get comfortable in the two seperate living areas. Next to the Mont Tremblant National Park, there is easy access next to gondola rides, hikes, bike trails and many water activities on Lake Tremblant.
              </p>

              <CheckoutButton id={eventID} showSecondaryCTA={true} />
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
                  our own stories. Kuan dreamed of FTW Retreat last year, and is committed to bringing women together to
                  support one another from an authentic, heartful, and creative place.
                </p>
                <a href="https://twitter.com/kuanluo" target="_blank">
                  <img src={iconTwitter} alt="Twitter" width="24" height="24" />
                </a>
                <a href="https://kuanluo.com" target="_blank">
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
    </div>
  );
};

export default IndexPage;
