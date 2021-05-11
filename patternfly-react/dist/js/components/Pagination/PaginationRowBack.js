"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PaginationRowArrowIcon = _interopRequireDefault(require("./PaginationRowArrowIcon"));

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * PaginationRowBack component for Patternfly React
 */
var PaginationRowBack = function PaginationRowBack(_ref) {
  var className = _ref.className,
      page = _ref.page,
      messagesFirstPage = _ref.messagesFirstPage,
      messagesPreviousPage = _ref.messagesPreviousPage,
      onFirstPage = _ref.onFirstPage,
      onPreviousPage = _ref.onPreviousPage,
      disable = _ref.disable,
      props = _objectWithoutProperties(_ref, ["className", "page", "messagesFirstPage", "messagesPreviousPage", "onFirstPage", "onPreviousPage", "disable"]);

  var classes = (0, _classnames["default"])('pagination', 'pagination-pf-back', className);
  return _react["default"].createElement("ul", _extends({
    className: classes
  }, props), _react["default"].createElement("li", {
    className: page === 1 || disable ? 'disabled' : ''
  }, _react["default"].createElement("a", {
    href: "#",
    title: messagesFirstPage,
    onClick: function onClick(e) {
      e.preventDefault();

      if (page !== 1) {
        onFirstPage(e);
      }
    }
  }, _react["default"].createElement(_PaginationRowArrowIcon["default"], {
    name: "double-left"
  }))), _react["default"].createElement("li", {
    className: page === 1 || disable ? 'disabled' : ''
  }, _react["default"].createElement("a", {
    href: "#",
    title: messagesPreviousPage,
    onClick: function onClick(e) {
      e.preventDefault();

      if (page !== 1) {
        onPreviousPage(e);
      }
    }
  }, _react["default"].createElement(_PaginationRowArrowIcon["default"], {
    name: "left"
  }))));
};

PaginationRowBack.propTypes = {
  /** additional class names */
  className: _propTypes["default"].string,

  /** pagination page */
  page: _propTypes["default"].number.isRequired,

  /** messages firstPage */
  messagesFirstPage: _propTypes["default"].string.isRequired,

  /** messages previousPage */
  messagesPreviousPage: _propTypes["default"].string.isRequired,

  /** first page callback */
  onFirstPage: _propTypes["default"].func,

  /** previous page selection callback */
  onPreviousPage: _propTypes["default"].func,

  /** disable back button */
  disable: _propTypes["default"].bool
};
PaginationRowBack.defaultProps = {
  className: '',
  onFirstPage: _helpers.noop,
  onPreviousPage: _helpers.noop,
  disable: false
};
var _default = PaginationRowBack;
exports["default"] = _default;