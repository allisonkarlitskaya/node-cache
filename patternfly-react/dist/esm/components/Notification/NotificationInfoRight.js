import React from 'react';
import PropTypes from 'prop-types';

const NotificationInfoRight = ({
  text
}) => React.createElement("span", {
  className: "time"
}, text);

NotificationInfoRight.propTypes = {
  /** Text */
  text: PropTypes.string.isRequired
};
export default NotificationInfoRight;