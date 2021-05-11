function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroup } from '../ListGroup';
/**
 * WizardSidebarGroup component for Patternfly React
 */

const WizardSidebarGroup = (_ref) => {
  let {
    children,
    className,
    step,
    activeStep
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "step", "activeStep"]);

  const classes = classNames({
    hidden: `${step}` !== `${activeStep}`
  }, className);
  return React.createElement(ListGroup, _extends({
    componentClass: "ul",
    className: classes
  }, props), children);
};

WizardSidebarGroup.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** The wizard step number for this step */
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** The active step */
  activeStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
WizardSidebarGroup.defaultProps = {
  children: null,
  className: '',
  step: '',
  activeStep: ''
};
export default WizardSidebarGroup;