import React from 'react';

class CheckoutButton extends React.Component {
  componentDidMount() {
    const { id } = this.props;

    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: id,
      modal: true,
      modalTriggerElementId: `eventbrite-widget-modal-trigger-${id}`
    });
  }
  render() {
    const { id } = this.props;

    return (
      <button id={`eventbrite-widget-modal-trigger-${id}`} type="button">
        Buy Tickets
      </button>
    );
  }
}

export default CheckoutButton;
