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

var _DateHelpers = require("./DateHelpers");

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

var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: new Date(_this.props.value),
      tmpValue: (0, _DateHelpers.formatDate)(_this.props.value, _this.props.locale)
    });

    _defineProperty(_assertThisInitialized(_this), "setSelected", function (date) {
      var newDate = new Date(_this.state.value);

      if (Date.parse(date)) {
        newDate = new Date(date);
      } else if (date === '') {
        newDate = date;
      }

      _this.setState({
        value: newDate,
        tmpValue: (0, _DateHelpers.formatDate)(newDate)
      });
    });

    return _this;
  }

  _createClass(DatePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var _this$props = this.props,
          locale = _this$props.locale,
          weekStartsOn = _this$props.weekStartsOn,
          id = _this$props.id,
          placement = _this$props.placement;

      var popover = _react["default"].createElement(_.Popover, {
        id: id,
        className: "bootstrap-datetimepicker-widget date-picker-pf usetwentyfour"
      }, _react["default"].createElement("ul", {
        className: "list-unstyled"
      }, _react["default"].createElement("li", null, _react["default"].createElement(_DateInput["default"], {
        date: value,
        setSelected: this.setSelected,
        locale: locale,
        weekStartsOn: weekStartsOn
      })), _react["default"].createElement("li", {
        className: "picker-switch accordion-toggle"
      }, _react["default"].createElement(_TodayButton["default"], {
        setSelected: this.setSelected
      }))));

      return _react["default"].createElement("div", null, _react["default"].createElement(_.InputGroup, {
        className: "input-group date-time-picker-pf"
      }, _react["default"].createElement(_.FormControl, {
        "aria-label": "date-time-picker-input",
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
        className: "date-picker-pf",
        onClick: function onClick() {
          return _this2.setState({
            tmpValue: (0, _DateHelpers.formatDate)(value)
          });
        }
      }, _react["default"].createElement(_.Icon, {
        type: "fa",
        name: "calendar"
      })))));
    }
  }]);

  return DatePicker;
}(_react["default"].Component);

DatePicker.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  locale: _propTypes["default"].string,
  weekStartsOn: _propTypes["default"].number,
  id: _propTypes["default"].string,
  placement: _.OverlayTrigger.propTypes.placement
};
DatePicker.defaultProps = {
  value: new Date(),
  locale: 'en-US',
  weekStartsOn: 1,
  id: 'popover-date-picker',
  placement: 'top'
};
var _default = DatePicker;
exports["default"] = _default;