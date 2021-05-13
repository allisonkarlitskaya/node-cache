"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Spinner = _interopRequireDefault(require("../Spinner/Spinner"));

var _NotificationContent = _interopRequireDefault(require("./NotificationContent"));

var _NotificationInfo = _interopRequireDefault(require("./NotificationInfo"));

var _NotificationMessage = _interopRequireDefault(require("./NotificationMessage"));

var _NotificationInfoRight = _interopRequireDefault(require("./NotificationInfoRight"));

var _NotificationInfoLeft = _interopRequireDefault(require("./NotificationInfoLeft"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Notification = function Notification(_ref) {
  var type = _ref.type,
      children = _ref.children,
      seen = _ref.seen,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["type", "children", "seen", "className"]);

  var classes = (0, _classnames["default"])({
    'drawer-pf-notification': type === 'notification',
    'drawer-pf-loading text-center': type === 'loading'
  }, {
    unread: !seen
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classes
  }, props), type === 'loading' ? [_react["default"].createElement(_Spinner["default"], {
    key: "notification_spinner",
    inline: true,
    loading: true,
    size: "xs"
  }), ' Loading More'] : children);
};

Notification.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes["default"].node,

  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** seen Notification Bool */
  seen: _propTypes["default"].bool,

  /** show Loading Notification */
  type: _propTypes["default"].string
};
Notification.defaultProps = {
  children: null,
  className: '',
  seen: false,
  type: 'notification'
};
Notification.Content = _NotificationContent["default"];
Notification.Info = _NotificationInfo["default"];
Notification.InfoRight = _NotificationInfoRight["default"];
Notification.InfoLeft = _NotificationInfoLeft["default"];
Notification.Message = _NotificationMessage["default"];
var _default = Notification;
exports["default"] = _default;