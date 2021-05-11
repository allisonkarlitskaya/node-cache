"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _EmptyState = require("../../EmptyState");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NotificationDrawerEmptyState = function NotificationDrawerEmptyState(_ref) {
  var title = _ref.title,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["title", "className"]);

  return _react["default"].createElement(_EmptyState.EmptyState, null, _react["default"].createElement(_EmptyState.EmptyStateIcon, {
    name: "info"
  }), _react["default"].createElement(_EmptyState.EmptyStateTitle, null, title));
};

NotificationDrawerEmptyState.propTypes = {
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Title */
  title: _propTypes["default"].string
};
NotificationDrawerEmptyState.defaultProps = {
  className: '',
  title: 'No Notifications Available'
};
var _default = NotificationDrawerEmptyState;
exports["default"] = _default;