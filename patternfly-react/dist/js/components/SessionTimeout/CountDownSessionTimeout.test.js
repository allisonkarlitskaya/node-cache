"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CountDownSessionTimeout = _interopRequireDefault(require("./CountDownSessionTimeout"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('CountDownSessionTimeout init timeLeft > displayBefore', function () {
  jest.useFakeTimers();
  var sessionTime = 15;
  var component = (0, _enzyme.mount)(_react["default"].createElement(_CountDownSessionTimeout["default"], {
    timeLeft: 10,
    displayBefore: 3,
    sessionTime: sessionTime
  }));
  expect(component.find(_index.MessageDialog).prop('show')).toBe(false);
  jest.advanceTimersByTime(7000);
  component = component.update(); // after 7 seconds session timeout dialog is supposed to be shown

  expect(component.find(_index.MessageDialog).prop('show')).toBe(true);
  component.find('.btn-primary').simulate('click'); // clicking on 'continue' should hide the dialog message
  // and show it again after 12 seconds

  expect(component.find(_index.MessageDialog).prop('show')).toBe(false);
  expect(component.state().timeLeft).toBe(sessionTime);
  jest.advanceTimersByTime(12000);
  component = component.update();
  expect(component.find(_index.MessageDialog).prop('show')).toBe(true);
  jest.advanceTimersByTime(3000);
  component = component.update(); // after not doing anything session should be terminated

  expect(component.find(_index.MessageDialog).prop('show')).toBe(false);
  expect(component.state().timeLeft).toBe(0);
});
test('CountDownSessionTimeout init timeLeft < displayBefore', function () {
  jest.useFakeTimers();
  var sessionTime = 15;
  var component = (0, _enzyme.mount)(_react["default"].createElement(_CountDownSessionTimeout["default"], {
    timeLeft: 5,
    displayBefore: 10,
    sessionTime: sessionTime
  }));
  expect(component.find(_index.MessageDialog).prop('show')).toBe(true);
  jest.advanceTimersByTime(5000);
  component = component.update();
  expect(component.find(_index.MessageDialog).prop('show')).toBe(false);
});
test('CountDownSessionTimeout clicking logout terminates session', function () {
  jest.useFakeTimers();
  var sessionTime = 15;
  var component = (0, _enzyme.mount)(_react["default"].createElement(_CountDownSessionTimeout["default"], {
    timeLeft: 4,
    displayBefore: 4,
    sessionTime: sessionTime
  }));
  expect(component.find(_index.MessageDialog).prop('show')).toBe(true);
  component.find('.btn-default').simulate('click');
  expect(component.find(_index.MessageDialog).prop('show')).toBe(false);
  expect(component.state().timeLeft).toBe(0);
});