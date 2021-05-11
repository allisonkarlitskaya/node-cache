"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Spinner = require("../Spinner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadingState = /*#__PURE__*/function (_Component) {
  _inherits(LoadingState, _Component);

  function LoadingState(props) {
    var _this;

    _classCallCheck(this, LoadingState);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadingState).call(this, props));
    _this.state = {
      render: false
    };
    return _this;
  }

  _createClass(LoadingState, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.onTimeout = setTimeout(function () {
        _this2.setState({
          render: true
        });
      }, this.props.timeout);
    }
  }, {
    key: "componentWillUnmout",
    value: function componentWillUnmout() {
      clearTimeout(this.onTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loading = _this$props.loading,
          loadingText = _this$props.loadingText,
          children = _this$props.children,
          size = _this$props.size,
          additionalClasses = _this$props.additionalClasses;

      var spinner = _react["default"].createElement("div", {
        className: (0, _classnames["default"])('loading-state-pf', "loading-state-pf-".concat(size), additionalClasses)
      }, _react["default"].createElement(_Spinner.Spinner, {
        loading: loading,
        size: size
      }), loadingText);

      if (loading) {
        return this.state.render ? spinner : null;
      }

      return children;
    }
  }]);

  return LoadingState;
}(_react.Component);

LoadingState.propTypes = {
  /** determines whether to show spinner or children */
  loading: _propTypes["default"].bool,

  /** text to show with spinner */
  loadingText: _propTypes["default"].string,

  /** children nodes */
  children: _propTypes["default"].node,

  /** delay in showing the children */
  timeout: _propTypes["default"].number,

  /** size of the spinner */
  size: _propTypes["default"].oneOf(['lg', 'md', 'sm', 'xs']),

  /** additional css classes for LoadingState */
  additionalClasses: _propTypes["default"].string
};
LoadingState.defaultProps = {
  loading: false,
  loadingText: 'Loading',
  children: null,
  timeout: 300,
  size: 'lg',
  additionalClasses: ''
};
var _default = LoadingState;
exports["default"] = _default;