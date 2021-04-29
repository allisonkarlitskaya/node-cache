"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListGroup = require("../ListGroup");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * WizardReviewSubStep component for Patternfly React
 */
var WizardReviewSubStep = function WizardReviewSubStep(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      label = _ref.label,
      title = _ref.title,
      collapsed = _ref.collapsed,
      props = _objectWithoutProperties(_ref, ["children", "onClick", "label", "title", "collapsed"]);

  return _react["default"].createElement(_ListGroup.ListGroupItem, _extends({
    listItem: true
  }, props), _react["default"].createElement("a", {
    href: "#",
    onClick: onClick,
    className: collapsed ? 'collapsed' : ''
  }, _react["default"].createElement("span", {
    className: "wizard-pf-substep-number"
  }, label), _react["default"].createElement("span", {
    className: "wizard-pf-substep-title"
  }, title)), children);
};

WizardReviewSubStep.propTypes = {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Click handler */
  onClick: _propTypes["default"].func,

  /** Review step label */
  label: _propTypes["default"].string,

  /** Review step title */
  title: _propTypes["default"].string,

  /** Step collapsed */
  collapsed: _propTypes["default"].bool
};
WizardReviewSubStep.defaultProps = {
  children: null,
  onClick: _helpers.noop,
  label: '',
  title: '',
  collapsed: false
};
var _default = WizardReviewSubStep;
exports["default"] = _default;