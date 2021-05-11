"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chunk = _interopRequireDefault(require("lodash/chunk"));

var _times = _interopRequireDefault(require("lodash/times"));

var _Day = _interopRequireDefault(require("./Day"));

var _helpers = require("./helpers");

var _Header = _interopRequireDefault(require("./Header"));

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

var DateInput = /*#__PURE__*/function (_React$Component) {
  _inherits(DateInput, _React$Component);

  function DateInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedDate: new Date(_this.props.date),
      date: new Date(_this.props.date)
    });

    _defineProperty(_assertThisInitialized(_this), "calendarArray", function (date) {
      var weekStartsOn = _this.props.weekStartsOn;
      var monthStart = (0, _helpers.getMonthStart)(new Date(date));
      var offset = monthStart.getDay() - weekStartsOn;
      return (0, _chunk["default"])((0, _times["default"])(35, function (i) {
        return (0, _helpers.addDays)(monthStart, i - offset);
      }), 7);
    });

    _defineProperty(_assertThisInitialized(_this), "getPrevMonth", function () {
      var date = _this.state.date;

      _this.setState({
        date: (0, _helpers.addMonths)(date, -1)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNextMonth", function () {
      var date = _this.state.date;

      _this.setState({
        date: (0, _helpers.addMonths)(date, 1)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSelected", function (day) {
      _this.setState({
        selectedDate: day,
        date: day
      });

      _this.props.setSelected(day);
    });

    return _this;
  }

  _createClass(DateInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          locale = _this$props.locale,
          weekStartsOn = _this$props.weekStartsOn,
          toggleDateView = _this$props.toggleDateView;
      var _this$state = this.state,
          date = _this$state.date,
          selectedDate = _this$state.selectedDate;
      var calendar = this.calendarArray(date);
      return _react["default"].createElement("div", {
        className: "datepicker-days"
      }, _react["default"].createElement("table", {
        className: "table-condensed"
      }, _react["default"].createElement(_Header["default"], {
        getPrevMonth: this.getPrevMonth,
        getNextMonth: this.getNextMonth,
        date: date,
        locale: locale,
        weekStartsOn: weekStartsOn,
        toggleDateView: toggleDateView
      }), _react["default"].createElement("tbody", null, calendar.map(function (el, idx) {
        return _react["default"].createElement("tr", {
          key: idx
        }, el.map(function (day) {
          return _react["default"].createElement(_Day["default"], {
            key: day,
            day: day,
            setSelected: _this2.setSelected,
            classNamesArray: {
              weekend: (0, _helpers.isWeekend)(day),
              old: day.getMonth() !== date.getMonth(),
              active: (0, _helpers.isEqualDate)(day, selectedDate),
              today: (0, _helpers.isEqualDate)(day, new Date())
            }
          });
        }));
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextDate = new Date(nextProps.date);
      var prevDate = new Date(prevState.selectedDate);
      return !(Date.parse(nextDate) === Date.parse(prevDate)) ? {
        selectedDate: nextDate,
        date: nextDate
      } : null;
    }
  }]);

  return DateInput;
}(_react["default"].Component);

DateInput.propTypes = {
  date: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  setSelected: _propTypes["default"].func,
  toggleDateView: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  weekStartsOn: _propTypes["default"].number
};
DateInput.defaultProps = {
  setSelected: null,
  toggleDateView: null,
  date: new Date(),
  locale: 'en-US',
  weekStartsOn: 1
};
var _default = DateInput;
exports["default"] = _default;