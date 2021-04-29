"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoginPageAlert = _interopRequireDefault(require("./components/LoginPageComponents/LoginPageAlert"));

var _LoginPageAlerts = _interopRequireDefault(require("./components/LoginPageComponents/LoginPageAlerts"));

var _LoginPageContainer = _interopRequireDefault(require("./components/LoginPageComponents/LoginPageContainer"));

var _LoginPageHeader = _interopRequireDefault(require("./components/LoginPageComponents/LoginPageHeader"));

var _LoginPageFooter = _interopRequireDefault(require("./components/LoginPageComponents/LoginPageFooter"));

var _LoginFooterLinks = _interopRequireDefault(require("./components/LoginPageComponents/LoginFooterLinks"));

var _LoginCard = _interopRequireDefault(require("./components/LoginCardComponents/LoginCard"));

var _LoginPageWithTranslation = _interopRequireDefault(require("./components/LoginPageComponents/LoginPageWithTranslation"));

var _LoginPageLink = _interopRequireDefault(require("./components/LoginPageComponents/LoginPageLink"));

var _SocialLoginPage = _interopRequireDefault(require("./SocialLoginPage"));

var _SocialLoginPageContainer = _interopRequireDefault(require("./components/LoginPageComponents/SocialLoginPageContainer"));

var _BasicLoginPageLayout = _interopRequireDefault(require("./components/LoginPageComponents/BasicLoginPageLayout"));

var _LoginCardHeader = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardHeader"));

var _LoginLanguagePicker = _interopRequireDefault(require("./components/LoginCardComponents/LoginLanguagePicker"));

var _LoginCardWithValidation = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardWithValidation"));

var _LoginCardForm = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardForm"));

var _LoginCardSignUp = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardSignUp"));

var _LoginCardInput = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardInput"));

var _LoginCardInputWarning = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardInputWarning"));

var _LoginCardSettings = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardSettings"));

var _LoginFormError = _interopRequireDefault(require("./components/LoginCardComponents/LoginFormError"));

var _LoginCardForgotPassword = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardForgotPassword"));

var _LoginCardRememberMe = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardRememberMe"));

var _LoginCardSocialSection = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardSocialSection"));

var _LoginCardSocialLink = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardSocialLink"));

var _LoginCardSocialColumns = _interopRequireDefault(require("./components/LoginCardComponents/LoginCardSocialColumns"));

var _SocialLoginCard = _interopRequireDefault(require("./components/LoginCardComponents/SocialLoginCard"));

var _BasicLoginCardLayout = _interopRequireDefault(require("./components/LoginCardComponents/BasicLoginCardLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoginPagePattern = function LoginPagePattern(_ref) {
  var container = _ref.container,
      header = _ref.header,
      footerLinks = _ref.footerLinks,
      card = _ref.card;
  return _react["default"].createElement(LoginPage.Container, container, _react["default"].createElement(LoginPage.Alerts, {
    alert: container.alert
  }), _react["default"].createElement(LoginPage.BasicLayout, null, _react["default"].createElement(LoginPage.Header, header), _react["default"].createElement(_LoginCard["default"].BasicLayout, card.layout, _react["default"].createElement(_LoginCard["default"], null, _react["default"].createElement(_LoginCard["default"].Header, null, _react["default"].createElement(_LoginCard["default"].LanguagePicker, {
    selectedLanguage: card.selectedLanguage,
    availableLanguages: card.availableLanguages,
    onLanguageChange: card.onLanguageChange
  }), _react["default"].createElement("h1", null, card.title)), _react["default"].createElement(_LoginCard["default"].WithValidation, card.form, _react["default"].createElement(_LoginCard["default"].Form, null)), _react["default"].createElement(_LoginCard["default"].SignUp, card.signUp)), _react["default"].createElement(LoginPage.Footer, {
    links: footerLinks
  }))));
};

var LoginPage = function LoginPage(props) {
  return _react["default"].createElement(LoginPage.WithTranslation, props, _react["default"].createElement(LoginPage.Pattern, null));
};

LoginPage.Container = _LoginPageContainer["default"];
LoginPage.Header = _LoginPageHeader["default"];
LoginPage.Footer = _LoginPageFooter["default"];
LoginPage.Card = _LoginCard["default"];
LoginPage.FooterLinks = _LoginFooterLinks["default"];
LoginPage.WithTranslation = _LoginPageWithTranslation["default"];
LoginPage.Alerts = _LoginPageAlerts["default"];
LoginPage.Alert = _LoginPageAlert["default"];
LoginPage.Pattern = LoginPagePattern;
LoginPage.Social = _SocialLoginPage["default"];
LoginPage.SocialContainer = _SocialLoginPageContainer["default"];
LoginPage.BasicLayout = _BasicLoginPageLayout["default"];
LoginPage.Link = _LoginPageLink["default"];
LoginPage.CardHeaer = _LoginCardHeader["default"];
LoginPage.LanguagePicker = _LoginLanguagePicker["default"];
LoginPage.CardWithValidation = _LoginCardWithValidation["default"];
LoginPage.CardForm = _LoginCardForm["default"];
LoginPage.CardSignUp = _LoginCardSignUp["default"];
LoginPage.CardInput = _LoginCardInput["default"];
LoginPage.CardInputWarning = _LoginCardInputWarning["default"];
LoginPage.CardSettings = _LoginCardSettings["default"];
LoginPage.FormError = _LoginFormError["default"];
LoginPage.CardForgotPassword = _LoginCardForgotPassword["default"];
LoginPage.CardRememberMe = _LoginCardRememberMe["default"];
LoginPage.CardSocialSection = _LoginCardSocialSection["default"];
LoginPage.CardSocialLink = _LoginCardSocialLink["default"];
LoginPage.CardSocialColumns = _LoginCardSocialColumns["default"];
LoginPage.SocialLoginCard = _SocialLoginCard["default"];
LoginPage.BasicLoginCardLayout = _BasicLoginCardLayout["default"];
LoginPagePattern.propTypes = {
  container: _propTypes["default"].shape(_objectSpread({}, LoginPage.Container.propTypes)),
  header: _propTypes["default"].shape(_objectSpread({}, LoginPage.Header.propTypes)),
  card: _propTypes["default"].shape(_objectSpread({}, _LoginCard["default"].LanguagePicker.propTypes, {}, _LoginCard["default"].Form.propTypes, {}, _LoginCard["default"].SignUp.propTypes, {}, _LoginCard["default"].RememberMe.propTypes, {}, _LoginCard["default"].ForgotPassword.propTypes)),
  footerLinks: _propTypes["default"].array
};
LoginPagePattern.defaultProps = {
  container: _objectSpread({}, LoginPage.Container.defaultProps),
  header: _objectSpread({}, LoginPage.Header.defaultProps),
  card: _objectSpread({}, _LoginCard["default"].LanguagePicker.defaultProps, {}, _LoginCard["default"].Form.defaultProps, {}, _LoginCard["default"].SignUp.defaultProps, {}, _LoginCard["default"].RememberMe.defaultProps, {}, _LoginCard["default"].ForgotPassword.defaultProps),
  footerLinks: _toConsumableArray(LoginPage.Footer.defaultProps.links)
};
LoginPage.propTypes = _objectSpread({}, LoginPagePattern.propTypes);
LoginPage.defaultProps = _objectSpread({}, LoginPagePattern.defaultProps);
var _default = LoginPage;
exports["default"] = _default;