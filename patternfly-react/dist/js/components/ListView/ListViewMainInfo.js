"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewMainInfo wraps the informational content of the ListViewItem
 */
var ListViewMainInfo = function ListViewMainInfo(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "list-view-pf-main-info"
  }, children);
};

ListViewMainInfo.propTypes = {
  /** Child nodes - instances of ListViewLeft and ListViewBody */
  children: _propTypes["default"].node
};
ListViewMainInfo.defaultProps = {
  children: null
};
var _default = ListViewMainInfo;
exports["default"] = _default;