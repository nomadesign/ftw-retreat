import React from 'react';
import Link from 'gatsby-link';
import uuid from 'uuid/v4';

class CheckoutButton extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = { uniqueID: uuid() };
  }
  componentDidMount() {
    const { id } = this.props;
    const { uniqueID } = this.state;

    if (!window.EBWidgets) return;

    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: id,
      modal: true,
      modalTriggerElementId: `eventbrite-widget-modal-trigger-${id}-${uniqueID}`
    });
  }
  render() {
    const { id, showSecondaryCTA, label, soldOut } = this.props;
    const { uniqueID } = this.state;

    return (
      <section className="checkout-button">
        <button
          id={`eventbrite-widget-modal-trigger-${id}-${uniqueID}`}
          disabled={soldOut}
          className="button"
          type="button"
        >
          {label || 'Reserve Your Spot'}
        </button>
        {showSecondaryCTA && (
          <div className="checkout-button-faq">
            Got more questions? Check out our{' '}
            <Link to="/faq" className="underline">
              FAQ
            </Link>
            .
          </div>
        )}
      </section>
    );
  }
}

export default CheckoutButton;