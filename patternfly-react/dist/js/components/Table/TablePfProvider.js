"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Table = require("./Table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * TablePfProvider component for Patternfly React
 */
var TablePfProvider = function TablePfProvider(_ref) {
  var children = _ref.children,
      className = _ref.className,
      dataTable = _ref.dataTable,
      striped = _ref.striped,
      bordered = _ref.bordered,
      inlineEdit = _ref.inlineEdit,
      hover = _ref.hover,
      condensed = _ref.condensed,
      components = _ref.components,
      props = _objectWithoutProperties(_ref, ["children", "className", "dataTable", "striped", "bordered", "inlineEdit", "hover", "condensed", "components"]);

  var headerCell = function headerCell(cellProps) {
    return cellProps.children;
  };

  var tableCell = function tableCell(cellProps) {
    return cellProps.children;
  };

  var tableRow = function tableRow(rowProps) {
    return _react["default"].createElement("tr", rowProps, rowProps.children);
  };

  tableRow.shouldComponentUpdate = true;
  components.header = Object.assign({
    cell: headerCell
  }, components.header || {});
  components.body = Object.assign({
    cell: tableCell,
    row: tableRow
  }, components.body || {});
  var classes = (0, _classnames["default"])({
    table: true,
    dataTable: dataTable,
    'table-striped': striped,
    'table-bordered': bordered,
    'table-hover': hover,
    'table-condensed': condensed,
    'pf-table-inline-edit': inlineEdit
  }, className);
  var attributes = {};

  if (dataTable) {
    attributes.role = 'grid';
  }

  return _react["default"].createElement(_Table.Table.Provider, _extends({
    className: classes,
    renderers: components
  }, props, attributes), children);
};

TablePfProvider.propTypes = {
  /** Children nodes  */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** apply dataTable class */
  dataTable: _propTypes["default"].bool,

  /** apply Striped class */
  striped: _propTypes["default"].bool,

  /** apply Bordered class */
  bordered: _propTypes["default"].bool,

  /** apply Hover class */
  hover: _propTypes["default"].bool,

  /** apply Condensed class */
  condensed: _propTypes["default"].bool,

  /** apply pf-table-inline-edit class */
  inlineEdit: _propTypes["default"].bool,

  /** reactabular components override */
  components: _propTypes["default"].object
};
TablePfProvider.defaultProps = {
  children: null,
  className: '',
  dataTable: false,
  striped: false,
  bordered: false,
  hover: false,
  condensed: false,
  inlineEdit: false,
  components: {}
};
var _default = TablePfProvider;
exports["default"] = _default;