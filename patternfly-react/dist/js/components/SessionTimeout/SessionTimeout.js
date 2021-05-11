"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../index");

var _CountDownSessionTimeout = _interopRequireDefault(require("./CountDownSessionTimeout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SessionTimeout = function SessionTimeout(props) {
  return _react["default"].createElement(_index.MessageDialog, {
    show: props.timeLeft > 0 && props.timeLeft <= props.displayBefore,
    primaryActionButtonContent: props.continueContent,
    primaryAction: props.continueFnc,
    secondaryActionButtonContent: props.logoutContent,
    secondaryAction: props.logoutFnc,
    primaryContent: props.primaryContent,
    secondaryContent: props.secondaryContent,
    onHide: props.logoutFnc,
    icon: _react["default"].createElement(_index.Icon, {
      type: "pf",
      name: "warning-triangle-o"
    })
  });
};

SessionTimeout.propTypes = {
  timeLeft: _propTypes["default"].number.isRequired,
  displayBefore: _propTypes["default"].number,
  continueContent: _propTypes["default"].node,
  continueFnc: _propTypes["default"].func.isRequired,
  logoutContent: _propTypes["default"].node,
  logoutFnc: _propTypes["default"].func.isRequired,
  primaryContent: _propTypes["default"].node,
  secondaryContent: _propTypes["default"].node
};
SessionTimeout.defaultProps = {
  displayBefore: 10,
  continueContent: 'Continue Session',
  logoutContent: 'Log Out',
  primaryContent: _react["default"].createElement("p", {
    className: "lead"
  }, "Your session is about to expire"),
  secondaryContent: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "You will be logged out in a few seconds."), _react["default"].createElement("p", null, "To continue your session click on the Continue Session button."))
};
SessionTimeout.CountDown = _CountDownSessionTimeout["default"];
var _default = SessionTimeout;
exports["default"] = _default;