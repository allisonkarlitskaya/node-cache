"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NotificationInfoLeft = function NotificationInfoLeft(_ref) {
  var text = _ref.text;
  return _react["default"].createElement("span", {
    className: "date"
  }, text);
};

NotificationInfoLeft.propTypes = {
  /** Text */
  text: _propTypes["default"].string.isRequired
};
var _default = NotificationInfoLeft;
exports["default"] = _default;