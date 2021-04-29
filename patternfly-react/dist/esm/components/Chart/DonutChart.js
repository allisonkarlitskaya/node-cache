function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import C3Chart from 'react-c3js';
import { findDOMNode } from 'react-dom';
import { lifecycle, compose } from 'recompose';
import { patternfly } from '../../common/patternfly';
import { getComposer } from './ChartConstants';
const {
  pfSetDonutChartTitle
} = patternfly;

const colIndexOfMaxValue = columns => columns.reduce((iMax, x, i, arr) => x[1] > arr[iMax][1] ? i : iMax, 0);

const truncateNum = (num, precision) => {
  const pointNotation = num.toString().split('.');

  if (pointNotation.length === 1) {
    return pointNotation[0];
  }

  return `${pointNotation[0]}.${pointNotation[1].slice(0, precision)}`;
};

const setDonutTitle = obj => {
  let primary;
  let secondary;
  const {
    props
  } = obj;
  const {
    data,
    title = {}
  } = props;
  const {
    type,
    precision = 0
  } = title;
  const {
    columns
  } = data;
  const sum = columns.reduce((acc, x) => acc + x[1], 0);
  const iMax = colIndexOfMaxValue(columns);
  const percentage = 100 * columns[iMax][1] / sum;

  switch (type) {
    case 'percent':
      primary = precision ? `${truncateNum(percentage, precision)}%` : `${Math.round(percentage)}%`;
      [secondary] = columns[iMax];
      break;

    case 'max':
      primary = Math.round(columns[iMax][1]).toString();
      [secondary] = columns[iMax];
      break;

    case 'total':
    default:
      primary = Math.round(sum).toString();
      break;
  }

  pfSetDonutChartTitle( // eslint-disable-next-line react/no-find-dom-node
  findDOMNode(obj), title.primary || primary, title.secondary || secondary);
};

const addDonutTitle = lifecycle({
  componentDidMount() {
    setDonutTitle(this);
  },

  componentDidUpdate(prevProps) {
    setDonutTitle(this);
  }

});
const DonutChart = compose(getComposer('DONUT_CHART'), addDonutTitle)((_ref) => {
  let {
    className,
    type,
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "type", "data"]);

  return React.createElement(C3Chart, _extends({
    className: className,
    type: type,
    data: data
  }, props));
});
export default DonutChart;