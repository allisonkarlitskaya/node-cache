function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartThreshold = (_ref) => {
  let {
    className,
    threshold,
    vertical,
    percent,
    maxValue
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "threshold", "vertical", "percent", "maxValue"]);

  const percentValue = percent ? threshold : threshold / maxValue * 100;

  if (percentValue > 0 && percentValue <= 100) {
    const thresholdClasses = classNames('bullet-chart-pf-threshold-indicator', className);
    return React.createElement("div", _extends({
      className: thresholdClasses,
      style: {
        left: vertical ? undefined : `${percentValue}%`,
        bottom: vertical ? `${percentValue}%` : undefined
      }
    }, props));
  }

  return null;
};

BulletChartThreshold.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** Threshold value */
  threshold: PropTypes.number.isRequired,

  /** Vertical chart, default false */
  vertical: PropTypes.bool,

  /** Option to use threshold value as a percentage, default is true */
  percent: PropTypes.bool,

  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: PropTypes.number
};
BulletChartThreshold.defaultProps = {
  className: '',
  vertical: false,
  percent: true,
  maxValue: 100
};
export default BulletChartThreshold;