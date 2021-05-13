"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _YearView = _interopRequireDefault(require("./YearView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('YearView is working properly', function () {
  var date = new Date('2/21/2019, 2:22:31 PM');
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_YearView["default"], {
    date: date
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Edit month YearView', function () {
  var date = new Date('2/21/2019, 2:22:31 PM');
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_YearView["default"], {
    date: date,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.month').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('1/21/2019, 2:22:31 PM'));
});
test('Edit year and month YearView', function () {
  var date = new Date('2/21/2019, 2:22:31 PM');
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_YearView["default"], {
    date: date,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.next').first().simulate('click');
  component.find('.month').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('1/21/2020, 2:22:31 PM'));
  component.find('.prev').first().simulate('click');
  component.find('.month').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('1/21/2019, 2:22:31 PM'));
});