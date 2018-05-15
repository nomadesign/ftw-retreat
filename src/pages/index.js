import React from 'react';
import SubscribeForm from 'components/SubscribeForm';
import jamaica from 'images/jamaica-1.jpg';

const IndexPage = () => (
  <main className='container shape-container'>
    <div className='row'>
      <div className='col-1'>1</div>
      <div className='col-10'>
        <SubscribeForm />
      </div>
    </div>
  </main>
);

export default IndexPage;
