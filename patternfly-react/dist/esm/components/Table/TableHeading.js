function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TABLE_ALIGN, TABLE_ALIGNMENT_TYPES, TABLE_SORT_DIRECTION, TABLE_SORT_DIRECTIONS } from './TableConstants';
/**
 * TableHeading component for Patternfly React
 */

const TableHeading = (_ref) => {
  let {
    children,
    className,
    align,
    sort,
    sortDirection
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "align", "sort", "sortDirection"]);

  const sortingClass = classNames({
    sorting_asc: sortDirection === TABLE_SORT_DIRECTION.ASC,
    sorting_desc: sortDirection === TABLE_SORT_DIRECTION.DESC
  });
  const classes = classNames({
    'text-right': align === TABLE_ALIGN.RIGHT,
    'text-center': align === TABLE_ALIGN.CENTER
  }, sort ? sortingClass || 'sorting' : '', className);
  return React.createElement("th", _extends({
    className: classes
  }, props), children);
};

TableHeading.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** Heading alignment */
  align: PropTypes.oneOf(TABLE_ALIGNMENT_TYPES),

  /** sortable heading */
  sort: PropTypes.bool,

  /** sort direction */
  sortDirection: PropTypes.oneOf(TABLE_SORT_DIRECTIONS)
};
TableHeading.defaultProps = {
  children: null,
  className: '',
  sort: false,
  align: TABLE_ALIGN.DEFAULT,
  sortDirection: TABLE_SORT_DIRECTION.DEFAULT
};
export default TableHeading;