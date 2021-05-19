"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BootstrapSlider = _interopRequireDefault(require("./BootstrapSlider"));

var _helpers = require("../../common/helpers");

var _Icon = require("../Icon");

var _Form = require("../Form");

var _Boundaries = _interopRequireDefault(require("./Boundaries"));

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Slider = /*#__PURE__*/function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onSlide", function (value) {
      var newValue = value < _this.props.min ? _this.props.min : value;

      _this.setState({
        value: newValue
      }, function () {
        return _this.props.onSlide(newValue);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var newValue = parseInt(event.target.value || 0, 10);

      _this.setState({
        value: newValue
      }, function () {
        return _this.props.onSlide(newValue);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFormatChange", function (format) {
      _this.setState({
        tooltipFormat: format
      }, _this.props.onFormatChange(format));
    });

    _defineProperty(_assertThisInitialized(_this), "formatter", function (value) {
      return "".concat(value, " ").concat(_this.state.tooltipFormat);
    });

    _this.state = {
      value: _this.props.value,
      tooltipFormat: _this.props.dropdownList && _this.props.dropdownList[0] || _this.props.inputFormat
    };
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
        this.onSlide(this.props.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var label = null;
      var sliderClass = 'col-xs-12 col-sm-12 col-md-12';
      var labelClass = 'col-xs-2 col-sm-2 col-md-2';

      if (this.props.label || this.props.icon) {
        sliderClass = 'col-xs-10 col-sm-10 col-md-10';
        label = this.props.icon ? _react["default"].createElement(_Icon.Icon, _extends({
          className: labelClass
        }, this.props.icon)) : _react["default"].createElement(_Form.ControlLabel, {
          htmlFor: this.props.id,
          bsClass: labelClass
        }, this.props.label);
      }

      var formatElement;

      if (this.props.inputFormat) {
        formatElement = _react["default"].createElement("span", null, this.props.inputFormat);
      }

      if (this.props.dropdownList) {
        formatElement = _react["default"].createElement(_DropdownMenu["default"], _extends({}, this.props, {
          onFormatChange: this.onFormatChange,
          title: this.state.tooltipFormat
        }));
      }

      var inputElement = this.props.input && _react["default"].createElement(_Form.FormControl, {
        bsClass: "slider-input-pf",
        type: "number",
        value: this.state.value,
        min: this.props.min,
        max: this.props.max,
        onChange: this.onInputChange
      });

      var BSSlider = _react["default"].createElement(_BootstrapSlider["default"], _extends({}, this.props, {
        formatter: this.formatter,
        value: this.state.value,
        onSlide: this.onSlide
      }));

      return _react["default"].createElement("div", null, label, _react["default"].createElement("div", {
        className: sliderClass
      }, _react["default"].createElement(_Boundaries["default"], _extends({
        slider: BSSlider
      }, this.props), inputElement, formatElement)));
    }
  }]);

  return Slider;
}(_react["default"].Component);

Slider.propTypes = {
  id: _propTypes["default"].string,
  orientation: _propTypes["default"].string,
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  step: _propTypes["default"].number,
  value: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].number]),
  toolTip: _propTypes["default"].bool,
  onSlide: _propTypes["default"].func,
  onFormatChange: _propTypes["default"].func,
  label: _propTypes["default"].string,
  labelClass: _propTypes["default"].string,
  icon: _propTypes["default"].object,
  input: _propTypes["default"].bool,
  sliderClass: _propTypes["default"].string,
  dropdownList: _propTypes["default"].array,
  inputFormat: _propTypes["default"].string
};
Slider.defaultProps = {
  id: null,
  orientation: 'horizontal',
  min: 0,
  max: 100,
  value: 0,
  step: 1,
  toolTip: false,
  onSlide: _helpers.noop,
  onFormatChange: _helpers.noop,
  label: null,
  labelClass: null,
  input: false,
  sliderClass: null,
  icon: null,
  dropdownList: null,
  inputFormat: ''
};
var _default = Slider;
exports["default"] = _default;