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

var BulletChartTitle = function BulletChartTitle(_ref) {
  var className = _ref.className,
      label = _ref.label,
      details = _ref.details,
      props = _objectWithoutProperties(_ref, ["className", "label", "details"]);

  var titleContainerClasses = (0, _classnames["default"])('bullet-chart-pf-title-container', className);
  return _react["default"].createElement("div", _extends({
    className: titleContainerClasses
  }, props), _react["default"].createElement("div", {
    className: "bullet-chart-pf-title"
  }, label), _react["default"].createElement("div", {
    className: "bullet-chart-pf-details"
  }, details));
};

BulletChartTitle.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Label text */
  label: _propTypes["default"].string,

  /** Details text */
  details: _propTypes["default"].string
};
BulletChartTitle.defaultProps = {
  className: '',
  label: '',
  details: ''
};
var _default = BulletChartTitle;
exports["default"] = _default;