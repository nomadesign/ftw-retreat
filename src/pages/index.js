import React from 'react';
import SubscribeForm from 'components/SubscribeForm';
import imgHero01 from 'images/hero-01.jpg';
import imgHero02 from 'images/hero-02.jpg';
import imgHeroShape from 'images/hero-shape.svg';
import imgSignature from 'images/history-signature.svg';
import imgAvatarBecca from 'images/avatar-becca.png';
import imgOrganizerShape from 'images/organizer-shape.svg';
import imgOrganizerKuan from 'images/organizer-kuan.jpg';

const IndexPage = () => (
  <div>

  <section className='hero'>

    <div className='container'>
      <div className='row'>

        <div className='col-1'></div>
        <div className='col-11'>
          <h1 className='headline'>
            A retreat for creative women in a beautiful environment.
          </h1>
        </div>

      </div>
      <div className='row'>

        <div className='col-1'></div>
        <div className='col-11'>
          <p className='subhead-2'>
            Sign-up for updates and be the first one to know
          </p>
        </div>

      </div>

      <div className='row'>
        <div className='col-1'></div>
        <div className='col-6'>
          <SubscribeForm />
        </div>
      </div>

      <div className='row'>

        <div className='col-5'>
          <img src={imgHero01} className='hidden-sm' />
        </div>
        <div className='col-7'>
          <div className='hero-shape-wrapper'>
            <img src={imgHeroShape} className='hero-shape' />
            <img src={imgHero02} />
          </div>
        </div>

      </div>
    </div>

  </section>

  <section className="history">

    <div className='container'>
      <div className='row'>

        <div className='col-4'>
          <p className='title-1'>
            <strong>Every body has a story.</strong><br />
            The introverted reader, the wild painter, the brilliant photographer,
            the clever writer, and the skilled dreamer in all of us.
          </p>
        </div>
        <div className='col-1'></div>
        <div className='col-7'>
          <p className='subhead-2'>
            Instead of filling ourselves up, we empty out and just be.
            Immersive 5-day experience for creative women, honoring.
          </p>
          <p className='subhead-2'>
             We need time to take a break from our routine, to take care of ourselves,
            the creative, quiet, yet demanding child inside each of us, yearning to read,
            paint, sleep, draw, sew to our heart’s content. This is the space for such desire,
            demand and responsibility. We’re responsible for our creative child within.
            Read Artist’s Way and do all the exercises, read 3 books in 4 days, catch up
            with our creative child inside, and feel nourished and ready when we leave.
          </p>
          <p className='subhead-2'>
             The untendered soul is waiting for us to share experience with other women,
            of all background, age and work. All women coming together to celebrate
            our truth. Our creativity, our true responsibility.
          </p>
          <p className='subhead-2'>
            Go within, or go without.
              <img src={imgSignature} className='history-signature' />
          </p>
        </div>

      </div>
    </div>
  </section>


  <section className='testimonial'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='title-1'>What women say</h2>
        </div>
      </div>

      <div className='row'>
        <div className='col-1'></div>
        <div className='col-5'>
          <p className='body-2'>
            “Within brings together women from different backgrounds and
            experiences, to share what challenges have shaped them, what
            questions they are grappling with, and what dreams they have for
            our collective future.”
          </p>
          <div className='media'>
            <img src={imgAvatarBecca} width='48' className='media-figure' alt='Becca' />
            <p className='body-1 media-body'>
              Becca
            </p>
          </div>
        </div>
        <div className='col-5'>
          <p className='body-2'>
            “Within brings together women from different backgrounds and
            experiences, to share what challenges have shaped them, what
            questions they are grappling with, and what dreams they have for
            our collective future.”
          </p>
          <div className='media'>
            <img src={imgAvatarBecca} width='48' className='media-figure' alt='Becca' />
            <p className='body-1 media-body'>
              Becca
            </p>
          </div>
        </div>
        <div className='col-1'></div>
      </div>

    </div>
  </section>

  <section className='organizer'>

    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <hr />
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='row organizer-wrapper'>
        <div className='col-1'></div>
        <div className='col-7'>

            <div className='organizer-card'>
              <h3 className='subhead-1'>About the organizer</h3>
              <p className='body-2'>
                Kuan Luo was launched in 2016, to bridge the gap between the once
                a year connections, empowerment and inspiration that happen at our
                conference. The Yellow Collective was built to create similar
                experiences that happen at the conference on a daily basis to all
                members.
              </p>
            </div>

            <img src={imgOrganizerKuan} className='organizer-kuan' />
            <img src={imgOrganizerShape} className='organizer-shape' />
        </div>
      </div>
    </div>

  </section>

  <section className='footer'>
    <div className='container'>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <h3 className='title-2 center'>Subscribe</h3>
          <p className='subhead-2 center'>
            Sign-up for updates and be the first one to know
          </p>
          <SubscribeForm />
        </div>
      </div>
    </div>
  </section>

  </div>
);

export default IndexPage;
