import React from 'react';
import Footer from 'components/Footer';
import Link from 'gatsby-link';

const FaqPage = () => (
  <div>
    <section className="conduct">
      <div className="container">

        <div className="row">
          <div className="col-12">

            <h1 className="title-1">Code of Conduct</h1>

          </div>
        </div>

        <div className="row">
          <div className="col-1" />
          <div className="col-10">

            <h3 className="title-3">Purpose</h3>

            <p className="body-2">
              For the Women Retreat is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age or religion. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks.
            </p>
            <p className="body-2">
              Conference participants or anyone interacting with the event violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.
            </p>

            <h3 className="title-3">Anti-harassment</h3>
            <p className="body-2">
              Harassment includes, but is not limited to:

              <ul className="body-list">
                <li>Verbal or written comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion</li>
                <li>Sexual images in public spaces</li>
                <li>Deliberate intimidation, stalking, or following</li>
                <li>Harassing photography or recording</li>
                <li>Sustained disruption of talks or other events</li>
                <li>Inappropriate physical contact</li>
                <li>Unwelcome sexual attention</li>
                <li>Advocating for, or encouraging, any of the above behaviour</li>
              </ul>
            </p>

            <h3 className="title-3">Enforcement</h3>
            <p className="body-2">Participants asked to stop any harassing behavior are expected to comply immediately.</p>
            <p className="body-2">If a participant engages in harassing behaviour, event organisers retain the right to take any actions to keep the event a welcoming environment for all participants. This includes warning the offender or expulsion from the conference with no refund.</p>
            <p className="body-2">Event organisers may take action to redress anything designed to, or with the clear impact of, disrupting the event or making the environment hostile for any participants. We expect participants to follow these rules at all event venues, event-related social activities as well as social media.</p>

            <h3 className="title-3">Reporting</h3>
            <p className="body-2">If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. Conference staff can be identified by t-shirts. Harassment and other Code of Conduct violations reduce the value of our event for everyone. We want you to be happy at our event. People like you make our event a better place. You can make a report either personally or anonymously.</p>

            <h3 className="subhead-1">Anonymous report</h3>
            <p className="body-2">You can make an anonymous report here. We can not follow up an anonymous report with you directly, but we will fully investigate it and take whatever action is necessary to prevent a recurrence.</p>

            <h3 className="subhead-1">Personal report</h3>
            <p className="body-2">
            You can make a personal report by:

              <ul className="body-list">
                <li>Contacting a staff member, identified by STAFF badges, buttons, or shirts.</li>
                <li>Emailing us: team@jsconfau.com</li>
              </ul>
            </p>

          </div>
        </div>

      </div>
    </section>
    <Footer showRegistration="true" />
  </div>
);

export default FaqPage;
