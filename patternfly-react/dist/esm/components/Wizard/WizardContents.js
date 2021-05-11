function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * WizardContents component for Patternfly React
 */

const WizardContents = (_ref) => {
  let {
    children,
    className,
    stepIndex,
    subStepIndex,
    activeStepIndex,
    activeSubStepIndex
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "stepIndex", "subStepIndex", "activeStepIndex", "activeSubStepIndex"]);

  const classes = classNames('wizard-pf-contents', {
    // hide contents if the step is not active
    // OR if we have sub steps and this sub step is not active
    hidden: activeStepIndex !== stepIndex || activeSubStepIndex !== null && activeSubStepIndex !== subStepIndex
  }, className);
  return React.createElement("div", _extends({
    className: classes
  }, props), children);
};

WizardContents.propTypes = {
  /** WizardStep nodes */
  children: PropTypes.node,

  /** Additional css classes */
  className: PropTypes.string,

  /** The wizard step index for these contents */
  stepIndex: PropTypes.number.isRequired,

  /** The wizard sub step index for these contents */
  subStepIndex: PropTypes.number,

  /** The active wizard step index */
  activeStepIndex: PropTypes.number.isRequired,

  /** The active wizard sub step index */
  activeSubStepIndex: PropTypes.number
};
WizardContents.defaultProps = {
  children: null,
  className: '',
  subStepIndex: null,
  activeSubStepIndex: null
};
export default WizardContents;