import React from 'react';
import Link from 'gatsby-link';
import Shell from 'layouts/Shell';
import CheckoutButton from 'modules/CheckoutButton';
import SubscribeModal from 'modules/SubscribeModal';
import SubscribeForm from 'modules/SubscribeForm';
import Footer from 'modules/Footer';
import imgHero01 from 'images/hero-01.jpg';
import imgHero02 from 'images/hero-02.jpg';
import imgHouse from 'images/house.png';
import imgHouseSM from 'images/house-sm.png';
import imgHouseShape from 'images/house-shape.svg';
import imgHeroShape from 'images/hero-shape.svg';
import imgAgendaShape2 from 'images/agenda-shape-2.svg';
import imgTestimonialLara from 'images/testimonial/lara.png';
import imgTestimonialBersabel from 'images/testimonial/bersabel.png';
import imgTestimonialSaron from 'images/testimonial/saron.png';
import imgTestimonialAmy from 'images/testimonial/amy.png';
import imgTestimonialLaraShape from 'images/testimonial/lara-shape.svg';
import imgTestimonialBersabelShape from 'images/testimonial/bersabel-shape.svg';
import imgTestimonialSaronShape from 'images/testimonial/saron-shape.svg';
import imgTestimonialAmyShape from 'images/testimonial/amy-shape.svg';
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
              <h1 className="headline">A 5-day intimate retreat for women leaders in tech</h1>
              <h2 className="title-2">
                Feb 7-11, 2019 in Eleuthera, the Bahamas
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
                  Have a really long, deep conversations with a diverse group of women
                </p>
              </div>


              <div className="col-4">
                <h3 className="title-3">
                  Individual work time
                  <img src={UnderlineDescription3} className="description-underline-3" />
                </h3>
                <p className="subhead-2">
                  The afternoons are dedicated to creative endeavors and quiet reflections
                </p>
              </div>

              <div className="col-4">
                <h3 className="title-3">
                  All-inclusive
                  <img src={UnderlineDescription2} className="description-underline-2" />
                </h3>
                <p className="subhead-2">
                  Nourishing meals daily, lodging and transportation between Nassau and Eleuthera airport are included.
                </p>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-1" />
            <div className="col-9">
              <p className="title-1">
                <strong>Being a leader in tech and a woman at the same time is a lonely affair.</strong> Join For the Women (FTW) Retreat, a 5-day intimate retreat for women leaders in tech to connect, share doubts and dreams, and learn from each other.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <div className="description-history">
                <p className="subhead-2">
                  Finding a community of like-minded women who are as ambitious, positive and thoughtful as you is possible. Unplug from winter and the day-to-day grind, and meet your people in the Bahamas this February.
                </p>
                <p className="subhead-2">
                  The mornings are dedicated to the beauty of the outdoors. Walk on the beach, plunge in the pool, or just take in the view for inspiration. The afternoons are dedicated to what fuels your creative force at work. Work on a novel, dream the big picture of your company, read two books, put on a sheet mask and nap, paint, whatever you need to do to tap into your inner wisdom and flourish.
                </p>
                <p className="subhead-2">
                  You will be amazed by what can be revealed when you dedicate 5 days to connect with other badass women leaders in tech and embrace of your own truth. Join us in February.
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
                        Group activity
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
                        Group activity
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
                        Group activity
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

              <img src={imgAgendaShape2} className="agenda-shape-2" />
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
              <h3 className="title-1">The House on Eleuthera, the Bahamas</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <p className="subhead-2">
                A short flight away from Nassau, the 100-mile-long island of Eleuthera has one highway and many pink sand beaches. Our homebase for the retreat is a cozy 6-bedroom house with a lush garden and pool, just minutes to the beach. Nap under poinciana trees in the garden, read in the swing chairs, and connect with other women leaders in tech on the veranda overlooking the historical Governor’s Harbour and the sea.
              </p>

              <section className="checkout-button">
                <div className="checkout-button-faq">
                  Got more questions? Check out our{' '}
                  <Link to="/faq" className="underline">
                    FAQ
                  </Link>
                  .
                </div>
              </section>
            </div>
          </div>


          <div className="row">
            <div className="col-12 center">
              <hr />
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
            <div className="col-6">
              <div className="testimonial-left testimonial-margin">
                <p className="body-2 ">
                  “It's not a retreat, it's an experience. Kuan took care of every little detail. Between the incredible house, the delicious food, and the amazing women, this is the perfect way to unplug and find your people.”
                </p>
                <div className="media">
                  <img src={imgTestimonialSaronShape} className="testimonial-shape testimonial-shape--saron" />
                  <img src={imgTestimonialSaron} width="48" className="media-figure" />
                  <div className="media-body">
                    <h4 className="caption-1">Saron Yitbarek</h4>
                    <span className="caption-2">Developer, Podcaster, Founder of CodeNewbie</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="testimonial-right testimonial-margin">
                <p className="body-2">
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

          <div className="row">
            <div className="col-6">
              <div className="testimonial-left testimonial-margin">
                <p className="body-2 ">
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
            <div className="col-6">
              <div className="testimonial-right testimonial-margin testimonial-fix">
                <p className="body-2">
                  “One of the most fulfilling weekends I've had in a long time -- both professionally and personally.”
                </p>
                <div className="media">
                  <img src={imgTestimonialBersabelShape} className="testimonial-shape testimonial-shape--bersabel" />
                  <img src={imgTestimonialBersabel} width="48" className="media-figure" />
                  <div className="media-body">
                    <h4 className="caption-1">Bersabel Tadasse</h4>
                    <span className="caption-2">Director of Product, Mapbox</span>
                  </div>
                </div>
              </div>
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
