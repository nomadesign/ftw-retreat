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

            <h3 className="subhead-1">What’s unique about FTW Retreat?</h3>
            <p className="body-2">
              FTW Retreat was designed to meet these two goals:
              <ul className="body-list">
                <li><strong>Intentionally small to foster connections:</strong> Share homemade meals, motherhood stories, skincare tips, career aspirations, and adventure tales with a total of 10 women.</li>
                <li><strong>Retreat at your own pace:</strong> Three full pliable days to honor the reader, artist and outdoorswoman in all of us. Sleep in or wake up early for a sunrise hike. The retreat is yours to play.</li>
              </ul>
            </p>

            <h3 className="subhead-1">How do I register for the Fall retreat?</h3>
            <p className="body-2">Our October retreat is sold out. <a href="#Footer">Join our newsletter</a> to be receive future retreat announcements. Hope to see you on a future FTW Retreat!</p>

            <h3 className="subhead-1">What’s the refund policy?</h3>
            <p className="body-2">Due to the intimate nature of the retreat, your payment will be non-refundable, but transferable towards a future retreat.</p>

            <h3 className="subhead-1">I'd love to have my company pay for my trip. How can I do it?</h3>
            <p className="body-2">
              Here is the list of what your company will get out of sending you to an FTW Retreat.
              <ul className="body-list">
                <li>You are a happier employee from being re-energized & inspired in nature and in the group.</li>
                <li>Your team will be more productive from discussing issues that your team faces with other experienced women leaders in tech.</li>
                <li>Your company will be on the radar for the group of women who might be looking for their next role.</li>
              </ul>
            </p>

            <h3 className="subhead-1">I’m vegan. Can I come? </h3>
            <p className="body-2">Of course. You are guaranteed to enjoy every meal.</p>

            <h3 className="subhead-1">I’m not creative. Can I come? </h3>
            <p className="body-2">Creativity is the expression of doing the things you love. If you fancy the idea of having an agenda-free vacation with a small group of women in a beautiful house surrounded by nature, then this is the retreat for you.</p>

            <h3 className="subhead-1">Can I have the same room as my friend if we both book a double room?</h3>
            <p className="body-2">Of course. Just let us know that you want to room together.</p>

            <h3 className="subhead-1">What should I bring?</h3>
            <p className="body-2">Art supplies, sewing and knitting kits, sketchbooks, journals — anything that you want to dedicate the unstructured days to.</p>

            <h3 className="subhead-1">Wait, I have more questions!</h3>
            <p className="body-2">We got you. Email us <Link to="mailto:contact@forthewomenretreat.com" className="underline">contact@forthewomenretreat.com</Link>, and we will get back to you. </p>

          </div>
        </div>

      </div>
    </section>
    <Footer showRegistration="true" />
  </div>
);

export default FaqPage;
