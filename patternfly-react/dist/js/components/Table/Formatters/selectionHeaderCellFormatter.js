"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../common/helpers");

var _TableSelectionHeading = _interopRequireDefault(require("../TableSelectionHeading"));

var _TableCheckbox = _interopRequireDefault(require("../TableCheckbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var selectionHeaderCellFormatter = function selectionHeaderCellFormatter(_ref) {
  var cellProps = _ref.cellProps,
      column = _ref.column,
      rows = _ref.rows,
      onSelectAllRows = _ref.onSelectAllRows;
  var unselectedRows = rows.filter(function (r) {
    return !r.selected;
  }).length > 0;
  var id = cellProps.id || 'selectAll';
  return _react["default"].createElement(_TableSelectionHeading["default"], _extends({
    "aria-label": column.header.label
  }, cellProps), _react["default"].createElement(_TableCheckbox["default"], {
    id: id,
    label: column.header.label,
    checked: !unselectedRows,
    onChange: onSelectAllRows
  }));
};

selectionHeaderCellFormatter.propTypes = {
  /** column header cell props */
  cellProps: _propTypes["default"].object,

  /** column definition */
  column: _propTypes["default"].object,

  /** current table rows */
  rows: _propTypes["default"].array,

  /** on select all rows callback */
  onSelectAllRows: _propTypes["default"].func
};
selectionHeaderCellFormatter.defaultProps = {
  cellProps: {},
  column: {},
  rows: [],
  onSelectAllRows: _helpers.noop
};
var _default = selectionHeaderCellFormatter;
exports["default"] = _default;