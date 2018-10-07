import React from 'react';
import Instafeed from 'instafeed.js';

class InstagramFeed extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = { error: false };
  }

  componentDidMount() {
    // additional Instafeed options here: https://github.com/stevenschobert/instafeed.js#standard-options
    new Instafeed({
      target: `instagram-feed`,
      get: 'user',
      userId: process.env.INSTAGRAM_USER_ID,
      accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
      limit: 6,
      sortBy: 'most-recent',
      links: true,
      resolution: 'thumbnail',
      template: tpl => {
        return (
          <a href="{{link}}" target="_blank" rel="noopener noreferrer">
            <img src="{{image}}" />
          </a>
        );
      },
      error: err => {
        this.setState({ error: err });
      }
    }).run();
  }

  render() {
    const { error } = this.state;

    if (error) {
      return null;
    }

    return <div className="instagram-feed" id="instagram-feed" />;
  }
}

export default InstagramFeed;
