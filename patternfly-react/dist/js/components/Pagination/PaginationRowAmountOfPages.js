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
 * PaginationRowAmountOfPages component for Patternfly React
 */
var PaginationRowAmountOfPages = function PaginationRowAmountOfPages(_ref) {
  var messagesOf = _ref.messagesOf,
      amountOfPages = _ref.amountOfPages,
      props = _objectWithoutProperties(_ref, ["messagesOf", "amountOfPages"]);

  return _react["default"].createElement("span", props, "\xA0", messagesOf, "\xA0", _react["default"].createElement("span", {
    className: "pagination-pf-pages"
  }, amountOfPages));
};

PaginationRowAmountOfPages.propTypes = {
  /** messages of */
  messagesOf: _propTypes["default"].string.isRequired,

  /** calculated amount of pages */
  amountOfPages: _propTypes["default"].number.isRequired
};
var _default = PaginationRowAmountOfPages;
exports["default"] = _default;