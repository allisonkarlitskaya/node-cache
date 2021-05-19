"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DateInput = _interopRequireDefault(require("./DateInput"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('DateInput is working properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_DateInput["default"], {
    date: "1/21/2019, 2:22:31 PM"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('DateInput changes selected on click', function () {
  var setSelected = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_DateInput["default"], {
    date: "1/21/2019, 2:22:31 PM",
    setSelected: setSelected
  }));
  component.find('.weekend').first().simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2019-01-04 14:22:31'));
});
test('DateInput toggles view to years', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_DateInput["default"], {
    date: "1/21/2019, 2:22:31 PM"
  }));
  component.find('.picker-switch').first().simulate('click');
  expect(component.render()).toMatchSnapshot();
});
test('DateInput toggles view to decades', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_DateInput["default"], {
    date: "1/21/2019, 2:22:31 PM"
  }));
  component.find('.picker-switch').first().simulate('click');
  component.find('.picker-switch').first().simulate('click');
  expect(component.render()).toMatchSnapshot();
});
test('DateInput is working properly with wrong date format', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_DateInput["default"], {
    date: "ABC"
  }));
  expect((0, _helpers.isEqualDate)(component.get(0).props.children.props.date, new Date())).toBeTruthy();
});