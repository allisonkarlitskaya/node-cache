"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BulletChartRange = function BulletChartRange(_ref) {
  var className = _ref.className,
      value = _ref.value,
      percent = _ref.percent,
      maxValue = _ref.maxValue,
      index = _ref.index,
      color = _ref.color,
      vertical = _ref.vertical,
      props = _objectWithoutProperties(_ref, ["className", "value", "percent", "maxValue", "index", "color", "vertical"]);

  var rangeClasses = (0, _classnames["default"])('bullet-chart-pf-range-bar', "range-".concat(index), className);

  if (value > 0 && (percent ? value <= 100 : value <= maxValue)) {
    var showValue = percent ? value : value / maxValue * 100;
    var rangeStyle = {
      width: vertical ? undefined : "".concat(showValue, "%"),
      height: vertical ? "".concat(showValue, "%") : undefined,
      zIndex: Math.round(100 - showValue)
    };

    if (color) {
      rangeStyle.backgroundColor = color;
    }

    return _react["default"].createElement("div", _extends({
      className: rangeClasses,
      style: rangeStyle
    }, props));
  }

  return null;
};

BulletChartRange.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** End value for the range */
  value: _propTypes["default"].number.isRequired,

  /** Option to use end value as a percentage, default is true */
  percent: _propTypes["default"].bool,

  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: _propTypes["default"].number,

  /** Index for the range (1-3) */
  index: _propTypes["default"].number.isRequired,

  /** Optional color for the range, should use defaults but provided for flexibility */
  color: _propTypes["default"].string,

  /** Vertical chart, default false */
  vertical: _propTypes["default"].bool
};
BulletChartRange.defaultProps = {
  className: '',
  percent: true,
  maxValue: 100,
  color: '',
  vertical: false
};
var _default = BulletChartRange;
exports["default"] = _default;