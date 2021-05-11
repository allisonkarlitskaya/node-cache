"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DualListCounter = _interopRequireDefault(require("./DualListCounter"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListFooter = function DualListFooter(_ref) {
  var items = _ref.items,
      selectCount = _ref.selectCount,
      getCounterMessage = _ref.getCounterMessage;
  return _react["default"].createElement("div", {
    className: "dual-list-pf-footer"
  }, _react["default"].createElement(_DualListCounter["default"], {
    selected: selectCount,
    total: (0, _helpers.getItemsLength)(items),
    getCounterMessage: getCounterMessage
  }));
};

DualListFooter.propTypes = {
  /** Items array to get the length from. */
  items: _propTypes["default"].array,

  /** Amount of selected items in the selector. */
  selectCount: _propTypes["default"].number,

  /** Determines the counter message in the selector's footer,
   * receives the selected and total amounts of items.
   */
  getCounterMessage: _propTypes["default"].func
};
DualListFooter.defaultProps = {
  items: [],
  selectCount: 0,
  getCounterMessage: _helpers.getCounterMessage
};
var _default = DualListFooter;
exports["default"] = _default;