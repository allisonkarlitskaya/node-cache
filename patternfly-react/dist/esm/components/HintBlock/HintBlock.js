function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

const HintBlock = (_ref) => {
  let {
    className,
    onClose,
    title,
    body,
    buttonContent,
    onButtonClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "onClose", "title", "body", "buttonContent", "onButtonClick"]);

  const classes = classNames('hint-block-pf', className);
  return React.createElement("div", _extends({
    className: classes
  }, props), onClose && React.createElement("button", {
    type: "button",
    className: "close",
    "aria-hidden": "true",
    "aria-label": "Close",
    onClick: onClose
  }, React.createElement("span", {
    className: "pficon pficon-close"
  })), React.createElement("div", {
    className: "hint-block-pf-title"
  }, title), React.createElement("div", {
    className: "hint-block-pf-body"
  }, body), buttonContent && React.createElement("button", {
    className: "btn btn-primary",
    type: "button",
    onClick: onButtonClick
  }, buttonContent));
};

HintBlock.propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** Close callback, if not provided the block will not be closable */
  onClose: PropTypes.func,

  /** Title for the hint block */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /** Body of the hint block */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

  /** Optional button contents for the hint block */
  buttonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Callback for the button if buttonContent is provided */
  onButtonClick: PropTypes.func
};
HintBlock.defaultProps = {
  className: '',
  onClose: null,
  buttonContent: null,
  onButtonClick: noop
};
export default HintBlock;