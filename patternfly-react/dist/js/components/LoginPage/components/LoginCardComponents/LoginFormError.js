"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCollapse = _interopRequireDefault(require("react-collapse"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LoginFormError = function LoginFormError(_ref) {
  var children = _ref.children,
      show = _ref.show,
      topErrorOnly = _ref.topErrorOnly,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "show", "topErrorOnly", "className"]);

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('login-form-error', className),
    style: topErrorOnly ? {
      minHeight: '20px'
    } : null
  }, _react["default"].createElement(_reactCollapse["default"], _extends({}, props, {
    isOpened: children !== null && show
  }), children));
};

LoginFormError.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** children nodes or text */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** Controlls the collapse to open/close */
  show: _propTypes["default"].bool,

  /** if it`s a login page with topErrorOnly, add a fixed space for the form error */
  topErrorOnly: _propTypes["default"].bool
};
LoginFormError.defaultProps = {
  className: null,
  children: null,
  show: false,
  topErrorOnly: false
};
var _default = LoginFormError;
exports["default"] = _default;