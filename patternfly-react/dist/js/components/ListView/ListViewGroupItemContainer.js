"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewGroupItemContainer is used with expandable ListViewItem, wraps the
 * expanded content
 */
var ListViewGroupItemContainer = function ListViewGroupItemContainer(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      onClose = _ref.onClose;
  var classes = (0, _classnames["default"])({
    'list-group-item-container container-fluid': true,
    hidden: !expanded
  });
  return _react["default"].createElement("div", {
    className: classes
  }, onClose !== _helpers.noop && _react["default"].createElement("div", {
    className: "close"
  }, _react["default"].createElement("span", {
    className: "pficon pficon-close",
    onClick: onClose
  })), expanded && children);
};

ListViewGroupItemContainer.propTypes = {
  /** Children nodes - the content visible in expanded state */
  children: _propTypes["default"].node,

  /** Boolean indicating whether expandable content is visible */
  expanded: _propTypes["default"].bool,

  /** Function to call when 'close icon' is clicked */
  onClose: _propTypes["default"].func
};
ListViewGroupItemContainer.defaultProps = {
  children: null,
  onClose: _helpers.noop,
  expanded: false
};
var _default = ListViewGroupItemContainer;
exports["default"] = _default;