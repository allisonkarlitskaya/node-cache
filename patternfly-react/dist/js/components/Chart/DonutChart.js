"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactC3js = _interopRequireDefault(require("react-c3js"));

var _reactDom = require("react-dom");

var _recompose = require("recompose");

var _patternfly = require("../../common/patternfly");

var _ChartConstants = require("./ChartConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var pfSetDonutChartTitle = _patternfly.patternfly.pfSetDonutChartTitle;

var colIndexOfMaxValue = function colIndexOfMaxValue(columns) {
  return columns.reduce(function (iMax, x, i, arr) {
    return x[1] > arr[iMax][1] ? i : iMax;
  }, 0);
};

var truncateNum = function truncateNum(num, precision) {
  var pointNotation = num.toString().split('.');

  if (pointNotation.length === 1) {
    return pointNotation[0];
  }

  return "".concat(pointNotation[0], ".").concat(pointNotation[1].slice(0, precision));
};

var setDonutTitle = function setDonutTitle(obj) {
  var primary;
  var secondary;
  var props = obj.props;
  var data = props.data,
      _props$title = props.title,
      title = _props$title === void 0 ? {} : _props$title;
  var type = title.type,
      _title$precision = title.precision,
      precision = _title$precision === void 0 ? 0 : _title$precision;
  var columns = data.columns;
  var sum = columns.reduce(function (acc, x) {
    return acc + x[1];
  }, 0);
  var iMax = colIndexOfMaxValue(columns);
  var percentage = 100 * columns[iMax][1] / sum;

  switch (type) {
    case 'percent':
      primary = precision ? "".concat(truncateNum(percentage, precision), "%") : "".concat(Math.round(percentage), "%");

      var _columns$iMax = _slicedToArray(columns[iMax], 1);

      secondary = _columns$iMax[0];
      break;

    case 'max':
      primary = Math.round(columns[iMax][1]).toString();

      var _columns$iMax2 = _slicedToArray(columns[iMax], 1);

      secondary = _columns$iMax2[0];
      break;

    case 'total':
    default:
      primary = Math.round(sum).toString();
      break;
  }

  pfSetDonutChartTitle( // eslint-disable-next-line react/no-find-dom-node
  (0, _reactDom.findDOMNode)(obj), title.primary || primary, title.secondary || secondary);
};

var addDonutTitle = (0, _recompose.lifecycle)({
  componentDidMount: function componentDidMount() {
    setDonutTitle(this);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    setDonutTitle(this);
  }
});
var DonutChart = (0, _recompose.compose)((0, _ChartConstants.getComposer)('DONUT_CHART'), addDonutTitle)(function (_ref) {
  var className = _ref.className,
      type = _ref.type,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, ["className", "type", "data"]);

  return _react["default"].createElement(_reactC3js["default"], _extends({
    className: className,
    type: type,
    data: data
  }, props));
});
var _default = DonutChart;
exports["default"] = _default;