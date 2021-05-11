"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = require("../Tooltip");

var _OverlayTrigger = require("../OverlayTrigger");

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ApplicationLauncherItem = function ApplicationLauncherItem(_ref) {
  var _onClick = _ref.onClick,
      tooltip = _ref.tooltip,
      tooltipPlacement = _ref.tooltipPlacement,
      title = _ref.title,
      icon = _ref.icon,
      noIcons = _ref.noIcons,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["onClick", "tooltip", "tooltipPlacement", "title", "icon", "noIcons", "className"]);

  var classes = (0, _classnames["default"])('applauncher-pf-item', className);

  if (tooltip !== null) {
    return _react["default"].createElement(_OverlayTrigger.OverlayTrigger, {
      overlay: _react["default"].createElement(_Tooltip.Tooltip, {
        id: title
      }, tooltip),
      placement: tooltipPlacement,
      trigger: ['hover', 'focus'],
      rootClose: false
    }, _react["default"].createElement("li", {
      className: classes,
      role: "presentation"
    }, _react["default"].createElement("a", {
      className: "applauncher-pf-link",
      href: "#",
      onClick: function onClick(e) {
        return _onClick(e);
      },
      role: "menuitem"
    }, !noIcons && _react["default"].createElement(_Icon.Icon, {
      type: "pf",
      name: icon,
      className: "applauncher-pf-link-icon"
    }), _react["default"].createElement("span", {
      className: "applauncher-pf-link-title"
    }, title))));
  }

  return _react["default"].createElement("li", {
    className: classes,
    role: "presentation"
  }, _react["default"].createElement("a", {
    className: "applauncher-pf-link",
    href: "#",
    onClick: function onClick(e) {
      return _onClick(e);
    },
    role: "menuitem"
  }, !noIcons && _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: icon,
    className: "applauncher-pf-link-icon"
  }), _react["default"].createElement("span", {
    className: "applauncher-pf-link-title"
  }, title)));
};

ApplicationLauncherItem.propTypes = {
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** onClick func */
  onClick: _propTypes["default"].func,

  /** Title String */
  title: _propTypes["default"].string.isRequired,

  /** Icon Type */
  icon: _propTypes["default"].string.isRequired,

  /** App Tooltip */
  tooltip: _propTypes["default"].string,

  /** Tooltip Placement */
  tooltipPlacement: _propTypes["default"].string,

  /** No Icons Bool */
  noIcons: _propTypes["default"].bool
};
ApplicationLauncherItem.defaultProps = {
  className: '',
  onClick: null,
  noIcons: false,
  tooltipPlacement: 'left',
  tooltip: null
};
var _default = ApplicationLauncherItem;
exports["default"] = _default;