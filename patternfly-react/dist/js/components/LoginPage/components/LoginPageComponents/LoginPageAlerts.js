"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _LoginPageAlert = _interopRequireDefault(require("./LoginPageAlert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LoginPageAlerts = function LoginPageAlerts(_ref) {
  var alert = _ref.alert;

  if ((0, _lodash.isEmpty)(alert)) {
    return null;
  }

  if ((0, _lodash.isArray)(alert)) {
    return alert.map(function (item, index) {
      return _react["default"].createElement(_LoginPageAlert["default"], _extends({
        key: index
      }, item));
    });
  }

  return _react["default"].createElement(_LoginPageAlert["default"], alert);
};

LoginPageAlerts.propTypes = {
  alert: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object])
};
LoginPageAlerts.defaultProps = {
  alert: null
};
var _default = LoginPageAlerts;
exports["default"] = _default;