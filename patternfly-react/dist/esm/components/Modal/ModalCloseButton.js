function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

const ModalCloseButton = (_ref) => {
  let {
    className,
    closeText
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "closeText"]);

  return React.createElement("button", _extends({
    className: classNames('close', className)
  }, props), React.createElement(Icon, {
    type: "pf",
    name: "close",
    "aria-hidden": "true",
    title: closeText
  }), React.createElement("span", {
    className: "sr-only"
  }, closeText));
};

ModalCloseButton.defaultProps = {
  className: '',
  closeText: 'Close'
};
ModalCloseButton.propTypes = {
  /** additional classes */
  className: PropTypes.string,

  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: PropTypes.string
};
export default ModalCloseButton;