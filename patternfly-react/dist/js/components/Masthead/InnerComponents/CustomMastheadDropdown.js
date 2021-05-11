"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Custom Masthead Dropdown
 */
var CustomMastheadDropdown = function CustomMastheadDropdown(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react["default"].createElement("li", {
    className: className
  }, children);
};

CustomMastheadDropdown.propTypes = {
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Children elements */
  children: _propTypes["default"].node
};
CustomMastheadDropdown.defaultProps = {
  className: '',
  children: null
};
var _default = CustomMastheadDropdown;
exports["default"] = _default;