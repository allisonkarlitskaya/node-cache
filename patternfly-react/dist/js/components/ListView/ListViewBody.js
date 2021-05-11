"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewBody wraps the central section of ListViewItem
 */
var ListViewBody = function ListViewBody(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "list-view-pf-body"
  }, children);
};

ListViewBody.propTypes = {
  /** Child nodes - ListViewDescription or ListViewAdditionalInfo instances */
  children: _propTypes["default"].node
};
ListViewBody.defaultProps = {
  children: null
};
var _default = ListViewBody;
exports["default"] = _default;