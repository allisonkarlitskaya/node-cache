"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LoginCardRememberMe = function LoginCardRememberMe(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["onClick", "label", "className"]);

  return label && _react["default"].createElement("label", {
    className: "checkbox-label ".concat(className)
  }, _react["default"].createElement("input", _extends({}, props, {
    type: "checkbox",
    onClick: onClick
  })), " ", label);
};

LoginCardRememberMe.propTypes = {
  /** The checkbox label. */
  label: _propTypes["default"].string,

  /** Additional css classes. */
  className: _propTypes["default"].string,

  /** Callback to trigger when clicking the checkbox */
  onClick: _propTypes["default"].func
};
LoginCardRememberMe.defaultProps = {
  label: null,
  className: '',
  onClick: _helpers.noop
};
var _default = LoginCardRememberMe;
exports["default"] = _default;