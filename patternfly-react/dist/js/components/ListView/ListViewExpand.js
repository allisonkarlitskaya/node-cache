"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * ListViewExpand renders the caret which signifies that row is expandable.
 * The caret icon points to the right when it is closed and down when it is expanded.
 */
var ListViewExpand = function ListViewExpand(_ref) {
  var children = _ref.children,
      expanded = _ref.expanded,
      toggleExpanded = _ref.toggleExpanded;
  var classes = (0, _classnames["default"])({
    'fa fa-angle-right': true,
    'fa-angle-down': expanded
  });
  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('list-view-pf-expand', {
      active: expanded
    }),
    onClick: function onClick(e) {
      e.stopPropagation();
      toggleExpanded();
    }
  }, _react["default"].createElement("span", {
    className: classes
  }), children);
};

ListViewExpand.propTypes = {
  /** Child nodes which render additional content - used in expandable ListViewInfoItem */
  children: _propTypes["default"].node,

  /** Expanded state toggle */
  expanded: _propTypes["default"].bool,

  /** Function to execute to trigger toggle */
  toggleExpanded: _propTypes["default"].func.isRequired
};
ListViewExpand.defaultProps = {
  children: null,
  expanded: false
};
var _default = ListViewExpand;
exports["default"] = _default;