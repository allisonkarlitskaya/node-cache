"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * WizardStep component for Patternfly React
 */
var WizardStep = function WizardStep(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stepIndex = _ref.stepIndex,
      step = _ref.step,
      label = _ref.label,
      title = _ref.title,
      activeStep = _ref.activeStep,
      _onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "className", "stepIndex", "step", "label", "title", "activeStep", "onClick"]);

  var classes = (0, _classnames["default"])('wizard-pf-step', {
    active: "".concat(step) === "".concat(activeStep)
  }, className);
  return _react["default"].createElement("li", _extends({
    className: classes
  }, props), _react["default"].createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick(stepIndex);
    }
  }, _react["default"].createElement("span", {
    className: "wizard-pf-step-number"
  }, label), _react["default"].createElement("span", {
    className: "wizard-pf-step-title"
  }, title), children));
};

WizardStep.propTypes = {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** The wizard step index */
  stepIndex: _propTypes["default"].number.isRequired,

  /** The wizard step for this step */
  step: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** The wizard step number label */
  label: _propTypes["default"].string,

  /** The wizard step title */
  title: _propTypes["default"].string,

  /** The active step */
  activeStep: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Step click handler */
  onClick: _propTypes["default"].func
};
WizardStep.defaultProps = {
  children: null,
  className: '',
  step: '',
  label: '',
  title: '',
  activeStep: '',
  onClick: _helpers.noop
};
var _default = WizardStep;
exports["default"] = _default;