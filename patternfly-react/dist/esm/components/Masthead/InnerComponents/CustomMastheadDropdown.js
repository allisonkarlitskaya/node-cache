import React from 'react';
import PropTypes from 'prop-types';
/**
 * Custom Masthead Dropdown
 */

const CustomMastheadDropdown = ({
  className,
  children
}) => React.createElement("li", {
  className: className
}, children);

CustomMastheadDropdown.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** Children elements */
  children: PropTypes.node
};
CustomMastheadDropdown.defaultProps = {
  className: '',
  children: null
};
export default CustomMastheadDropdown;