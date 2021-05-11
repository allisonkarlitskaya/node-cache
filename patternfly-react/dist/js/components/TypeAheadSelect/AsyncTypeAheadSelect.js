"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrapTypeahead = require("react-bootstrap-typeahead");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var AsyncTypeAheadSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(AsyncTypeAheadSelect, _React$Component);

  function AsyncTypeAheadSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AsyncTypeAheadSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AsyncTypeAheadSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      options: _this.props.options,
      isLoading: _this.props.isLoading
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchStart", function () {
      return _this.setState({
        isLoading: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchEnd", function (options) {
      return _this.setState({
        options: options,
        isLoading: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (query) {
      _this.onSearchStart();

      Promise.resolve(_this.props.onSearch(query)).then(function (options) {
        return _this.onSearchEnd(options);
      });
    });

    return _this;
  }

  _createClass(AsyncTypeAheadSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          props = _objectWithoutProperties(_this$props, ["innerRef"]);

      return _react["default"].createElement(_reactBootstrapTypeahead.AsyncTypeahead, _extends({}, props, {
        ref: innerRef,
        onSearch: this.handleSearch,
        options: this.state.options,
        isLoading: this.state.isLoading
      }));
    }
  }]);

  return AsyncTypeAheadSelect;
}(_react["default"].Component);

AsyncTypeAheadSelect.propTypes = {
  /** Callback function for search */
  onSearch: _propTypes["default"].func.isRequired,

  /** Array of selectable options */
  options: _propTypes["default"].array,

  /** Flag to indicate if typeahead is loading */
  isLoading: _propTypes["default"].bool,

  /** Internal property to access the react bootstrap typeahead component via outer ref property */
  innerRef: _propTypes["default"].any
};
AsyncTypeAheadSelect.defaultProps = {
  options: [],
  isLoading: false,
  innerRef: null
};

var _default = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement(AsyncTypeAheadSelect, _extends({}, props, {
    innerRef: ref
  }));
});

exports["default"] = _default;