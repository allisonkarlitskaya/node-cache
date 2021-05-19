"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewActions wraps ListViewItem actions and positions them to the right
 */
var ListViewActions = function ListViewActions(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "list-view-pf-actions"
  }, children);
};

ListViewActions.propTypes = {
  /** Child nodes which render individual actions - Buttons, DropdownKebab... */
  children: _propTypes["default"].node
};
ListViewActions.defaultProps = {
  children: null
};
var _default = ListViewActions;
exports["default"] = _default;