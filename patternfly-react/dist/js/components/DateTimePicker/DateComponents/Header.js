"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

var _helpers = require("./helpers");

var _times = _interopRequireDefault(require("lodash/times"));

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

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getWeekArray", function () {
      var weekStartsOn = _this.props.weekStartsOn;
      var weekStart = (0, _helpers.getWeekStart)(new Date());
      var dayFormat = Intl.DateTimeFormat(_this.props.locale, {
        weekday: 'short'
      }).format(weekStart).length > 3 ? 'narrow' : 'short';
      return (0, _times["default"])(7, function (i) {
        return Intl.DateTimeFormat(_this.props.locale, {
          weekday: dayFormat
        }).format((0, _helpers.addDays)(weekStart, (i + weekStartsOn) % 7)).slice(0, 2);
      });
    });

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          getNextMonth = _this$props.getNextMonth,
          getPrevMonth = _this$props.getPrevMonth,
          toggleDateView = _this$props.toggleDateView;
      var date = new Date(this.props.date);
      var month = Intl.DateTimeFormat(this.props.locale, {
        month: 'long'
      }).format(date);
      var year = date.getFullYear();
      var daysOfTheWeek = this.getWeekArray();
      return _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", {
        className: "prev",
        onClick: getPrevMonth
      }, _react["default"].createElement(_index.Icon, {
        type: "fa",
        name: "angle-left"
      })), _react["default"].createElement("th", {
        className: "picker-switch",
        colSpan: "5",
        onClick: function onClick() {
          return toggleDateView('Y');
        }
      }, month, " ", year), _react["default"].createElement("th", {
        className: "next",
        onClick: getNextMonth
      }, _react["default"].createElement(_index.Icon, {
        type: "fa",
        name: "angle-right"
      }))), _react["default"].createElement("tr", null, daysOfTheWeek.map(function (day, idx) {
        return _react["default"].createElement("th", {
          key: idx,
          className: "dow"
        }, day);
      })));
    }
  }]);

  return Header;
}(_react["default"].Component);

Header.propTypes = {
  date: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  getPrevMonth: _propTypes["default"].func,
  getNextMonth: _propTypes["default"].func,
  toggleDateView: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  weekStartsOn: _propTypes["default"].number
};
Header.defaultProps = {
  date: new Date(),
  getPrevMonth: null,
  getNextMonth: null,
  toggleDateView: null,
  locale: 'en-US',
  weekStartsOn: 1
};
var _default = Header;
exports["default"] = _default;