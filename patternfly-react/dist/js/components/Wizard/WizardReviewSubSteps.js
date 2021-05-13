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
 * WizardReviewSubSteps component for Patternfly React
 */
var WizardReviewSubSteps = function WizardReviewSubSteps(_ref) {
  var children = _ref.children,
      className = _ref.className,
      collapsed = _ref.collapsed,
      props = _objectWithoutProperties(_ref, ["children", "className", "collapsed"]);

  var classes = (0, _classnames["default"])('wizard-pf-review-substeps', {
    collapse: collapsed
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classes
  }, props), _react["default"].createElement(_ListGroup.ListGroup, {
    componentClass: "ul"
  }, children));
};

WizardReviewSubSteps.propTypes = {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Step collapsed */
  collapsed: _propTypes["default"].bool
};
WizardReviewSubSteps.defaultProps = {
  children: null,
  className: '',
  collapsed: false
};
var _default = WizardReviewSubSteps;
exports["default"] = _default;