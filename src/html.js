import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.headComponents}
          {process.env.EVENTBRITE_ACTIVE === true && (
            <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />
          )}
          <script
            type="text/javascript"
            src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js"
            data-dojo-config="usePlainJson: true, isDebug: false"
          />
          <script
            type="text/javascript"
            src="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
          />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
