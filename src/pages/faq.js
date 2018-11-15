import React from 'react';
import Shell from 'layouts/Shell';
import Footer from 'modules/Footer';
import Link from 'gatsby-link';

const FaqPage = () => (
  <Shell>
    <section className="faq">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title-1">Frequently Asked Questions</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <h3 className="subhead-1">What is FTW Retreat?</h3>
            <p className="body-2">
              The women who have attended the FTW Retreat describe the experience as:
              <ul className="body-list">
                <li>
                  A place you can go to and have a really long, deep conversation, with a diverse group of women, that you haven't made time or space to have.
                </li>
                <li>
                  A chance to spend time, have fun and converse with a diverse array of women leaders in tech.
                </li>
                <li>
                  The perfect time and space to be creative, to enjoy some stillness, and to learn from other boss women.
                </li>
              </ul>
            </p>

            <h3 className="subhead-1">What’s unique about FTW Retreat?</h3>
            <p className="body-2">
              FTW Retreat was designed to meet these two goals:
              <ul className="body-list">
                <li>
                  Intentionally small to foster connections: Share homemade meals, motherhood stories,
                  skincare tips, career aspirations, and adventure tales with a total of 10 women.
                </li>
                <li>
                  Retreat at your own pace: Three full pliable days to honor the reader, artist and
                  outdoorswoman in all of us. Sleep in or wake up early for a sunrise hike. The retreat is yours to
                  play.
                </li>
              </ul>
            </p>

            <h3 className="subhead-1">How much is the retreat and how do I register for it?</h3>
            <p className="body-2">
              All-inclusive pricing ranges between $1,750 to $2,750 depending on your room choices. Just take care of your flight to Nassau, and we've got you covered for the rest. <Link to="/book" className="underline">Click here to reserve your spot.</Link>
            </p>

            <h3 className="subhead-1">What time should my flight arrive by and leave at?</h3>
            <p className="body-2">
              Arrive at Lynden Pindling International Airport (NAS) by 2pm on Thursday, February 7, and book your return flight no earlier than 3pm on Monday, February 11.
            </p>

            <h3 className="subhead-1">How do we get to the house?</h3>
            <p className="body-2">
              We will meet at the Lynden Pindling International Airport (NAS) on Thursday at 2pm, and take a short flight to Eleuthera together. Upon arriving in Eleuthera, the house is just a 10-minute drive away.
            </p>

            <h3 className="subhead-1">What’s the refund policy?</h3>
            <p className="body-2">
              Due to the intimate nature of the retreat, your payment will be non-refundable, but transferable towards a
              future retreat.
            </p>

            <h3 className="subhead-1">I'd love to have my company pay for my trip. How can I do it?</h3>
            <p className="body-2">
              Send <Link to="https://docs.google.com/document/d/1sjeZxoO8sts4Q5_sM2OwdlASDFd5plbw-IHQ4eKbX6U/edit" className="underline">this</Link> to your boss, inspired by <Link to="https://www.getmoney-getpaid.com/" className="underline">Ladies Get Paid conference</Link>.
            </p>

            <h3 className="subhead-1">I’m not creative. Can I come? </h3>
            <p className="body-2">
              Creativity is the expression of doing the things you love. If you fancy the idea of having an agenda-free
              vacation with a small group of women in a beautiful house surrounded by nature, then this is the retreat
              for you.
            </p>

            <h3 className="subhead-1">I’m vegetarian/gluten-free/vegan. Can I come?</h3>
            <p className="body-2">Of course. You are guaranteed to enjoy every meal.</p>

            <h3 className="subhead-1">Can I have the same room as my friend if we both book a double room?</h3>
            <p className="body-2">Of course. Just let us know that you want to room together.</p>

            <h3 className="subhead-1">What should I bring?</h3>
            <p className="body-2">
              Art supplies, sewing and knitting kits, sketchbooks, journals — anything that you want to dedicate the
              unstructured days to.
            </p>

            <h3 className="subhead-1">Wait, I have more questions!</h3>
            <p className="body-2 no-margin">
              We got you. Email us{' '}
              <Link to="mailto:contact@forthewomenretreat.com" className="underline">
                contact@forthewomenretreat.com
              </Link>
              , and we will get back to you.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer showRegistration="true" />
  </Shell>
);

export default FaqPage;
