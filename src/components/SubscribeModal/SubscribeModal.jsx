import React from 'react';
import Link from 'gatsby-link';
import SubscribeForm from 'components/SubscribeForm';

class SubscribeModal extends React.Component {
  componentDidMount() {
    /* load mailchimp modal subscribe widget */
    window.require(['mojo/signup-forms/Loader'], L => {
      L.start({ baseUrl: 'mc.us18.list-manage.com', uuid: 'a1476b213c1cdb5d968fa0c54', lid: '989581153d' });
    });
  }
  render() {
    return null;
  }
}

export default SubscribeModal;
