import React from 'react';
import Link from 'gatsby-link';
import Shell from 'layouts/Shell';
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
                News: FTW Retreat is now part of Elpha
                <img src={UnderlineHero} className="hero-underline" />
              </h2>

              <section className="checkout-button">
                <a href="https://elpha.com" target="_blank" className="button">
                  Join Elpha
                </a>
                  <div className="checkout-button-faq">
                    A Private Network for Women in Tech
                  </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="description">
        <div className="container">
          <div className="row">
            <div className="col-1" />
            <div className="col-9">
              <p className="title-1">
                <strong>FTW Retreat is joining forces with Leap to become an independent company with a new name: Elpha!</strong> It’s a private community for women to excel in tech.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-2" />
            <div className="col-8">
              <div className="description-history">
                <p className="subhead-2">
                  Seven months ago, I started FTW Retreat to create an offline experience where women leaders in tech could connect, share experiences, and pool resources to help each other grow. It was something I desired when I was working in tech, but never found, so I decided to build it. Last October, a group of us ladies met in Québec for the first retreat and the experience proved the importance of seeking and building such a community of connected minds.
                </p>
                <p className="subhead-2">
                  One of the things I love the most about building For the Women Retreat has been that I got to discover many other like-minded communities aiming for this very mission, such as Leap by Cadran and Hustle Crew by Abadesi.
                </p>
                <p className="subhead-2">
                  The more the three of us talked, the more obvious it was that we should work together, using our complimentary skills to make our shared vision real — building the most powerful network for women in tech. Software is more scalable, at least at the beginning, than in-person experiences, so we decided to lean into our strengths and focus on software first with the hope of introducing offline experiences such as a retreat later.
                </p>
                <p className="subhead-2">
                  In the past few months, we’ve been tinkering at what this network for women in tech could look like, using Leap as the foundation. If you identify with women, and work in tech (or hope to in the future), you can join Elpha today. We want Elpha to be the go-to resource for women in tech to access industry experts, learn from peers, and find answers to their most pressing personal and professional questions and, of course, make lasting friendships, just like what you will get out of a FTW Retreat, but online.
                </p>
                <p className="subhead-2">
                  Thank you for supporting FTW Retreat – Elpha has been co-founded as a result of this community, and I’m beyond grateful for the feedback and advice you’ve given.
                </p>
                <p className="subhead-2">
                Cheers,<br />
                Kuan<br />
                <br />
                PS: Bloomberg wrote a nice piece on our launch, and you can read about it <a href="https://www.bloomberg.com/news/articles/2019-02-04/y-combinator-s-women-only-forum-is-becoming-its-own-business?srnd=technology-vp" target="_blank">here</a>.
                </p>
              </div>

              <section className="checkout-button">
                <a href="https://elpha.com" target="_blank" className="button">
                  Join Elpha
                </a>
              </section>

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
                    <span className="caption-2">Product Advisor</span>
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
