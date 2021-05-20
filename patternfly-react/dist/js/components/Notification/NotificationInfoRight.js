"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NotificationInfoRight = function NotificationInfoRight(_ref) {
  var text = _ref.text;
  return _react["default"].createElement("span", {
    className: "time"
  }, text);
};

NotificationInfoRight.propTypes = {
  /** Text */
  text: _propTypes["default"].string.isRequired
};
var _default = NotificationInfoRight;
exports["default"] = _default;