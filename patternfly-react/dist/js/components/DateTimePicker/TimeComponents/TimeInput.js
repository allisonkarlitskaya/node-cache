"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PickTimeTable = _interopRequireDefault(require("./PickTimeTable"));

var _PickTimeClock = _interopRequireDefault(require("./PickTimeClock"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var TimeInput = /*#__PURE__*/function (_React$Component) {
  _inherits(TimeInput, _React$Component);

  function TimeInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimeInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimeInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isTimeTableOpen: _this.props.isTimeTableOpen,
      typeOfTimeInput: _TimeConstants.HOUR,
      selectedTime: _this.props.time
    });

    _defineProperty(_assertThisInitialized(_this), "toggleTimeTable", function (type) {
      _this.setState({
        typeOfTimeInput: type,
        isTimeTableOpen: !_this.state.isTimeTableOpen
      });
    });

    return _this;
  }

  _createClass(TimeInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          time = _this$props.time,
          setSelected = _this$props.setSelected,
          className = _this$props.className;
      var _this$state = this.state,
          typeOfTimeInput = _this$state.typeOfTimeInput,
          isTimeTableOpen = _this$state.isTimeTableOpen;
      var parsedTime = Date.parse(time) ? time : new Date();
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])('timepicker', className)
      }, isTimeTableOpen ? _react["default"].createElement(_PickTimeTable["default"], {
        time: parsedTime,
        setSelected: setSelected,
        type: typeOfTimeInput,
        show: isTimeTableOpen,
        toggleTimeTable: this.toggleTimeTable
      }) : _react["default"].createElement(_PickTimeClock["default"], {
        time: parsedTime,
        setSelected: setSelected,
        toggleTimeTable: this.toggleTimeTable
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var nextTime = new Date(nextProps.time);
      var prevTime = new Date(prevState.selectedTime);
      var nextIsTableOpen = nextProps.isTimeTableOpen;
      return Date.parse(nextTime) === Date.parse(prevTime) ? null : {
        selectedTime: nextTime,
        isTimeTableOpen: nextIsTableOpen
      };
    }
  }]);

  return TimeInput;
}(_react["default"].Component);

TimeInput.propTypes = {
  setSelected: _propTypes["default"].func,
  time: _propTypes["default"].oneOfType([_propTypes["default"].instanceOf(Date), _propTypes["default"].string]),
  className: _propTypes["default"].string,
  isTimeTableOpen: _propTypes["default"].bool
};
TimeInput.defaultProps = {
  setSelected: _helpers.noop,
  time: new Date(),
  className: '',
  isTimeTableOpen: false
};
var _default = TimeInput;
exports["default"] = _default;