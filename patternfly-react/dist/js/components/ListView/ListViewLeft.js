"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewLeft renders nodes positioned on the left side of ListViewItem row
 */
var ListViewLeft = function ListViewLeft(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "list-view-pf-left"
  }, children);
};

ListViewLeft.propTypes = {
  /** Child nodes - usually ListViewIcon instance */
  children: _propTypes["default"].node
};
ListViewLeft.defaultProps = {
  children: null
};
var _default = ListViewLeft;
exports["default"] = _default;