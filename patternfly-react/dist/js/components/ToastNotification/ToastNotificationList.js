"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../common/helpers");

var _TimedToastNotification = _interopRequireDefault(require("./TimedToastNotification"));

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

/**
 * ToastNotificationList Component for Patternfly React
 */
var ToastNotificationList = /*#__PURE__*/function (_React$Component) {
  _inherits(ToastNotificationList, _React$Component);

  function ToastNotificationList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToastNotificationList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToastNotificationList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      paused: false
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      _this.setState({
        paused: true
      });

      var onMouseEnter = _this.props.onMouseEnter;
      onMouseEnter();
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.setState({
        paused: false
      });

      var onMouseLeave = _this.props.onMouseLeave;
      onMouseLeave();
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function () {
      _this.setState({
        paused: true
      });

      var onMouseOver = _this.props.onMouseOver;
      onMouseOver();
    });

    return _this;
  }

  _createClass(ToastNotificationList, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps() {
      this.setState({
        paused: false
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var paused = this.state.paused;
      return _react["default"].Children.map(this.props.children, function (child) {
        if ((0, _helpers.hasDisplayName)(child, _TimedToastNotification["default"].displayName)) {
          /**
           * If any of the notifications are hovered, pause
           * all child notifications from dismissing
           */
          return _react["default"].cloneElement(child, {
            paused: paused
          });
        }

        return child;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var classes = (0, _classnames["default"])('toast-notifications-list-pf', className);
      return _react["default"].createElement("div", {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onMouseOver: this.onMouseOver,
        onFocus: this.onMouseOver,
        className: classes
      }, this.renderChildren());
    }
  }]);

  return ToastNotificationList;
}(_react["default"].Component);

ToastNotificationList.propTypes = {
  /** additional notification list classes */
  className: _propTypes["default"].string,

  /** onMouseEnter callback */
  onMouseEnter: _propTypes["default"].func,

  /** onMouseLeave callback */
  onMouseLeave: _propTypes["default"].func,

  /** onMouseOver callback */
  onMouseOver: _propTypes["default"].func,

  /** children nodes  */
  children: _propTypes["default"].node
};
ToastNotificationList.defaultProps = {
  className: '',
  onMouseEnter: _helpers.noop,
  onMouseLeave: _helpers.noop,
  onMouseOver: _helpers.noop,
  children: null
};
var _default = ToastNotificationList;
exports["default"] = _default;