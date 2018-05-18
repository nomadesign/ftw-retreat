import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = 'https://design.us18.list-manage.com/subscribe/post?u=84e246a772144cb0d4c59553a&amp;id=a15d1dc2f9';

const SubscribeForm = () => (
  <section className='subscribe-form'>

    <div className='subscribe-form-wrapper'>
      <input type='email' placeholder='Your email' />
      <button></button>
    </div>

  </section>
);

// <MailchimpSubscribe url={url} />

export default SubscribeForm;
