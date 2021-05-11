"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ModalCloseButton = function ModalCloseButton(_ref) {
  var className = _ref.className,
      closeText = _ref.closeText,
      props = _objectWithoutProperties(_ref, ["className", "closeText"]);

  return _react["default"].createElement("button", _extends({
    className: (0, _classnames["default"])('close', className)
  }, props), _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: "close",
    "aria-hidden": "true",
    title: closeText
  }), _react["default"].createElement("span", {
    className: "sr-only"
  }, closeText));
};

ModalCloseButton.defaultProps = {
  className: '',
  closeText: 'Close'
};
ModalCloseButton.propTypes = {
  /** additional classes */
  className: _propTypes["default"].string,

  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: _propTypes["default"].string
};
var _default = ModalCloseButton;
exports["default"] = _default;