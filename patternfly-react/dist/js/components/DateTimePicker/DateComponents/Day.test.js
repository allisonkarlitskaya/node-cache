"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Day = _interopRequireDefault(require("./Day"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Day is working properly', function () {
  var day = new Date('2019-01-04 14:22:31');
  var currDate = new Date('2019-01-02 12:22:31');
  var selectedDate = new Date('2019-01-05 18:22:31');
  var component = (0, _enzyme.shallow)(_react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement(_Day["default"], {
    day: day,
    currDate: currDate,
    selectedDate: selectedDate,
    classNamesArray: {
      weekend: true
    }
  })))));
  expect(component.render()).toMatchSnapshot();
});