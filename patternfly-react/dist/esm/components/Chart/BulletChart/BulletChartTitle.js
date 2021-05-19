function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BulletChartTitle = (_ref) => {
  let {
    className,
    label,
    details
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "label", "details"]);

  const titleContainerClasses = classNames('bullet-chart-pf-title-container', className);
  return React.createElement("div", _extends({
    className: titleContainerClasses
  }, props), React.createElement("div", {
    className: "bullet-chart-pf-title"
  }, label), React.createElement("div", {
    className: "bullet-chart-pf-details"
  }, details));
};

BulletChartTitle.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** Label text */
  label: PropTypes.string,

  /** Details text */
  details: PropTypes.string
};
BulletChartTitle.defaultProps = {
  className: '',
  label: '',
  details: ''
};
export default BulletChartTitle;