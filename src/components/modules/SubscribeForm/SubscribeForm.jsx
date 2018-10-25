import React from 'react';
import SubscribeFormContents from './SubscribeFormContents';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const SubscribeForm = () => (
  <MailchimpSubscribe
    url={process.env.MAILCHIMP_URL}
    render={({ subscribe, status, message }) => (
      <SubscribeFormContents status={status} message={message} subscribe={data => subscribe(data)} />
    )}
  />
);

export default SubscribeForm;
