function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table } from './Table';
/**
 * TablePfProvider component for Patternfly React
 */

const TablePfProvider = (_ref) => {
  let {
    children,
    className,
    dataTable,
    striped,
    bordered,
    inlineEdit,
    hover,
    condensed,
    components
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "dataTable", "striped", "bordered", "inlineEdit", "hover", "condensed", "components"]);

  const headerCell = cellProps => cellProps.children;

  const tableCell = cellProps => cellProps.children;

  const tableRow = rowProps => React.createElement("tr", rowProps, rowProps.children);

  tableRow.shouldComponentUpdate = true;
  components.header = Object.assign({
    cell: headerCell
  }, components.header || {});
  components.body = Object.assign({
    cell: tableCell,
    row: tableRow
  }, components.body || {});
  const classes = classNames({
    table: true,
    dataTable,
    'table-striped': striped,
    'table-bordered': bordered,
    'table-hover': hover,
    'table-condensed': condensed,
    'pf-table-inline-edit': inlineEdit
  }, className);
  const attributes = {};

  if (dataTable) {
    attributes.role = 'grid';
  }

  return React.createElement(Table.Provider, _extends({
    className: classes,
    renderers: components
  }, props, attributes), children);
};

TablePfProvider.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** apply dataTable class */
  dataTable: PropTypes.bool,

  /** apply Striped class */
  striped: PropTypes.bool,

  /** apply Bordered class */
  bordered: PropTypes.bool,

  /** apply Hover class */
  hover: PropTypes.bool,

  /** apply Condensed class */
  condensed: PropTypes.bool,

  /** apply pf-table-inline-edit class */
  inlineEdit: PropTypes.bool,

  /** reactabular components override */
  components: PropTypes.object
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
export default TablePfProvider;