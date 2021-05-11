"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApplicationLauncher = _interopRequireDefault(require("../ApplicationLauncher"));

var _ApplicationLauncherItem = _interopRequireDefault(require("../ApplicationLauncherItem"));

var _helpers = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ApplicationLauncherWrapper = function ApplicationLauncherWrapper(_ref) {
  var apps = _ref.apps,
      noIcons = _ref.noIcons,
      grid = _ref.grid,
      tooltip = _ref.tooltip,
      tooltipPlacement = _ref.tooltipPlacement,
      toggleLauncher = _ref.toggleLauncher,
      open = _ref.open;
  var renderApps = apps.map(function (app, i) {
    return _react["default"].createElement(_ApplicationLauncherItem["default"], {
      key: i,
      icon: app.icon,
      title: app.title,
      tooltip: app.tooltip,
      tooltipPlacement: tooltipPlacement,
      onClick: app.onClick,
      noIcons: noIcons
    });
  });
  return _react["default"].createElement(_ApplicationLauncher["default"], {
    grid: grid,
    tooltip: tooltip,
    tooltipPlacement: tooltipPlacement,
    open: open,
    toggleLauncher: toggleLauncher
  }, renderApps);
};

ApplicationLauncherWrapper.propTypes = {
  /** Array of App Objects */
  apps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    tooltip: _propTypes["default"].string,
    onClick: _propTypes["default"].func
  })),

  /** No Icons Bool */
  noIcons: _propTypes["default"].bool,

  /** Grid instead of List (List is Default) */
  grid: _propTypes["default"].bool,

  /** Toggle Tooltip */
  tooltip: _propTypes["default"].string,

  /** Tooltip Placement */
  tooltipPlacement: _propTypes["default"].string,

  /** Launcher open bool */
  open: _propTypes["default"].bool.isRequired,

  /** Toggle launcher func */
  toggleLauncher: _propTypes["default"].func
};
ApplicationLauncherWrapper.defaultProps = {
  noIcons: false,
  tooltip: '',
  tooltipPlacement: 'left',
  grid: false,
  toggleLauncher: _helpers.noop,
  apps: [{
    title: 'Royal',
    icon: 'virtual-machine',
    tooltip: 'Tooltip!',
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }]
};
var _default = ApplicationLauncherWrapper;
exports["default"] = _default;