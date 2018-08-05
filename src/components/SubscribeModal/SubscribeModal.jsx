import React from 'react';
import Link from 'gatsby-link';
import SubscribeForm from 'components/SubscribeForm';

const SubscribeModal = () => (
  <section className="subscribe-modal-container">
    <div className="subscribe-modal-overlay overlay"></div>
    <div className="subscribe-modal">
      <button>close</button>
      <SubscribeForm />
    </div>
  </section>
);

export default SubscribeModal;
