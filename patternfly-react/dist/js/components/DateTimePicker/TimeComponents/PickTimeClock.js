"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../common/helpers");

var _TimeConstants = require("./TimeConstants");

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

var PickTimeClock = /*#__PURE__*/function (_React$Component) {
  _inherits(PickTimeClock, _React$Component);

  function PickTimeClock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PickTimeClock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PickTimeClock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      ampm: _this.props.time.getHours() >= 12 ? _TimeConstants.PM : _TimeConstants.AM
    });

    _defineProperty(_assertThisInitialized(_this), "setTime", function (type, amount) {
      var _this$props = _this.props,
          time = _this$props.time,
          setSelected = _this$props.setSelected;

      if (type === _TimeConstants.HOUR) {
        time.setHours(time.getHours() + amount);
      } else if (type === _TimeConstants.MINUTE) {
        time.setMinutes(time.getMinutes() + amount);
      }

      setSelected(time);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleAMPM", function () {
      var _this$props2 = _this.props,
          time = _this$props2.time,
          setSelected = _this$props2.setSelected;

      if (_this.state.ampm === _TimeConstants.AM) {
        time.setHours(time.getHours() + 12);

        _this.setState({
          ampm: _TimeConstants.PM
        });
      } else {
        time.setHours(time.getHours() - 12);

        _this.setState({
          ampm: _TimeConstants.AM
        });
      }

      setSelected(time);
    });

    return _this;
  }

  _createClass(PickTimeClock, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          time = _this$props3.time,
          toggleTimeTable = _this$props3.toggleTimeTable;
      var minutes = time.getMinutes();
      var hours = time.getHours() % 12 || 12;
      return _react["default"].createElement("div", {
        className: "timepicker-picker"
      }, _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        onClick: function onClick() {
          return _this2.setTime(_TimeConstants.HOUR, 1);
        }
      }, _react["default"].createElement("a", {
        title: "Increment Hour",
        className: "btn clock-btn"
      }, _react["default"].createElement("span", {
        className: "glyphicon glyphicon-chevron-up"
      }))), _react["default"].createElement("td", {
        className: "separator"
      }), _react["default"].createElement("td", {
        onClick: function onClick() {
          return _this2.setTime(_TimeConstants.MINUTE, 1);
        }
      }, _react["default"].createElement("a", {
        title: "Increment Minute",
        className: "btn clock-btn"
      }, _react["default"].createElement("span", {
        className: "glyphicon glyphicon-chevron-up"
      }))), _react["default"].createElement("td", {
        className: "separator"
      })), _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        onClick: function onClick() {
          return toggleTimeTable(_TimeConstants.HOUR);
        }
      }, _react["default"].createElement("span", {
        className: "timepicker-hour",
        title: "Pick Hour"
      }, "".concat(hours).padStart(2, '0'))), _react["default"].createElement("td", {
        className: "separator"
      }, ":"), _react["default"].createElement("td", {
        onClick: function onClick() {
          return toggleTimeTable(_TimeConstants.MINUTE);
        }
      }, _react["default"].createElement("span", {
        className: "timepicker-minute",
        title: "Pick Minute"
      }, "".concat(minutes).padStart(2, '0'))), _react["default"].createElement("td", null, _react["default"].createElement("button", {
        className: "btn btn-primary ampm-toggle",
        onClick: function onClick() {
          return _this2.toggleAMPM();
        }
      }, this.state.ampm))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, _react["default"].createElement("a", {
        title: "Decrement Hour",
        className: "btn clock-btn",
        onClick: function onClick() {
          return _this2.setTime(_TimeConstants.HOUR, -1);
        }
      }, _react["default"].createElement("span", {
        className: "glyphicon glyphicon-chevron-down"
      }))), _react["default"].createElement("td", {
        className: "separator"
      }), _react["default"].createElement("td", null, _react["default"].createElement("a", {
        title: "Decrement Minute",
        className: "btn clock-btn",
        onClick: function onClick() {
          return _this2.setTime(_TimeConstants.MINUTE, -1);
        }
      }, _react["default"].createElement("span", {
        className: "glyphicon glyphicon-chevron-down"
      }))), _react["default"].createElement("td", {
        className: "separator"
      })))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        ampm: nextProps.time.getHours() >= 12 ? _TimeConstants.PM : _TimeConstants.AM
      };
    }
  }]);

  return PickTimeClock;
}(_react["default"].Component);

PickTimeClock.propTypes = {
  time: _propTypes["default"].instanceOf(Date).isRequired,
  setSelected: _propTypes["default"].func,
  toggleTimeTable: _propTypes["default"].func
};
PickTimeClock.defaultProps = {
  setSelected: _helpers.noop,
  toggleTimeTable: _helpers.noop
};
var _default = PickTimeClock;
exports["default"] = _default;