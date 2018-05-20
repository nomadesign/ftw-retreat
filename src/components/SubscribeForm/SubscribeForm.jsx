import React from 'react';
import SubscribeFormContents from './SubscribeFormContents';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = 'https://design.us18.list-manage.com/subscribe/post?u=84e246a772144cb0d4c59553a&amp;id=a15d1dc2f9';

const SubscribeForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <SubscribeFormContents status={status} message={message} subscribe={data => subscribe(data)} />
    )}
  />
);

export default SubscribeForm;
