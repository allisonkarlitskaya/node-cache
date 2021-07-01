"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../../");

var _DateInput = _interopRequireDefault(require("./DateComponents/DateInput"));

var _TodayButton = _interopRequireDefault(require("./DateComponents/TodayButton"));

var _TimeInput = _interopRequireDefault(require("./TimeComponents/TimeInput"));

var _DateConstants = require("./DateComponents/DateConstants");

var _TimeHelpers = require("./TimeHelpers");

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

var DateTimePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DateTimePicker, _React$Component);

  function DateTimePicker(props) {
    var _this;

    _classCallCheck(this, DateTimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "formatDate", function (date) {
      var locale = _this.props.locale;
      var options = [{
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      }, {
        hour: 'numeric',
        minute: '2-digit'
      }];

      if (Date.parse(date)) {
        var parsedValue = new Date(date);
        return "".concat(parsedValue.toLocaleString(locale, options[0]), " ").concat(parsedValue.toLocaleString(locale, options[1]));
      }

      return date;
    });

    _defineProperty(_assertThisInitialized(_this), "setSelected", function (date) {
      var newDate = new Date(_this.state.value);

      if (Date.parse(date)) {
        newDate = new Date(date);
      }

      _this.setState({
        value: newDate,
        tmpValue: _this.formatDate(newDate),
        typeOfDateInput: 'M',
        isTimeTableOpen: false
      });
    });

    _this.state = {
      value: new Date(_this.props.value),
      tmpValue: _this.formatDate(new Date(_this.props.value)),
      typeOfDateInput: _DateConstants.MONTH,
      isTimeTableOpen: false
    };
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          locale = _this$props.locale,
          weekStartsOn = _this$props.weekStartsOn,
          id = _this$props.id,
          placement = _this$props.placement;
      var _this$state = this.state,
          value = _this$state.value,
          typeOfDateInput = _this$state.typeOfDateInput,
          isTimeTableOpen = _this$state.isTimeTableOpen,
          hiddenValue = _this$state.hiddenValue;

      var popover = _react["default"].createElement(_.Popover, {
        id: id,
        className: "bootstrap-datetimepicker-widget date-time-picker-pf dropdown-menu timepicker-sbs"
      }, _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement(_DateInput["default"], {
        date: value,
        setSelected: this.setSelected,
        locale: locale,
        weekStartsOn: weekStartsOn,
        className: "col-md-6",
        typeOfDateInput: typeOfDateInput
      }), _react["default"].createElement(_TimeInput["default"], {
        time: value,
        setSelected: this.setSelected,
        isTimeTableOpen: isTimeTableOpen,
        locale: locale,
        className: "col-md-6"
      })), _react["default"].createElement("li", {
        className: "picker-switch accordion-toggle"
      }, _react["default"].createElement(_TodayButton["default"], {
        setSelected: this.setSelected
      })));

      return _react["default"].createElement("div", null, _react["default"].createElement(_.InputGroup, {
        className: "input-group date-time-picker-pf"
      }, _react["default"].createElement(_.FormControl, {
        "aria-label": "date-picker-input",
        type: "text",
        value: this.state.tmpValue,
        onChange: function onChange(e) {
          return _this2.setState({
            tmpValue: e.target.value
          });
        },
        onBlur: function onBlur(e) {
          return _this2.setSelected(e.target.value);
        }
      }), _react["default"].createElement(_.OverlayTrigger, {
        trigger: "click",
        placement: placement,
        overlay: popover,
        rootClose: true
      }, _react["default"].createElement(_.InputGroup.Addon, {
        className: "date-time-picker-pf",
        onClick: function onClick() {
          return _this2.setState({
            tmpValue: (0, _TimeHelpers.formatTime)(value, locale)
          });
        }
      }, _react["default"].createElement(_.Icon, {
        type: "fa",
        name: "calendar"
      })))));
    }
  }]);

  return DateTimePicker;
}(_react["default"].Component);

DateTimePicker.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  locale: _propTypes["default"].string,
  weekStartsOn: _propTypes["default"].number,
  id: _propTypes["default"].string,
  hiddenValue: _propTypes["default"].bool,
  placement: _propTypes["default"].oneOf(['top', 'bottom'])
};
DateTimePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'datetime-picker-popover',
  hiddenValue: true,
  placement: 'top'
};
var _default = DateTimePicker;
exports["default"] = _default;