"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("../../../Cards/Card"));

var _LoginCardHeader = _interopRequireDefault(require("./LoginCardHeader"));

var _LoginLanguagePicker = _interopRequireDefault(require("./LoginLanguagePicker"));

var _LoginCardWithValidation = _interopRequireDefault(require("./LoginCardWithValidation"));

var _LoginCardForm = _interopRequireDefault(require("./LoginCardForm"));

var _LoginCardSignUp = _interopRequireDefault(require("./LoginCardSignUp"));

var _LoginCardInput = _interopRequireDefault(require("./LoginCardInput"));

var _LoginCardSettings = _interopRequireDefault(require("./LoginCardSettings"));

var _LoginFormError = _interopRequireDefault(require("./LoginFormError"));

var _LoginCardForgotPassword = _interopRequireDefault(require("./LoginCardForgotPassword"));

var _LoginCardRememberMe = _interopRequireDefault(require("./LoginCardRememberMe"));

var _LoginCardSocialLink = _interopRequireDefault(require("./LoginCardSocialLink"));

var _LoginCardSocialSection = _interopRequireDefault(require("./LoginCardSocialSection"));

var _LoginCardSocialColumns = _interopRequireDefault(require("./LoginCardSocialColumns"));

var _SocialLoginCard = _interopRequireDefault(require("./SocialLoginCard"));

var _BasicLoginCardLayout = _interopRequireDefault(require("./BasicLoginCardLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LoginCard = function LoginCard(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react["default"].createElement(_Card["default"], props, children);
};

LoginCard.propTypes = {
  /** Children nodes. */
  children: _propTypes["default"].node
};
LoginCard.defaultProps = {
  children: null
};
LoginCard.Header = _LoginCardHeader["default"];
LoginCard.LanguagePicker = _LoginLanguagePicker["default"];
LoginCard.WithValidation = _LoginCardWithValidation["default"];
LoginCard.Form = _LoginCardForm["default"];
LoginCard.SignUp = _LoginCardSignUp["default"];
LoginCard.Input = _LoginCardInput["default"];
LoginCard.Settings = _LoginCardSettings["default"];
LoginCard.FormError = _LoginFormError["default"];
LoginCard.ForgotPassword = _LoginCardForgotPassword["default"];
LoginCard.RememberMe = _LoginCardRememberMe["default"];
LoginCard.Social = _SocialLoginCard["default"];
LoginCard.SocialLink = _LoginCardSocialLink["default"];
LoginCard.SocialSection = _LoginCardSocialSection["default"];
LoginCard.SocialColumns = _LoginCardSocialColumns["default"];
LoginCard.BasicLayout = _BasicLoginCardLayout["default"];
var _default = LoginCard;
exports["default"] = _default;