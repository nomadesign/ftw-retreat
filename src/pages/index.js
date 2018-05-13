import React from 'react';
import SubscribeForm from 'components/SubscribeForm';
import jamaica from 'images/jamaica-1.jpg';

const IndexPage = () => (
  <div>
    <h1>A retreat for accomplished women in a beautiful environment.</h1>
    <SubscribeForm />
    <img src={jamaica} />
  </div>
);

export default IndexPage;
