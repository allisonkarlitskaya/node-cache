"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewDescriptionHeading renders ListViewItem heading
 */
var ListViewDescriptionHeading = function ListViewDescriptionHeading(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "list-group-item-heading"
  }, children);
};

ListViewDescriptionHeading.propTypes = {
  /** Child node - content rendered as heading */
  children: _propTypes["default"].node
};
ListViewDescriptionHeading.defaultProps = {
  children: null
};
var _default = ListViewDescriptionHeading;
exports["default"] = _default;