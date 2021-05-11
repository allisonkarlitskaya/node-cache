"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _recompose = require("recompose");

var _VerticalNavConstants = require("./VerticalNavConstants");

var _VerticalNavItemHelper = _interopRequireDefault(require("./VerticalNavItemHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * VerticalNav.SecondaryItem - a child component for secondary nav items under VerticalNav
 * This is a thin wrapper for VerticalNavItemHelper, to expose the warnings and the explicit-depth API.
 * In the future, we could lift some of the secondary-specific code from Helper into this file.
 */
var BaseVerticalNavSecondaryItem = function BaseVerticalNavSecondaryItem(props) {
  if ((0, _VerticalNavConstants.wrongDepth)(props, 'secondary')) {
    return (0, _VerticalNavConstants.correctDepth)(props);
  }

  return _react["default"].createElement(_VerticalNavItemHelper["default"], props);
};

BaseVerticalNavSecondaryItem.propTypes = _objectSpread({}, _VerticalNavItemHelper["default"].propTypes);
var VerticalNavSecondaryItem = (0, _recompose.getContext)(_VerticalNavConstants.navContextTypes)(BaseVerticalNavSecondaryItem);
VerticalNavSecondaryItem.propTypes = _objectSpread({}, BaseVerticalNavSecondaryItem.propTypes);
VerticalNavSecondaryItem.displayName = 'VerticalNav.SecondaryItem';
var _default = VerticalNavSecondaryItem;
exports["default"] = _default;