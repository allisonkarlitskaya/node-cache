"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("./index");

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

var StatefulNotificationDrawerWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(StatefulNotificationDrawerWrapper, _React$Component);

  function StatefulNotificationDrawerWrapper(props) {
    var _this;

    _classCallCheck(this, StatefulNotificationDrawerWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatefulNotificationDrawerWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClickLink", function (url) {
      window.open(url.href);
    });

    _defineProperty(_assertThisInitialized(_this), "onMarkPanelAsRead", function (panelkey) {
      var panels = _this.state.panels.map(function (panel) {
        if (panel.panelkey === panelkey) {
          panel.notifications.map(function (notification) {
            notification.seen = true;
            return notification;
          });
        }

        return panel;
      });

      _this.setState({
        panels: panels
      });

      _this.updateUnreadCount();
    });

    _defineProperty(_assertThisInitialized(_this), "onMarkPanelAsClear", function (key) {
      var panels = _this.state.panels.map(function (panel) {
        if (panel.panelkey === key) {
          panel.notifications = [];
        }

        return panel;
      });

      _this.setState({
        panels: panels
      });

      _this.updateUnreadCount();
    });

    _defineProperty(_assertThisInitialized(_this), "onNotificationAsRead", function (panelkey, nkey) {
      var panels = _this.state.panels.map(function (panel) {
        if (panel.panelkey === panelkey) {
          panel.notifications.map(function (notification) {
            if (notification.id === nkey) {
              notification.seen = true;
            }

            return notification;
          });
        }

        return panel;
      });

      _this.setState({
        panels: panels
      });

      _this.updateUnreadCount();
    });

    _defineProperty(_assertThisInitialized(_this), "onNotificationClick", function () {// On Click
    });

    _defineProperty(_assertThisInitialized(_this), "onNotificationHide", function (panelkey, nkey) {
      var panels = _this.state.panels.map(function (panel) {
        if (panel.panelkey === panelkey) {
          for (var i = 0; i < panel.notifications.length; i++) {
            if (nkey === panel.notifications[i].id) {
              panel.notifications.splice(i, 1);
            }
          }
        }

        return panel;
      });

      _this.setState({
        panels: panels
      });

      _this.updateUnreadCount();
    });

    _defineProperty(_assertThisInitialized(_this), "togglePanel", function (key) {
      if (_this.state.expandedPanel === key) {
        _this.setState({
          expandedPanel: '-1'
        });
      } else {
        _this.setState({
          expandedPanel: key
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDrawerExpand", function () {
      _this.setState(function (prevState) {
        return {
          isExpanded: !prevState.isExpanded
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateUnreadCount", function () {
      var hasunread = false;

      for (var i = 0; i < _this.state.panels.length; i++) {
        for (var j = 0; j < _this.state.panels[i].notifications.length; j++) {
          if (_this.state.panels[i].notifications[j].seen === false) {
            hasunread = true;
          }
        }
      }

      _this.props.updateUnreadCount(hasunread);
    });

    _this.state = {
      panels: props.panels,
      isExpanded: props.isExpanded,
      expandedPanel: props.expandedPanel
    };
    return _this;
  }

  _createClass(StatefulNotificationDrawerWrapper, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_index.NotificationDrawerWrapper, {
        panels: this.state.panels,
        togglePanel: this.togglePanel,
        toggleDrawerExpand: this.toggleDrawerExpand,
        isExpanded: this.state.isExpanded,
        isExpandable: this.props.isExpandable,
        expandedPanel: this.state.expandedPanel,
        toggleDrawerHide: this.props.toggleDrawer,
        onNotificationClick: this.onNotificationClick,
        onNotificationAsRead: this.onNotificationAsRead,
        onNotificationHide: this.onNotificationHide,
        onMarkPanelAsClear: this.onMarkPanelAsClear,
        onMarkPanelAsRead: this.onMarkPanelAsRead,
        onClickedLink: this.onClickLink
      });
    }
  }]);

  return StatefulNotificationDrawerWrapper;
}(_react["default"].Component);

StatefulNotificationDrawerWrapper.propTypes = {
  /** Notification Panels Array */
  panels: _propTypes["default"].array,

  /** is Expanded Bool */
  isExpanded: _propTypes["default"].bool,

  /** updateUnreadCount Func */
  updateUnreadCount: _propTypes["default"].func,

  /** toggleDrawer Func */
  toggleDrawer: _propTypes["default"].func,

  /** is Drawer Expandable prop */
  isExpandable: _propTypes["default"].bool,

  /** expanded Panel */
  expandedPanel: _propTypes["default"].string
};
StatefulNotificationDrawerWrapper.defaultProps = {
  panels: null,
  isExpanded: false,
  updateUnreadCount: null,
  toggleDrawer: null,
  isExpandable: true,
  expandedPanel: null
};
var _default = StatefulNotificationDrawerWrapper;
exports["default"] = _default;