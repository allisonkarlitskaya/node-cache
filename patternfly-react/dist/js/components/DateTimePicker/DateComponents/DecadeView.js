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

var _DecadeViewHeader = require("./DecadeViewHeader");

var _DecadeViewTable = require("./DecadeViewTable");

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

var DecadeView = /*#__PURE__*/function (_React$Component) {
  _inherits(DecadeView, _React$Component);

  function DecadeView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DecadeView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DecadeView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      date: new Date(_this.props.date),
      selectedDate: new Date(_this.props.date)
    });

    _defineProperty(_assertThisInitialized(_this), "getYearArray", function () {
      var date = _this.state.date;
      date.setFullYear(Math.floor(date.getFullYear() / 10) * 10);
      return (0, _times["default"])(12, function (i) {
        return (0, _helpers.addYears)(date, i).getFullYear();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getPrevDecade", function () {
      var date = _this.state.date;

      _this.setState({
        date: (0, _helpers.addYears)(date, -10)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNextDecade", function () {
      var date = _this.state.date;

      _this.setState({
        date: (0, _helpers.addYears)(date, 10)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSelectedYear", function (year) {
      var _this$props = _this.props,
          setSelected = _this$props.setSelected,
          toggleDateView = _this$props.toggleDateView;
      var date = _this.state.date;
      date.setFullYear(year);
      setSelected(date);
      toggleDateView('Y');
    });

    return _this;
  }

  _createClass(DecadeView, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          date = _this$state.date,
          selectedDate = _this$state.selectedDate;
      var currDecade = Math.floor(date.getFullYear() / 10) * 10;
      var selectedYear = selectedDate.getFullYear();
      var yearArray = this.getYearArray();
      return _react["default"].createElement("div", {
        className: "datepicker-years"
      }, _react["default"].createElement("table", {
        className: "table-condensed"
      }, _react["default"].createElement(_DecadeViewHeader.DecadeViewHeader, {
        currDecade: currDecade,
        getNextDecade: this.getNextDecade,
        getPrevDecade: this.getPrevDecade
      }), _react["default"].createElement(_DecadeViewTable.DecadeViewTable, {
        selectedYear: selectedYear,
        yearArray: yearArray,
        setSelectedYear: this.setSelectedYear
      })));
    }
  }]);

  return DecadeView;
}(_react["default"].Component);

DecadeView.propTypes = {
  date: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  setSelected: _propTypes["default"].func,
  toggleDateView: _propTypes["default"].func
};
DecadeView.defaultProps = {
  setSelected: _helpers2.noop,
  toggleDateView: _helpers2.noop,
  date: new Date()
};
var _default = DecadeView;
exports["default"] = _default;