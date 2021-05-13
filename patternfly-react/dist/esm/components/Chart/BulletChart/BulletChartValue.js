function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger } from '../../OverlayTrigger/index';
import { Tooltip } from '../../Tooltip/index';

const randomId = () => Date.now();

const BulletChartValue = (_ref) => {
  let {
    className,
    value,
    percent,
    maxValue,
    prevValue,
    dot,
    vertical
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "value", "percent", "maxValue", "prevValue", "dot", "vertical"]);

  const usedMax = percent ? 100 : maxValue;
  const percentValue = percent ? value.value + prevValue : (value.value + prevValue) / maxValue * 100;
  const showValue = Math.min(Math.max(percentValue, 0), usedMax * 1.2);

  const TooltipFunction = () => {
    if (value.tooltipFunction) {
      return value.tooltipFunction(value.value, value.title);
    }

    const tipText = `${value.title}: ${value.value}${percent ? '%' : ''}`;
    return React.createElement(Tooltip, {
      id: value.tooltipId || randomId()
    }, tipText);
  };

  const valueClasses = classNames({
    'bullet-chart-pf-value-dot': dot,
    'bullet-chart-pf-value-bar': !dot
  }, className);
  let valueComponent;

  if (dot) {
    valueComponent = React.createElement("div", _extends({
      className: valueClasses,
      style: {
        left: vertical ? undefined : `${showValue}%`,
        bottom: vertical ? `${showValue}%` : undefined,
        backgroundColor: value.color,
        zIndex: Math.round(100 + showValue)
      }
    }, props));
  } else {
    const prevShowValue = percent ? prevValue : prevValue / maxValue * 100;
    valueComponent = React.createElement("div", _extends({
      className: valueClasses,
      style: {
        left: vertical ? undefined : `${prevShowValue}%`,
        width: vertical ? undefined : `${showValue - prevShowValue}%`,
        bottom: vertical ? `${prevShowValue}%` : undefined,
        height: vertical ? `${showValue - prevShowValue}%` : undefined,
        backgroundColor: value.color,
        zIndex: Math.round(400 - showValue)
      }
    }, props));
  }

  return React.createElement(OverlayTrigger, {
    key: value.title,
    overlay: TooltipFunction(value),
    placement: vertical ? 'right' : 'top',
    trigger: ['hover', 'focus'],
    rootClose: false
  }, valueComponent);
};

BulletChartValue.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** Value */
  value: PropTypes.shape({
    value: PropTypes.number.isRequired,
    title: PropTypes.string,
    color: PropTypes.string,
    tooltipFunction: PropTypes.func,
    tooltipId: PropTypes.string
  }).isRequired,

  /** Option to use value as a percentage, default is true */
  percent: PropTypes.bool,

  /** Maximum value when not using percents (ignored if percents is true) */
  maxValue: PropTypes.number,

  /** Previous value (for stacked charts), default 0 */
  prevValue: PropTypes.number,

  /** Display a dot rather than a bar, default false */
  dot: PropTypes.bool,

  /** Vertical chart, default false */
  vertical: PropTypes.bool
};
BulletChartValue.defaultProps = {
  className: '',
  percent: true,
  maxValue: 100,
  prevValue: 0,
  dot: false,
  vertical: false
};
export default BulletChartValue;