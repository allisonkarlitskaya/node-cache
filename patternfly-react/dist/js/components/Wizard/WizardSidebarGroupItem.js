"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ListGroup = require("../ListGroup");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * WizardSidebarGroupItem component for Patternfly React
 */
var WizardSidebarGroupItem = function WizardSidebarGroupItem(_ref) {
  var stepIndex = _ref.stepIndex,
      subStepIndex = _ref.subStepIndex,
      className = _ref.className,
      subStep = _ref.subStep,
      label = _ref.label,
      title = _ref.title,
      activeSubStep = _ref.activeSubStep,
      _onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["stepIndex", "subStepIndex", "className", "subStep", "label", "title", "activeSubStep", "onClick"]);

  var classes = (0, _classnames["default"])({
    active: "".concat(subStep) === "".concat(activeSubStep)
  }, className);
  return _react["default"].createElement(_ListGroup.ListGroupItem, _extends({
    className: classes,
    listItem: true
  }, props), _react["default"].createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();

      _onClick(stepIndex, subStepIndex);
    }
  }, _react["default"].createElement("span", {
    className: "wizard-pf-substep-number"
  }, label), _react["default"].createElement("span", {
    className: "wizard-pf-substep-title"
  }, title)));
};

WizardSidebarGroupItem.propTypes = {
  /** The wizard parent step index */
  stepIndex: _propTypes["default"].number.isRequired,

  /** The wizard sub step index */
  subStepIndex: _propTypes["default"].number.isRequired,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** This wizard sub step name */
  subStep: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** This wizard sub step label */
  label: _propTypes["default"].string,

  /** This wizard sub step title */
  title: _propTypes["default"].string,

  /** The currently active wizard substep */
  activeSubStep: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Sidebar group item click handler */
  onClick: _propTypes["default"].func
};
WizardSidebarGroupItem.defaultProps = {
  className: '',
  subStep: '',
  label: '',
  title: '',
  activeSubStep: '',
  onClick: _helpers.noop
};
var _default = WizardSidebarGroupItem;
exports["default"] = _default;