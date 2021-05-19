"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableCell = _interopRequireDefault(require("../TableCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tableCellFormatter = function tableCellFormatter(value) {
  return _react["default"].createElement(_TableCell["default"], null, value);
};

tableCellFormatter.propTypes = {
  /** cell value */
  value: _propTypes["default"].node // eslint-disable-line react/no-unused-prop-types

};
tableCellFormatter.defaultProps = {
  value: null
};
var _default = tableCellFormatter;
exports["default"] = _default;