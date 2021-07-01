function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import C3Chart from 'react-c3js';
import { compose, mapProps } from 'recompose';
import { getComposer } from './ChartConstants';
import { c3ChartDefaults } from '../../common/patternfly';

const mapBarChartProps = props => {
  const newProps = Object.assign({}, props); // Set Bar Chart tooltip

  if (props.categories) {
    newProps.tooltip = c3ChartDefaults.getDefaultBarTooltip(props.categories);
  }

  return newProps;
};

const BarChart = compose(getComposer('BAR_CHART'), mapProps(mapBarChartProps))((_ref) => {
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
export default BarChart;