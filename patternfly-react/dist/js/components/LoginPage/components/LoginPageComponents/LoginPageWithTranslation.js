"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoginCard = _interopRequireDefault(require("../LoginCardComponents/LoginCard"));

var _LoginCardHeader = _interopRequireDefault(require("../LoginCardComponents/LoginCardHeader"));

var _LoginPageContainer = _interopRequireDefault(require("./LoginPageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoginPageWithTranslation = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginPageWithTranslation, _React$Component);

  function LoginPageWithTranslation(props) {
    var _this;

    _classCallCheck(this, LoginPageWithTranslation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginPageWithTranslation).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onLanguageChange", function (e) {
      var newLanguage = e.target.attributes.value.value;

      if (!newLanguage || _this.state.language === newLanguage) {
        return;
      }

      _this.switchToLanguage(newLanguage);
    });

    _defineProperty(_assertThisInitialized(_this), "onPasswordChange", function (e) {
      var card = _this.props.card;
      card.form.passwordField.onChange && card.form.passwordField.onChange(e);

      _this.setState({
        passwordValue: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUsernameChange", function (e) {
      var card = _this.props.card;
      card.form.usernameField.onChange && card.form.usernameField.onChange(e);

      _this.setState({
        usernameValue: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDefaultPropsToPass", function () {
      var card = _this.props.card;
      return {
        card: _objectSpread({}, card, {
          onLanguageChange: function onLanguageChange(e) {
            return _this.onLanguageChange(e);
          },
          form: _objectSpread({}, card.form, {
            usernameField: _objectSpread({}, card.form.usernameField, {
              value: _this.state.usernameValue,
              onChange: function onChange(e) {
                return _this.onUsernameChange(e);
              }
            }),
            passwordField: _objectSpread({}, card.form.passwordField, {
              value: _this.state.passwordValue,
              onChange: function onChange(e) {
                return _this.onPasswordChange(e);
              }
            })
          })
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "switchToLanguage", function (language) {
      var _this$props = _this.props,
          container = _this$props.container,
          card = _this$props.card,
          header = _this$props.header;
      var languageFile = container.translations[language];

      var translatedProps = _objectSpread({}, _this.props, {
        container: _objectSpread({}, container, {
          alert: _objectSpread({}, header.alert, {
            message: languageFile.header.alert
          })
        }),
        header: _objectSpread({}, header, {
          logoTitle: languageFile.header.logo,
          caption: languageFile.header.caption
        }),
        footerLinks: languageFile.footerLinks,
        card: _objectSpread({}, card, {
          title: languageFile.card.header.title,
          selectedLanguage: languageFile.card.header.selectedLanguage,
          availableLanguages: languageFile.card.header.availableLanguages,
          onLanguageChange: function onLanguageChange(e) {
            return _this.onLanguageChange(e);
          },
          signUp: {
            label: languageFile.card.signUp.label,
            link: _objectSpread({}, card.signUp.link, {
              children: languageFile.card.signUp.link.label
            })
          },
          form: _objectSpread({}, card.form, {
            submitError: languageFile.card.form.error,
            usernameField: _objectSpread({}, card.form.usernameField, {
              onChange: function onChange(e) {
                return _this.onUsernameChange(e);
              },
              value: _this.state.usernameValue,
              placeholder: languageFile.card.usernameField.placeholder,
              errors: languageFile.card.usernameField.errors
            }),
            passwordField: _objectSpread({}, card.form.passwordField, {
              onChange: function onChange(e) {
                return _this.onPasswordChange(e);
              },
              value: _this.state.passwordValue,
              placeholder: languageFile.card.passwordField.placeholder,
              errors: languageFile.card.passwordField.errors,
              warnings: languageFile.card.passwordField.warnings
            }),
            submitText: languageFile.card.form.submitText,
            rememberMe: _objectSpread({}, card.rememberMe, {
              label: languageFile.card.rememberMe
            }),
            forgotPassword: _objectSpread({}, card.forgotPassword, {
              label: languageFile.card.forgotPassword
            })
          })
        })
      });

      _this.setState({
        translatedProps: translatedProps,
        language: language
      });
    });

    var _props$card = props.card,
        selectedLanguage = _props$card.selectedLanguage,
        availableLanguages = _props$card.availableLanguages;
    _this.state = {
      language: selectedLanguage && selectedLanguage.value || availableLanguages && availableLanguages[0] && availableLanguages[0].value,
      passwordValue: '',
      usernameValue: '',
      translatedProps: {}
    };
    return _this;
  }

  _createClass(LoginPageWithTranslation, [{
    key: "render",
    value: function render() {
      var newProps = _objectSpread({}, this.props, {}, this.getDefaultPropsToPass(), {}, this.state.translatedProps);

      return _react["default"].cloneElement(this.props.children, newProps);
    }
  }]);

  return LoginPageWithTranslation;
}(_react["default"].Component);

LoginPageWithTranslation.propTypes = {
  card: _propTypes["default"].shape(_objectSpread({}, _LoginCard["default"].LanguagePicker.propTypes, {}, _LoginCard["default"].Form.propTypes, {}, _LoginCard["default"].SignUp.propTypes, {}, _LoginCard["default"].RememberMe.propTypes, {}, _LoginCard["default"].ForgotPassword.propTypes)),
  header: _propTypes["default"].shape(_objectSpread({}, _LoginCardHeader["default"].propTypes)),
  container: _propTypes["default"].shape(_objectSpread({}, _LoginPageContainer["default"].propTypes)),
  children: _propTypes["default"].node.isRequired
};
LoginPageWithTranslation.defaultProps = {
  card: _objectSpread({}, _LoginCard["default"].LanguagePicker.defaultProps, {}, _LoginCard["default"].Form.defaultProps, {}, _LoginCard["default"].SignUp.defaultProps, {}, _LoginCard["default"].RememberMe.defaultProps, {}, _LoginCard["default"].ForgotPassword.defaultProps),
  header: _objectSpread({}, _LoginCardHeader["default"].defaultProps),
  container: _objectSpread({}, _LoginPageContainer["default"].defaultProps)
};
var _default = LoginPageWithTranslation;
exports["default"] = _default;