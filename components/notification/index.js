import React from 'react';
import PropTypes from 'prop-types';

/**
 * Notification - all page simple full page notification panel
 */
class Notification extends React.Component {
  /**
   * constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * returns JSX
   * @return {html}
   */
  render() {
    return (
      <div className={`alert alert-${this.props.theme} alert-dismissible`}>
        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
        {this.props.message}
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string,
  theme: PropTypes.string,
};

export default Notification;
