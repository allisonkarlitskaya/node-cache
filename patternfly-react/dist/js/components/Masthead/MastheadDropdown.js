"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = require("../Dropdown");

var _CustomMastheadDropdown = _interopRequireDefault(require("./InnerComponents/CustomMastheadDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Masthead
 */
var MastheadDropdown = function MastheadDropdown(_ref) {
  var className = _ref.className,
      id = _ref.id,
      title = _ref.title,
      noCaret = _ref.noCaret,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "id", "title", "noCaret", "children"]);

  return _react["default"].createElement(_Dropdown.Dropdown, _extends({
    id: id,
    componentClass: _CustomMastheadDropdown["default"],
    className: className
  }, props), _react["default"].createElement(_Dropdown.Dropdown.Toggle, {
    className: "nav-item-iconic",
    bsStyle: "link",
    noCaret: noCaret
  }, title), _react["default"].createElement(_Dropdown.Dropdown.Menu, null, children));
};

MastheadDropdown.propTypes = {
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** ID of dropdown */
  id: _propTypes["default"].string.isRequired,

  /** Title of dropdown */
  title: _propTypes["default"].node,

  /** Children (likely MenuItem's) */
  children: _propTypes["default"].node,

  /** Caret in Dropdown */
  noCaret: _propTypes["default"].bool
};
MastheadDropdown.defaultProps = {
  className: '',
  title: null,
  children: null,
  noCaret: false
};
var _default = MastheadDropdown;
exports["default"] = _default;