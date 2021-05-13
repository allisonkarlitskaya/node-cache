function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from '../../../../index';

const BasicLoginPageLayout = (_ref) => {
  let {
    children,
    layout
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "layout"]);

  return React.createElement(Grid, _extends({}, props, {
    fluid: true
  }), React.createElement(Row, null, React.createElement(Col, _extends({
    sm: 8,
    smOffset: 2,
    md: 6,
    mdOffset: 3,
    lg: 6,
    lgOffset: 3
  }, layout), children)));
};

BasicLoginPageLayout.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.object
};
BasicLoginPageLayout.defaultProps = {
  children: null,
  layout: null
};
export default BasicLoginPageLayout;