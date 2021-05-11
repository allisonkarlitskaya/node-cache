function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../common/helpers';

const RemoveButton = (_ref) => {
  let {
    className,
    title,
    onRemoveClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "title", "onRemoveClick"]);

  const classes = classNames('pficon pficon-close', className);
  return React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onRemoveClick && onRemoveClick();
    },
    className: "pf-remove-button"
  }, React.createElement("span", _extends({
    className: classes
  }, props, {
    "aria-hidden": "true"
  })), React.createElement("span", {
    className: "sr-only"
  }, title));
};

RemoveButton.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** Reader title text */
  title: PropTypes.string,

  /** Callback when remove button is clicked */
  onRemoveClick: PropTypes.func
};
RemoveButton.defaultProps = {
  className: '',
  title: 'Remove',
  onRemoveClick: noop
};
export default RemoveButton;