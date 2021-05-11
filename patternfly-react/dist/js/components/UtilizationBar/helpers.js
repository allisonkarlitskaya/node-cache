"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.barStyle = exports.mainDivClasses = exports.labelClasses = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var labelClasses = function labelClasses(top) {
  return (0, _classnames["default"])({
    'progress-label-top-right': top,
    'progress-label-right': !top
  }, 'pull-right', 'display-inline-block');
};

exports.labelClasses = labelClasses;

var mainDivClasses = function mainDivClasses(onSide, userClasses, description, label) {
  return (0, _classnames["default"])({
    'progress-container': onSide && description,
    'progress-description-left': onSide && description,
    'progress-label-right': onSide && label
  }, userClasses, 'utilization-bar-pf');
};

exports.mainDivClasses = mainDivClasses;

var barStyle = function barStyle(thresholdWarning, thresholdError, now) {
  if (thresholdWarning && thresholdError) {
    var style = 'success';

    if (thresholdWarning <= now) {
      style = 'warning';
    }

    if (thresholdError <= now) {
      style = 'danger';
    }

    return style;
  }

  return null;
};

exports.barStyle = barStyle;