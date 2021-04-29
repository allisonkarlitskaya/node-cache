function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { noop, EmptyState, Spinner, Wizard } from '../../../index';
import { wizardStepShape } from './WizardPatternConstants';
/**
 * WizardPatternBody - the Wizard Pattern Body component.
 */

const WizardPatternBody = ({
  loading,
  steps,
  activeStepIndex,
  goToStep,
  loadingTitle,
  loadingMessage,
  activeStepStr
}) => {
  if (loading) {
    return React.createElement(Wizard.Row, null, React.createElement(Wizard.Main, null, React.createElement(EmptyState, null, React.createElement(Spinner, {
      size: "lg",
      className: "blank-slate-pf-icon",
      loading: true
    }), React.createElement(EmptyState.Action, null, React.createElement("h3", null, loadingTitle)), React.createElement(EmptyState.Action, {
      secondary: true
    }, React.createElement("p", null, loadingMessage)))));
  }

  const stepProps = (stepIndex, title) => {
    const label = (stepIndex + 1).toString();
    return {
      key: `wizard-step-${title}`,
      stepIndex,
      label,
      step: label,
      title,
      activeStep: activeStepStr
    };
  };

  if (steps && steps.length) {
    const step = steps[activeStepIndex];
    const renderedStep = step && step.render && step.render(activeStepIndex, step.title);
    return React.createElement(React.Fragment, null, React.createElement(Wizard.Steps, {
      steps: steps.map((stepObj, index) => React.createElement(Wizard.Step, _extends({}, stepProps(index, stepObj.title), {
        onClick: () => goToStep(index)
      })))
    }), React.createElement(Wizard.Row, null, React.createElement(Wizard.Main, null, React.createElement(Wizard.Contents, {
      stepIndex: activeStepIndex,
      activeStepIndex: activeStepIndex
    }, renderedStep))));
  }

  return null;
};

WizardPatternBody.propTypes = {
  loadingTitle: PropTypes.string,
  loadingMessage: PropTypes.string,
  loading: PropTypes.bool,
  steps: PropTypes.arrayOf(PropTypes.shape(wizardStepShape)),
  activeStepIndex: PropTypes.number,
  activeStepStr: PropTypes.string,
  goToStep: PropTypes.func
};
WizardPatternBody.defaultProps = {
  loadingTitle: 'Loading Wizard...',
  loadingMessage: 'Loading...',
  loading: false,
  steps: [],
  activeStepIndex: 0,
  activeStepStr: '1',
  goToStep: noop
};
export default WizardPatternBody;