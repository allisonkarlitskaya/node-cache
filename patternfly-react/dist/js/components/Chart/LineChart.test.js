"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('LineChart renders properly', function () {
  expect((0, _enzyme.shallow)(_react["default"].createElement(_index.LineChart, {
    id: "area-1",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});
test('SingleLineChart renders properly', function () {
  expect((0, _enzyme.shallow)(_react["default"].createElement(_index.SingleLineChart, {
    id: "area-2",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});
test('SparklineChart renders properly', function () {
  expect((0, _enzyme.shallow)(_react["default"].createElement(_index.SparklineChart, {
    id: "area-3",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});