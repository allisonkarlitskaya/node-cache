"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Header is working properly', function () {
  var date = new Date('2019-01-04 14:22:31');
  var component = (0, _enzyme.shallow)(_react["default"].createElement("table", null, _react["default"].createElement(_Header["default"], {
    date: date
  })));
  expect(component.render()).toMatchSnapshot();
});
test('Header is working properly with different week start', function () {
  var date = new Date('2019-01-04 14:22:31');
  var component = (0, _enzyme.shallow)(_react["default"].createElement("table", null, _react["default"].createElement(_Header["default"], {
    date: date,
    weekStartsOn: 5
  })));
  expect(component.render()).toMatchSnapshot();
});