import React from 'react';

class CheckoutEmbed extends React.Component {
  componentDidMount() {
    const { id } = this.props;

    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: id,
      iframeContainerId: `eventbrite-widget-container-${id}`,
      // Optional
      iframeContainerHeight: 425 // Widget height in pixels. Defaults to a minimum of 425px if not provided
    });
  }
  render() {
    const { id } = this.props;

    return <div id={`eventbrite-widget-container-${id}`} />;
  }
}

export default CheckoutEmbed;
