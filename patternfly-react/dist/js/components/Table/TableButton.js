"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = require("../Button");

var _ButtonConstants = require("../Button/ButtonConstants");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * TableButton component for Patternfly React
 */
var TableButton = function TableButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["children", "className", "onClick"]);

  var classes = (0, _classnames["default"])('table-view-pf-btn', className);

  var bsStyle = props.bsStyle,
      otherProps = _objectWithoutProperties(props, ["bsStyle"]);

  return _react["default"].createElement("div", _extends({
    className: classes
  }, otherProps), _react["default"].createElement(_Button.Button, {
    onClick: onClick,
    bsStyle: bsStyle
  }, children));
};

TableButton.propTypes = {
  /** Children nodes  */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** onClick callback for button */
  onClick: _propTypes["default"].func,
  bsStyle: _propTypes["default"].oneOf(_ButtonConstants.BUTTON_BS_STYLES)
};
TableButton.defaultProps = {
  children: null,
  className: '',
  onClick: _helpers.noop,
  bsStyle: 'default'
};
TableButton.BUTTON_BS_STYLES = _ButtonConstants.BUTTON_BS_STYLES;
var _default = TableButton;
exports["default"] = _default;