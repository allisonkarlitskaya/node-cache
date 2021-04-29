"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ProgressBar = require("../ProgressBar");

var _OverlayTrigger = require("../OverlayTrigger");

var _Tooltip = require("../Tooltip");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var randomId = function randomId() {
  return Date.now();
};

var AvailableTooltipFunction = function AvailableTooltipFunction(max, now) {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    id: randomId()
  }, "Available ", max - now, " %");
};

var UsedTooltipFunction = function UsedTooltipFunction(max, now) {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    id: randomId()
  }, "Used ", now, " %");
};

var UtilizationBar = function UtilizationBar(_ref) {
  var min = _ref.min,
      max = _ref.max,
      now = _ref.now,
      availableTooltipFunction = _ref.availableTooltipFunction,
      usedTooltipFunction = _ref.usedTooltipFunction,
      descriptionPlacementTop = _ref.descriptionPlacementTop,
      description = _ref.description,
      thresholdWarning = _ref.thresholdWarning,
      thresholdError = _ref.thresholdError,
      label = _ref.label,
      className = _ref.className;
  return _react["default"].createElement("div", {
    className: (0, _helpers.mainDivClasses)(!descriptionPlacementTop, className, description, label)
  }, _react["default"].createElement("div", {
    className: descriptionPlacementTop ? null : 'progress-bar'
  }, label && _react["default"].createElement("span", {
    className: (0, _helpers.labelClasses)(descriptionPlacementTop)
  }, label), description && _react["default"].createElement("div", {
    className: "progress-description label-text"
  }, description)), _react["default"].createElement("div", {
    className: "progress"
  }, _react["default"].createElement(_OverlayTrigger.OverlayTrigger, {
    overlay: usedTooltipFunction(max, now),
    placement: "top",
    trigger: ['hover', 'focus'],
    rootClose: false
  }, _react["default"].createElement(_ProgressBar.ProgressBar, {
    bsStyle: (0, _helpers.barStyle)(thresholdWarning, thresholdError, now),
    min: min,
    max: max,
    now: now,
    key: 1,
    isChild: true
  })), _react["default"].createElement(_OverlayTrigger.OverlayTrigger, {
    overlay: availableTooltipFunction(max, now),
    placement: "top",
    trigger: ['hover', 'focus'],
    rootClose: false
  }, _react["default"].createElement(_ProgressBar.ProgressBar, {
    min: min,
    max: max,
    now: max - now,
    key: 2,
    bsClass: "progress-bar progress-bar-remaining",
    isChild: true
  }))));
};

UtilizationBar.propTypes = {
  /** Minimal value */
  min: _propTypes["default"].number,

  /** Maximal value */
  max: _propTypes["default"].number,

  /** Current value */
  now: _propTypes["default"].number.isRequired,

  /** Threshold value. Bar will change value to orange if it's surpassed. */
  thresholdWarning: _propTypes["default"].number,

  /** Threshold value. Bar will change value to red if it's surpassed.  */
  thresholdError: _propTypes["default"].number,

  /** Function that renders tooltip for available part of bar. Takes params max and now. */
  availableTooltipFunction: _propTypes["default"].func,

  /** Function that renders tooltip for used part of bar. Takes params max and now. */
  usedTooltipFunction: _propTypes["default"].func,

  /** Description that is displayed on the right side */
  description: _propTypes["default"].node,

  /** Units */
  label: _propTypes["default"].node,

  /** If set labels will be placed above utilization bar */
  descriptionPlacementTop: _propTypes["default"].bool,

  /** User's custom classes */
  className: _propTypes["default"].string
};
UtilizationBar.defaultProps = {
  min: 0,
  max: 100,
  availableTooltipFunction: AvailableTooltipFunction,
  usedTooltipFunction: UsedTooltipFunction,
  descriptionPlacementTop: false,
  thresholdWarning: null,
  thresholdError: null,
  description: null,
  label: null,
  className: null
};
var _default = UtilizationBar;
exports["default"] = _default;