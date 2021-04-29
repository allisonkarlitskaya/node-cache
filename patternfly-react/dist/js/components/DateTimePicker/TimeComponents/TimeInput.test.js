"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TimeInput = _interopRequireDefault(require("./TimeInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('TimeInput is working properly', function () {
  var time = new Date('2019-01-04 14:22:31');
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_TimeInput["default"], {
    time: time
  }));
  expect(component.render()).toMatchSnapshot();
});
test('TimeInput toggles view to hours', function () {
  var time = new Date('2019-01-04 14:22:31');
  var component = (0, _enzyme.mount)(_react["default"].createElement(_TimeInput["default"], {
    time: time
  }));
  component.find('.timepicker-hour').first().simulate('click');
  expect(component.render()).toMatchSnapshot();
});
test('TimeInput toggles view to minutes', function () {
  var time = new Date('2019-01-04 14:22:31');
  var component = (0, _enzyme.mount)(_react["default"].createElement(_TimeInput["default"], {
    time: time
  }));
  component.find('.timepicker-minute').first().simulate('click');
  expect(component.render()).toMatchSnapshot();
});
test('TimeInput is working properly with wrong time prop', function () {
  var time = new Date('ABC');
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_TimeInput["default"], {
    time: time
  }));
  var componentTime = component.get(0).props.children.props.time;
  var nowTime = new Date();
  expect(componentTime.getHours() === nowTime.getHours()).toBeTruthy();
});