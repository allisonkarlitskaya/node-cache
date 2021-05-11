function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * WizardSubStep component for Patternfly React
 */

const WizardSubStep = (_ref) => {
  let {
    className,
    subStep,
    title,
    activeSubStep
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "subStep", "title", "activeSubStep"]);

  const classes = classNames('wizard-pf-step-title-substep', {
    active: `${subStep}` === `${activeSubStep}`
  }, className);
  return React.createElement("span", _extends({
    className: classes
  }, props), title);
};

WizardSubStep.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,

  /** The wizard sub step for this step */
  subStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** The wizard sub step title */
  title: PropTypes.string,

  /** The active step */
  activeSubStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
WizardSubStep.defaultProps = {
  className: '',
  subStep: '',
  title: '',
  activeSubStep: ''
};
export default WizardSubStep;