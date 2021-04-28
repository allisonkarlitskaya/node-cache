"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _PickTimeClock = _interopRequireDefault(require("./PickTimeClock"));

var _TimeConstants = require("./TimeConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('PickTimeClock is working properly', function () {
  var time = new Date('2/21/2019, 2:22:31 PM');
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_PickTimeClock["default"], {
    time: time
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Edit minutes of PickTimeClock', function () {
  var time = new Date('2/21/2019, 2:22:31 PM');
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_PickTimeClock["default"], {
    time: time,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('[title~="Minute"][title~="Increment"]').simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2019, 2:23:31 PM'));
  component.find('[title~="Minute"][title~="Decrement"]').simulate('click');
  component.find('[title~="Minute"][title~="Decrement"]').simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2019, 2:21:31 PM'));
});
test('Edit hours of PickTimeClock', function () {
  var time = new Date('2/21/2019, 2:22:31 PM');
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_PickTimeClock["default"], {
    time: time,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('[title~="Hour"][title~="Increment"]').simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2019, 3:22:31 PM'));
  component.find('[title~="Hour"][title~="Decrement"]').simulate('click');
  component.find('[title~="Hour"][title~="Decrement"]').simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2019, 1:22:31 PM'));
});
test('Toggle hours of PickTimeClock', function () {
  var time = new Date('2/21/2019, 12:22:31 PM');
  var component = (0, _enzyme.mount)(_react["default"].createElement(_PickTimeClock["default"], {
    time: time
  }));
  expect(component.state().ampm).toEqual(_TimeConstants.PM);
  component.find('.ampm-toggle').simulate('click');
  expect(component.state().ampm).toEqual(_TimeConstants.AM);
  expect(component.render()).toMatchSnapshot();
  component.find('.ampm-toggle').simulate('click');
  expect(component.state().ampm).toEqual(_TimeConstants.PM);
});
test('Toggle TimeTable hour from PickTimeClock', function () {
  var time = new Date('2/21/2019, 12:22:31 PM');
  var toggleTimeTable = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_PickTimeClock["default"], {
    time: time,
    toggleTimeTable: toggleTimeTable
  }));
  component.find('.timepicker-hour').simulate('click');
  expect(toggleTimeTable).toBeCalledWith(_TimeConstants.HOUR);
});
test('Toggle TimeTable minute from PickTimeClock', function () {
  var time = new Date('2/21/2019, 12:22:31 PM');
  var toggleTimeTable = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_PickTimeClock["default"], {
    time: time,
    toggleTimeTable: toggleTimeTable
  }));
  component.find('.timepicker-minute').simulate('click');
  expect(toggleTimeTable).toBeCalledWith(_TimeConstants.MINUTE);
});