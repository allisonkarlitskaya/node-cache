"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DualListItemTooltip = _interopRequireDefault(require("./DualListItemTooltip"));

var _TypeAheadSelect = require("../../../components/TypeAheadSelect");

var _helpers = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Highlighter = _TypeAheadSelect.TypeAheadSelect.Highlighter;

var DualListItem = function DualListItem(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      position = _ref.position,
      parentPosition = _ref.parentPosition,
      value = _ref.value,
      label = _ref.label,
      filterTerm = _ref.filterTerm,
      onChange = _ref.onChange,
      side = _ref.side,
      hidden = _ref.hidden,
      hiddenByFilter = _ref.hiddenByFilter,
      disabled = _ref.disabled,
      tooltipID = _ref.tooltipID,
      tooltipText = _ref.tooltipText;
  var cx = (0, _classnames["default"])('dual-list-pf-item', className, checked && 'selected', disabled && 'disabled');

  var itemLabel = _react["default"].createElement("span", {
    className: "dual-list-pf-item-label"
  }, _react["default"].createElement(Highlighter, {
    search: filterTerm
  }, label));

  var item = _react["default"].createElement("label", {
    className: cx,
    hidden: hiddenByFilter || hidden
  }, _react["default"].createElement("input", {
    type: "checkbox",
    "data-position": position,
    "data-parent-position": parentPosition,
    onChange: onChange,
    checked: checked || false,
    value: value,
    "data-side": side,
    disabled: disabled
  }), itemLabel);

  var getTooltipID = function getTooltipID() {
    var uniqueTooltipID = "dual-list-item-tooltip-".concat(side);

    if (parentPosition) {
      uniqueTooltipID += "-".concat(parentPosition);
    }

    uniqueTooltipID += "-".concat(position);
    return uniqueTooltipID;
  };

  return tooltipText ? _react["default"].createElement(_DualListItemTooltip["default"], {
    text: tooltipText,
    id: tooltipID || getTooltipID()
  }, item) : item;
};

DualListItem.propTypes = {
  /** Is the element chacked */
  checked: _propTypes["default"].bool,

  /** Additional html class */
  className: _propTypes["default"].string,

  /** The element position, used by the onChange function. */
  position: _propTypes["default"].number,

  /** The element parent position, used by the onChange function. */
  parentPosition: _propTypes["default"].number,

  /** The element value, used by the onChange function. */
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /** The element label, used by the onChange function. */
  label: _propTypes["default"].string,

  /** The term which is flitering the list. */
  filterTerm: _propTypes["default"].string,

  /** A function that is running when the item selected state is toggled. */
  onChange: _propTypes["default"].func,

  /** The side of the selector. */
  side: _propTypes["default"].string,

  /** Sets the item visibillity when filtering. */
  hiddenByFilter: _propTypes["default"].bool,

  /** Sets the item default visibillity, can't be reverted. */
  hidden: _propTypes["default"].bool,

  /** Disable the item to move between lists */
  disabled: _propTypes["default"].bool,

  /** unique tooltip ID */
  tooltipID: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** text to be shown on the tooltip */
  tooltipText: _propTypes["default"].string
};
DualListItem.defaultProps = {
  checked: false,
  className: null,
  parentPosition: null,
  position: 0,
  value: '',
  label: null,
  filterTerm: null,
  onChange: _helpers.noop,
  side: null,
  hiddenByFilter: false,
  hidden: false,
  disabled: false,
  tooltipID: null,
  tooltipText: null
};
var _default = DualListItem;
exports["default"] = _default;