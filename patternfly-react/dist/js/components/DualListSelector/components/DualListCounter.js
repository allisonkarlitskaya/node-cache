"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListCounter = function DualListCounter(_ref) {
  var selected = _ref.selected,
      total = _ref.total,
      getCounterMessage = _ref.getCounterMessage;
  return _react["default"].createElement("strong", null, getCounterMessage(selected, total));
};

DualListCounter.propTypes = {
  /** The Amount of selected items in the selector */
  selected: _propTypes["default"].number,

  /** The Amount of total items in the selectror */
  total: _propTypes["default"].number,

  /** Determines the counter message in the selector's footer,
   * receives the selected and total amounts of items.
   */
  getCounterMessage: _propTypes["default"].func
};
DualListCounter.defaultProps = {
  selected: 0,
  total: 0,
  getCounterMessage: _helpers.getCounterMessage
};
var _default = DualListCounter;
exports["default"] = _default;