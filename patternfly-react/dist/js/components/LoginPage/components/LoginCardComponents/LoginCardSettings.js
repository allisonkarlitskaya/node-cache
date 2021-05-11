"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LoginCardRememberMe = _interopRequireDefault(require("./LoginCardRememberMe"));

var _index = require("../../../../index");

var _LoginCardForgotPassword = _interopRequireDefault(require("./LoginCardForgotPassword"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LoginCardSettings = function LoginCardSettings(_ref) {
  var rememberMe = _ref.rememberMe,
      forgotPassword = _ref.forgotPassword,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["rememberMe", "forgotPassword", "className"]);

  return rememberMe.label || forgotPassword.label ? _react["default"].createElement(_index.FormGroup, _extends({}, props, {
    className: (0, _classnames["default"])('login-pf-settings', className)
  }), _react["default"].createElement(_LoginCardRememberMe["default"], rememberMe), _react["default"].createElement(_LoginCardForgotPassword["default"], forgotPassword)) : null;
};

LoginCardSettings.propTypes = {
  /** Additional css classes. */
  className: _propTypes["default"].string,

  /** RememberMe component's props. */
  rememberMe: _propTypes["default"].shape(_objectSpread({}, _LoginCardRememberMe["default"].propTypes)),

  /** ForgotPassword component's props. */
  forgotPassword: _propTypes["default"].shape(_objectSpread({}, _LoginCardForgotPassword["default"].propTypes))
};
LoginCardSettings.defaultProps = {
  className: null,
  rememberMe: {},
  forgotPassword: {}
};
var _default = LoginCardSettings;
exports["default"] = _default;