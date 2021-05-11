function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-collapse';
import { default as cx } from 'classnames';

const LoginFormError = (_ref) => {
  let {
    children,
    show,
    topErrorOnly,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "show", "topErrorOnly", "className"]);

  return React.createElement("div", {
    className: cx('login-form-error', className),
    style: topErrorOnly ? {
      minHeight: '20px'
    } : null
  }, React.createElement(Collapse, _extends({}, props, {
    isOpened: children !== null && show
  }), children));
};

LoginFormError.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** children nodes or text */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Controlls the collapse to open/close */
  show: PropTypes.bool,

  /** if it`s a login page with topErrorOnly, add a fixed space for the form error */
  topErrorOnly: PropTypes.bool
};
LoginFormError.defaultProps = {
  className: null,
  children: null,
  show: false,
  topErrorOnly: false
};
export default LoginFormError;