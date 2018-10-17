import React from 'react';
import Shell from 'layouts/Shell';
import Footer from 'modules/Footer';
import Link from 'gatsby-link';

const PrivacyPage = () => (
  <Shell>
    <section className="privacy">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title-1">Privacy Policy</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <p className="body-2">
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit{' '}
              <Link to="/">forthewomenretreat.com</Link> (the “Site”).
            </p>
            <p className="subhead-1">Personal information we collect</p>
            <p className="body-2">
              We collect personal information you provide to us, such as your email address. We also collect certain
              anonymized data about your usage of the site.
            </p>
            <p className="subhead-1">How do we use your personal information?</p>
            <p className="body-2">We use your personal information to communicate with you.</p>
            <p className="subhead-1">Sharing your personal information</p>
            <p className="body-2">
              We share your personal information with third parties to help us use your personal information, as
              described above. For example, we use Mailchimp to communicate with you -- you can read more about how
              Mailchimp uses your personal information <a href="https://mailchimp.com/legal/privacy">here</a>. We also
              use Google Analytics to help us understand how our customers use the site -- you can read more about how
              Google uses your personal information <a href="https://www.google.com/intl/en/policies/privacy/">here</a>.
              You can also opt out of Google Analytics <a href="https://tools.google.com/dlpage/gaoptout">here</a>.
            </p>
            <p className="body-2">
              Finally, we may also share your personal information to comply with applicable laws and regulations, to
              respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise
              protect our rights.
            </p>
            <p className="subhead-1">Do not track</p>
            <p className="body-2">We respect a Do Not Track signal from your browser.</p>
            <p className="subhead-1">Your rights</p>
            <p className="body-2">
              If you are a European resident, you have the right to access personal information we hold about you and to
              ask that your personal information be corrected, updated, or deleted. If you would like to exercise this
              right, please contact us through the contact information below.
            </p>
            <p className="body-2">
              Additionally, if you are a European resident, we note that we are processing your information in order to
              fulfill contracts we might have with you, or otherwise to pursue our legitimate business interests listed
              above. Additionally, please note that your information will be transferred outside of Europe, including to
              Canada and the United States.
            </p>
            <p className="subhead-1">Data retention</p>
            <p className="body-2">
              When you share your personal information, we will store it unless and until you ask us to delete this
              information.
            </p>
            <p className="subhead-1">Changes</p>
            <p className="body-2">
              We may update this privacy policy from time to time in order to reflect, for example, changes to our
              practices or for other operational, legal or regulatory reasons.
            </p>
            <p className="subhead-1">Contact us</p>
            <p className="body-2">
              For more information about our privacy practices, if you have questions, or if you would like to make a
              complaint, please contact us by e-mail at{' '}
              <a href="mailto:contact@forthewomenretreat.com">contact@forthewomenretreat.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer showRegistration="true" />
  </Shell>
);

export default PrivacyPage;
