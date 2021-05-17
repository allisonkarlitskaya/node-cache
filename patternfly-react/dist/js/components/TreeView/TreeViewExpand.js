"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TreeViewExpand = function TreeViewExpand(_ref) {
  var nodes = _ref.nodes,
      expanded = _ref.expanded,
      toggleExpand = _ref.toggleExpand;
  var hasChildren = nodes.length > 0;
  var classes = (0, _classnames["default"])('icon indent', {
    'expand-icon fa fa-angle-right': hasChildren && !expanded
  }, {
    'expand-icon fa fa-angle-down': hasChildren && expanded
  }, {
    glyphicon: !hasChildren
  });
  return _react["default"].createElement("span", {
    onClick: toggleExpand,
    className: classes,
    "aria-hidden": true
  });
};

TreeViewExpand.propTypes = {
  nodes: _propTypes["default"].array,
  expanded: _propTypes["default"].bool,
  toggleExpand: _propTypes["default"].func
};
TreeViewExpand.defaultProps = {
  nodes: [],
  expanded: false,
  toggleExpand: _helpers.noop
};
var _default = TreeViewExpand;
exports["default"] = _default;