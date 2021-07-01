"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../Button");

var _DropdownKebab = require("../DropdownKebab");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * TableDropdownKebab component for Patternfly React
 */
var TableDropdownKebab = function TableDropdownKebab(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var CustomButtonGroup = function CustomButtonGroup(buttonProps) {
    return _react["default"].createElement(_Button.ButtonGroup, _extends({}, buttonProps, {
      bsClass: " "
    }));
  };

  return _react["default"].createElement(_DropdownKebab.DropdownKebab, _extends({
    componentClass: CustomButtonGroup,
    toggleStyle: "default"
  }, props), children);
};

TableDropdownKebab.propTypes = {
  /** children nodes */
  children: _propTypes["default"].node
};
TableDropdownKebab.defaultProps = {
  children: null
};
var _default = TableDropdownKebab;
exports["default"] = _default;