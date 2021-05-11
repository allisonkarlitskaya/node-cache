"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DecadeView = _interopRequireDefault(require("./DecadeView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('DecadeView is working properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_DecadeView["default"], null));
  expect(component.render()).toMatchSnapshot();
});
test('Edit year DecadeView', function () {
  var date = new Date('2/21/2019, 2:22:31 PM');
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_DecadeView["default"], {
    date: date,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.year').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2010, 2:22:31 PM'));
});
test('Edit decade DecadeView', function () {
  var date = new Date('2/21/2019, 2:22:31 PM');
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_DecadeView["default"], {
    date: date,
    setSelected: setSelected
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.next').first().simulate('click');
  component.find('.year').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2020, 2:22:31 PM'));
  component.find('.prev').first().simulate('click');
  component.find('.year').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2/21/2010, 2:22:31 PM'));
});