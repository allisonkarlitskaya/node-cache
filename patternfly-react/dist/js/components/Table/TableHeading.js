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
 * TableHeading component for Patternfly React
 */
var TableHeading = function TableHeading(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      sort = _ref.sort,
      sortDirection = _ref.sortDirection,
      props = _objectWithoutProperties(_ref, ["children", "className", "align", "sort", "sortDirection"]);

  var sortingClass = (0, _classnames["default"])({
    sorting_asc: sortDirection === _TableConstants.TABLE_SORT_DIRECTION.ASC,
    sorting_desc: sortDirection === _TableConstants.TABLE_SORT_DIRECTION.DESC
  });
  var classes = (0, _classnames["default"])({
    'text-right': align === _TableConstants.TABLE_ALIGN.RIGHT,
    'text-center': align === _TableConstants.TABLE_ALIGN.CENTER
  }, sort ? sortingClass || 'sorting' : '', className);
  return _react["default"].createElement("th", _extends({
    className: classes
  }, props), children);
};

TableHeading.propTypes = {
  /** Children nodes  */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Heading alignment */
  align: _propTypes["default"].oneOf(_TableConstants.TABLE_ALIGNMENT_TYPES),

  /** sortable heading */
  sort: _propTypes["default"].bool,

  /** sort direction */
  sortDirection: _propTypes["default"].oneOf(_TableConstants.TABLE_SORT_DIRECTIONS)
};
TableHeading.defaultProps = {
  children: null,
  className: '',
  sort: false,
  align: _TableConstants.TABLE_ALIGN.DEFAULT,
  sortDirection: _TableConstants.TABLE_SORT_DIRECTION.DEFAULT
};
var _default = TableHeading;
exports["default"] = _default;