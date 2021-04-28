"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('DateTimePicker is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DateTimePicker, {
    value: "2/21/2019, 2:22:31 PM"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Edit form of DateTimePicker', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.DateTimePicker, {
    value: "2/21/2019, 2:22:31 PM"
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('input').simulate('change', {
    target: {
      value: '2/22/2019, 2:22:31 PM'
    }
  });
  component.find('input').simulate('blur');
  expect(component.state().value).toEqual(new Date('2/22/2019, 2:22:31 PM'));
});