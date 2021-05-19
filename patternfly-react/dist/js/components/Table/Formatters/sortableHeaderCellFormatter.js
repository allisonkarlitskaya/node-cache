"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../common/helpers");

var _TableHeading = _interopRequireDefault(require("../TableHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var sortableHeaderCellFormatter = function sortableHeaderCellFormatter(_ref) {
  var cellProps = _ref.cellProps,
      column = _ref.column,
      sortingColumns = _ref.sortingColumns,
      onSort = _ref.onSort;
  var sortDirection = sortingColumns[column.property] && sortingColumns[column.property].direction;
  return _react["default"].createElement(_TableHeading["default"], _extends({
    onClick: function onClick(e) {
      onSort(e, column, sortDirection);
    },
    sort: true,
    sortDirection: sortDirection,
    "aria-label": column.header.label
  }, cellProps), column.header.label);
};

sortableHeaderCellFormatter.propTypes = {
  /** column header cell props */
  cellProps: _propTypes["default"].object,

  /** column definition */
  column: _propTypes["default"].object,

  /** sorting object definition */
  sortingColumns: _propTypes["default"].object,

  /** onSort callback */
  onSort: _propTypes["default"].func
};
sortableHeaderCellFormatter.defaultProps = {
  cellProps: {},
  column: {},
  sortingColumns: {},
  onSort: _helpers.noop
};
var _default = sortableHeaderCellFormatter;
exports["default"] = _default;