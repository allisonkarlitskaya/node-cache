function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../Cards/Card';
import Header from './LoginCardHeader';
import LanguagePicker from './LoginLanguagePicker';
import WithValidation from './LoginCardWithValidation';
import Form from './LoginCardForm';
import SignUp from './LoginCardSignUp';
import Input from './LoginCardInput';
import Settings from './LoginCardSettings';
import FormError from './LoginFormError';
import LoginCardForgotPassword from './LoginCardForgotPassword';
import LoginCardRememberMe from './LoginCardRememberMe';
import LoginCardSocialLink from './LoginCardSocialLink';
import LoginCardSocialSection from './LoginCardSocialSection';
import LoginCardSocialColumns from './LoginCardSocialColumns';
import SocialLoginCard from './SocialLoginCard';
import BasicLoginCardLayout from './BasicLoginCardLayout';

const LoginCard = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Card, props, children);
};

LoginCard.propTypes = {
  /** Children nodes. */
  children: PropTypes.node
};
LoginCard.defaultProps = {
  children: null
};
LoginCard.Header = Header;
LoginCard.LanguagePicker = LanguagePicker;
LoginCard.WithValidation = WithValidation;
LoginCard.Form = Form;
LoginCard.SignUp = SignUp;
LoginCard.Input = Input;
LoginCard.Settings = Settings;
LoginCard.FormError = FormError;
LoginCard.ForgotPassword = LoginCardForgotPassword;
LoginCard.RememberMe = LoginCardRememberMe;
LoginCard.Social = SocialLoginCard;
LoginCard.SocialLink = LoginCardSocialLink;
LoginCard.SocialSection = LoginCardSocialSection;
LoginCard.SocialColumns = LoginCardSocialColumns;
LoginCard.BasicLayout = BasicLoginCardLayout;
export default LoginCard;