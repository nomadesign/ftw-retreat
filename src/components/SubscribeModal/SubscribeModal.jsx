import React from 'react';
import Link from 'gatsby-link';
import SubscribeForm from 'components/SubscribeForm';

/*const SubscribeModal = () => (
  <section className="subscribe-modal-container">
    <div className="subscribe-modal-overlay overlay"></div>
    <div className="subscribe-modal">
      <button>close</button>
      <SubscribeForm />
    </div>
  </section>
);*/

class SubscribeModal extends React.Component {
  componentDidMount() {
    console.log('here');
    eval(
      "require(['mojo/signup-forms/Loader'], L => { L.start({ baseUrl: 'mc.us18.list-manage.com', uuid: 'a1476b213c1cdb5d968fa0c54', lid: '989581153d' });});"
    );
  }
  render() {
    return null;
  }
}

export default SubscribeModal;
