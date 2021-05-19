"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = require("../Dropdown");

var _helpers = require("../../common/helpers");

var _InfoTipToggle = _interopRequireDefault(require("./InfoTipToggle"));

var _InfoTipMenu = _interopRequireDefault(require("./InfoTipMenu"));

var _InfoTipMenuFooter = _interopRequireDefault(require("./InfoTipMenuFooter"));

var _InfoTipMenuItemIcon = _interopRequireDefault(require("./InfoTipMenuItemIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InfoTip = /*#__PURE__*/function (_React$Component) {
  _inherits(InfoTip, _React$Component);

  function InfoTip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InfoTip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InfoTip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false,
      footerFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnterKeyDown", function (event) {
      _this.setState({
        open: !_this.state.open
      });

      event.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabKeyDown", function (event) {
      if (_this.state.footerFocused) {
        _this.setState({
          open: false,
          footerFocused: false
        });
      } else {
        _this.setState({
          footerFocused: true
        });
      }

      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      if (event.shiftKey && event.keyCode) {
        return _this.handleBackFocus();
      }

      switch (event.keyCode) {
        case _helpers.KEY_CODES.ENTER_KEY:
          return _this.handleEnterKeyDown(event);

        case _helpers.KEY_CODES.TAB_KEY:
          return _this.handleTabKeyDown(event);

        case _helpers.KEY_CODES.ESCAPE_KEY:
          return _this.setState({
            open: false
          });

        default:
          return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackFocus", function () {
      if (_this.state.open) {
        _this.setState({
          open: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      event.preventDefault();

      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (event && event.relatedTarget) {
        event.relatedTarget.click();
      }

      _this.setState({
        open: false
      });
    });

    return _this;
  }

  _createClass(InfoTip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onToggle = _this$props.onToggle,
          props = _objectWithoutProperties(_this$props, ["children", "onToggle"]);

      return _react["default"].createElement(_Dropdown.Dropdown, _extends({
        componentClass: "li",
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        onToggle: this.handleKeyDown,
        open: this.state.open,
        onBlur: this.handleBlur
      }, props), children);
    }
  }]);

  return InfoTip;
}(_react["default"].Component);

InfoTip.propTypes = _objectSpread({}, _Dropdown.Dropdown.propTypes, {
  children: _propTypes["default"].node.isRequired,
  id: _propTypes["default"].string.isRequired
});
InfoTip.Toggle = _InfoTipToggle["default"];
InfoTip.Menu = _InfoTipMenu["default"];
InfoTip.MenuItemIcon = _InfoTipMenuItemIcon["default"];
InfoTip.MenuFooter = _InfoTipMenuFooter["default"];
var _default = InfoTip;
exports["default"] = _default;