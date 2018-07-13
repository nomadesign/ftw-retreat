import React from 'react';
import Link from 'gatsby-link';

class CheckoutButton extends React.Component {
  componentDidMount() {
    const { id, showSecondaryCTA } = this.props;

    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: id,
      modal: true,
      modalTriggerElementId: `eventbrite-widget-modal-trigger-${id}`
    });
  }
  render() {
    const { id, showSecondaryCTA } = this.props;

    return (
      <section className="checkout-button">
        <button id={`eventbrite-widget-modal-trigger-${id}`} className="button" type="button">
          Reserve Your Spot
        </button>
        {showSecondaryCTA && (
          <div className="checkout-button-faq">
            Got more questions? Check out our <Link to="/faq" className="underline">FAQ</Link>.
          </div>
        )}
      </section>
    );
  }
}

export default CheckoutButton;
