import React from 'react';

class SubscribeModal extends React.Component {
  componentDidMount() {
    window.require(['mojo/signup-forms/Loader'], L => {
      L.start({
        baseUrl: 'mc.us18.list-manage.com',
        uuid: process.env.MAILCHIMP_UUID,
        lid: process.env.MAILCHIMP_LID
      });
    });
  }
  render() {
    return null;
  }
}

export default SubscribeModal;
