function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
import TableHeading from '../TableHeading';

const sortableHeaderCellFormatter = ({
  cellProps,
  column,
  sortingColumns,
  onSort
}) => {
  const sortDirection = sortingColumns[column.property] && sortingColumns[column.property].direction;
  return React.createElement(TableHeading, _extends({
    onClick: e => {
      onSort(e, column, sortDirection);
    },
    sort: true,
    sortDirection: sortDirection,
    "aria-label": column.header.label
  }, cellProps), column.header.label);
};

sortableHeaderCellFormatter.propTypes = {
  /** column header cell props */
  cellProps: PropTypes.object,

  /** column definition */
  column: PropTypes.object,

  /** sorting object definition */
  sortingColumns: PropTypes.object,

  /** onSort callback */
  onSort: PropTypes.func
};
sortableHeaderCellFormatter.defaultProps = {
  cellProps: {},
  column: {},
  sortingColumns: {},
  onSort: noop
};
export default sortableHeaderCellFormatter;