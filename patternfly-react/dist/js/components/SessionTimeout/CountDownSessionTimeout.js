"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Timer = _interopRequireDefault(require("../../common/Timer"));

var _SessionTimeout = _interopRequireDefault(require("./SessionTimeout"));

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

var msTimes = {
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000
};

var CountDownSessionTimeout = /*#__PURE__*/function (_React$Component) {
  _inherits(CountDownSessionTimeout, _React$Component);

  function CountDownSessionTimeout(props) {
    var _this;

    _classCallCheck(this, CountDownSessionTimeout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CountDownSessionTimeout).call(this, props));
    _this.timer = new _Timer["default"](function () {}, -1);
    _this.state = {
      timeLeft: 0
    };
    return _this;
  }

  _createClass(CountDownSessionTimeout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.timeLeft < this.props.displayBefore) {
        this.setTimeout('dialog');
      } else {
        this.setTimeout('init');
      }
    }
  }, {
    key: "componentWillUnount",
    value: function componentWillUnount() {
      this.timer.clearTimer();
    }
  }, {
    key: "setTimeout",
    value: function setTimeout(mode) {
      var _this2 = this;

      var _this$props = this.props,
          sessionTime = _this$props.sessionTime,
          timeLeft = _this$props.timeLeft,
          displayBefore = _this$props.displayBefore,
          units = _this$props.units;

      switch (mode) {
        case 'logout':
          {
            this.setState(function () {
              return {
                timeLeft: 0
              };
            });
            this.timer.clearTimer();
            break;
          }

        case 'continue':
          {
            this.setState(function () {
              return {
                timeLeft: sessionTime
              };
            });
            this.timer.startTimer(function () {
              return _this2.setTimeout('dialog');
            }, (sessionTime - displayBefore) * msTimes[units]);
            break;
          }

        case 'dialog':
          {
            var leftNow = timeLeft < displayBefore ? timeLeft : displayBefore;
            this.setState(function () {
              return {
                timeLeft: leftNow
              };
            });
            this.timer.startTimer(function () {
              return _this2.setTimeout('logout');
            }, leftNow * msTimes[units]);
            break;
          }

        case 'init':
          {
            this.setState(function () {
              return {
                timeLeft: timeLeft
              };
            });
            this.timer.startTimer(function () {
              return _this2.setTimeout('dialog');
            }, (timeLeft - displayBefore) * msTimes[units]);
            break;
          }

        default:
          {
            break;
          }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react["default"].createElement(_SessionTimeout["default"], {
        logoutFnc: function logoutFnc() {
          return _this3.setTimeout('logout');
        },
        continueFnc: function continueFnc() {
          return _this3.setTimeout('continue');
        },
        displayBefore: this.props.displayBefore,
        timeLeft: this.state.timeLeft,
        secondaryContent: this.props.secondaryContent
      });
    }
  }]);

  return CountDownSessionTimeout;
}(_react["default"].Component);

CountDownSessionTimeout.propTypes = {
  timeLeft: _propTypes["default"].number.isRequired,
  sessionTime: _propTypes["default"].number.isRequired,
  displayBefore: _propTypes["default"].number,
  units: _propTypes["default"].oneOf(Object.keys(msTimes)),
  secondaryContent: _propTypes["default"].node
};
CountDownSessionTimeout.defaultProps = {
  displayBefore: 10,
  units: 'seconds',
  secondaryContent: _react["default"].createElement("p", null, "You will be logged out in 10 seconds.")
};
var _default = CountDownSessionTimeout;
exports["default"] = _default;