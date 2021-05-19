"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoginPageLink = _interopRequireDefault(require("../LoginPageComponents/LoginPageLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LoginCardForgotPassword = function LoginCardForgotPassword(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  return _react["default"].createElement(_LoginPageLink["default"], props, label);
};

LoginCardForgotPassword.propTypes = {
  /** The forgot password label. */
  label: _propTypes["default"].string
};
LoginCardForgotPassword.defaultProps = {
  label: 'Forgot password?'
};
var _default = LoginCardForgotPassword;
exports["default"] = _default;