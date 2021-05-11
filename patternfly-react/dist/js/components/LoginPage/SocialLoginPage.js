"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LoginCard = _interopRequireDefault(require("./components/LoginCardComponents/LoginCard"));

var _LoginPage = _interopRequireDefault(require("./LoginPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SocialLoginPagePattern = function SocialLoginPagePattern(_ref) {
  var container = _ref.container,
      header = _ref.header,
      footerLinks = _ref.footerLinks,
      card = _ref.card;
  return _react["default"].createElement(_LoginPage["default"].SocialContainer, container, _react["default"].createElement(_LoginPage["default"].Alerts, {
    alert: container.alert
  }), _react["default"].createElement(_LoginPage["default"].Header, header), _react["default"].createElement(_LoginCard["default"].Social, null, _react["default"].createElement(_LoginCard["default"].Header, null, _react["default"].createElement(_LoginCard["default"].LanguagePicker, {
    selectedLanguage: card.selectedLanguage,
    availableLanguages: card.availableLanguages,
    onLanguageChange: card.onLanguageChange
  }), _react["default"].createElement("h1", null, card.title)), _react["default"].createElement(_LoginCard["default"].SocialSection, null, _react["default"].createElement(_LoginCard["default"].WithValidation, card.form, _react["default"].createElement(_LoginCard["default"].Form, null))), _react["default"].createElement(_LoginCard["default"].SocialSection, null, _react["default"].createElement(_LoginCard["default"].SocialColumns, card.social)), _react["default"].createElement(_LoginCard["default"].SignUp, card.signUp)), _react["default"].createElement(_LoginPage["default"].Footer, {
    links: footerLinks
  }));
};

var SocialLoginPage = function SocialLoginPage(props) {
  return _react["default"].createElement(_LoginPage["default"].WithTranslation, props, _react["default"].createElement(SocialLoginPagePattern, null));
};

var getLoginPage = function getLoginPage(props) {
  return (0, _LoginPage["default"])(props);
};

SocialLoginPage.Pattern = SocialLoginPagePattern;
SocialLoginPagePattern.propTypes = _objectSpread({}, getLoginPage.propTypes);
SocialLoginPagePattern.defaultProps = _objectSpread({}, getLoginPage.defaultProps);
var _default = SocialLoginPage;
exports["default"] = _default;