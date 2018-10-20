import React from 'react';

const SubscribeFormContents = ({ status, message, subscribe }) => {
  let email;

  const submit = e => {
    e.preventDefault();
    subscribe({ EMAIL: email.value });
  };

  return (
    <section className="subscribe-form">
      {status !== 'success' && <p className="title-2">Join our newsletter</p>}
      {status !== 'success' && <p className="subhead-2">Registration opening soon. Sign up to be the first to know</p>}
      {status !== 'success' && (
        <form className="subscribe-form-wrapper" onSubmit={submit}>
          <input
            type="email"
            placeholder="Your email"
            ref={node => (email = node)}
            disabled={status === 'sending'}
            required
          />
          <button type="submit" value="Submit" disabled={status === 'sending'} />
        </form>
      )}
      {status === 'error' && <p className="subscribe-form-error error" dangerouslySetInnerHTML={{ __html: message }} />}
      {status === 'success' && (
        <p className="subscribe-form-success">Thank you for subscribing! We'll be in touch soon ❤️</p>
      )}
    </section>
  );
};

export default SubscribeFormContents;
