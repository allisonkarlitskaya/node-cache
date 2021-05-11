"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('DonutChart renders properly', function () {
  expect((0, _enzyme.shallow)(_react["default"].createElement(_index.DonutChart, {
    id: "area-1",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});