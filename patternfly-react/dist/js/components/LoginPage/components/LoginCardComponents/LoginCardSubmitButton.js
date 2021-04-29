"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LoginCardSubmitButton = function LoginCardSubmitButton(_ref) {
  var isDisabled = _ref.isDisabled,
      children = _ref.children,
      isLoading = _ref.isLoading,
      attributes = _ref.attributes;
  return _react["default"].createElement(_index.Button, _extends({
    className: "login-pf-submit-button",
    type: "submit",
    bsStyle: "primary",
    bsSize: "large",
    block: true,
    disabled: isDisabled
  }, attributes), children, isLoading ? _react["default"].createElement("span", null, ' ', _react["default"].createElement(_index.Spinner, {
    loading: isLoading,
    inline: true,
    size: "xs"
  })) : null);
};

LoginCardSubmitButton.propTypes = {
  /** Sets the button disability  */
  isDisabled: _propTypes["default"].bool,

  /** Children nodes */
  children: _propTypes["default"].string,

  /** Sets the spinner visibility */
  isLoading: _propTypes["default"].bool,

  /** Override the button attributes */
  attributes: _propTypes["default"].object
};
LoginCardSubmitButton.defaultProps = {
  isDisabled: false,
  children: null,
  isLoading: false,
  attributes: {}
};
var _default = LoginCardSubmitButton;
exports["default"] = _default;