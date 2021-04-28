"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * WizardContents component for Patternfly React
 */
var WizardContents = function WizardContents(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stepIndex = _ref.stepIndex,
      subStepIndex = _ref.subStepIndex,
      activeStepIndex = _ref.activeStepIndex,
      activeSubStepIndex = _ref.activeSubStepIndex,
      props = _objectWithoutProperties(_ref, ["children", "className", "stepIndex", "subStepIndex", "activeStepIndex", "activeSubStepIndex"]);

  var classes = (0, _classnames["default"])('wizard-pf-contents', {
    // hide contents if the step is not active
    // OR if we have sub steps and this sub step is not active
    hidden: activeStepIndex !== stepIndex || activeSubStepIndex !== null && activeSubStepIndex !== subStepIndex
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classes
  }, props), children);
};

WizardContents.propTypes = {
  /** WizardStep nodes */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** The wizard step index for these contents */
  stepIndex: _propTypes["default"].number.isRequired,

  /** The wizard sub step index for these contents */
  subStepIndex: _propTypes["default"].number,

  /** The active wizard step index */
  activeStepIndex: _propTypes["default"].number.isRequired,

  /** The active wizard sub step index */
  activeSubStepIndex: _propTypes["default"].number
};
WizardContents.defaultProps = {
  children: null,
  className: '',
  subStepIndex: null,
  activeSubStepIndex: null
};
var _default = WizardContents;
exports["default"] = _default;