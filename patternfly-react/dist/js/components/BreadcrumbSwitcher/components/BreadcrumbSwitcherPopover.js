"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

var _reactEllipsisWithTooltip = _interopRequireDefault(require("react-ellipsis-with-tooltip"));

var _BreadcrumbSearchInput = _interopRequireDefault(require("./BreadcrumbSearchInput"));

var _helpers = require("../../../common/helpers");

var _BreadcrumbSwitcherHelper = require("../BreadcrumbSwitcherHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BreadcrumbSwitcherPopover = function BreadcrumbSwitcherPopover(_ref) {
  var resources = _ref.resources,
      onResourceClick = _ref.onResourceClick,
      onNextPageClick = _ref.onNextPageClick,
      onPrevPageClick = _ref.onPrevPageClick,
      loading = _ref.loading,
      isPaginated = _ref.isPaginated,
      hasError = _ref.hasError,
      currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      onSearchChange = _ref.onSearchChange,
      onSearchClear = _ref.onSearchClear,
      searchValue = _ref.searchValue,
      searchDebounceTimeout = _ref.searchDebounceTimeout,
      resourceLoadError = _ref.resourceLoadError,
      props = _objectWithoutProperties(_ref, ["resources", "onResourceClick", "onNextPageClick", "onPrevPageClick", "loading", "isPaginated", "hasError", "currentPage", "totalPages", "onSearchChange", "onSearchClear", "searchValue", "searchDebounceTimeout", "resourceLoadError"]);

  var popoverBody;

  if (loading) {
    popoverBody = _react["default"].createElement("div", {
      className: "breadcrumb-switcher-popover-loading text-center"
    }, _react["default"].createElement(_index.Spinner, {
      loading: true,
      size: "md"
    }));
  } else if (hasError) {
    popoverBody = _react["default"].createElement("div", {
      className: "breadcrumb-switcher-popover-error"
    }, resourceLoadError);
  } else {
    var createItemProps = function createItemProps(item) {
      var id = item.id,
          href = item.href,
          name = item.name;
      var key = "".concat(id, "-").concat(name);
      var hrefWithName = href ? (0, _BreadcrumbSwitcherHelper.removeLastSlashFromPath)(href.replace(id, name)) : href;
      var itemProps = {
        key: key,
        id: key,
        className: 'no-border',
        active: href === window.location.pathname || (0, _BreadcrumbSwitcherHelper.getCurrentPath)() === hrefWithName
      };

      if (itemProps.active) {
        return _objectSpread({}, itemProps, {
          disabled: true
        });
      }

      return _objectSpread({}, itemProps, {
        onClick: function onClick(e) {
          return onResourceClick(e, href, id);
        },
        href: href
      });
    };

    popoverBody = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_index.ListGroup, {
      className: "scrollable-list"
    }, resources.map(function (resource) {
      return _react["default"].createElement(_index.ListGroupItem, createItemProps(resource), _react["default"].createElement(_reactEllipsisWithTooltip["default"], null, searchValue && searchValue.length ? _react["default"].createElement(_index.TypeAheadSelect.Highlighter, {
        search: searchValue
      }, resource.name) : resource.name));
    })), isPaginated && _react["default"].createElement(_index.Pager, {
      className: "pager-sm",
      messages: {
        nextPage: '',
        previousPage: ''
      },
      onNextPage: onNextPageClick,
      onPreviousPage: onPrevPageClick,
      disablePrevious: currentPage === 1,
      disableNext: totalPages === 0 || currentPage === Math.ceil(totalPages)
    }));
  }

  return _react["default"].createElement(_index.Popover, _extends({
    className: "breadcrumb-switcher-popover"
  }, props), _react["default"].createElement(_BreadcrumbSearchInput["default"], {
    onClear: onSearchClear,
    timeout: searchDebounceTimeout,
    focus: true,
    onSearchChange: onSearchChange,
    searchValue: searchValue
  }), popoverBody);
};

BreadcrumbSwitcherPopover.propTypes = _objectSpread({}, _index.Popover.propTypes, {
  searchValue: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  hasError: _propTypes["default"].bool,
  currentPage: _propTypes["default"].number,
  totalPages: _propTypes["default"].number,
  resources: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    name: _propTypes["default"].string.isRequired,
    href: _propTypes["default"].string,
    onClick: _propTypes["default"].func
  })),
  onSearchChange: _propTypes["default"].func,
  onResourceClick: _propTypes["default"].func,
  isPaginated: _propTypes["default"].bool.isRequired
});
BreadcrumbSwitcherPopover.defaultProps = {
  searchValue: '',
  loading: false,
  hasError: false,
  currentPage: 1,
  totalPages: 1,
  resources: [],
  onResourceClick: _helpers.noop,
  onSearchChange: _helpers.noop
};
var _default = BreadcrumbSwitcherPopover;
exports["default"] = _default;