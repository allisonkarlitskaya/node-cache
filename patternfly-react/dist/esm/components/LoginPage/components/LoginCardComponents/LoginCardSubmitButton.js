function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spinner } from '../../../../index';

const LoginCardSubmitButton = ({
  isDisabled,
  children,
  isLoading,
  attributes
}) => React.createElement(Button, _extends({
  className: "login-pf-submit-button",
  type: "submit",
  bsStyle: "primary",
  bsSize: "large",
  block: true,
  disabled: isDisabled
}, attributes), children, isLoading ? React.createElement("span", null, ' ', React.createElement(Spinner, {
  loading: isLoading,
  inline: true,
  size: "xs"
})) : null);

LoginCardSubmitButton.propTypes = {
  /** Sets the button disability  */
  isDisabled: PropTypes.bool,

  /** Children nodes */
  children: PropTypes.string,

  /** Sets the spinner visibility */
  isLoading: PropTypes.bool,

  /** Override the button attributes */
  attributes: PropTypes.object
};
LoginCardSubmitButton.defaultProps = {
  isDisabled: false,
  children: null,
  isLoading: false,
  attributes: {}
};
export default LoginCardSubmitButton;