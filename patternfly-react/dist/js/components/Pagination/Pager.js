"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = require("../Icon");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Pager component for Patternfly React
 */
var Pager = function Pager(_ref) {
  var baseClassName = _ref.baseClassName,
      className = _ref.className,
      messages = _ref.messages,
      disableNext = _ref.disableNext,
      onNextPage = _ref.onNextPage,
      disablePrevious = _ref.disablePrevious,
      onPreviousPage = _ref.onPreviousPage;
  var classes = (0, _classnames["default"])('pager', className);
  return _react["default"].createElement("ul", {
    className: classes
  }, _react["default"].createElement("li", {
    className: (0, _classnames["default"])({
      disabled: disablePrevious
    }, 'previous')
  }, _react["default"].createElement("a", {
    href: "#",
    className: (0, _classnames["default"])({
      disabled: disablePrevious
    }),
    onClick: function onClick(e) {
      e.preventDefault();

      if (!disablePrevious) {
        onPreviousPage(e);
      }
    }
  }, _react["default"].createElement(_Icon.Icon, {
    className: "i",
    name: "angle-left"
  }), messages.previousPage)), _react["default"].createElement("li", {
    className: (0, _classnames["default"])({
      disabled: disableNext
    }, 'next')
  }, _react["default"].createElement("a", {
    href: "#",
    className: (0, _classnames["default"])({
      disabled: disableNext
    }),
    onClick: function onClick(e) {
      e.preventDefault();

      if (!disableNext) {
        onNextPage(e);
      }
    }
  }, messages.nextPage, _react["default"].createElement(_Icon.Icon, {
    className: "i",
    name: "angle-right"
  }))));
};

Pager.propTypes = {
  /** Base css class */
  baseClassName: _propTypes["default"].string,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** message text inputs for i18n */
  messages: _propTypes["default"].shape({
    nextPage: _propTypes["default"].string,
    previousPage: _propTypes["default"].string
  }),

  /** next button disabled */
  disableNext: _propTypes["default"].bool,

  /** next page callback */
  onNextPage: _propTypes["default"].func,

  /** previous button disabled */
  disablePrevious: _propTypes["default"].bool,

  /** previous page callback */
  onPreviousPage: _propTypes["default"].func
};
Pager.defaultProps = {
  baseClassName: 'content-view-pf-pagination',
  className: '',
  messages: {
    nextPage: 'Next',
    previousPage: 'Previous'
  },
  disableNext: false,
  onNextPage: _helpers.noop,
  disablePrevious: false,
  onPreviousPage: _helpers.noop
};
var _default = Pager;
exports["default"] = _default;