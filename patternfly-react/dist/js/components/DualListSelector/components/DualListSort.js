"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../../..");

var _helpers = require("../../../common/helpers");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListSort = function DualListSort(_ref) {
  var onClick = _ref.onClick,
      side = _ref.side,
      isSortAsc = _ref.isSortAsc,
      ariaLabel = _ref.ariaLabel;
  return _react["default"].createElement(_.Icon, {
    "aria-label": ariaLabel,
    className: "dual-list-pf-sort-icon",
    type: "pf",
    name: "sort-common-".concat(isSortAsc ? 'asc' : 'desc'),
    "data-side": side,
    tabIndex: "0",
    onClick: onClick,
    onKeyPress: onClick
  });
};

DualListSort.propTypes = {
  /** The function which is running when sort icon is clicked. */
  onClick: _propTypes["default"].func,

  /** Which side is the selector, passed by the onClick function. */
  side: _propTypes["default"].string,

  /** Which type of sort is it to determine the right icon. */
  isSortAsc: _propTypes["default"].bool,

  /** Sets the aria-label of the icon. */
  ariaLabel: _propTypes["default"].string
};
DualListSort.defaultProps = {
  onClick: _helpers.noop,
  side: null,
  isSortAsc: true,
  ariaLabel: _constants.SORT_ARIA_LABEL
};
var _default = DualListSort;
exports["default"] = _default;