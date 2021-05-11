"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bootstrapSliderWithoutJquery = _interopRequireDefault(require("bootstrap-slider-without-jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var orientation = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

var BootstrapSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(BootstrapSlider, _React$Component);

  function BootstrapSlider() {
    _classCallCheck(this, BootstrapSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(BootstrapSlider).apply(this, arguments));
  }

  _createClass(BootstrapSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.slider = new _bootstrapSliderWithoutJquery["default"](this.sliderDiv, _objectSpread({}, this.props));

      var onSlide = function onSlide(value) {
        _this.props.onSlide(value);

        _this.slider.setValue(value);
      };

      this.slider.on('slide', onSlide);
      this.slider.on('slideStop', onSlide);
    } // Instead of rendering the slider element again and again,
    // we took advantage of the bootstrap-slider library
    // and only update the new value or format when new props arrive.

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.slider.setValue(nextProps.value); // Sets the tooltip format.

      this.slider.setAttribute('formatter', nextProps.formatter); // Adjust the tooltip to "sit" ontop of the slider's handle. #LibraryBug
      // check

      if (this.props.orientation === orientation.horizontal) {
        this.slider.tooltip.style.marginLeft = "-".concat(this.slider.tooltip.offsetWidth / 2, "px");

        if (this.props.ticks_labels && this.slider.tickLabelContainer) {
          this.slider.tickLabelContainer.style.marginTop = '0px';
        }
      } else {
        this.slider.tooltip.style.marginTop = "-".concat(this.slider.tooltip.offsetHeight / 2, "px");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("input", {
        className: "slider-pf",
        type: "range",
        ref: function ref(input) {
          _this2.sliderDiv = input;
        }
      });
    }
  }]);

  return BootstrapSlider;
}(_react["default"].Component);

BootstrapSlider.propTypes = {
  value: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].number]).isRequired,
  formatter: _propTypes["default"].func,
  onSlide: _propTypes["default"].func,
  orientation: _propTypes["default"].string,
  ticks_labels: _propTypes["default"].array
};
BootstrapSlider.defaultProps = {
  formatter: function formatter(v) {
    return v;
  },
  onSlide: function onSlide(event) {
    return event;
  },
  orientation: 'horizontal',
  ticks_labels: []
};
var _default = BootstrapSlider;
exports["default"] = _default;