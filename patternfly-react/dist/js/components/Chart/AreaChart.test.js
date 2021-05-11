"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('AreaChart renders properly', function () {
  expect((0, _enzyme.shallow)(_react["default"].createElement(_index.AreaChart, {
    id: "area-1",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});
test('SingleAreaChart renders properly', function () {
  expect((0, _enzyme.shallow)(_react["default"].createElement(_index.SingleAreaChart, {
    id: "area-2",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});