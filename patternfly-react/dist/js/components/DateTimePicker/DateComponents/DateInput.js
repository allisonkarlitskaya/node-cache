"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("./helpers");

var _MonthView = _interopRequireDefault(require("./MonthView"));

var _YearView = _interopRequireDefault(require("./YearView"));

var _DecadeView = _interopRequireDefault(require("./DecadeView"));

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
      date: new Date(_this.props.date),
      typeOfDateInput: _this.props.typeOfDateInput
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

    _defineProperty(_assertThisInitialized(_this), "toggleDateView", function () {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      _this.setState({
        typeOfDateInput: type
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDateViewByType", function (type) {
      var _this$props = _this.props,
          date = _this$props.date,
          weekStartsOn = _this$props.weekStartsOn,
          locale = _this$props.locale,
          setSelected = _this$props.setSelected;
      var parsedDate = Date.parse(date) ? date : new Date();

      switch (type) {
        case 'D':
          return _react["default"].createElement(_DecadeView["default"], {
            date: parsedDate,
            setSelected: setSelected,
            toggleDateView: _this.toggleDateView
          });

        case 'Y':
          return _react["default"].createElement(_YearView["default"], {
            date: parsedDate,
            setSelected: setSelected,
            locale: locale,
            toggleDateView: _this.toggleDateView
          });

        default:
          return _react["default"].createElement(_MonthView["default"], {
            date: parsedDate,
            setSelected: setSelected,
            locale: locale,
            weekStartsOn: weekStartsOn,
            toggleDateView: _this.toggleDateView
          });
      }
    });

    return _this;
  }

  _createClass(DateInput, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      var typeOfDateInput = this.state.typeOfDateInput;
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])('datepicker', className)
      }, this.getDateViewByType(typeOfDateInput));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextDate = new Date(nextProps.date);
      var prevDate = new Date(prevState.selectedDate);
      var nextType = new Date(nextProps.date);
      return Date.parse(nextDate) === Date.parse(prevDate) ? null : {
        selectedDate: nextDate,
        date: nextDate,
        typeOfDateInput: nextType
      };
    }
  }]);

  return DateInput;
}(_react["default"].Component);

DateInput.propTypes = {
  date: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  setSelected: _propTypes["default"].func,
  locale: _propTypes["default"].string,
  weekStartsOn: _propTypes["default"].number,
  className: _propTypes["default"].string,
  typeOfDateInput: _propTypes["default"].string
};
DateInput.defaultProps = {
  setSelected: null,
  date: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  className: '',
  typeOfDateInput: 'M'
};
var _default = DateInput;
exports["default"] = _default;