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
 * WizardSubStep component for Patternfly React
 */
var WizardSubStep = function WizardSubStep(_ref) {
  var className = _ref.className,
      subStep = _ref.subStep,
      title = _ref.title,
      activeSubStep = _ref.activeSubStep,
      props = _objectWithoutProperties(_ref, ["className", "subStep", "title", "activeSubStep"]);

  var classes = (0, _classnames["default"])('wizard-pf-step-title-substep', {
    active: "".concat(subStep) === "".concat(activeSubStep)
  }, className);
  return _react["default"].createElement("span", _extends({
    className: classes
  }, props), title);
};

WizardSubStep.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** The wizard sub step for this step */
  subStep: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** The wizard sub step title */
  title: _propTypes["default"].string,

  /** The active step */
  activeSubStep: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
WizardSubStep.defaultProps = {
  className: '',
  subStep: '',
  title: '',
  activeSubStep: ''
};
var _default = WizardSubStep;
exports["default"] = _default;