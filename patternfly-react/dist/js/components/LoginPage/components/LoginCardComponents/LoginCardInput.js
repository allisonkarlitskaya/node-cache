"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Fade = _interopRequireDefault(require("react-bootstrap/lib/Fade"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LoginCardInputWarning = _interopRequireDefault(require("./LoginCardInputWarning"));

var _index = require("../../../../index");

var _helpers = require("../../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var LoginCardInput = function LoginCardInput(_ref) {
  var id = _ref.id,
      type = _ref.type,
      placeholder = _ref.placeholder,
      size = _ref.size,
      error = _ref.error,
      warning = _ref.warning,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onKeyPress = _ref.onKeyPress,
      showError = _ref.showError,
      showWarning = _ref.showWarning,
      className = _ref.className,
      autoComplete = _ref.autoComplete,
      attributes = _ref.attributes,
      topErrorOnly = _ref.topErrorOnly;
  var helpBlock = !topErrorOnly ? showError && _react["default"].createElement(_index.HelpBlock, null, error) || showWarning && _react["default"].createElement(_LoginCardInputWarning["default"], null, warning) : null;
  var validationState = null;

  if (topErrorOnly) {
    if (showWarning) {
      validationState = 'warning';
    }
  } else if (showError) {
    validationState = 'error';
  }

  return _react["default"].createElement(_index.FormGroup, {
    className: (0, _classnames["default"])('login_card_input', className),
    controlId: id,
    validationState: validationState
  }, _react["default"].createElement(_index.FormControl, _extends({}, attributes, {
    type: type,
    placeholder: placeholder,
    bsSize: size,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyPress: onKeyPress,
    autoComplete: autoComplete
  })), topErrorOnly && _react["default"].createElement(_index.FormControl.Feedback, null), _react["default"].createElement(_Fade["default"], {
    "in": showError || showWarning
  }, _react["default"].createElement("div", null, helpBlock)));
};

LoginCardInput.propTypes = {
  /** The input's id */
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** The input's HTML type */
  type: _propTypes["default"].string,

  /** The input's placeholder */
  placeholder: _propTypes["default"].string,

  /** The bsSize of the input */
  size: _propTypes["default"].string,

  /** The error which is presented under the input */
  error: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** The warning which is presented under the input */
  warning: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** A callback which is fired when the input changes. */
  onChange: _propTypes["default"].func,

  /** Controlls the warning visibility */
  showWarning: _propTypes["default"].bool,

  /** A callback which is fired when the input blurs. */
  onBlur: _propTypes["default"].func,

  /** A callback which is fired when the input is focused. */
  onFocus: _propTypes["default"].func,

  /** A callback which is fired on a key press. */
  onKeyPress: _propTypes["default"].func,

  /** A callback which is fired when the input blurs. */
  showError: _propTypes["default"].bool,

  /** An additional css classes */
  className: _propTypes["default"].string,

  /** Sets the HTML autocomplete */
  autoComplete: _propTypes["default"].string,

  /** Additional HTML input's attributes. */
  attributes: _propTypes["default"].object,

  /** when topErrorOnly is set to true,
   * the helpblock errors/warnings under each input won't appear,
   * instead we will have only the form error above.
   */
  topErrorOnly: _propTypes["default"].bool
};
LoginCardInput.defaultProps = {
  id: Math.random().toString(),
  type: 'text',
  placeholder: 'Enter Text',
  size: 'lg',
  error: null,
  warning: null,
  onChange: _helpers.noop,
  showWarning: false,
  onBlur: _helpers.noop,
  onFocus: _helpers.noop,
  onKeyPress: _helpers.noop,
  showError: false,
  className: null,
  autoComplete: '',
  attributes: null,
  topErrorOnly: false
};
var _default = LoginCardInput;
exports["default"] = _default;