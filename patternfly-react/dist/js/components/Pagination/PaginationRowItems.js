"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * PaginationRowItems component for Patternfly React
 */
var PaginationRowItems = function PaginationRowItems(_ref) {
  var itemCount = _ref.itemCount,
      itemsStart = _ref.itemsStart,
      itemsEnd = _ref.itemsEnd,
      messagesOf = _ref.messagesOf,
      props = _objectWithoutProperties(_ref, ["itemCount", "itemsStart", "itemsEnd", "messagesOf"]);

  return _react["default"].createElement("span", props, _react["default"].createElement("span", {
    className: "pagination-pf-items-current"
  }, itemsStart, "-", itemsEnd), "\xA0", messagesOf, "\xA0", _react["default"].createElement("span", {
    className: "pagination-pf-items-total"
  }, itemCount));
};

PaginationRowItems.propTypes = {
  /** calculated number of rows */
  itemCount: _propTypes["default"].number.isRequired,

  /** calculated items start */
  itemsStart: _propTypes["default"].number.isRequired,

  /** calculated items end */
  itemsEnd: _propTypes["default"].number.isRequired,

  /** messages Of */
  messagesOf: _propTypes["default"].string.isRequired
};
var _default = PaginationRowItems;
exports["default"] = _default;