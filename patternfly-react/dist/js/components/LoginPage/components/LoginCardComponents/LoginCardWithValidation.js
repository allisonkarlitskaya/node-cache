"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoginCardInput = _interopRequireDefault(require("./LoginCardInput"));

var _helpers = require("../../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var LoginCardWithValidation = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginCardWithValidation, _React$Component);

  function LoginCardWithValidation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoginCardWithValidation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginCardWithValidation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
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
        showError: _this.props.topErrorOnly ? true : _this.props.showError,
        submitError: _this.props.submitError,
        disableSubmit: true,
        isSubmitting: _this.props.isSubmitting,
        topErrorOnly: _this.props.topErrorOnly,
        errors: [_this.props.submitError]
      }
    });

    _defineProperty(_assertThisInitialized(_this), "shouldDisableSubmit", function (inputType, updatedInputValue) {
      if (updatedInputValue.length < 1) {
        return true;
      }

      var otherInputType = inputType === 'usernameField' ? 'passwordField' : 'usernameField';
      var otherInputValue = _this.state[otherInputType].value;
      return otherInputValue.length < 1;
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (e, inputType) {
      var value = e.target.value;
      _this.props[inputType].onChange && _this.props[inputType].onChange(e);

      _this.setState(function (_ref) {
        var _ref2;

        var form = _ref.form;
        return _ref2 = {}, _defineProperty(_ref2, inputType, _objectSpread({}, _this.state[inputType], {
          value: value,
          showError: false
        })), _defineProperty(_ref2, "form", _objectSpread({}, form, {
          disableSubmit: _this.shouldDisableSubmit(inputType, value)
        })), _ref2;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputFocus", function (e, inputType) {
      _this.props[inputType].onFocus && _this.props[inputType].onFocus(e);

      _this.setState(_defineProperty({}, inputType, _objectSpread({}, _this.state[inputType], {
        isFocused: true,
        showError: false
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "onInputBlur", function (e, inputType) {
      var _this$setState2;

      _this.props[inputType].onBlur && _this.props[inputType].onBlur(e);

      _this.setState((_this$setState2 = {}, _defineProperty(_this$setState2, inputType, _objectSpread({}, _this.state[inputType], {
        isFocused: false,
        showError: false
      })), _defineProperty(_this$setState2, "isCapsLock", false), _this$setState2));
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyPress", function (e, inputType) {
      _this.props[inputType].onMouseEnter && _this.props[inputType].onMouseEnter(e);

      _this.handleCapsLock(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();

      if (_this.isFormValid()) {
        _this.onSubmitStart();

        _this.props.onSubmit(e, _this.onSubmitError);
      } else {
        _this.handleOnInputErrors();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmitStart", function () {
      _this.setState(function (_ref3) {
        var form = _ref3.form;
        return {
          form: _objectSpread({}, form, {
            disableSubmit: true,
            isSubmitting: true,
            errors: form.topErrorOnly ? [] : form.topErrorOnly,
            showError: false
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmitError", function (submitError) {
      _this.setState(function (_ref4) {
        var form = _ref4.form;
        return {
          form: _objectSpread({}, form, {
            showError: true,
            submitError: submitError,
            errors: [submitError],
            disableSubmit: false,
            isSubmitting: false
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFormError", function () {
      var _this$state$form = _this.state.form,
          topErrorOnly = _this$state$form.topErrorOnly,
          submitError = _this$state$form.submitError,
          errors = _this$state$form.errors;
      return topErrorOnly ? errors.map(function (error, index) {
        return _react["default"].createElement("div", {
          className: "login-form-error",
          key: index
        }, error);
      }) : submitError;
    });

    _defineProperty(_assertThisInitialized(_this), "getModifiedProps", function () {
      var _this$state = _this.state,
          usernameField = _this$state.usernameField,
          passwordField = _this$state.passwordField,
          isCapsLock = _this$state.isCapsLock,
          form = _this$state.form;
      var warnings = _this.props.passwordField.warnings;
      var passwordFieldWarningType = _this.state.isCapsLock ? 'capsLock' : _this.state.passwordField.warningType;
      return {
        usernameField: _objectSpread({}, _this.props.usernameField, {
          onChange: function onChange(e) {
            return _this.onInputChange(e, 'usernameField');
          },
          onFocus: function onFocus(e) {
            return _this.onInputFocus(e, 'usernameField');
          },
          onBlur: function onBlur(e) {
            return _this.onInputBlur(e, 'usernameField');
          },
          onKeyPress: function onKeyPress(e) {
            return _this.onKeyPress(e, 'usernameField');
          },
          error: usernameField.error,
          showError: usernameField.showError
        }),
        passwordField: _objectSpread({}, _this.props.passwordField, {
          onChange: function onChange(e) {
            return _this.onInputChange(e, 'passwordField');
          },
          onFocus: function onFocus(e) {
            return _this.onInputFocus(e, 'passwordField');
          },
          onBlur: function onBlur(e) {
            return _this.onInputBlur(e, 'passwordField');
          },
          onKeyPress: function onKeyPress(e) {
            return _this.onKeyPress(e, 'passwordField');
          },
          warning: warnings && warnings[passwordFieldWarningType],
          showWarning: passwordField.isFocused && isCapsLock,
          error: passwordField.error,
          showError: passwordField.showError
        }),
        onSubmit: function onSubmit(e) {
          return _this.onSubmit(e);
        },
        showError: form.showError,
        disableSubmit: form.disableSubmit,
        isSubmitting: form.isSubmitting,
        submitError: _this.getFormError()
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnInputErrors", function () {
      var _this$state2 = _this.state,
          usernameField = _this$state2.usernameField,
          passwordField = _this$state2.passwordField;
      var topErrorOnly = _this.props.topErrorOnly;
      topErrorOnly && _this.clearFormErrors();

      if (usernameField.value) {
        !_this.isUserNameValid() && _this.handleOnInvalidUsername();
      } else {
        _this.handleOnEmptyInput('usernameField');
      }

      if (passwordField.value) {
        _this.isPasswordShort() && _this.handleOnPasswordTooShort();
      } else {
        _this.handleOnEmptyInput('passwordField');
      }

      !topErrorOnly && _this.hideSubmitError();
    });

    _defineProperty(_assertThisInitialized(_this), "isFormValid", function () {
      return !!_this.state.usernameField.value && !!_this.state.passwordField.value && !_this.isPasswordShort() && _this.isUserNameValid();
    });

    _defineProperty(_assertThisInitialized(_this), "isPasswordShort", function () {
      var passwordMinLength = _this.props.passwordField.minLength;
      var currentPasswordLength = _this.state.passwordField.value.length;
      return passwordMinLength > 0 && currentPasswordLength < passwordMinLength;
    });

    _defineProperty(_assertThisInitialized(_this), "hideSubmitError", function () {
      _this.setState({
        form: _objectSpread({}, _this.state.form, {
          showError: false
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearFormErrors", function () {
      _this.setState(function (_ref5) {
        var form = _ref5.form;
        return {
          form: _objectSpread({}, form, {
            errors: []
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnPasswordTooShort", function () {
      var error = _this.props.passwordField.errors["short"];

      _this.setState(function (_ref6) {
        var form = _ref6.form,
            passwordField = _ref6.passwordField;
        return form.topErrorOnly ? {
          form: _objectSpread({}, form, {
            errors: [].concat(_toConsumableArray(form.errors), [error]),
            showError: true
          })
        } : {
          passwordField: _objectSpread({}, passwordField, {
            error: error,
            showError: true
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnInvalidUsername", function () {
      var error = _this.props.usernameField.errors.invalid;

      _this.setState(function (_ref7) {
        var form = _ref7.form,
            usernameField = _ref7.usernameField;
        return form.topErrorOnly ? {
          form: _objectSpread({}, form, {
            errors: [].concat(_toConsumableArray(form.errors), [error]),
            showError: true
          })
        } : {
          usernameField: _objectSpread({}, usernameField, {
            error: error,
            showError: true
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnEmptyInput", function (inputType) {
      var error = _this.props[inputType].errors.empty;

      _this.setState(function (_ref8) {
        var form = _ref8.form;
        return form.topErrorOnly ? {
          form: _objectSpread({}, form, {
            errors: [].concat(_toConsumableArray(form.errors), [error]),
            showError: true
          })
        } : _defineProperty({}, inputType, _objectSpread({}, _this.state[inputType], {
          error: error,
          showError: true
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleCapsLock", function (e) {
      if (!_this.state.passwordField.value) {
        return;
      }

      e.key === _helpers.KEYS.CAPSLOCK && _this.setState({
        isCapsLock: !_this.state.isCapsLock
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCapsLock", function (e) {
      var keyCode = e.keyCode ? e.keyCode : e.which;
      var shiftKey = e.shiftKey ? e.shiftKey : keyCode === _helpers.KEY_CODES.SHIFT;
      var isCapsLock = keyCode >= _helpers.KEY_CODES.A && keyCode <= _helpers.KEY_CODES.Z && !shiftKey || keyCode >= _helpers.KEY_CODES.NUMPAD['0'] && keyCode <= _helpers.KEY_CODES.F11 && shiftKey;

      _this.setState({
        isCapsLock: isCapsLock
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isUserNameValid", function () {
      var userType = _this.props.usernameField.type;

      if (userType === 'email') {
        var mailAddress = _this.state.usernameField.value;
        var atPos = mailAddress.indexOf('@');
        var dotPos = mailAddress.lastIndexOf('.');
        return atPos > 1 && dotPos - atPos > 2 && atPos < dotPos;
      }

      return true;
    });

    return _this;
  }

  _createClass(LoginCardWithValidation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('keyup', this.toggleCapsLock);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('keyup', this.toggleCapsLock);
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          validate = _this$props.validate,
          children = _this$props.children;
      return validate ? _react["default"].cloneElement(children, _objectSpread({}, this.props, {}, this.getModifiedProps())) : _react["default"].cloneElement(children, _objectSpread({}, this.props));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // disableSubmit prop will only be used in a not validated login card
      var validate = props.validate,
          disableSubmit = props.disableSubmit;

      if (validate) {
        return null;
      }

      if (disableSubmit !== state.form.disableSubmit) {
        return {
          form: {
            disableSubmit: disableSubmit
          }
        };
      }

      return null;
    }
  }]);

  return LoginCardWithValidation;
}(_react["default"].Component);

LoginCardWithValidation.propTypes = {
  validate: _propTypes["default"].bool,
  children: _propTypes["default"].node.isRequired,
  usernameField: _propTypes["default"].shape(_objectSpread({}, _LoginCardInput["default"].propTypes, {
    errors: _propTypes["default"].object
  })),
  passwordField: _propTypes["default"].shape(_objectSpread({}, _LoginCardInput["default"].propTypes, {
    errors: _propTypes["default"].object,
    warnings: _propTypes["default"].object,
    minLength: _propTypes["default"].number
  })),
  onSubmit: _propTypes["default"].func,
  submitError: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  // eslint-disable-next-line react/no-unused-prop-types
  disableSubmit: _propTypes["default"].bool,
  isSubmitting: _propTypes["default"].bool,
  showError: _propTypes["default"].bool,
  topErrorOnly: _propTypes["default"].bool
};
LoginCardWithValidation.defaultProps = {
  validate: true,
  usernameField: _objectSpread({}, _LoginCardInput["default"].defaultProps.usernameField),
  passwordField: _objectSpread({}, _LoginCardInput["default"].defaultProps.passwordField),
  onSubmit: function onSubmit(e) {
    return e.target.submit();
  },
  submitError: null,
  disableSubmit: false,
  isSubmitting: false,
  showError: false,
  topErrorOnly: false
};
var _default = LoginCardWithValidation;
exports["default"] = _default;