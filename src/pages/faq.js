import React from 'react';
import Footer from 'components/Footer';
import Link from 'gatsby-link';

const FaqPage = () => (
  <div>
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

            <h3 className="subhead-1">How many women will attend the retreat?</h3>
            <p className="body-2">To get to know each other, and be able to share meals around one table, FTW Retreat in Mt. Tremblant will include 10 women only.</p>

            <h3 className="subhead-1">How much does the retreat cost?</h3>
            <p className="body-2">The retreat is all inclusive. Book your flight and meet us at Montreal airport and we’ll take care of everything else. Registration costs between $1,250 and $1,750 and includes 4 nights accommodations, and nourishing meals every day.</p>

            <h3 className="subhead-1">How to get to the retreat? </h3>
            <p className="body-2">The house on the slope side is about a 90-minute drive from downtown Montreal. The closest airport is Pierre Elliott Trudeau International Airport (YUL). We will meet at the YUL airport on Thursday, and share transportation to the house. If you plan to drive, let us know. </p>

            <h3 className="subhead-1">What time should my flight arrive by and leave at? </h3>
            <p className="body-2">Arrive by Thursday, Oct 4 at 3pm at Pierre Elliott Trudeau International Airport (YUL). And book your return flight no earlier than 2pm on Monday, Oct 8. </p>

            <h3 className="subhead-1">Can I have the same room as my friend if we both book a double room?</h3>
            <p className="body-2">Of course. Just let us know that you want to room together. </p>

            <h3 className="subhead-1">I’m vegan. Can I come? </h3>
            <p className="body-2">Of course. The chef will take care of all the dietary preferences, so you can enjoy every meal. </p>

            <h3 className="subhead-1">I’m not creative. Can I come? </h3>
            <p className="body-2">Creativity is the expression of doing the things you love. If you fancy the idea of having an agenda-free vacation with a small group of women in a beautiful house surrounded by nature, then this is the retreat for you. </p>

            <h3 className="subhead-1">Should I bring anything? </h3>
            <p className="body-2">Art supplies, sewing and knitting kits, books, anything that you want to dedicate the unstructured days to. </p>

            <h3 className="subhead-1">Wait, I have more questions!</h3>
            <p className="body-2">We got you. Email us <Link to="mailto:contact@forthewomenretreat.com" className="underline">contact@forthewomenretreat.com</Link>, and we will get back to you. </p>

          </div>
        </div>

      </div>
    </section>
    <Footer />
  </div>
);

export default FaqPage;
