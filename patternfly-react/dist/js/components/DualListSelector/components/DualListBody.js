"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DualListItems = _interopRequireDefault(require("./DualListItems"));

var _constants = require("../constants");

var _helpers = require("../helpers");

var _helpers2 = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListBody = function DualListBody(_ref) {
  var items = _ref.items,
      filterTerm = _ref.filterTerm,
      onItemChange = _ref.onItemChange,
      side = _ref.side,
      noItemsFoundMessage = _ref.noItemsFoundMessage,
      noItemsMessage = _ref.noItemsMessage;
  var listItems;

  if (items.length > 0) {
    listItems = _react["default"].createElement(_DualListItems["default"], {
      items: items,
      filterTerm: filterTerm,
      onChange: onItemChange,
      side: side
    });

    if ((0, _helpers.getFilterredItemsLength)(items) === 0) {
      listItems = _react["default"].createElement("div", {
        className: "dual-list-pf-no-items"
      }, noItemsFoundMessage);
    }
  } else {
    listItems = _react["default"].createElement("div", {
      className: "dual-list-pf-no-items"
    }, noItemsMessage);
  }

  return _react["default"].createElement("div", {
    className: "dual-list-pf-body"
  }, listItems);
};

DualListBody.propTypes = {
  /** An array of items to create list items elements uppon */
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])
  })),

  /** The term which is flitering the list. */
  filterTerm: _propTypes["default"].string,

  /** A function that is running when the item selected state is toggled. */
  onItemChange: _propTypes["default"].func,

  /** The side of the selector. */
  side: _propTypes["default"].string,

  /** Sets the body's message when no items were found while filtering */
  noItemsFoundMessage: _propTypes["default"].string,

  /** Sets the body's message when there are no items at all */
  noItemsMessage: _propTypes["default"].string
};
DualListBody.defaultProps = {
  items: [],
  filterTerm: null,
  onItemChange: _helpers2.noop,
  side: null,
  noItemsFoundMessage: _constants.NO_ITEMS_FOUND,
  noItemsMessage: _constants.NO_ITEMS
};
var _default = DualListBody;
exports["default"] = _default;