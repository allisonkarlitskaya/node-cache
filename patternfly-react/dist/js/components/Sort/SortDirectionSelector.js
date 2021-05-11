"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../Button");

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SortDirectionSelector = function SortDirectionSelector(_ref) {
  var className = _ref.className,
      isNumeric = _ref.isNumeric,
      isAscending = _ref.isAscending,
      props = _objectWithoutProperties(_ref, ["className", "isNumeric", "isAscending"]);

  var directionName;

  if (isNumeric) {
    directionName = isAscending ? 'sort-numeric-asc' : 'sort-numeric-desc';
  } else {
    directionName = isAscending ? 'sort-alpha-asc' : 'sort-alpha-desc';
  }

  return _react["default"].createElement(_Button.Button, _extends({
    bsStyle: "link",
    className: className
  }, props), _react["default"].createElement(_Icon.Icon, {
    type: "fa",
    className: "sort-direction",
    name: directionName
  }));
};

SortDirectionSelector.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Boolean if current sort type is numeric */
  isNumeric: _propTypes["default"].bool,

  /** Boolean if current sort direction is ascending */
  isAscending: _propTypes["default"].bool
};
SortDirectionSelector.defaultProps = {
  className: '',
  isNumeric: true,
  isAscending: true
};
var _default = SortDirectionSelector;
exports["default"] = _default;