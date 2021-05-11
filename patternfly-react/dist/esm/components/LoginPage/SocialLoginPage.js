function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import LoginCard from './components/LoginCardComponents/LoginCard';
import LoginPage from './LoginPage';

const SocialLoginPagePattern = ({
  container,
  header,
  footerLinks,
  card
}) => React.createElement(LoginPage.SocialContainer, container, React.createElement(LoginPage.Alerts, {
  alert: container.alert
}), React.createElement(LoginPage.Header, header), React.createElement(LoginCard.Social, null, React.createElement(LoginCard.Header, null, React.createElement(LoginCard.LanguagePicker, {
  selectedLanguage: card.selectedLanguage,
  availableLanguages: card.availableLanguages,
  onLanguageChange: card.onLanguageChange
}), React.createElement("h1", null, card.title)), React.createElement(LoginCard.SocialSection, null, React.createElement(LoginCard.WithValidation, card.form, React.createElement(LoginCard.Form, null))), React.createElement(LoginCard.SocialSection, null, React.createElement(LoginCard.SocialColumns, card.social)), React.createElement(LoginCard.SignUp, card.signUp)), React.createElement(LoginPage.Footer, {
  links: footerLinks
}));

const SocialLoginPage = props => React.createElement(LoginPage.WithTranslation, props, React.createElement(SocialLoginPagePattern, null));

const getLoginPage = props => LoginPage(props);

SocialLoginPage.Pattern = SocialLoginPagePattern;
SocialLoginPagePattern.propTypes = _objectSpread({}, getLoginPage.propTypes);
SocialLoginPagePattern.defaultProps = _objectSpread({}, getLoginPage.defaultProps);
export default SocialLoginPage;