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
 * ListViewIcon used as a default content for ListViewLeft
 */
var ListViewIcon = function ListViewIcon(_ref) {
  var type = _ref.type,
      name = _ref.name,
      className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["type", "name", "className", "size"]);

  return _react["default"].createElement(_Icon.Icon, _extends({
    type: type,
    name: name,
    className: (0, _classnames["default"])("list-view-pf-icon-".concat(size), className)
  }, props));
};

ListViewIcon.propTypes = {
  /** Icon type (pf or fa) */
  type: _propTypes["default"].string,

  /** Name of the icon font */
  name: _propTypes["default"].string.isRequired,

  /** additional classes */
  className: _propTypes["default"].string,

  /** Icon size (sm, md, lg), defaults to 'sm' */
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg'])
};
ListViewIcon.defaultProps = {
  type: 'fa',
  size: 'sm',
  className: ''
};
var _default = ListViewIcon;
exports["default"] = _default;