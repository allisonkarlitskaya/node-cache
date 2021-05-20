"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _times = _interopRequireDefault(require("lodash/times"));

var _helpers = require("./helpers");

var _helpers2 = require("../../../common/helpers");

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

var YearView = /*#__PURE__*/function (_React$Component) {
  _inherits(YearView, _React$Component);

  function YearView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, YearView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(YearView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      date: new Date(_this.props.date),
      selectedDate: new Date(_this.props.date)
    });

    _defineProperty(_assertThisInitialized(_this), "getMonthArray", function () {
      var date = new Date('1/1/1');
      return (0, _times["default"])(12, function (i) {
        return Intl.DateTimeFormat(_this.props.locale, {
          month: 'short'
        }).format((0, _helpers.addMonths)(date, i));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getPrevYear", function () {
      var date = _this.state.date;

      _this.setState({
        date: (0, _helpers.addYears)(date, -1)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNextYear", function () {
      var date = _this.state.date;

      _this.setState({
        date: (0, _helpers.addYears)(date, 1)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSelectedMonth", function (month) {
      var date = _this.state.date;
      date.setMonth(month);

      _this.props.setSelected(date);

      _this.props.toggleDateView('M');
    });

    return _this;
  }

  _createClass(YearView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          date = _this$state.date,
          selectedDate = _this$state.selectedDate;
      var _ref = [date.getMonth(), date.getFullYear()],
          currMonth = _ref[0],
          currYear = _ref[1];
      var selectedYear = selectedDate.getFullYear();
      var monthArray = this.getMonthArray();
      return _react["default"].createElement("div", {
        className: "datepicker-months"
      }, _react["default"].createElement("table", {
        className: "table-condensed"
      }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", {
        className: "prev",
        onClick: this.getPrevYear
      }, _react["default"].createElement("span", {
        className: "glyphicon glyphicon-chevron-left"
      })), _react["default"].createElement("th", {
        className: "picker-switch",
        onClick: function onClick() {
          return _this2.props.toggleDateView('D');
        },
        colSpan: "5"
      }, currYear), _react["default"].createElement("th", {
        className: "next",
        onClick: this.getNextYear
      }, _react["default"].createElement("span", {
        className: "glyphicon glyphicon-chevron-right"
      })))), _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", {
        colSpan: "7"
      }, monthArray.map(function (month, idx) {
        return _react["default"].createElement("span", {
          onClick: function onClick() {
            return _this2.setSelectedMonth(idx);
          },
          className: "month ".concat(idx === currMonth && selectedYear === currYear ? 'active' : ''),
          key: idx
        }, month);
      }))))));
    }
  }]);

  return YearView;
}(_react["default"].Component);

YearView.propTypes = {
  date: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  setSelected: _propTypes["default"].func,
  toggleDateView: _propTypes["default"].func,
  locale: _propTypes["default"].string
};
YearView.defaultProps = {
  setSelected: _helpers2.noop,
  toggleDateView: _helpers2.noop,
  date: new Date(),
  locale: 'en-US'
};
var _default = YearView;
exports["default"] = _default;