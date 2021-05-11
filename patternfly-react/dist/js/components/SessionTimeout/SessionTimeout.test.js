"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

var _index2 = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var noop = function noop() {};

test('SessionTimeout render session timeout message dialog', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.SessionTimeout, {
    logoutFnc: noop,
    continueFnc: noop,
    timeLeft: 10,
    displayBefore: 20,
    continueContent: "continue button",
    logoutContent: "logout button",
    primaryContent: _react["default"].createElement("div", null, "Session Timeout"),
    secondaryContent: _react["default"].createElement("div", null, "This session is about to be terminated in 3..2..1..")
  }));
  expect(component).toMatchSnapshot();
});
test('SessionTimeout hidden when timeLeft bigger than displayBefore', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.SessionTimeout, {
    logoutFnc: noop,
    continueFnc: noop,
    displayBefore: 10,
    timeLeft: 11
  }));
  expect(component.find(_index2.MessageDialog).prop('show')).toBe(false);
});
test('SessionTimeout displayed when timeLeft not bigger than displayBefore', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.SessionTimeout, {
    logoutFnc: noop,
    continueFnc: noop,
    displayBefore: 10,
    timeLeft: 10
  }));
  expect(component.find(_index2.MessageDialog).prop('show')).toBe(true);
});