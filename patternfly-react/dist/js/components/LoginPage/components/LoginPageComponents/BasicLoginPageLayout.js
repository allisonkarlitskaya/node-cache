"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BasicLoginPageLayout = function BasicLoginPageLayout(_ref) {
  var children = _ref.children,
      layout = _ref.layout,
      props = _objectWithoutProperties(_ref, ["children", "layout"]);

  return _react["default"].createElement(_index.Grid, _extends({}, props, {
    fluid: true
  }), _react["default"].createElement(_index.Row, null, _react["default"].createElement(_index.Col, _extends({
    sm: 8,
    smOffset: 2,
    md: 6,
    mdOffset: 3,
    lg: 6,
    lgOffset: 3
  }, layout), children)));
};

BasicLoginPageLayout.propTypes = {
  children: _propTypes["default"].node,
  layout: _propTypes["default"].object
};
BasicLoginPageLayout.defaultProps = {
  children: null,
  layout: null
};
var _default = BasicLoginPageLayout;
exports["default"] = _default;