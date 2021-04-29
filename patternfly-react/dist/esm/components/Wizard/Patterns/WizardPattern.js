function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop, Wizard, Icon, Button } from '../../../index';
import WizardPatternBody from './WizardPatternBody';
import { wizardStepShape } from './WizardPatternConstants';
/**
 * WizardPattern - the Wizard Pattern component.
 */

const WizardPattern = (_ref) => {
  let {
    steps,
    activeStepIndex,
    onStepChanged,
    onNext,
    onBack,
    nextStepDisabled,
    previousStepDisabled,
    cancelButtonDisabled,
    title,
    loadingTitle,
    loadingMessage,
    show,
    onHide,
    onExited,
    stepButtonsDisabled,
    cancelText,
    backText,
    nextText,
    closeText,
    loading,
    nextButtonRef,
    bodyHeader,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["steps", "activeStepIndex", "onStepChanged", "onNext", "onBack", "nextStepDisabled", "previousStepDisabled", "cancelButtonDisabled", "title", "loadingTitle", "loadingMessage", "show", "onHide", "onExited", "stepButtonsDisabled", "cancelText", "backText", "nextText", "closeText", "loading", "nextButtonRef", "bodyHeader", "children"]);

  const onFirstStep = activeStepIndex === 0;
  const onFinalStep = activeStepIndex === steps.length - 1;

  const onHideClick = () => {
    onHide(onFinalStep);
  };

  const onBackClick = () => {
    goToStep(Math.max(activeStepIndex - 1, 0));
  };

  const onNextClick = () => {
    goToStep(Math.min(activeStepIndex + 1, steps.length - 1));
  };

  const getStep = (index = activeStepIndex) => steps[index];

  const getPrevStep = (relativeToIndex = activeStepIndex) => relativeToIndex > 0 && steps[relativeToIndex - 1];

  const getNextStep = (relativeToIndex = activeStepIndex) => relativeToIndex < steps.length - 1 && steps[relativeToIndex + 1];

  const activeStep = getStep();

  const goToStep = newStepIndex => {
    if (shouldPreventGoToStep(newStepIndex)) {
      return;
    }

    if (newStepIndex === activeStepIndex + 1) {
      const stepOnNextResult = activeStep.onNext && activeStep.onNext();
      const propOnNextResult = onNext(newStepIndex);
      const stepFailed = stepOnNextResult === false || propOnNextResult === false;

      if (stepFailed) {
        return;
      }
    }

    if (newStepIndex === activeStepIndex - 1) {
      const stepFailed = onBack(newStepIndex) === false;

      if (stepFailed) {
        return;
      }
    }

    if (onStepChanged) {
      onStepChanged(newStepIndex);
    }
  };

  const shouldPreventGoToStep = newStepIndex => {
    const targetStep = getStep(newStepIndex);
    const stepBeforeTarget = getPrevStep(newStepIndex);
    const preventExitActive = activeStep.preventExit;
    const preventEnterTarget = targetStep.preventEnter || stepBeforeTarget && stepBeforeTarget.isInvalid;
    const nextStepClicked = newStepIndex > activeStepIndex;
    return preventExitActive || preventEnterTarget || nextStepClicked ? nextStepDisabled : previousStepDisabled;
  };

  const activeStepStr = (activeStepIndex + 1).toString();
  const prevStepUnreachable = previousStepDisabled || onFirstStep || activeStep.preventExit || getPrevStep().preventEnter; // nextStepUnreachable is still true onFinalStep, because the Next button turns into a Close button

  const nextStepUnreachable = nextStepDisabled || activeStep.isInvalid || activeStep.preventExit || getNextStep().preventEnter;
  return React.createElement(Wizard, _extends({
    show: show,
    onHide: onHideClick,
    onExited: onExited
  }, props), React.createElement(Wizard.Header, {
    onClose: onHideClick,
    title: title
  }), React.createElement(Wizard.Body, null, bodyHeader, React.createElement(WizardPatternBody, {
    loadingTitle: loadingTitle,
    loadingMessage: loadingMessage,
    loading: loading,
    steps: steps,
    activeStepIndex: activeStepIndex,
    activeStepStr: activeStepStr,
    goToStep: goToStep,
    nextStepDisabled: nextStepDisabled,
    stepButtonsDisabled: stepButtonsDisabled
  })), React.createElement(Wizard.Footer, null, React.createElement(Button, {
    bsStyle: "default",
    className: "btn-cancel",
    disabled: cancelButtonDisabled,
    onClick: onHideClick
  }, cancelText), React.createElement(Button, {
    bsStyle: "default",
    onClick: onBackClick,
    disabled: prevStepUnreachable
  }, React.createElement(Icon, {
    type: "fa",
    name: "angle-left"
  }), backText), React.createElement(Button, {
    bsStyle: "primary",
    onClick: onFinalStep ? onHideClick : onNextClick,
    disabled: nextStepUnreachable,
    ref: nextButtonRef
  }, onFinalStep ? closeText : React.createElement(React.Fragment, null, nextText, React.createElement(Icon, {
    type: "fa",
    name: "angle-right"
  })))), children);
};

WizardPattern.propTypes = {
  activeStepIndex: PropTypes.number.isRequired,
  show: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onHide: PropTypes.func,
  onExited: PropTypes.func,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
  onStepChanged: PropTypes.func,
  loadingTitle: PropTypes.string,
  loadingMessage: PropTypes.string,
  loading: PropTypes.bool,
  cancelText: PropTypes.string,
  backText: PropTypes.string,
  nextText: PropTypes.string,
  closeText: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.shape(wizardStepShape)),
  nextStepDisabled: PropTypes.bool,
  previousStepDisabled: PropTypes.bool,
  stepButtonsDisabled: PropTypes.bool,
  cancelButtonDisabled: PropTypes.bool,
  nextButtonRef: PropTypes.func,
  bodyHeader: PropTypes.node,
  children: PropTypes.node
};
WizardPattern.defaultProps = {
  show: false,
  title: '',
  onHide: noop,
  onExited: noop,
  onBack: noop,
  onNext: noop,
  onStepChanged: noop,
  loadingTitle: 'Loading Wizard...',
  loadingMessage: 'Loading...',
  loading: false,
  cancelText: 'Cancel',
  backText: 'Back',
  nextText: 'Next',
  closeText: 'Close',
  steps: [],
  nextStepDisabled: false,
  previousStepDisabled: false,
  stepButtonsDisabled: false,
  cancelButtonDisabled: false,
  nextButtonRef: noop,
  bodyHeader: null,
  children: null
};
WizardPattern.displayName = 'WizardPattern';
export default WizardPattern;