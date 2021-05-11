"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardLink = function CardLink(_ref) {
  var disabled = _ref.disabled,
      children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["disabled", "children", "className", "icon"]);

  var classes = (0, _classnames["default"])({
    'card-pf-link-with-icon': icon,
    disabled: disabled
  }, className);
  return _react["default"].createElement("p", null, _react["default"].createElement("a", _extends({
    className: classes
  }, props), icon, children));
};

CardLink.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes["default"].node.isRequired,

  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** card link icon node */
  icon: _propTypes["default"].node,

  /** href prop */
  href: _propTypes["default"].string,

  /** is link prop */
  disabled: _propTypes["default"].bool
};
CardLink.defaultProps = {
  className: '',
  icon: null,
  href: null,
  disabled: false
};
var _default = CardLink;
exports["default"] = _default;