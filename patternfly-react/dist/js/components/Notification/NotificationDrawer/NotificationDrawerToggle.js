"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OverlayTrigger = require("../../OverlayTrigger");

var _Tooltip = require("../../Tooltip");

var _Icon = require("../../Icon");

var _Button = require("../../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NotificationDrawerToggle = function NotificationDrawerToggle(_ref) {
  var hasUnreadMessages = _ref.hasUnreadMessages,
      onClick = _ref.onClick;
  var iconName = hasUnreadMessages ? 'bell' : 'bell-o';

  var tooltip = _react["default"].createElement(_Tooltip.Tooltip, {
    id: "tooltip"
  }, "Notifications");

  return _react["default"].createElement(_OverlayTrigger.OverlayTrigger, {
    placement: "bottom",
    id: "notifications-toggle-icon",
    overlay: tooltip
  }, _react["default"].createElement(_Button.Button, {
    onClick: onClick,
    bsStyle: "link",
    className: "nav-item-iconic"
  }, _react["default"].createElement(_Icon.Icon, {
    name: iconName,
    "aria-describedby": "tooltip"
  })));
};

NotificationDrawerToggle.propTypes = {
  /** has Unread Messages Bool */
  hasUnreadMessages: _propTypes["default"].bool,

  /** onClick func */
  onClick: _propTypes["default"].func
};
NotificationDrawerToggle.defaultProps = {
  hasUnreadMessages: true,
  onClick: null
};
var _default = NotificationDrawerToggle;
exports["default"] = _default;