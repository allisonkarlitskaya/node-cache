"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Overlay = require("../Overlay");

var _helpers = require("../../common/helpers");

var _BreadcrumbSwitcherPopover = _interopRequireDefault(require("./components/BreadcrumbSwitcherPopover"));

var _BreadcrumbSwitcherToggler = _interopRequireDefault(require("./components/BreadcrumbSwitcherToggler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BreadcrumbSwitcher = /*#__PURE__*/function (_Component) {
  _inherits(BreadcrumbSwitcher, _Component);

  function BreadcrumbSwitcher() {
    _classCallCheck(this, BreadcrumbSwitcher);

    return _possibleConstructorReturn(this, _getPrototypeOf(BreadcrumbSwitcher).apply(this, arguments));
  }

  _createClass(BreadcrumbSwitcher, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          open = _this$props.open,
          onOpen = _this$props.onOpen;

      if (open === true && prevProps.open === false) {
        onOpen();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          open = _this$props2.open,
          onOpen = _this$props2.onOpen,
          currentPage = _this$props2.currentPage,
          totalPages = _this$props2.totalPages,
          isLoading = _this$props2.isLoading,
          isPaginated = _this$props2.isPaginated,
          hasError = _this$props2.hasError,
          resources = _this$props2.resources,
          onTogglerClick = _this$props2.onTogglerClick,
          onHide = _this$props2.onHide,
          onNextPageClick = _this$props2.onNextPageClick,
          onPrevPageClick = _this$props2.onPrevPageClick,
          onSearchChange = _this$props2.onSearchChange,
          searchValue = _this$props2.searchValue,
          onSearchClear = _this$props2.onSearchClear,
          searchDebounceTimeout = _this$props2.searchDebounceTimeout,
          onResourceClick = _this$props2.onResourceClick,
          props = _objectWithoutProperties(_this$props2, ["className", "open", "onOpen", "currentPage", "totalPages", "isLoading", "isPaginated", "hasError", "resources", "onTogglerClick", "onHide", "onNextPageClick", "onPrevPageClick", "onSearchChange", "searchValue", "onSearchClear", "searchDebounceTimeout", "onResourceClick"]);

      var classes = (0, _classnames["default"])('breadcrumb-switcher', className);
      return _react["default"].createElement("div", _extends({
        className: classes
      }, props), _react["default"].createElement(_BreadcrumbSwitcherToggler["default"], {
        id: "switcher",
        onClick: function onClick() {
          return onTogglerClick();
        },
        ref: function ref(_ref) {
          _this.togglerRef = _ref;
        }
      }), _react["default"].createElement(_Overlay.Overlay, {
        rootClose: true,
        show: open,
        container: this,
        placement: "bottom",
        onHide: onHide // TODO: try to remove the `ReactDOM.findDOMNode`
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
        // react-bootstrap still have it in their docs: https://react-bootstrap.github.io/components/overlays/
        // eslint-disable-next-line react/no-find-dom-node
        ,
        target: function target() {
          return _reactDom["default"].findDOMNode(_this.togglerRef);
        }
      }, _react["default"].createElement(_BreadcrumbSwitcherPopover["default"], {
        id: "breadcrumb-switcher-popover",
        loading: isLoading,
        isPaginated: isPaginated,
        hasError: hasError,
        onSearchChange: onSearchChange,
        resources: resources,
        onNextPageClick: onNextPageClick,
        onPrevPageClick: onPrevPageClick,
        currentPage: currentPage,
        totalPages: totalPages,
        searchValue: searchValue,
        onSearchClear: onSearchClear,
        searchDebounceTimeout: searchDebounceTimeout,
        onResourceClick: onResourceClick
      })));
    }
  }]);

  return BreadcrumbSwitcher;
}(_react.Component);

BreadcrumbSwitcher.propTypes = {
  /** className */
  className: _propTypes["default"].string,

  /** search box value */
  searchValue: _propTypes["default"].string,

  /** is switcher open bool */
  open: _propTypes["default"].bool,

  /** searchDebounceTimeout */
  searchDebounceTimeout: _propTypes["default"].number,

  /** current Page */
  currentPage: _propTypes["default"].number,

  /** total Pages */
  totalPages: _propTypes["default"].number,

  /** is Loadnig bool */
  isLoading: _propTypes["default"].bool,

  /** is Paginated bool */
  isPaginated: _propTypes["default"].bool,

  /** has Error bool */
  hasError: _propTypes["default"].bool,

  /** Breadcrumb resources */
  resources: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
    name: _propTypes["default"].string.isRequired,
    href: _propTypes["default"].string,
    onClick: _propTypes["default"].func
  })),

  /** function() onTogglerClick func */
  onTogglerClick: _propTypes["default"].func,

  /** function() onHide func */
  onHide: _propTypes["default"].func,

  /** function() onOpen func */
  onOpen: _propTypes["default"].func,

  /** function() onPrevPageClick func */
  onPrevPageClick: _propTypes["default"].func,

  /** function() onNextPageClick func */
  onNextPageClick: _propTypes["default"].func,

  /** function(resource) onResourceClick func */
  onResourceClick: _propTypes["default"].func,

  /** function(newSearch) onSearchChange func */
  onSearchChange: _propTypes["default"].func,

  /** function() onSearchClear func */
  onSearchClear: _propTypes["default"].func
};
BreadcrumbSwitcher.defaultProps = {
  className: '',
  searchValue: '',
  open: false,
  searchDebounceTimeout: 300,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  isPaginated: true,
  hasError: false,
  resources: [],
  onTogglerClick: _helpers.noop,
  onHide: _helpers.noop,
  onOpen: _helpers.noop,
  onResourceClick: _helpers.noop,
  onPrevPageClick: _helpers.noop,
  onNextPageClick: _helpers.noop,
  onSearchChange: _helpers.noop,
  onSearchClear: _helpers.noop
};
var _default = BreadcrumbSwitcher;
exports["default"] = _default;