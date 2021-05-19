function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartAxisTic = (_ref) => {
  let {
    className,
    text,
    vertical,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "text", "vertical", "value"]);

  const bulletChartAxisTicClass = classNames('bullet-chart-pf-axis-tic', className);
  let ticStyle;

  if (vertical) {
    ticStyle = {
      bottom: `calc(${value}% - 10px)`
    };
  } else {
    ticStyle = {
      left: `calc(${value}% - 15px)`
    };
  }

  return React.createElement("span", {
    className: bulletChartAxisTicClass,
    style: ticStyle
  }, text || value);
};

BulletChartAxisTic.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** Vertical axis, default false */
  vertical: PropTypes.bool,

  /** Value for the tic mark */
  value: PropTypes.number.isRequired,

  /** Text for the tic mark, default is the value */
  text: PropTypes.string
};
BulletChartAxisTic.defaultProps = {
  className: '',
  vertical: false,
  text: undefined
};
export default BulletChartAxisTic;