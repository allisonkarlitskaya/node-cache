"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TableConstants = require("./TableConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * TableCell component for Patternfly React
 */
var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      props = _objectWithoutProperties(_ref, ["children", "className", "align"]);

  var classes = (0, _classnames["default"])({
    'text-right': align === _TableConstants.TABLE_ALIGN.RIGHT,
    'text-center': align === _TableConstants.TABLE_ALIGN.CENTER
  }, className);
  return _react["default"].createElement("td", _extends({
    className: classes
  }, props), children);
};

TableCell.propTypes = {
  /** Children nodes  */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Cell alignment */
  align: _propTypes["default"].oneOf(_TableConstants.TABLE_ALIGNMENT_TYPES)
};
TableCell.defaultProps = {
  children: null,
  className: '',
  align: _TableConstants.TABLE_ALIGN.DEFAULT
};
var _default = TableCell;
exports["default"] = _default;