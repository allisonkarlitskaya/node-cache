"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _MonthView = _interopRequireDefault(require("./MonthView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('MonthView is working properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_MonthView["default"], {
    date: "1/21/2019, 2:22:31 PM"
  }));
  expect(component.render()).toMatchSnapshot();
});