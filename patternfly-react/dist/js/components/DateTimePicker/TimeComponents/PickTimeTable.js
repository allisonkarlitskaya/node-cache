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

var PickTimeTable = /*#__PURE__*/function (_React$Component) {
  _inherits(PickTimeTable, _React$Component);

  function PickTimeTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PickTimeTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PickTimeTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setTime", function (newTime, type) {
      var _this$props = _this.props,
          time = _this$props.time,
          setSelected = _this$props.setSelected,
          toggleTimeTable = _this$props.toggleTimeTable;
      var hours = time.getHours();
      newTime = parseInt(newTime, 10);

      if (type === _TimeConstants.MINUTE) {
        time.setMinutes(newTime);
      } else if (type === _TimeConstants.HOUR) {
        time.setHours(hours < 12 ? newTime % 12 : newTime % 12 + 12);
      }

      setSelected(time);
      toggleTimeTable();
    });

    return _this;
  }

  _createClass(PickTimeTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var hoursArray = [['12', '01', '02', '03'], ['04', '05', '06', '07'], ['08', '09', '10', '11']];
      var minutesArray = [['00', '05', '10', '15'], ['20', '25', '30', '35'], ['40', '45', '50', '55']];
      return this.props.type === _TimeConstants.HOUR ? _react["default"].createElement("div", {
        className: "timepicker-hours"
      }, _react["default"].createElement("table", {
        className: "table-condensed"
      }, _react["default"].createElement("tbody", null, hoursArray.map(function (hoursRow, idx) {
        return _react["default"].createElement("tr", {
          key: idx
        }, hoursRow.map(function (hour) {
          return _react["default"].createElement("td", {
            key: hour,
            className: "hour",
            onClick: function onClick() {
              return _this2.setTime(hour, _TimeConstants.HOUR);
            }
          }, hour);
        }));
      })))) : _react["default"].createElement("div", {
        className: "timepicker-minutes"
      }, _react["default"].createElement("table", {
        className: "table-condensed"
      }, _react["default"].createElement("tbody", null, minutesArray.map(function (minutesRow, idx) {
        return _react["default"].createElement("tr", {
          key: idx
        }, minutesRow.map(function (minute) {
          return _react["default"].createElement("td", {
            key: minute,
            className: "minute",
            onClick: function onClick() {
              return _this2.setTime(minute, _TimeConstants.MINUTE);
            }
          }, minute);
        }));
      }))));
    }
  }]);

  return PickTimeTable;
}(_react["default"].Component);

PickTimeTable.propTypes = {
  time: _propTypes["default"].instanceOf(Date).isRequired,
  setSelected: _propTypes["default"].func,
  toggleTimeTable: _propTypes["default"].func,
  type: _propTypes["default"].string.isRequired
};
PickTimeTable.defaultProps = {
  setSelected: _helpers.noop,
  toggleTimeTable: _helpers.noop
};
var _default = PickTimeTable;
exports["default"] = _default;