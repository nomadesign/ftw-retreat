import React from 'react';
import Link from 'gatsby-link';
import uuid from 'uuid/v4';

class CheckoutBanner extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = { uniqueID: uuid() };
  }

  componentDidMount() {
    const { id, showSecondaryCTA } = this.props;
    const { uniqueID } = this.state;

    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: id,
      modal: true,
      modalTriggerElementId: `eventbrite-widget-modal-trigger-${id}-${uniqueID}`
    });
  }

  render() {
    const { id, showSecondaryCTA } = this.props;
    const { uniqueID } = this.state;

    return (
      <div className="checkout-banner">
        <div className="subhead-1" id={`eventbrite-widget-modal-trigger-${id}-${uniqueID}`}>
          Registration for October 4-8 FTW Retreat in Québec is open. <u>Click to reserve your spot</u>.
        </div>
      </div>
    );
  }
}

export default CheckoutBanner;
