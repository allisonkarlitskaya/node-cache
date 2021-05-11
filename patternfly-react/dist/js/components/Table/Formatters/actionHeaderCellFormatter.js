"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableHeading = _interopRequireDefault(require("../TableHeading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var actionHeaderCellFormatter = function actionHeaderCellFormatter(value, _ref) {
  var column = _ref.column;
  return _react["default"].createElement(_TableHeading["default"], _extends({
    "aria-label": column.header.label
  }, column.header.props), column.header.label);
};

actionHeaderCellFormatter.propTypes = {
  /** cell value */
  value: _propTypes["default"].node,

  /** column definition */
  column: _propTypes["default"].object
};
actionHeaderCellFormatter.defaultProps = {
  value: null,
  column: {}
};
var _default = actionHeaderCellFormatter;
exports["default"] = _default;