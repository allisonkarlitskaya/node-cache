"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _TodayButton = _interopRequireDefault(require("./TodayButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mockedDate = new Date('2/21/2019, 3:22:31 PM');
global.Date = jest.fn(function () {
  return mockedDate;
});
global.Date.now = jest.fn(function () {
  return mockedDate;
});
test('TodayButton is working properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_TodayButton["default"], null));
  expect(component.render()).toMatchSnapshot();
});
test('TodayButton Click is setting the date', function () {
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_TodayButton["default"], {
    setSelected: setSelected
  }));
  var date = new Date();
  component.find('.today-button-pf').simulate('click');
  expect(setSelected).toBeCalledWith(date);
});