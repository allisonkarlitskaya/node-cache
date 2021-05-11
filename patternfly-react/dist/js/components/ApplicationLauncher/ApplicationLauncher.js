"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Dropdown = require("../Dropdown");

var _helpers = require("../../common/helpers");

var _ApplicationLauncherToggle = _interopRequireDefault(require("./ApplicationLauncherToggle"));

var _ApplicationLauncherItem = _interopRequireDefault(require("./ApplicationLauncherItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ApplicationLauncher = function ApplicationLauncher(_ref) {
  var open = _ref.open,
      grid = _ref.grid,
      tooltip = _ref.tooltip,
      tooltipPlacement = _ref.tooltipPlacement,
      children = _ref.children,
      toggleLauncher = _ref.toggleLauncher,
      className = _ref.className,
      propTypes = _objectWithoutProperties(_ref, ["open", "grid", "tooltip", "tooltipPlacement", "children", "toggleLauncher", "className"]);

  var classes = (0, _classnames["default"])('applauncher-pf dropdown', {
    'applauncher-pf-block-list': grid
  }, {
    open: open
  });
  return _react["default"].createElement("li", {
    className: classes
  }, _react["default"].createElement(_ApplicationLauncherToggle["default"], {
    tooltip: tooltip,
    tooltipPlacement: tooltipPlacement,
    onClick: function onClick() {
      return toggleLauncher();
    },
    open: open
  }), _react["default"].createElement(_Dropdown.Dropdown.Menu, {
    className: "dropdown-menu-right"
  }, children));
};

ApplicationLauncher.propTypes = {
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Children Node */
  children: _propTypes["default"].node.isRequired,

  /** Toggle Tooltip */
  tooltip: _propTypes["default"].string,

  /** tooltipPlacement */
  tooltipPlacement: _propTypes["default"].string,

  /** Application Launcher Type (Default List) */
  grid: _propTypes["default"].bool,

  /** open bool */
  open: _propTypes["default"].bool,

  /** Toggle launcher func */
  toggleLauncher: _propTypes["default"].func
};
ApplicationLauncher.defaultProps = {
  className: '',
  tooltip: '',
  tooltipPlacement: 'left',
  toggleLauncher: _helpers.noop,
  grid: false,
  open: false
};
ApplicationLauncher.Toggle = _ApplicationLauncherToggle["default"];
ApplicationLauncher.Item = _ApplicationLauncherItem["default"];
var _default = ApplicationLauncher;
exports["default"] = _default;