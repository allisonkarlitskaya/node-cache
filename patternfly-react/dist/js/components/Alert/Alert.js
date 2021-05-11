"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../Button");

var _Icon = require("../Icon");

var _helpers = require("./helpers");

var _AlertConstants = require("./AlertConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Alert Component for Patternfly React
 */
var Alert = function Alert(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onDismiss = _ref.onDismiss,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["children", "className", "onDismiss", "type"]);

  (0, _helpers.warnIfDeprecatedType)(type);
  var alertClass = (0, _classnames["default"])('alert', className, (0, _helpers.getClassName)(type), {
    'alert-dismissable': onDismiss
  });
  var iconName = (0, _helpers.getIconName)(type);
  return _react["default"].createElement("div", _extends({
    className: alertClass
  }, props), onDismiss && _react["default"].createElement(_Button.Button, {
    bsClass: "close",
    "aria-hidden": "true",
    onClick: onDismiss
  }, _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: "close"
  })), _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: iconName
  }), children);
};

Alert.propTypes = {
  /** additional alert classes */
  className: _propTypes["default"].string,

  /** callback when alert is dismissed  */
  onDismiss: _propTypes["default"].func,

  /** the type of alert  */
  type: _propTypes["default"].oneOf([].concat(_toConsumableArray(_AlertConstants.ALERT_TYPES), _toConsumableArray(_AlertConstants.DEPRECATED_ALERT_TYPES))),

  /** children nodes  */
  children: _propTypes["default"].node
};
Alert.defaultProps = {
  className: '',
  onDismiss: null,
  // we do not want to default noop b/c of conditional dismiss button
  type: _AlertConstants.ALERT_TYPE_ERROR,
  children: null
};
Alert.ALERT_TYPES = _AlertConstants.ALERT_TYPES;
var _default = Alert;
exports["default"] = _default;