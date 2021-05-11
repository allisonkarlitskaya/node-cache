"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDebounceInput = require("react-debounce-input");

var _index = require("../../../index");

var _helpers = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BreadcrumbSearchInput = /*#__PURE__*/function (_React$Component) {
  _inherits(BreadcrumbSearchInput, _React$Component);

  function BreadcrumbSearchInput() {
    _classCallCheck(this, BreadcrumbSearchInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(BreadcrumbSearchInput).apply(this, arguments));
  }

  _createClass(BreadcrumbSearchInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.focus) {
        this.gainFocus();
      }
    }
  }, {
    key: "gainFocus",
    value: function gainFocus() {
      this.nameInput.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          onSearchChange = _this$props.onSearchChange,
          searchValue = _this$props.searchValue,
          timeout = _this$props.timeout,
          onClear = _this$props.onClear,
          placeHolder = _this$props.placeHolder;
      return _react["default"].createElement("div", {
        className: "input-search"
      }, _react["default"].createElement(_index.Icon, {
        type: "fa",
        name: "search"
      }), _react["default"].createElement(_reactDebounceInput.DebounceInput, {
        className: "form-control",
        inputRef: function inputRef(input) {
          _this.nameInput = input;
        },
        autoComplete: "off",
        id: "breadcrumbs-search",
        placeholder: placeHolder,
        value: searchValue,
        minLength: 0,
        debounceTimeout: timeout,
        onChange: onSearchChange
      }), _react["default"].createElement(_index.Icon, {
        type: "fa",
        name: "close",
        onClick: function onClick() {
          return onClear();
        }
      }));
    }
  }]);

  return BreadcrumbSearchInput;
}(_react["default"].Component);

BreadcrumbSearchInput.propTypes = {
  focus: _propTypes["default"].bool,
  searchValue: _propTypes["default"].string,
  timeout: _propTypes["default"].number,
  onSearchChange: _propTypes["default"].func,
  onClear: _propTypes["default"].func,
  placeHolder: _propTypes["default"].string
};
BreadcrumbSearchInput.defaultProps = {
  focus: false,
  searchValue: '',
  timeout: 300,
  onSearchChange: _helpers.noop,
  onClear: _helpers.noop,
  placeHolder: 'Filter...'
};
var _default = BreadcrumbSearchInput;
exports["default"] = _default;