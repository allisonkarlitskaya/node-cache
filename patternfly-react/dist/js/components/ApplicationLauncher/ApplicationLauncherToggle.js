"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OverlayTrigger = require("../OverlayTrigger");

var _Tooltip = require("../Tooltip");

var _Icon = require("../Icon");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ApplicationLauncherToggle = function ApplicationLauncherToggle(_ref) {
  var open = _ref.open,
      tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      tooltipPlacement = _ref.tooltipPlacement;

  if (tooltip) {
    return _react["default"].createElement(_OverlayTrigger.OverlayTrigger, {
      placement: tooltipPlacement,
      id: "applauncher-pf-block-list",
      overlay: _react["default"].createElement(_Tooltip.Tooltip, {
        id: tooltip
      }, tooltip)
    }, _react["default"].createElement(_Button.Button, {
      onClick: onClick,
      bsStyle: "link",
      className: "nav-item-iconic dropdown-toggle",
      "aria-expanded": open
    }, _react["default"].createElement(_Icon.Icon, {
      name: "th applauncher-pf-icon"
    })));
  }

  return _react["default"].createElement(_Button.Button, {
    onClick: onClick,
    bsStyle: "link",
    className: "nav-item-iconic dropdown-toggle",
    "aria-expanded": open
  }, _react["default"].createElement(_Icon.Icon, {
    name: "th applauncher-pf-icon"
  }), _react["default"].createElement("span", {
    className: "dropdown-title"
  }, _react["default"].createElement("span", {
    className: "applauncher-pf-title"
  }, "Application Launcher", _react["default"].createElement("span", {
    className: "caret",
    "aria-hidden": "true"
  }))));
};

ApplicationLauncherToggle.propTypes = {
  /** onClick func */
  onClick: _propTypes["default"].func,

  /** tooltipPlacement */
  tooltipPlacement: _propTypes["default"].string,

  /** Toggle Tooltip */
  tooltip: _propTypes["default"].string,

  /** is Open bool */
  open: _propTypes["default"].bool.isRequired
};
ApplicationLauncherToggle.defaultProps = {
  onClick: null,
  tooltipPlacement: 'bottom',
  tooltip: ''
};
var _default = ApplicationLauncherToggle;
exports["default"] = _default;