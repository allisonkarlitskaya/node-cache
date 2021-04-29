"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Alert = require("../../../Alert");

var _helpers = require("../../../../common/helpers");

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

var LoginPageAlert = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginPageAlert, _React$Component);

  function LoginPageAlert() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoginPageAlert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginPageAlert)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      show: _this.props.show
    });

    _defineProperty(_assertThisInitialized(_this), "closeAlert", function (e) {
      _this.props.onDismiss(e);

      if (!_this.state.show) {
        return;
      }

      _this.setState({
        show: false
      });
    });

    return _this;
  }

  _createClass(LoginPageAlert, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          type = _this$props.type,
          message = _this$props.message;
      return this.state.show ? _react["default"].createElement(_Alert.Alert, {
        type: type,
        onDismiss: function onDismiss(e) {
          return _this2.closeAlert(e);
        }
      }, message) : null;
    }
  }]);

  return LoginPageAlert;
}(_react["default"].Component);

LoginPageAlert.propTypes = {
  type: _propTypes["default"].string,
  onDismiss: _propTypes["default"].func,
  message: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  show: _propTypes["default"].bool
};
LoginPageAlert.defaultProps = {
  type: 'warning',
  onDismiss: _helpers.noop,
  message: null,
  show: false
};
var _default = LoginPageAlert;
exports["default"] = _default;