"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _paginate = _interopRequireDefault(require("./paginate"));

var _PaginationConstants = require("./PaginationConstants");

var _Pager = _interopRequireDefault(require("./Pager"));

var _Paginator = _interopRequireDefault(require("./Paginator"));

var _PaginationRow = _interopRequireDefault(require("./PaginationRow"));

var _PaginationRowAmountOfPages = _interopRequireDefault(require("./PaginationRowAmountOfPages"));

var _PaginationRowArrowIcon = _interopRequireDefault(require("./PaginationRowArrowIcon"));

var _PaginationRowBack = _interopRequireDefault(require("./PaginationRowBack"));

var _PaginationRowButtonGroup = _interopRequireDefault(require("./PaginationRowButtonGroup"));

var _PaginationRowForward = _interopRequireDefault(require("./PaginationRowForward"));

var _PaginationRowItems = _interopRequireDefault(require("./PaginationRowItems"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pagination = {
  paginate: _paginate["default"],
  Pager: _Pager["default"],
  Paginator: _Paginator["default"],
  PAGINATION_VIEW: _PaginationConstants.PAGINATION_VIEW,
  PAGINATION_VIEW_TYPES: _PaginationConstants.PAGINATION_VIEW_TYPES,
  Row: _PaginationRow["default"],
  RowAmountOfPages: _PaginationRowAmountOfPages["default"],
  RowArrowIcon: _PaginationRowArrowIcon["default"],
  RowBack: _PaginationRowBack["default"],
  RowButtonGroup: _PaginationRowButtonGroup["default"],
  RowForward: _PaginationRowForward["default"],
  RowItems: _PaginationRowItems["default"]
};
exports.Pagination = Pagination;