import React from 'react';

const SubscribeFormContents = ({ status, message, subscribe }) => {
  let email;

  const submit = e => {
    e.preventDefault();
    subscribe({ EMAIL: email.value });
  };

  return (
    <section className="subscribe-form">
      <form className="subscribe-form-wrapper" onSubmit={submit}>
        <input type="email" placeholder="Your email" ref={node => (email = node)} required />
        <button type="submit" value="Submit" />
      </form>
      {status === 'sending' && <span>Submitting...</span>}
      {status === 'error' && <span dangerouslySetInnerHTML={{ __html: message }} />}
      {status === 'success' && <span>Thank you for subscribing! We'll be in touch.</span>}
    </section>
  );
};

export default SubscribeFormContents;
