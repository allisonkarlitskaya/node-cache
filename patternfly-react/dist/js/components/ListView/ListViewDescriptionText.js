"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewDescriptionText renders text content of ListViewItem
 */
var ListViewDescriptionText = function ListViewDescriptionText(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "list-group-item-text"
  }, children);
};

ListViewDescriptionText.propTypes = {
  /** Child node - content rendered in text section of ListViewItem */
  children: _propTypes["default"].node
};
ListViewDescriptionText.defaultProps = {
  children: null
};
var _default = ListViewDescriptionText;
exports["default"] = _default;