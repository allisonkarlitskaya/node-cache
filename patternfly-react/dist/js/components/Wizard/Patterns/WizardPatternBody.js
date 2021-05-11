"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

var _WizardPatternConstants = require("./WizardPatternConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * WizardPatternBody - the Wizard Pattern Body component.
 */
var WizardPatternBody = function WizardPatternBody(_ref) {
  var loading = _ref.loading,
      steps = _ref.steps,
      activeStepIndex = _ref.activeStepIndex,
      goToStep = _ref.goToStep,
      loadingTitle = _ref.loadingTitle,
      loadingMessage = _ref.loadingMessage,
      activeStepStr = _ref.activeStepStr;

  if (loading) {
    return _react["default"].createElement(_index.Wizard.Row, null, _react["default"].createElement(_index.Wizard.Main, null, _react["default"].createElement(_index.EmptyState, null, _react["default"].createElement(_index.Spinner, {
      size: "lg",
      className: "blank-slate-pf-icon",
      loading: true
    }), _react["default"].createElement(_index.EmptyState.Action, null, _react["default"].createElement("h3", null, loadingTitle)), _react["default"].createElement(_index.EmptyState.Action, {
      secondary: true
    }, _react["default"].createElement("p", null, loadingMessage)))));
  }

  var stepProps = function stepProps(stepIndex, title) {
    var label = (stepIndex + 1).toString();
    return {
      key: "wizard-step-".concat(title),
      stepIndex: stepIndex,
      label: label,
      step: label,
      title: title,
      activeStep: activeStepStr
    };
  };

  if (steps && steps.length) {
    var step = steps[activeStepIndex];
    var renderedStep = step && step.render && step.render(activeStepIndex, step.title);
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index.Wizard.Steps, {
      steps: steps.map(function (stepObj, index) {
        return _react["default"].createElement(_index.Wizard.Step, _extends({}, stepProps(index, stepObj.title), {
          onClick: function onClick() {
            return goToStep(index);
          }
        }));
      })
    }), _react["default"].createElement(_index.Wizard.Row, null, _react["default"].createElement(_index.Wizard.Main, null, _react["default"].createElement(_index.Wizard.Contents, {
      stepIndex: activeStepIndex,
      activeStepIndex: activeStepIndex
    }, renderedStep))));
  }

  return null;
};

WizardPatternBody.propTypes = {
  loadingTitle: _propTypes["default"].string,
  loadingMessage: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  steps: _propTypes["default"].arrayOf(_propTypes["default"].shape(_WizardPatternConstants.wizardStepShape)),
  activeStepIndex: _propTypes["default"].number,
  activeStepStr: _propTypes["default"].string,
  goToStep: _propTypes["default"].func
};
WizardPatternBody.defaultProps = {
  loadingTitle: 'Loading Wizard...',
  loadingMessage: 'Loading...',
  loading: false,
  steps: [],
  activeStepIndex: 0,
  activeStepStr: '1',
  goToStep: _index.noop
};
var _default = WizardPatternBody;
exports["default"] = _default;