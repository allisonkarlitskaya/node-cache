"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = require("../../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NotificationDrawerTitle = function NotificationDrawerTitle(_ref) {
  var expandable = _ref.expandable,
      onCloseClick = _ref.onCloseClick,
      onExpandClick = _ref.onExpandClick,
      title = _ref.title,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["expandable", "onCloseClick", "onExpandClick", "title", "children", "className"]);

  var classes = (0, _classnames["default"])('drawer-pf-title', className);
  return _react["default"].createElement("div", _extends({
    className: classes
  }, props), expandable && _react["default"].createElement("a", {
    className: "drawer-pf-toggle-expand",
    onClick: onExpandClick
  }), _react["default"].createElement("a", {
    className: "drawer-pf-close",
    onClick: onCloseClick
  }, _react["default"].createElement(_Icon.Icon, {
    name: "close"
  })), _react["default"].createElement("h3", {
    className: "text-center"
  }, title), children);
};

NotificationDrawerTitle.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes["default"].node,

  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Title prop */
  title: _propTypes["default"].string,

  /** Close/Expand Functions */
  onCloseClick: _propTypes["default"].func,
  onExpandClick: _propTypes["default"].func,

  /** is the Drawer expandable prop */
  expandable: _propTypes["default"].bool
};
NotificationDrawerTitle.defaultProps = {
  className: '',
  title: 'Notifications',
  onCloseClick: null,
  onExpandClick: null,
  children: null,
  expandable: true
};
var _default = NotificationDrawerTitle;
exports["default"] = _default;