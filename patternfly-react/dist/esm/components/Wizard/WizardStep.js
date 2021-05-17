function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';
/**
 * WizardStep component for Patternfly React
 */

const WizardStep = (_ref) => {
  let {
    children,
    className,
    stepIndex,
    step,
    label,
    title,
    activeStep,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "stepIndex", "step", "label", "title", "activeStep", "onClick"]);

  const classes = classNames('wizard-pf-step', {
    active: `${step}` === `${activeStep}`
  }, className);
  return React.createElement("li", _extends({
    className: classes
  }, props), React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick(stepIndex);
    }
  }, React.createElement("span", {
    className: "wizard-pf-step-number"
  }, label), React.createElement("span", {
    className: "wizard-pf-step-title"
  }, title), children));
};

WizardStep.propTypes = {
  /** Children nodes */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** The wizard step index */
  stepIndex: PropTypes.number.isRequired,

  /** The wizard step for this step */
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** The wizard step number label */
  label: PropTypes.string,

  /** The wizard step title */
  title: PropTypes.string,

  /** The active step */
  activeStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Step click handler */
  onClick: PropTypes.func
};
WizardStep.defaultProps = {
  children: null,
  className: '',
  step: '',
  label: '',
  title: '',
  activeStep: '',
  onClick: noop
};
export default WizardStep;