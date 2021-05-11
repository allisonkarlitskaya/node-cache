"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

var _WizardPatternBody = _interopRequireDefault(require("./WizardPatternBody"));

var _WizardPatternConstants = require("./WizardPatternConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * WizardPattern - the Wizard Pattern component.
 */
var WizardPattern = function WizardPattern(_ref) {
  var steps = _ref.steps,
      activeStepIndex = _ref.activeStepIndex,
      onStepChanged = _ref.onStepChanged,
      onNext = _ref.onNext,
      onBack = _ref.onBack,
      nextStepDisabled = _ref.nextStepDisabled,
      previousStepDisabled = _ref.previousStepDisabled,
      cancelButtonDisabled = _ref.cancelButtonDisabled,
      title = _ref.title,
      loadingTitle = _ref.loadingTitle,
      loadingMessage = _ref.loadingMessage,
      show = _ref.show,
      onHide = _ref.onHide,
      onExited = _ref.onExited,
      stepButtonsDisabled = _ref.stepButtonsDisabled,
      cancelText = _ref.cancelText,
      backText = _ref.backText,
      nextText = _ref.nextText,
      closeText = _ref.closeText,
      loading = _ref.loading,
      nextButtonRef = _ref.nextButtonRef,
      bodyHeader = _ref.bodyHeader,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["steps", "activeStepIndex", "onStepChanged", "onNext", "onBack", "nextStepDisabled", "previousStepDisabled", "cancelButtonDisabled", "title", "loadingTitle", "loadingMessage", "show", "onHide", "onExited", "stepButtonsDisabled", "cancelText", "backText", "nextText", "closeText", "loading", "nextButtonRef", "bodyHeader", "children"]);

  var onFirstStep = activeStepIndex === 0;
  var onFinalStep = activeStepIndex === steps.length - 1;

  var onHideClick = function onHideClick() {
    onHide(onFinalStep);
  };

  var onBackClick = function onBackClick() {
    goToStep(Math.max(activeStepIndex - 1, 0));
  };

  var onNextClick = function onNextClick() {
    goToStep(Math.min(activeStepIndex + 1, steps.length - 1));
  };

  var getStep = function getStep() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeStepIndex;
    return steps[index];
  };

  var getPrevStep = function getPrevStep() {
    var relativeToIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeStepIndex;
    return relativeToIndex > 0 && steps[relativeToIndex - 1];
  };

  var getNextStep = function getNextStep() {
    var relativeToIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeStepIndex;
    return relativeToIndex < steps.length - 1 && steps[relativeToIndex + 1];
  };

  var activeStep = getStep();

  var goToStep = function goToStep(newStepIndex) {
    if (shouldPreventGoToStep(newStepIndex)) {
      return;
    }

    if (newStepIndex === activeStepIndex + 1) {
      var stepOnNextResult = activeStep.onNext && activeStep.onNext();
      var propOnNextResult = onNext(newStepIndex);
      var stepFailed = stepOnNextResult === false || propOnNextResult === false;

      if (stepFailed) {
        return;
      }
    }

    if (newStepIndex === activeStepIndex - 1) {
      var _stepFailed = onBack(newStepIndex) === false;

      if (_stepFailed) {
        return;
      }
    }

    if (onStepChanged) {
      onStepChanged(newStepIndex);
    }
  };

  var shouldPreventGoToStep = function shouldPreventGoToStep(newStepIndex) {
    var targetStep = getStep(newStepIndex);
    var stepBeforeTarget = getPrevStep(newStepIndex);
    var preventExitActive = activeStep.preventExit;
    var preventEnterTarget = targetStep.preventEnter || stepBeforeTarget && stepBeforeTarget.isInvalid;
    var nextStepClicked = newStepIndex > activeStepIndex;
    return preventExitActive || preventEnterTarget || nextStepClicked ? nextStepDisabled : previousStepDisabled;
  };

  var activeStepStr = (activeStepIndex + 1).toString();
  var prevStepUnreachable = previousStepDisabled || onFirstStep || activeStep.preventExit || getPrevStep().preventEnter; // nextStepUnreachable is still true onFinalStep, because the Next button turns into a Close button

  var nextStepUnreachable = nextStepDisabled || activeStep.isInvalid || activeStep.preventExit || getNextStep().preventEnter;
  return _react["default"].createElement(_index.Wizard, _extends({
    show: show,
    onHide: onHideClick,
    onExited: onExited
  }, props), _react["default"].createElement(_index.Wizard.Header, {
    onClose: onHideClick,
    title: title
  }), _react["default"].createElement(_index.Wizard.Body, null, bodyHeader, _react["default"].createElement(_WizardPatternBody["default"], {
    loadingTitle: loadingTitle,
    loadingMessage: loadingMessage,
    loading: loading,
    steps: steps,
    activeStepIndex: activeStepIndex,
    activeStepStr: activeStepStr,
    goToStep: goToStep,
    nextStepDisabled: nextStepDisabled,
    stepButtonsDisabled: stepButtonsDisabled
  })), _react["default"].createElement(_index.Wizard.Footer, null, _react["default"].createElement(_index.Button, {
    bsStyle: "default",
    className: "btn-cancel",
    disabled: cancelButtonDisabled,
    onClick: onHideClick
  }, cancelText), _react["default"].createElement(_index.Button, {
    bsStyle: "default",
    onClick: onBackClick,
    disabled: prevStepUnreachable
  }, _react["default"].createElement(_index.Icon, {
    type: "fa",
    name: "angle-left"
  }), backText), _react["default"].createElement(_index.Button, {
    bsStyle: "primary",
    onClick: onFinalStep ? onHideClick : onNextClick,
    disabled: nextStepUnreachable,
    ref: nextButtonRef
  }, onFinalStep ? closeText : _react["default"].createElement(_react["default"].Fragment, null, nextText, _react["default"].createElement(_index.Icon, {
    type: "fa",
    name: "angle-right"
  })))), children);
};

WizardPattern.propTypes = {
  activeStepIndex: _propTypes["default"].number.isRequired,
  show: _propTypes["default"].bool,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onHide: _propTypes["default"].func,
  onExited: _propTypes["default"].func,
  onBack: _propTypes["default"].func,
  onNext: _propTypes["default"].func,
  onStepChanged: _propTypes["default"].func,
  loadingTitle: _propTypes["default"].string,
  loadingMessage: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  cancelText: _propTypes["default"].string,
  backText: _propTypes["default"].string,
  nextText: _propTypes["default"].string,
  closeText: _propTypes["default"].string,
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape(_WizardPatternConstants.wizardStepShape)),
  nextStepDisabled: _propTypes["default"].bool,
  previousStepDisabled: _propTypes["default"].bool,
  stepButtonsDisabled: _propTypes["default"].bool,
  cancelButtonDisabled: _propTypes["default"].bool,
  nextButtonRef: _propTypes["default"].func,
  bodyHeader: _propTypes["default"].node,
  children: _propTypes["default"].node
};
WizardPattern.defaultProps = {
  show: false,
  title: '',
  onHide: _index.noop,
  onExited: _index.noop,
  onBack: _index.noop,
  onNext: _index.noop,
  onStepChanged: _index.noop,
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
  nextButtonRef: _index.noop,
  bodyHeader: null,
  children: null
};
WizardPattern.displayName = 'WizardPattern';
var _default = WizardPattern;
exports["default"] = _default;