"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PaginationRowAmountOfPages = _interopRequireDefault(require("./PaginationRowAmountOfPages"));

var _PaginationRowButtonGroup = _interopRequireDefault(require("./PaginationRowButtonGroup"));

var _PaginationRowItems = _interopRequireDefault(require("./PaginationRowItems"));

var _PaginationRowBack = _interopRequireDefault(require("./PaginationRowBack"));

var _PaginationRowForward = _interopRequireDefault(require("./PaginationRowForward"));

var _helpers = require("../../common/helpers");

var _PaginationConstants = require("./PaginationConstants");

var _Form = require("../Form");

var _Button = require("../Button");

var _MenuItem = require("../MenuItem");

var _PaginationRowArrowIcon = _interopRequireDefault(require("./PaginationRowArrowIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * PaginationRow component for Patternfly React
 */
var PaginationRow = function PaginationRow(_ref) {
  var baseClassName = _ref.baseClassName,
      className = _ref.className,
      viewType = _ref.viewType,
      pagination = _ref.pagination,
      pageSizeDropUp = _ref.pageSizeDropUp,
      pageInputValue = _ref.pageInputValue,
      amountOfPages = _ref.amountOfPages,
      itemCount = _ref.itemCount,
      itemsStart = _ref.itemsStart,
      itemsEnd = _ref.itemsEnd,
      messages = _ref.messages,
      dropdownButtonId = _ref.dropdownButtonId,
      _onSubmit = _ref.onSubmit,
      onPerPageSelect = _ref.onPerPageSelect,
      onFirstPage = _ref.onFirstPage,
      onPreviousPage = _ref.onPreviousPage,
      onPageInput = _ref.onPageInput,
      onNextPage = _ref.onNextPage,
      onLastPage = _ref.onLastPage,
      disableNext = _ref.disableNext,
      disablePrev = _ref.disablePrev;
  var page = pagination.page,
      perPage = pagination.perPage,
      _pagination$perPageOp = pagination.perPageOptions,
      perPageOptions = _pagination$perPageOp === void 0 ? [] : _pagination$perPageOp;
  var classes = (0, _classnames["default"])(baseClassName, className, {
    'list-view-pf-pagination': viewType === _PaginationConstants.PAGINATION_VIEW.LIST,
    'card-view-pf-pagination': viewType === _PaginationConstants.PAGINATION_VIEW.CARD,
    'table-view-pf-pagination': viewType === _PaginationConstants.PAGINATION_VIEW.TABLE,
    clearfix: true
  });
  var pageValue = pageInputValue !== undefined ? pageInputValue : page;
  return _react["default"].createElement(_Form.Form, {
    className: classes,
    onSubmit: function onSubmit(e) {
      e.preventDefault();

      _onSubmit(e);
    }
  }, _react["default"].createElement(_Form.FormGroup, null, _react["default"].createElement(_Button.DropdownButton, {
    title: perPage,
    dropup: pageSizeDropUp,
    componentClass: _PaginationRowButtonGroup["default"],
    onSelect: onPerPageSelect,
    id: dropdownButtonId
  }, perPageOptions.map(function (option, i) {
    return _react["default"].createElement(_MenuItem.MenuItem, {
      eventKey: option,
      active: option === perPage,
      key: i
    }, option);
  })), _react["default"].createElement("span", null, messages.perPage)), _react["default"].createElement(_Form.FormGroup, null, _react["default"].createElement(_PaginationRowItems["default"], {
    itemCount: itemCount,
    itemsStart: itemsStart,
    itemsEnd: itemsEnd,
    messagesOf: messages.of
  }), _react["default"].createElement(_PaginationRowBack["default"], {
    page: page,
    messagesFirstPage: messages.firstPage,
    messagesPreviousPage: messages.previousPage,
    onFirstPage: onFirstPage,
    onPreviousPage: onPreviousPage,
    disable: disablePrev
  }), _react["default"].createElement(_Form.ControlLabel, {
    className: "sr-only"
  }, messages.currentPage), _react["default"].createElement(_Form.FormControl, {
    className: "pagination-pf-page",
    type: "text",
    value: pageValue,
    onChange: onPageInput
  }), _react["default"].createElement(_PaginationRowAmountOfPages["default"], {
    messagesOf: messages.of,
    amountOfPages: amountOfPages
  }), _react["default"].createElement(_PaginationRowForward["default"], {
    page: page,
    amountOfPages: amountOfPages,
    messagesNextPage: messages.nextPage,
    messagesLastPage: messages.lastPage,
    onNextPage: onNextPage,
    onLastPage: onLastPage,
    disable: disableNext
  })));
};

PaginationRow.propTypes = {
  /** Base css class */
  baseClassName: _propTypes["default"].string,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** pagination row view type */
  viewType: _propTypes["default"].oneOf(_PaginationConstants.PAGINATION_VIEW_TYPES).isRequired,

  /** user pagination settings */
  pagination: _propTypes["default"].shape({
    /** the current page */
    page: _propTypes["default"].number.isRequired,

    /** the current per page setting */
    perPage: _propTypes["default"].number.isRequired,

    /** per page options */
    perPageOptions: _propTypes["default"].array
  }).isRequired,

  /** Page size button drops up */
  pageSizeDropUp: _propTypes["default"].bool,

  /** page input (optional override for page input) */
  pageInputValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** calculated amount of pages */
  amountOfPages: _propTypes["default"].number.isRequired,

  /** calculated number of rows */
  itemCount: _propTypes["default"].number.isRequired,

  /** calculated items start */
  itemsStart: _propTypes["default"].number.isRequired,

  /** calculated items end */
  itemsEnd: _propTypes["default"].number.isRequired,

  /** message text inputs for i18n */
  messages: _propTypes["default"].shape({
    firstPage: _propTypes["default"].string,
    previousPage: _propTypes["default"].string,
    nextPage: _propTypes["default"].string,
    lastPage: _propTypes["default"].string,
    perPage: _propTypes["default"].string,
    of: _propTypes["default"].string
  }),

  /** dropdown button id */
  dropdownButtonId: _propTypes["default"].string,

  /** onSubmit callback */
  onSubmit: _propTypes["default"].func,

  /** per page selection callback */
  onPerPageSelect: _propTypes["default"].func,

  /** first page callback */
  onFirstPage: _propTypes["default"].func,

  /** previous page selection callback */
  onPreviousPage: _propTypes["default"].func,

  /** user page input callback */
  onPageInput: _propTypes["default"].func,

  /** next page callback */
  onNextPage: _propTypes["default"].func,

  /** last page callback */
  onLastPage: _propTypes["default"].func,

  /** disable next page */
  disableNext: _propTypes["default"].bool,

  /** disable previous page */
  disablePrev: _propTypes["default"].bool
};
PaginationRow.defaultProps = {
  baseClassName: 'content-view-pf-pagination',
  className: '',
  messages: {
    firstPage: 'First Page',
    previousPage: 'Previous Page',
    currentPage: 'Current Page',
    nextPage: 'Next Page',
    lastPage: 'Last Page',
    perPage: 'per page',
    of: 'of'
  },
  pageInputValue: '',
  pageSizeDropUp: true,
  onSubmit: _helpers.noop,
  onPerPageSelect: _helpers.noop,
  onFirstPage: _helpers.noop,
  onPreviousPage: _helpers.noop,
  onPageInput: _helpers.noop,
  onNextPage: _helpers.noop,
  onLastPage: _helpers.noop,
  dropdownButtonId: 'pagination-row-dropdown',
  disableNext: false,
  disablePrev: false
};
PaginationRow.AmountOfPages = _PaginationRowAmountOfPages["default"];
PaginationRow.ArrowIcon = _PaginationRowArrowIcon["default"];
PaginationRow.Back = _PaginationRowBack["default"];
PaginationRow.ButtonGroup = _PaginationRowButtonGroup["default"];
PaginationRow.Forward = _PaginationRowForward["default"];
PaginationRow.Items = _PaginationRowItems["default"];
PaginationRow.PAGINATION_VIEW = _PaginationConstants.PAGINATION_VIEW;
PaginationRow.PAGINATION_VIEW_TYPES = _PaginationConstants.PAGINATION_VIEW_TYPES;
var _default = PaginationRow;
exports["default"] = _default;