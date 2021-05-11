function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import LoginCard from '../LoginCardComponents/LoginCard';
import LoginCardHeader from '../LoginCardComponents/LoginCardHeader';
import LoginPageContainer from './LoginPageContainer';

class LoginPageWithTranslation extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onLanguageChange", e => {
      const newLanguage = e.target.attributes.value.value;

      if (!newLanguage || this.state.language === newLanguage) {
        return;
      }

      this.switchToLanguage(newLanguage);
    });

    _defineProperty(this, "onPasswordChange", e => {
      const {
        card
      } = this.props;
      card.form.passwordField.onChange && card.form.passwordField.onChange(e);
      this.setState({
        passwordValue: e.target.value
      });
    });

    _defineProperty(this, "onUsernameChange", e => {
      const {
        card
      } = this.props;
      card.form.usernameField.onChange && card.form.usernameField.onChange(e);
      this.setState({
        usernameValue: e.target.value
      });
    });

    _defineProperty(this, "getDefaultPropsToPass", () => {
      const {
        card
      } = this.props;
      return {
        card: _objectSpread({}, card, {
          onLanguageChange: e => this.onLanguageChange(e),
          form: _objectSpread({}, card.form, {
            usernameField: _objectSpread({}, card.form.usernameField, {
              value: this.state.usernameValue,
              onChange: e => this.onUsernameChange(e)
            }),
            passwordField: _objectSpread({}, card.form.passwordField, {
              value: this.state.passwordValue,
              onChange: e => this.onPasswordChange(e)
            })
          })
        })
      };
    });

    _defineProperty(this, "switchToLanguage", language => {
      const {
        container,
        card,
        header
      } = this.props;
      const languageFile = container.translations[language];

      const translatedProps = _objectSpread({}, this.props, {
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
          onLanguageChange: e => this.onLanguageChange(e),
          signUp: {
            label: languageFile.card.signUp.label,
            link: _objectSpread({}, card.signUp.link, {
              children: languageFile.card.signUp.link.label
            })
          },
          form: _objectSpread({}, card.form, {
            submitError: languageFile.card.form.error,
            usernameField: _objectSpread({}, card.form.usernameField, {
              onChange: e => this.onUsernameChange(e),
              value: this.state.usernameValue,
              placeholder: languageFile.card.usernameField.placeholder,
              errors: languageFile.card.usernameField.errors
            }),
            passwordField: _objectSpread({}, card.form.passwordField, {
              onChange: e => this.onPasswordChange(e),
              value: this.state.passwordValue,
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

      this.setState({
        translatedProps,
        language
      });
    });

    const {
      selectedLanguage,
      availableLanguages
    } = props.card;
    this.state = {
      language: selectedLanguage && selectedLanguage.value || availableLanguages && availableLanguages[0] && availableLanguages[0].value,
      passwordValue: '',
      usernameValue: '',
      translatedProps: {}
    };
  }

  render() {
    const newProps = _objectSpread({}, this.props, {}, this.getDefaultPropsToPass(), {}, this.state.translatedProps);

    return React.cloneElement(this.props.children, newProps);
  }

}

LoginPageWithTranslation.propTypes = {
  card: PropTypes.shape(_objectSpread({}, LoginCard.LanguagePicker.propTypes, {}, LoginCard.Form.propTypes, {}, LoginCard.SignUp.propTypes, {}, LoginCard.RememberMe.propTypes, {}, LoginCard.ForgotPassword.propTypes)),
  header: PropTypes.shape(_objectSpread({}, LoginCardHeader.propTypes)),
  container: PropTypes.shape(_objectSpread({}, LoginPageContainer.propTypes)),
  children: PropTypes.node.isRequired
};
LoginPageWithTranslation.defaultProps = {
  card: _objectSpread({}, LoginCard.LanguagePicker.defaultProps, {}, LoginCard.Form.defaultProps, {}, LoginCard.SignUp.defaultProps, {}, LoginCard.RememberMe.defaultProps, {}, LoginCard.ForgotPassword.defaultProps),
  header: _objectSpread({}, LoginCardHeader.defaultProps),
  container: _objectSpread({}, LoginPageContainer.defaultProps)
};
export default LoginPageWithTranslation;