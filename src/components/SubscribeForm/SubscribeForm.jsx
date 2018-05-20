import React from 'react';
import SubscribeFormContents from './SubscribeFormContents';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url =
  'https://forthewomenretreat.us18.list-manage.com/subscribe/post?u=a1476b213c1cdb5d968fa0c54&amp;id=989581153d';

const SubscribeForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <SubscribeFormContents status={status} message={message} subscribe={data => subscribe(data)} />
    )}
  />
);

export default SubscribeForm;
