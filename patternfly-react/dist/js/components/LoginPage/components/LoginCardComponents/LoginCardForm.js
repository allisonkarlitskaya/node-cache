"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoginCardInput = _interopRequireDefault(require("./LoginCardInput"));

var _LoginCardSettings = _interopRequireDefault(require("./LoginCardSettings"));

var _LoginCardSubmitButton = _interopRequireDefault(require("./LoginCardSubmitButton"));

var _LoginFormError = _interopRequireDefault(require("./LoginFormError"));

var _index = require("../../../../index");

var _helpers = require("../../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoginCardForm = function LoginCardForm(_ref) {
  var usernameField = _ref.usernameField,
      passwordField = _ref.passwordField,
      additionalFields = _ref.additionalFields,
      submitText = _ref.submitText,
      disableSubmit = _ref.disableSubmit,
      onSubmit = _ref.onSubmit,
      forgotPassword = _ref.forgotPassword,
      rememberMe = _ref.rememberMe,
      submitError = _ref.submitError,
      showError = _ref.showError,
      attributes = _ref.attributes,
      isSubmitting = _ref.isSubmitting,
      topErrorOnly = _ref.topErrorOnly,
      submitButtonAttributes = _ref.submitButtonAttributes;
  return _react["default"].createElement(_index.Form, _extends({
    onSubmit: onSubmit,
    noValidate: true
  }, attributes), _react["default"].createElement(_LoginFormError["default"], {
    show: showError,
    topErrorOnly: topErrorOnly
  }, submitError), _react["default"].createElement(_LoginCardInput["default"], _objectSpread({}, usernameField, {
    topErrorOnly: topErrorOnly
  })), _react["default"].createElement(_LoginCardInput["default"], _objectSpread({}, passwordField, {
    topErrorOnly: topErrorOnly
  })), additionalFields, _react["default"].createElement(_LoginCardSettings["default"], {
    rememberMe: rememberMe,
    forgotPassword: forgotPassword
  }), _react["default"].createElement(_LoginCardSubmitButton["default"], {
    isDisabled: disableSubmit,
    isLoading: isSubmitting,
    attributes: submitButtonAttributes
  }, submitText));
};

LoginCardForm.propTypes = {
  /** login username input's props */
  usernameField: _propTypes["default"].shape(_objectSpread({}, _LoginCardInput["default"].propTypes)),

  /** login password input's props */
  passwordField: _propTypes["default"].shape(_objectSpread({}, _LoginCardInput["default"].propTypes)),

  /** Add additional fields under the inputs  */
  additionalFields: _propTypes["default"].node,

  /** The submit button text */
  submitText: _propTypes["default"].string,

  /** Sets the submit button disability */
  disableSubmit: _propTypes["default"].bool,

  /** A callback that will be triggered when the form is submitted */
  onSubmit: _propTypes["default"].func,

  /** The forgotPassowrd section props */
  forgotPassword: _LoginCardSettings["default"].propTypes.forgotPassword,

  /** The rememberMe section props */
  rememberMe: _LoginCardSettings["default"].propTypes.rememberMe,

  /** The login form error which is usually shown after the submit - a server error. */
  submitError: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** Controlls the form error visibility */
  showError: _propTypes["default"].bool,

  /** Additional HTML attributes to pass to the form */
  attributes: _propTypes["default"].object,

  /** Indicates the state of the form submit and whether to show a spinner or not */
  isSubmitting: _propTypes["default"].bool,

  /** when topErrorOnly is set to true,
   * the helpblock errors/warnings under each input won't appear,
   * instead we will have only the form error above.
   */
  topErrorOnly: _propTypes["default"].bool,

  /** Override the button attributes */
  submitButtonAttributes: _propTypes["default"].object
};
LoginCardForm.defaultProps = {
  usernameField: _objectSpread({}, _LoginCardInput["default"].defaultProps, {
    id: 'card_email',
    type: 'email',
    placeholder: 'Email Address'
  }),
  passwordField: _objectSpread({}, _LoginCardInput["default"].defaultProps, {
    id: 'card_password',
    type: 'password',
    placeholder: 'Password',
    minLength: 8
  }),
  additionalFields: null,
  submitText: null,
  disableSubmit: false,
  onSubmit: _helpers.noop,
  forgotPassword: {
    label: null,
    href: '#',
    onClick: _helpers.noop
  },
  rememberMe: {
    label: null
  },
  submitError: null,
  showError: false,
  attributes: null,
  isSubmitting: false,
  topErrorOnly: false,
  submitButtonAttributes: {}
};
var _default = LoginCardForm;
exports["default"] = _default;