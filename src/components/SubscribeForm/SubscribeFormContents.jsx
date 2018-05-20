import React from 'react';

const SubscribeFormContents = ({ status, message, subscribe }) => {
  let email;

  const submit = e => {
    e.preventDefault();
    subscribe({ EMAIL: email.value });
  };

  return (
    <section className="subscribe-form">
      <p className="subhead-2">Sign-up for updates and be the first one to know</p>
      <form className="subscribe-form-wrapper" onSubmit={submit}>
        <input type="email" placeholder="Your email" ref={node => (email = node)} required />
        <button type="submit" value="Submit" />
      </form>
      {status === 'error' && <p className='subscribe-form-error error' dangerouslySetInnerHTML={{ __html: message }} />}
      {status === 'success' && <p className='subscribe-form-success'>Thank you for subscribing! We'll be in touch soon ❤️</p>}
    </section>
  );
};

export default SubscribeFormContents;
