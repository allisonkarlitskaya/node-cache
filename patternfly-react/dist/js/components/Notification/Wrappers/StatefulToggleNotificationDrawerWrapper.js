"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../NotificationDrawer/index");

var _index2 = require("./index");

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

var StatefulToggleNotificationDrawerWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(StatefulToggleNotificationDrawerWrapper, _React$Component);

  function StatefulToggleNotificationDrawerWrapper(props) {
    var _this;

    _classCallCheck(this, StatefulToggleNotificationDrawerWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatefulToggleNotificationDrawerWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleDrawer", function () {
      _this.setState(function (prevState) {
        return {
          isDrawerOpen: !prevState.isDrawerOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateUnreadCount", function (bool) {
      if (bool) {
        _this.setState({
          hasUnreadMessages: true
        });
      } else {
        _this.setState({
          hasUnreadMessages: false
        });
      }
    });

    _this.state = {
      panels: props.panels,
      isDrawerOpen: props.isDrawerOpen,
      hasUnreadMessages: props.hasUnreadMessages
    };
    return _this;
  }

  _createClass(StatefulToggleNotificationDrawerWrapper, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("ul", {
        className: "nav navbar-nav navbar-right navbar-iconic"
      }, _react["default"].createElement(_index.NotificationDrawer.Toggle, {
        hasUnreadMessages: this.state.hasUnreadMessages,
        onClick: this.toggleDrawer
      }), this.state.isDrawerOpen && _react["default"].createElement(_index2.StatefulNotificationDrawerWrapper, {
        panels: this.state.panels,
        maxPanelHeight: this.props.maxPanelHeight,
        isDrawerOpen: true,
        isExpandable: this.props.isExpandable,
        hasUnreadMessages: true,
        updateUnreadCount: this.updateUnreadCount,
        toggleDrawer: this.toggleDrawer
      }));
    }
  }]);

  return StatefulToggleNotificationDrawerWrapper;
}(_react["default"].Component);

StatefulToggleNotificationDrawerWrapper.propTypes = {
  /** Notification Panels Array */
  panels: _propTypes["default"].array,

  /** Is Drawer Open Bool */
  isDrawerOpen: _propTypes["default"].bool,

  /** has Unread Messages Bool */
  hasUnreadMessages: _propTypes["default"].bool,

  /** is Drawer Expandable */
  isExpandable: _propTypes["default"].bool,

  /** Max Panel Height */
  maxPanelHeight: _propTypes["default"].string
};
StatefulToggleNotificationDrawerWrapper.defaultProps = {
  panels: null,
  isDrawerOpen: false,
  hasUnreadMessages: false,
  isExpandable: true,
  maxPanelHeight: null
};
var _default = StatefulToggleNotificationDrawerWrapper;
exports["default"] = _default;