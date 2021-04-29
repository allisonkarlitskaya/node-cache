"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('BarChart renders properly', function () {
  expect((0, _enzyme.shallow)(_react["default"].createElement(_index.BarChart, {
    id: "area-1",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});
test('GroupedBarChart renders properly', function () {
  expect((0, _enzyme.shallow)(_react["default"].createElement(_index.GroupedBarChart, {
    id: "area-2",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});
test('StackedBarChart renders properly', function () {
  expect((0, _enzyme.shallow)(_react["default"].createElement(_index.StackedBarChart, {
    id: "area-3",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});