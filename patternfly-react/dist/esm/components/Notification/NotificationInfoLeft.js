import React from 'react';
import PropTypes from 'prop-types';

const NotificationInfoLeft = ({
  text
}) => React.createElement("span", {
  className: "date"
}, text);

NotificationInfoLeft.propTypes = {
  /** Text */
  text: PropTypes.string.isRequired
};
export default NotificationInfoLeft;