"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PaginationRow = _interopRequireDefault(require("./PaginationRow"));

var _helpers = require("../../common/helpers");

var _PaginationConstants = require("./PaginationConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Paginator = /*#__PURE__*/function (_React$Component) {
  _inherits(Paginator, _React$Component);

  function Paginator(props) {
    var _this;

    _classCallCheck(this, Paginator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Paginator).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleFormSubmit", function (e) {
      _this.setPage(_this.state.pageChangeValue);
    });

    _this.initPagination(props);

    _this.state = {
      pageChangeValue: props.pagination.page
    };
    return _this;
  }

  _createClass(Paginator, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var pagination = nextProps.pagination;

      if (this.state.pageChangeValue !== pagination.page) {
        this.setState({
          pageChangeValue: Number(pagination.page)
        });
      }

      this.initPagination(nextProps);
    }
  }, {
    key: "setPage",
    value: function setPage(value) {
      var page = Number(value);

      if (!Number.isNaN(value) && value !== '' && page > 0 && page <= this.totalPages()) {
        this.props.onPageSet(page);
      }
    }
  }, {
    key: "setPageRelative",
    value: function setPageRelative(diff) {
      var pagination = this.props.pagination;
      var page = Number(pagination.page) + diff;
      this.setPage(page);
    }
  }, {
    key: "handlePageChange",
    value: function handlePageChange(e) {
      this.setState({
        pageChangeValue: e.target.value
      });
    }
  }, {
    key: "initPagination",
    value: function initPagination(props) {
      var pagination = props.pagination;
      this.perPage = Number(pagination.perPage);
      this.currentPage = Number(pagination.page);
      this.itemCount = Number(props.itemCount);
    }
  }, {
    key: "totalPages",
    value: function totalPages() {
      return Math.ceil(this.props.itemCount / this.perPage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pageChangeValue = this.state.pageChangeValue;
      var _this$props = this.props,
          className = _this$props.className,
          viewType = _this$props.viewType,
          itemCount = _this$props.itemCount,
          messages = _this$props.messages,
          dropdownButtonId = _this$props.dropdownButtonId,
          onPerPageSelect = _this$props.onPerPageSelect,
          pagination = _this$props.pagination,
          disableNext = _this$props.disableNext,
          disablePrev = _this$props.disablePrev;
      var itemsStart = (this.currentPage - 1) * this.perPage + 1;
      var itemsEnd = Math.min(itemsStart + this.perPage - 1, this.itemCount);
      var totalPages = this.totalPages();
      return _react["default"].createElement(_PaginationRow["default"], {
        className: className,
        onSubmit: this.handleFormSubmit,
        viewType: viewType,
        pagination: pagination,
        pageInputValue: pageChangeValue,
        amountOfPages: this.totalPages(),
        itemCount: itemCount,
        itemsStart: itemsStart,
        itemsEnd: itemsEnd,
        messages: messages,
        dropdownButtonId: dropdownButtonId,
        onPerPageSelect: onPerPageSelect,
        onFirstPage: function onFirstPage() {
          return _this2.setPage(1);
        },
        onPreviousPage: function onPreviousPage() {
          return _this2.setPageRelative(-1);
        },
        onPageInput: function onPageInput(e) {
          return _this2.handlePageChange(e);
        },
        onNextPage: function onNextPage() {
          return _this2.setPageRelative(1);
        },
        onLastPage: function onLastPage() {
          return _this2.setPage(totalPages);
        },
        disableNext: disableNext,
        disablePrev: disablePrev
      });
    }
  }]);

  return Paginator;
}(_react["default"].Component);

Paginator.propTypes = {
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

  /** calculated number of rows */
  itemCount: _propTypes["default"].number.isRequired,

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

  /** A callback triggered when a page is switched */
  onPageSet: _propTypes["default"].func,

  /** per page selection callback */
  onPerPageSelect: _propTypes["default"].func,

  /** disable next page */
  disableNext: _propTypes["default"].bool,

  /** disable previous page */
  disablePrev: _propTypes["default"].bool
};
Paginator.defaultProps = {
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
  dropdownButtonId: 'pagination-row-dropdown',
  onPerPageSelect: _helpers.noop,
  onPageSet: _helpers.noop,
  disableNext: false,
  disablePrev: false
};
var _default = Paginator;
exports["default"] = _default;