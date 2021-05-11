"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AreaChart = _interopRequireDefault(require("./AreaChart"));

var _BarChart = _interopRequireDefault(require("./BarChart"));

var _index = require("./BulletChart/index");

var _DonutChart = _interopRequireDefault(require("./DonutChart"));

var _GroupedBarChart = _interopRequireDefault(require("./GroupedBarChart"));

var _LineChart = _interopRequireDefault(require("./LineChart"));

var _PieChart = _interopRequireDefault(require("./PieChart"));

var _SingleAreaChart = _interopRequireDefault(require("./SingleAreaChart"));

var _SingleLineChart = _interopRequireDefault(require("./SingleLineChart"));

var _SparklineChart = _interopRequireDefault(require("./SparklineChart"));

var _StackedBarChart = _interopRequireDefault(require("./StackedBarChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Chart = {
  AreaChart: _AreaChart["default"],
  BarChart: _BarChart["default"],
  BulletChart: _index.BulletChart,
  DonutChart: _DonutChart["default"],
  GroupedBarChart: _GroupedBarChart["default"],
  LineChart: _LineChart["default"],
  PieChart: _PieChart["default"],
  SingleAreaChart: _SingleAreaChart["default"],
  SingleLineChart: _SingleLineChart["default"],
  SparklineChart: _SparklineChart["default"],
  StackedBarChart: _StackedBarChart["default"]
};
var _default = Chart;
exports["default"] = _default;