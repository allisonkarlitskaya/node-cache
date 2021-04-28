function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartRange = (_ref) => {
  let {
    className,
    value,
    percent,
    maxValue,
    index,
    color,
    vertical
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "value", "percent", "maxValue", "index", "color", "vertical"]);

  const rangeClasses = classNames('bullet-chart-pf-range-bar', `range-${index}`, className);

  if (value > 0 && (percent ? value <= 100 : value <= maxValue)) {
    const showValue = percent ? value : value / maxValue * 100;
    const rangeStyle = {
      width: vertical ? undefined : `${showValue}%`,
      height: vertical ? `${showValue}%` : undefined,
      zIndex: Math.round(100 - showValue)
    };

    if (color) {
      rangeStyle.backgroundColor = color;
    }

    return React.createElement("div", _extends({
      className: rangeClasses,
      style: rangeStyle
    }, props));
  }

  return null;
};

BulletChartRange.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** End value for the range */
  value: PropTypes.number.isRequired,

  /** Option to use end value as a percentage, default is true */
  percent: PropTypes.bool,

  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: PropTypes.number,

  /** Index for the range (1-3) */
  index: PropTypes.number.isRequired,

  /** Optional color for the range, should use defaults but provided for flexibility */
  color: PropTypes.string,

  /** Vertical chart, default false */
  vertical: PropTypes.bool
};
BulletChartRange.defaultProps = {
  className: '',
  percent: true,
  maxValue: 100,
  color: '',
  vertical: false
};
export default BulletChartRange;