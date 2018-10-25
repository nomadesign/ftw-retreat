import React from 'react';
import Shell from 'layouts/Shell';
import Footer from 'modules/Footer';

const FaqPage = () => (
  <Shell>
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
            <p className="body-2">
              This is a living document, and subject to refinement and expansion in the future. Last updated on
              September 20, 2018.
            </p>

            <p className="body-2">
              Everyone participating in FTW Retreat is required to agree to the following Code of Conduct. This includes
              all attendees, organizers, and contractors. Anyone who violates this Code of Conduct may be sanctioned or
              expelled from the retreat at the discretion of the organizers.
            </p>

            <h3 className="title-3">A welcoming experience for everyone </h3>

            <p className="body-2">
              We welcome and support women of all backgrounds and identities. This includes, but is not limited to
              members of any race, ethnicity, culture, national origin, colour, immigration status, social and economic
              class, educational level, sexual orientation, gender identity and expression, age, size, family status,
              political belief, religion, and mental and physical ability.
            </p>

            <h3 className="title-3">Inclusive language</h3>

            <p className="body-2">
              We strongly believe it’s important to pay attention to harmful language patterns. Remember you might not
              be communicating in someone else's primary language.
            </p>

            <p className="body-2">
              <ul className="body-list">
                <li>
                  <strong>Ableism:</strong> Words like "crazy", "dumb", "insane" or "lame" are examples of ableist
                  language, devaluating people who have physical or mental disabilities. Its appearance often stems not
                  from any intentional desire to offend, but from our innate sense of what it means to be normal. These
                  words can be avoided by using more fitting, clearer descriptions of what we want to communicate. To
                  find out more about ableism and replacement terms please read{' '}
                  <a href="https://www.autistichoya.com/p/ableist-words-and-terms-to-avoid.html">this guide</a>.
                </li>
                <li>
                  <strong>Sexism:</strong> Using gendered terms like "dude" or "guys" to address a mixed-gendered group
                  of people contributes to furthering exclusion of underrepresented individuals. We strongly advise
                  avoiding gendered pronouns as well as gendered terms. For more information please familiarise yourself
                  with <a href="http://geekfeminism.wikia.com/wiki/Nonsexist_language">Geek Feminism wiki guide</a>.
                </li>
              </ul>
            </p>

            <h3 className="title-3">Anti-harassment</h3>

            <p className="body-2">
              We are professionals, and we conduct ourselves professionally. Harassment and other exclusionary behavior
              aren't acceptable. This includes, but is not limited to:
            </p>

            <p className="body-2">
              <ul className="body-list">
                <li>
                  Offensive comments related to gender, gender identity and expression, sexual orientation, disability,
                  mental illness, neurotype, physical appearance, body, age, race, ethnicity, nationality, language, or
                  religion
                </li>
                <li>
                  Unwelcome comments regarding a person’s lifestyle choices and practices, including those related to
                  food, health, parenting, drugs, and employment
                </li>
                <li>Deliberate misgendering or use of ‘dead’ or rejected names</li>
                <li>Gratuitous or off-topic sexual images or behaviour in spaces where they’re not appropriate</li>
                <li>
                  Physical contact and simulated physical contact (eg, textual descriptions like “hug” or “backrub”)
                  without consent or after a request to stop
                </li>
                <li>Threats of violence</li>
                <li>
                  Incitement of violence towards any individual, including encouraging a person to commit suicide or to
                  engage in self-harm
                </li>
                <li>Deliberate intimidation</li>
                <li>Stalking or following</li>
                <li>Harassing photography or recording, including logging online activity for harassment purposes</li>
                <li>Sustained disruption of discussion</li>
                <li>Unwelcome sexual attention</li>
                <li>
                  Pattern of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy
                  with others
                </li>
                <li>Continued one-on-one communication after requests to cease</li>
              </ul>
            </p>

            <h3 className="title-3">Enforcement</h3>

            <p className="body-2">
              Attendees asked to stop any harassing behavior are expected to comply immediately. If an attendee engages
              in harassing behaviour, we may take any action we deem appropriate to keep the retreat a welcoming
              environment for all attendees.
            </p>

            <h3 className="title-3">Reporting</h3>

            <p className="body-2">
              If someone makes you or anyone else feel unsafe or unwelcome, please make a report immediately either in
              person or via email at <a href="mailto:contact@forthewomenretreat.com">contact@forthewomenretreat.com</a>.
            </p>

            <p className="body-2">
              When taking a personal report, we will ensure you are safe and cannot be overheard. They may involve other
              retreat staff to ensure your report is managed properly. Once safe, we'll ask you to tell us about what
              happened. This can be upsetting, but we'll handle it as respectfully as possible, and you can bring
              someone to support you. You won't be asked to confront anyone and we won't tell anyone who you are.
            </p>

            <h3 className="title-3">Thanks</h3>
            <p className="body-2 no-margin">
              This Code of Conduct was based on resources provided by{' '}
              <a href="https://2018.xoxofest.com/conduct">XOXO Fest</a>,{' '}
              <a href="https://2018.jsconfau.com/code-of-conduct">JSConf AU</a> and{' '}
              <a href="https://www.djangoproject.com/conduct/">Django</a>. It is licensed under a{' '}
              <a href="https://creativecommons.org/licenses/by/4.0/">
                Creative Commons Attribution 4.0 International license
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer showRegistration="true" />
  </Shell>
);

export default FaqPage;
