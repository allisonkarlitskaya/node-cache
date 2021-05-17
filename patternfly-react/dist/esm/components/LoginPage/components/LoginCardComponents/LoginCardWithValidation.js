function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import LoginCardInput from './LoginCardInput';
import { KEY_CODES, KEYS } from '../../../../common/helpers';

class LoginCardWithValidation extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      usernameField: {
        value: '',
        errorType: null,
        isFocused: false,
        showError: false
      },
      passwordField: {
        value: '',
        errorType: null,
        warningType: null,
        isFocused: false,
        showError: false
      },
      isCapsLock: false,
      form: {
        showError: this.props.topErrorOnly ? true : this.props.showError,
        submitError: this.props.submitError,
        disableSubmit: true,
        isSubmitting: this.props.isSubmitting,
        topErrorOnly: this.props.topErrorOnly,
        errors: [this.props.submitError]
      }
    });

    _defineProperty(this, "shouldDisableSubmit", (inputType, updatedInputValue) => {
      if (updatedInputValue.length < 1) {
        return true;
      }

      const otherInputType = inputType === 'usernameField' ? 'passwordField' : 'usernameField';
      const otherInputValue = this.state[otherInputType].value;
      return otherInputValue.length < 1;
    });

    _defineProperty(this, "onInputChange", (e, inputType) => {
      const {
        target: {
          value
        }
      } = e;
      this.props[inputType].onChange && this.props[inputType].onChange(e);
      this.setState(({
        form
      }) => ({
        [inputType]: _objectSpread({}, this.state[inputType], {
          value,
          showError: false
        }),
        form: _objectSpread({}, form, {
          disableSubmit: this.shouldDisableSubmit(inputType, value)
        })
      }));
    });

    _defineProperty(this, "onInputFocus", (e, inputType) => {
      this.props[inputType].onFocus && this.props[inputType].onFocus(e);
      this.setState({
        [inputType]: _objectSpread({}, this.state[inputType], {
          isFocused: true,
          showError: false
        })
      });
    });

    _defineProperty(this, "onInputBlur", (e, inputType) => {
      this.props[inputType].onBlur && this.props[inputType].onBlur(e);
      this.setState({
        [inputType]: _objectSpread({}, this.state[inputType], {
          isFocused: false,
          showError: false
        }),
        isCapsLock: false
      });
    });

    _defineProperty(this, "onKeyPress", (e, inputType) => {
      this.props[inputType].onMouseEnter && this.props[inputType].onMouseEnter(e);
      this.handleCapsLock(e);
    });

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault();

      if (this.isFormValid()) {
        this.onSubmitStart();
        this.props.onSubmit(e, this.onSubmitError);
      } else {
        this.handleOnInputErrors();
      }
    });

    _defineProperty(this, "onSubmitStart", () => {
      this.setState(({
        form
      }) => ({
        form: _objectSpread({}, form, {
          disableSubmit: true,
          isSubmitting: true,
          errors: form.topErrorOnly ? [] : form.topErrorOnly,
          showError: false
        })
      }));
    });

    _defineProperty(this, "onSubmitError", submitError => {
      this.setState(({
        form
      }) => ({
        form: _objectSpread({}, form, {
          showError: true,
          submitError,
          errors: [submitError],
          disableSubmit: false,
          isSubmitting: false
        })
      }));
    });

    _defineProperty(this, "getFormError", () => {
      const {
        form: {
          topErrorOnly,
          submitError,
          errors
        }
      } = this.state;
      return topErrorOnly ? errors.map((error, index) => React.createElement("div", {
        className: "login-form-error",
        key: index
      }, error)) : submitError;
    });

    _defineProperty(this, "getModifiedProps", () => {
      const {
        usernameField,
        passwordField,
        isCapsLock,
        form
      } = this.state;
      const {
        passwordField: {
          warnings
        }
      } = this.props;
      const passwordFieldWarningType = this.state.isCapsLock ? 'capsLock' : this.state.passwordField.warningType;
      return {
        usernameField: _objectSpread({}, this.props.usernameField, {
          onChange: e => this.onInputChange(e, 'usernameField'),
          onFocus: e => this.onInputFocus(e, 'usernameField'),
          onBlur: e => this.onInputBlur(e, 'usernameField'),
          onKeyPress: e => this.onKeyPress(e, 'usernameField'),
          error: usernameField.error,
          showError: usernameField.showError
        }),
        passwordField: _objectSpread({}, this.props.passwordField, {
          onChange: e => this.onInputChange(e, 'passwordField'),
          onFocus: e => this.onInputFocus(e, 'passwordField'),
          onBlur: e => this.onInputBlur(e, 'passwordField'),
          onKeyPress: e => this.onKeyPress(e, 'passwordField'),
          warning: warnings && warnings[passwordFieldWarningType],
          showWarning: passwordField.isFocused && isCapsLock,
          error: passwordField.error,
          showError: passwordField.showError
        }),
        onSubmit: e => this.onSubmit(e),
        showError: form.showError,
        disableSubmit: form.disableSubmit,
        isSubmitting: form.isSubmitting,
        submitError: this.getFormError()
      };
    });

    _defineProperty(this, "handleOnInputErrors", () => {
      const {
        usernameField,
        passwordField
      } = this.state;
      const {
        topErrorOnly
      } = this.props;
      topErrorOnly && this.clearFormErrors();

      if (usernameField.value) {
        !this.isUserNameValid() && this.handleOnInvalidUsername();
      } else {
        this.handleOnEmptyInput('usernameField');
      }

      if (passwordField.value) {
        this.isPasswordShort() && this.handleOnPasswordTooShort();
      } else {
        this.handleOnEmptyInput('passwordField');
      }

      !topErrorOnly && this.hideSubmitError();
    });

    _defineProperty(this, "isFormValid", () => !!this.state.usernameField.value && !!this.state.passwordField.value && !this.isPasswordShort() && this.isUserNameValid());

    _defineProperty(this, "isPasswordShort", () => {
      const {
        passwordField: {
          minLength: passwordMinLength
        }
      } = this.props;
      const {
        passwordField: {
          value: {
            length: currentPasswordLength
          }
        }
      } = this.state;
      return passwordMinLength > 0 && currentPasswordLength < passwordMinLength;
    });

    _defineProperty(this, "hideSubmitError", () => {
      this.setState({
        form: _objectSpread({}, this.state.form, {
          showError: false
        })
      });
    });

    _defineProperty(this, "clearFormErrors", () => {
      this.setState(({
        form
      }) => ({
        form: _objectSpread({}, form, {
          errors: []
        })
      }));
    });

    _defineProperty(this, "handleOnPasswordTooShort", () => {
      const {
        passwordField: {
          errors: {
            short: error
          }
        }
      } = this.props;
      this.setState(({
        form,
        passwordField
      }) => form.topErrorOnly ? {
        form: _objectSpread({}, form, {
          errors: [...form.errors, error],
          showError: true
        })
      } : {
        passwordField: _objectSpread({}, passwordField, {
          error,
          showError: true
        })
      });
    });

    _defineProperty(this, "handleOnInvalidUsername", () => {
      const {
        usernameField: {
          errors: {
            invalid: error
          }
        }
      } = this.props;
      this.setState(({
        form,
        usernameField
      }) => form.topErrorOnly ? {
        form: _objectSpread({}, form, {
          errors: [...form.errors, error],
          showError: true
        })
      } : {
        usernameField: _objectSpread({}, usernameField, {
          error,
          showError: true
        })
      });
    });

    _defineProperty(this, "handleOnEmptyInput", inputType => {
      const {
        [inputType]: {
          errors: {
            empty: error
          }
        }
      } = this.props;
      this.setState(({
        form
      }) => form.topErrorOnly ? {
        form: _objectSpread({}, form, {
          errors: [...form.errors, error],
          showError: true
        })
      } : {
        [inputType]: _objectSpread({}, this.state[inputType], {
          error,
          showError: true
        })
      });
    });

    _defineProperty(this, "toggleCapsLock", e => {
      if (!this.state.passwordField.value) {
        return;
      }

      e.key === KEYS.CAPSLOCK && this.setState({
        isCapsLock: !this.state.isCapsLock
      });
    });

    _defineProperty(this, "handleCapsLock", e => {
      const keyCode = e.keyCode ? e.keyCode : e.which;
      const shiftKey = e.shiftKey ? e.shiftKey : keyCode === KEY_CODES.SHIFT;
      const isCapsLock = keyCode >= KEY_CODES.A && keyCode <= KEY_CODES.Z && !shiftKey || keyCode >= KEY_CODES.NUMPAD['0'] && keyCode <= KEY_CODES.F11 && shiftKey;
      this.setState({
        isCapsLock
      });
    });

    _defineProperty(this, "isUserNameValid", () => {
      const {
        usernameField: {
          type: userType
        }
      } = this.props;

      if (userType === 'email') {
        const mailAddress = this.state.usernameField.value;
        const atPos = mailAddress.indexOf('@');
        const dotPos = mailAddress.lastIndexOf('.');
        return atPos > 1 && dotPos - atPos > 2 && atPos < dotPos;
      }

      return true;
    });
  }

  componentDidMount() {
    window.addEventListener('keyup', this.toggleCapsLock);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.toggleCapsLock);
  } // eslint-disable-next-line class-methods-use-this


  static getDerivedStateFromProps(props, state) {
    // disableSubmit prop will only be used in a not validated login card
    const {
      validate,
      disableSubmit
    } = props;

    if (validate) {
      return null;
    }

    if (disableSubmit !== state.form.disableSubmit) {
      return {
        form: {
          disableSubmit
        }
      };
    }

    return null;
  }

  render() {
    const {
      validate,
      children
    } = this.props;
    return validate ? React.cloneElement(children, _objectSpread({}, this.props, {}, this.getModifiedProps())) : React.cloneElement(children, _objectSpread({}, this.props));
  }

}

LoginCardWithValidation.propTypes = {
  validate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  usernameField: PropTypes.shape(_objectSpread({}, LoginCardInput.propTypes, {
    errors: PropTypes.object
  })),
  passwordField: PropTypes.shape(_objectSpread({}, LoginCardInput.propTypes, {
    errors: PropTypes.object,
    warnings: PropTypes.object,
    minLength: PropTypes.number
  })),
  onSubmit: PropTypes.func,
  submitError: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // eslint-disable-next-line react/no-unused-prop-types
  disableSubmit: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  showError: PropTypes.bool,
  topErrorOnly: PropTypes.bool
};
LoginCardWithValidation.defaultProps = {
  validate: true,
  usernameField: _objectSpread({}, LoginCardInput.defaultProps.usernameField),
  passwordField: _objectSpread({}, LoginCardInput.defaultProps.passwordField),
  onSubmit: e => e.target.submit(),
  submitError: null,
  disableSubmit: false,
  isSubmitting: false,
  showError: false,
  topErrorOnly: false
};
export default LoginCardWithValidation;