"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ListGroup = require("../ListGroup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * WizardSidebarGroup component for Patternfly React
 */
var WizardSidebarGroup = function WizardSidebarGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      step = _ref.step,
      activeStep = _ref.activeStep,
      props = _objectWithoutProperties(_ref, ["children", "className", "step", "activeStep"]);

  var classes = (0, _classnames["default"])({
    hidden: "".concat(step) !== "".concat(activeStep)
  }, className);
  return _react["default"].createElement(_ListGroup.ListGroup, _extends({
    componentClass: "ul",
    className: classes
  }, props), children);
};

WizardSidebarGroup.propTypes = {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** The wizard step number for this step */
  step: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** The active step */
  activeStep: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
WizardSidebarGroup.defaultProps = {
  children: null,
  className: '',
  step: '',
  activeStep: ''
};
var _default = WizardSidebarGroup;
exports["default"] = _default;