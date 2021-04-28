function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * WizardReviewContent component for Patternfly React
 */

const WizardReviewContent = (_ref) => {
  let {
    children,
    className,
    collapsed
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "collapsed"]);

  const classes = classNames('wizard-pf-review-content', {
    collapse: collapsed
  }, className);
  return React.createElement("div", _extends({
    className: classes
  }, props), children);
};

WizardReviewContent.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** Step collapsed */
  collapsed: PropTypes.bool
};
WizardReviewContent.defaultProps = {
  children: null,
  className: '',
  collapsed: false
};
export default WizardReviewContent;