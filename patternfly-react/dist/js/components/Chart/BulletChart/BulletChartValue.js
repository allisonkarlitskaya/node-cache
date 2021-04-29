"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("../../OverlayTrigger/index");

var _index2 = require("../../Tooltip/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var randomId = function randomId() {
  return Date.now();
};

var BulletChartValue = function BulletChartValue(_ref) {
  var className = _ref.className,
      value = _ref.value,
      percent = _ref.percent,
      maxValue = _ref.maxValue,
      prevValue = _ref.prevValue,
      dot = _ref.dot,
      vertical = _ref.vertical,
      props = _objectWithoutProperties(_ref, ["className", "value", "percent", "maxValue", "prevValue", "dot", "vertical"]);

  var usedMax = percent ? 100 : maxValue;
  var percentValue = percent ? value.value + prevValue : (value.value + prevValue) / maxValue * 100;
  var showValue = Math.min(Math.max(percentValue, 0), usedMax * 1.2);

  var TooltipFunction = function TooltipFunction() {
    if (value.tooltipFunction) {
      return value.tooltipFunction(value.value, value.title);
    }

    var tipText = "".concat(value.title, ": ").concat(value.value).concat(percent ? '%' : '');
    return _react["default"].createElement(_index2.Tooltip, {
      id: value.tooltipId || randomId()
    }, tipText);
  };

  var valueClasses = (0, _classnames["default"])({
    'bullet-chart-pf-value-dot': dot,
    'bullet-chart-pf-value-bar': !dot
  }, className);
  var valueComponent;

  if (dot) {
    valueComponent = _react["default"].createElement("div", _extends({
      className: valueClasses,
      style: {
        left: vertical ? undefined : "".concat(showValue, "%"),
        bottom: vertical ? "".concat(showValue, "%") : undefined,
        backgroundColor: value.color,
        zIndex: Math.round(100 + showValue)
      }
    }, props));
  } else {
    var prevShowValue = percent ? prevValue : prevValue / maxValue * 100;
    valueComponent = _react["default"].createElement("div", _extends({
      className: valueClasses,
      style: {
        left: vertical ? undefined : "".concat(prevShowValue, "%"),
        width: vertical ? undefined : "".concat(showValue - prevShowValue, "%"),
        bottom: vertical ? "".concat(prevShowValue, "%") : undefined,
        height: vertical ? "".concat(showValue - prevShowValue, "%") : undefined,
        backgroundColor: value.color,
        zIndex: Math.round(400 - showValue)
      }
    }, props));
  }

  return _react["default"].createElement(_index.OverlayTrigger, {
    key: value.title,
    overlay: TooltipFunction(value),
    placement: vertical ? 'right' : 'top',
    trigger: ['hover', 'focus'],
    rootClose: false
  }, valueComponent);
};

BulletChartValue.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Value */
  value: _propTypes["default"].shape({
    value: _propTypes["default"].number.isRequired,
    title: _propTypes["default"].string,
    color: _propTypes["default"].string,
    tooltipFunction: _propTypes["default"].func,
    tooltipId: _propTypes["default"].string
  }).isRequired,

  /** Option to use value as a percentage, default is true */
  percent: _propTypes["default"].bool,

  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: _propTypes["default"].number,

  /** Previous value (for stacked charts), default 0 */
  prevValue: _propTypes["default"].number,

  /** Display a dot rather than a bar, default false */
  dot: _propTypes["default"].bool,

  /** Vertical chart, default false */
  vertical: _propTypes["default"].bool
};
BulletChartValue.defaultProps = {
  className: '',
  percent: true,
  maxValue: 100,
  prevValue: 0,
  dot: false,
  vertical: false
};
var _default = BulletChartValue;
exports["default"] = _default;