"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApplicationLauncherWrapper = _interopRequireDefault(require("./ApplicationLauncherWrapper"));

var _reactClickOutside = _interopRequireDefault(require("react-click-outside"));

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

var StatefulApplicationLauncherWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(StatefulApplicationLauncherWrapper, _React$Component);

  function StatefulApplicationLauncherWrapper(props) {
    var _this;

    _classCallCheck(this, StatefulApplicationLauncherWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StatefulApplicationLauncherWrapper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleLauncher", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      if (_this.state.open === true) {
        _this.toggleLauncher();
      }
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(StatefulApplicationLauncherWrapper, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_ApplicationLauncherWrapper["default"], {
        apps: this.props.apps,
        noIcons: this.props.noIcons,
        grid: this.props.grid,
        tooltip: this.props.tooltip,
        tooltipPlacement: this.props.tooltipPlacement,
        open: this.state.open,
        toggleLauncher: this.toggleLauncher
      });
    }
  }]);

  return StatefulApplicationLauncherWrapper;
}(_react["default"].Component);

StatefulApplicationLauncherWrapper.propTypes = {
  /** Array of App Objects */
  apps: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    icon: _propTypes["default"].string,
    tooltip: _propTypes["default"].string,
    onClick: _propTypes["default"].func
  })),

  /** No Icons Bool */
  noIcons: _propTypes["default"].bool,

  /** Grid instead of List (List is Default) */
  grid: _propTypes["default"].bool,

  /** Toggle Tooltip */
  tooltip: _propTypes["default"].string,

  /** Tooltip Placement */
  tooltipPlacement: _propTypes["default"].string
};
StatefulApplicationLauncherWrapper.defaultProps = {
  noIcons: false,
  tooltip: '',
  tooltipPlacement: 'left',
  grid: false,
  apps: [{
    title: 'Royal',
    icon: 'virtual-machine',
    tooltip: 'Tooltip!',
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }]
};

var _default = (0, _reactClickOutside["default"])(StatefulApplicationLauncherWrapper);

exports["default"] = _default;