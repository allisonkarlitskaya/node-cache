"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHART_CONFIG = exports.getComposer = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _reactC3js = _interopRequireDefault(require("react-c3js"));

var _patternfly = require("../../common/patternfly");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Chart defaults
 */
var CHART_CONFIG = {
  AREA_CHART: {
    type: 'area',
    displayName: 'AreaChart',
    className: 'area-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultAreaConfig()
  },
  BAR_CHART: {
    type: 'bar',
    displayName: 'BarChart',
    className: 'bar-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultBarConfig()
  },
  DONUT_CHART: {
    type: 'donut',
    displayName: 'DonutChart',
    className: 'donut-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultDonutConfig()
  },
  GROUPED_BAR_CHART: {
    type: 'bar',
    displayName: 'GroupedBarChart',
    className: 'bar-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultGroupedBarConfig()
  },
  LINE_CHART: {
    type: 'line',
    displayName: 'LineChart',
    className: 'line-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultLineConfig()
  },
  PIE_CHART: {
    type: 'pie',
    displayName: 'PieChart',
    className: 'pie-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultPieConfig()
  },
  SINGLE_AREA_CHART: {
    type: 'area',
    displayName: 'SingleAreaChart',
    className: 'area-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultSingleAreaConfig()
  },
  SINGLE_LINE_CHART: {
    type: 'line',
    displayName: 'SingleLineChart',
    className: 'line-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultSingleLineConfig()
  },
  SPARKLINE_CHART: {
    type: 'area',
    displayName: 'SparklineChart',
    className: 'chart-pf-sparkline',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultSparklineConfig()
  },
  STACKED_BAR_CHART: {
    type: 'bar',
    displayName: 'StackedBarChart',
    className: 'bar-chart-pf',
    defaultConfig: _patternfly.c3ChartDefaults.getDefaultStackedBarConfig()
  }
};
/**
 * Helper functions
 */

exports.CHART_CONFIG = CHART_CONFIG;

var mapChartProps = function mapChartProps(name, props) {
  var newProps = Object.assign({}, props); // Set chart type

  if (props.data && !props.data.type) {
    newProps.data.type = props.type;
  }

  return newProps;
};

var getComposer = function getComposer(name) {
  var config = CHART_CONFIG[name];
  return (0, _recompose.compose)((0, _recompose.setDisplayName)(config.displayName), (0, _recompose.setPropTypes)(_objectSpread({
    data: _propTypes["default"].object.isRequired
  }, _reactC3js["default"].propTypes)), (0, _recompose.defaultProps)(_objectSpread({
    type: config.type,
    className: config.className
  }, config.defaultConfig)), (0, _recompose.mapProps)(function (props) {
    return mapChartProps(name, props);
  }));
};
/**
 * Exports functions
 */


exports.getComposer = getComposer;