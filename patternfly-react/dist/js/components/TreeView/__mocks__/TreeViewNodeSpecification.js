"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TreeViewNodeSpecification = function TreeViewNodeSpecification(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      selectable = _ref.selectable,
      state = _ref.state,
      nodes = _ref.nodes;
  return _react["default"].createElement("div", null, text, icon, selectable, state, nodes);
};

TreeViewNodeSpecification.propTypes = {
  /** Display text */
  text: _propTypes["default"].string,

  /** http://www.patternfly.org/styles/icons/ */
  icon: _propTypes["default"].string,

  /** Use with TreeView selectNode and highlightOnSelect props */
  selectable: _propTypes["default"].bool,

  /** Object that holds initial node state. Currently supports the expanded
  property, which can be set to true in order to have the node be expanded by
  default. */
  state: _propTypes["default"].object,

  /** Array of child nodes */
  nodes: _propTypes["default"].array
};
TreeViewNodeSpecification.defaultProps = {
  icon: 'fa fa-folder',
  text: '',
  selectable: false,
  state: {},
  nodes: []
};
var _default = TreeViewNodeSpecification;
exports["default"] = _default;