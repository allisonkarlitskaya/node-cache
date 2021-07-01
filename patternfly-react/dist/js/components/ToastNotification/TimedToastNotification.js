"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Timer = _interopRequireDefault(require("../../common/Timer"));

var _ToastNotification = _interopRequireDefault(require("./ToastNotification"));

var _Alert = require("../Alert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/**
 * TimedToastNotification Component for Patternfly React
 */
var TimedToastNotification = /*#__PURE__*/function (_React$Component) {
  _inherits(TimedToastNotification, _React$Component);

  function TimedToastNotification() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimedToastNotification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimedToastNotification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      var onMouseEnter = _this.props.onMouseEnter;
      onMouseEnter && onMouseEnter();
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      var onMouseLeave = _this.props.onMouseLeave;
      onMouseLeave && onMouseLeave();
    });

    return _this;
  }

  _createClass(TimedToastNotification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          paused = _this$props.paused,
          persistent = _this$props.persistent,
          onDismiss = _this$props.onDismiss,
          timerdelay = _this$props.timerdelay;

      if (!persistent) {
        this.timer = new _Timer["default"](onDismiss, timerdelay);
        this.timer.startTimer();
      }
      /** if we are paused on mount, then clear the timer
       * after having initialized with the correct delay */


      if (paused) {
        this.timer && this.timer.clearTimer();
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      /**
       * If paused prop changes, update our timer
       */
      if (nextProps.paused !== this.props.paused) {
        if (nextProps.paused) {
          this.timer && this.timer.clearTimer();
        } else {
          this.timer && this.timer.startTimer();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.timer && this.timer.clearTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          type = _this$props2.type,
          onDismiss = _this$props2.onDismiss;
      var onMouseEnter = this.onMouseEnter,
          onMouseLeave = this.onMouseLeave;
      var toastProps = {
        className: className,
        type: type,
        onDismiss: onDismiss,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
      };
      return _react["default"].createElement(_ToastNotification["default"], toastProps, children);
    }
  }]);

  return TimedToastNotification;
}(_react["default"].Component); // WARNING: This should be kept consistent with ToastNotification.propTypes


TimedToastNotification.propTypes = _objectSpread({}, _Alert.Alert.propTypes, {
  /** pauses notification from dismissing */
  paused: _propTypes["default"].bool,

  /** persistent keeps the notification up endlessly until closed */
  persistent: _propTypes["default"].bool,

  /** timer delay until dismiss */
  timerdelay: _propTypes["default"].number,

  /** onMouseEnter callback */
  onMouseEnter: _propTypes["default"].func,

  /** onMouseLeave callback */
  onMouseLeave: _propTypes["default"].func
}); // WARNING: This should be kept consistent with ToastNotification.defaultProps

TimedToastNotification.defaultProps = _objectSpread({}, _Alert.Alert.defaultProps, {
  paused: false,
  timerdelay: 8000
});
TimedToastNotification.TOAST_NOTIFICATION_TYPES = _toConsumableArray(_Alert.Alert.ALERT_TYPES);
TimedToastNotification.displayName = 'TimedToastNotification';
var _default = TimedToastNotification;
exports["default"] = _default;