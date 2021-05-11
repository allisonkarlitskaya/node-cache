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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * PaginationRowForward component for Patternfly React
 */
var PaginationRowForward = function PaginationRowForward(_ref) {
  var className = _ref.className,
      page = _ref.page,
      amountOfPages = _ref.amountOfPages,
      messagesNextPage = _ref.messagesNextPage,
      messagesLastPage = _ref.messagesLastPage,
      onNextPage = _ref.onNextPage,
      onLastPage = _ref.onLastPage,
      disable = _ref.disable,
      props = _objectWithoutProperties(_ref, ["className", "page", "amountOfPages", "messagesNextPage", "messagesLastPage", "onNextPage", "onLastPage", "disable"]);

  var classes = (0, _classnames["default"])('pagination', 'pagination-pf-forward', className);
  return _react["default"].createElement("ul", {
    className: classes
  }, _react["default"].createElement("li", {
    className: page === amountOfPages || disable ? 'disabled' : ''
  }, _react["default"].createElement("a", {
    href: "#",
    title: messagesNextPage,
    onClick: function onClick(e) {
      e.preventDefault();

      if (page !== amountOfPages) {
        onNextPage(e);
      }
    }
  }, _react["default"].createElement(_PaginationRowArrowIcon["default"], {
    name: "right"
  }))), _react["default"].createElement("li", {
    className: page === amountOfPages || disable ? 'disabled' : ''
  }, _react["default"].createElement("a", {
    href: "#",
    title: messagesLastPage,
    onClick: function onClick(e) {
      e.preventDefault();

      if (page !== amountOfPages) {
        onLastPage(e);
      }
    }
  }, _react["default"].createElement(_PaginationRowArrowIcon["default"], {
    name: "double-right"
  }))));
};

PaginationRowForward.propTypes = {
  /** additional class names */
  className: _propTypes["default"].string,

  /** pagination page */
  page: _propTypes["default"].number.isRequired,

  /** calculated amount of pages */
  amountOfPages: _propTypes["default"].number.isRequired,

  /** messages next page */
  messagesNextPage: _propTypes["default"].string.isRequired,

  /** messages last page */
  messagesLastPage: _propTypes["default"].string.isRequired,

  /** next page callback */
  onNextPage: _propTypes["default"].func,

  /** last page callback */
  onLastPage: _propTypes["default"].func,

  /** disable next button  */
  disable: _propTypes["default"].bool
};
PaginationRowForward.defaultProps = {
  className: '',
  onNextPage: _helpers.noop,
  onLastPage: _helpers.noop,
  disable: false
};
var _default = PaginationRowForward;
exports["default"] = _default;