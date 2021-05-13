"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * EmptyStateIcon renders element
 */
var EmptyStateIcon = function EmptyStateIcon(_ref) {
  var className = _ref.className,
      type = _ref.type,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["className", "type", "name"]);

  var classes = (0, _classnames["default"])('blank-slate-pf-icon', className);
  return _react["default"].createElement("div", {
    className: classes
  }, _react["default"].createElement(_Icon.Icon, _extends({
    type: type,
    name: name
  }, props)));
};

EmptyStateIcon.propTypes = {
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Icon type (pf or fa) */
  type: _propTypes["default"].string,

  /** Name of the icon font */
  name: _propTypes["default"].string
};
EmptyStateIcon.defaultProps = {
  type: 'pf',
  name: 'add-circle-o',
  className: ''
};
var _default = EmptyStateIcon;
exports["default"] = _default;