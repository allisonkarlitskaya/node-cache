"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("../../../../index");

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

var LoginLanguagePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginLanguagePicker, _React$Component);

  function LoginLanguagePicker(props) {
    var _this;

    _classCallCheck(this, LoginLanguagePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginLanguagePicker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var onLanguageChange = _this.props.onLanguageChange;
      onLanguageChange(e);

      _this.setState({
        title: e.target.text
      });
    });

    var selectedLanguage = props.selectedLanguage,
        availableLanguages = props.availableLanguages;
    _this.state = {
      title: selectedLanguage || availableLanguages && availableLanguages[0].text
    };
    return _this;
  }

  _createClass(LoginLanguagePicker, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var selectedLanguage = nextProps.selectedLanguage,
          availableLanguages = nextProps.availableLanguages;
      var title = selectedLanguage || availableLanguages && availableLanguages[0].text;
      this.setState({
        title: title
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          availableLanguages = _this$props.availableLanguages,
          className = _this$props.className,
          id = _this$props.id;
      var title = this.state.title;

      if (!availableLanguages) {
        return null;
      }

      var menuItems = availableLanguages.map(function (language, index) {
        return _react["default"].createElement(_index.MenuItem, {
          key: index,
          value: language.value,
          active: title === language.text,
          onClick: _this2.handleClick
        }, language.text);
      });
      return _react["default"].createElement("div", {
        className: (0, _classnames["default"])('bootstrap-select btn-group', className)
      }, _react["default"].createElement(_index.DropdownButton, {
        title: title,
        id: id
      }, menuItems));
    }
  }]);

  return LoginLanguagePicker;
}(_react["default"].Component);

LoginLanguagePicker.propTypes = {
  /** Provided languages to pass into the dropdown menu */
  availableLanguages: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    /** the language menu item's value */
    value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

    /** the language menu item's text */
    text: _propTypes["default"].string
  })),

  /** The default selected language */
  selectedLanguage: _propTypes["default"].string,

  /** Callback to trigger when selecting a language */
  onLanguageChange: _propTypes["default"].func,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** The dropdown's id */
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
LoginLanguagePicker.defaultProps = {
  selectedLanguage: null,
  availableLanguages: null,
  onLanguageChange: _helpers.noop,
  className: null,
  id: 'language-picker'
};
var _default = LoginLanguagePicker;
exports["default"] = _default;