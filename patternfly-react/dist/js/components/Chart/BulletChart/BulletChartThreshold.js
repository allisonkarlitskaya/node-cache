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

var BulletChartThreshold = function BulletChartThreshold(_ref) {
  var className = _ref.className,
      threshold = _ref.threshold,
      vertical = _ref.vertical,
      percent = _ref.percent,
      maxValue = _ref.maxValue,
      props = _objectWithoutProperties(_ref, ["className", "threshold", "vertical", "percent", "maxValue"]);

  var percentValue = percent ? threshold : threshold / maxValue * 100;

  if (percentValue > 0 && percentValue <= 100) {
    var thresholdClasses = (0, _classnames["default"])('bullet-chart-pf-threshold-indicator', className);
    return _react["default"].createElement("div", _extends({
      className: thresholdClasses,
      style: {
        left: vertical ? undefined : "".concat(percentValue, "%"),
        bottom: vertical ? "".concat(percentValue, "%") : undefined
      }
    }, props));
  }

  return null;
};

BulletChartThreshold.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Threshold value */
  threshold: _propTypes["default"].number.isRequired,

  /** Vertical chart, default false */
  vertical: _propTypes["default"].bool,

  /** Option to use threshold value as a percentage, default is true */
  percent: _propTypes["default"].bool,

  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: _propTypes["default"].number
};
BulletChartThreshold.defaultProps = {
  className: '',
  vertical: false,
  percent: true,
  maxValue: 100
};
var _default = BulletChartThreshold;
exports["default"] = _default;