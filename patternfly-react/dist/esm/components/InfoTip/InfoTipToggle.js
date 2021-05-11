function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon'; // Must be a class component react-bootstrap passes a ref to this.
// eslint-disable-next-line react/prefer-stateless-function

class InfoTipToggle extends React.Component {
  render() {
    const _this$props = this.props,
          {
      bsClass,
      bsRole,
      children,
      open
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["bsClass", "bsRole", "children", "open"]);

    return React.createElement("a", _extends({
      href: "#",
      "aria-expanded": open
    }, props), React.createElement(Icon, {
      type: "pf",
      name: "info"
    }), " ", children);
  }

}

_defineProperty(InfoTipToggle, "propTypes", _objectSpread({}, Dropdown.propTypes, {
  children: PropTypes.node,
  open: PropTypes.bool,
  className: PropTypes.string
}));

_defineProperty(InfoTipToggle, "defaultProps", {
  bsRole: 'toggle',
  // eslint-disable-line react/default-props-match-prop-types
  children: null,
  open: false,
  className: ''
});

export default InfoTipToggle;