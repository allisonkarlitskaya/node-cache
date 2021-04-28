import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';
export const DecadeViewTable = ({
  yearArray,
  selectedYear,
  setSelectedYear
}) => React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
  colSpan: "7"
}, yearArray.map(year => React.createElement("span", {
  onClick: () => setSelectedYear(year),
  className: `year ${year === selectedYear ? 'active' : ''}`,
  key: year
}, year)))));
DecadeViewTable.propTypes = {
  yearArray: PropTypes.array,
  selectedYear: PropTypes.number,
  setSelectedYear: PropTypes.func
};
DecadeViewTable.defaultProps = {
  yearArray: [],
  selectedYear: new Date().getFullYear(),
  setSelectedYear: noop
};
export default DecadeViewTable;