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

var BulletChartLegendItem = function BulletChartLegendItem(_ref) {
  var className = _ref.className,
      title = _ref.title,
      value = _ref.value,
      color = _ref.color,
      boxClassName = _ref.boxClassName,
      tooltipFunction = _ref.tooltipFunction,
      tooltipId = _ref.tooltipId,
      props = _objectWithoutProperties(_ref, ["className", "title", "value", "color", "boxClassName", "tooltipFunction", "tooltipId"]);

  var classes = (0, _classnames["default"])('bullet-chart-pf-legend-item', className);
  var boxClasses = (0, _classnames["default"])('bullet-chart-pf-legend-item-box', boxClassName);

  var TooltipFunction = function TooltipFunction() {
    if (tooltipFunction) {
      return tooltipFunction(title, value, color);
    }

    return _react["default"].createElement(_index2.Tooltip, {
      id: tooltipId || randomId()
    }, "".concat(title, ": ").concat(value, "%"));
  };

  return _react["default"].createElement(_index.OverlayTrigger, _extends({
    overlay: TooltipFunction(title, value, color),
    placement: "top",
    trigger: ['hover', 'focus'],
    rootClose: false
  }, props), _react["default"].createElement("span", {
    className: classes
  }, _react["default"].createElement("span", {
    className: boxClasses,
    style: {
      backgroundColor: color
    }
  }), _react["default"].createElement("span", {
    className: "bullet-chart-pf-legend-item-text"
  }, title)));
};

BulletChartLegendItem.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Text for the legend item */
  title: _propTypes["default"].string,

  /* Value of the item */
  value: _propTypes["default"].number,

  /* Color for the box */
  color: _propTypes["default"].string,

  /** Additional css classes for the box */
  boxClassName: _propTypes["default"].string,

  /** Tooltip function(title, value, color) to render tooltip contents */
  tooltipFunction: _propTypes["default"].func,

  /** Tooltip ID */
  tooltipId: _propTypes["default"].string
};
BulletChartLegendItem.defaultProps = {
  className: '',
  title: '',
  value: 0,
  color: undefined,
  boxClassName: '',
  tooltipFunction: undefined,
  tooltipId: undefined
};
var _default = BulletChartLegendItem;
exports["default"] = _default;