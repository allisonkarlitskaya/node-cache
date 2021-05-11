"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _helpers = require("../../common/helpers");

var _Modal = require("../Modal");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MessageDialog = function MessageDialog(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      primaryAction = _ref.primaryAction,
      secondaryAction = _ref.secondaryAction,
      title = _ref.title,
      icon = _ref.icon,
      primaryContent = _ref.primaryContent,
      secondaryContent = _ref.secondaryContent,
      primaryActionButtonBsStyle = _ref.primaryActionButtonBsStyle,
      secondaryActionButtonBsStyle = _ref.secondaryActionButtonBsStyle,
      primaryActionButtonContent = _ref.primaryActionButtonContent,
      secondaryActionButtonContent = _ref.secondaryActionButtonContent,
      className = _ref.className,
      footer = _ref.footer,
      enforceFocus = _ref.enforceFocus,
      accessibleName = _ref.accessibleName,
      accessibleDescription = _ref.accessibleDescription,
      props = _objectWithoutProperties(_ref, ["show", "onHide", "primaryAction", "secondaryAction", "title", "icon", "primaryContent", "secondaryContent", "primaryActionButtonBsStyle", "secondaryActionButtonBsStyle", "primaryActionButtonContent", "secondaryActionButtonContent", "className", "footer", "enforceFocus", "accessibleName", "accessibleDescription"]);

  return _react["default"].createElement(_Modal.Modal, _extends({
    className: (0, _classnames["default"])('message-dialog-pf', className),
    show: show,
    onHide: onHide,
    enforceFocus: enforceFocus,
    "aria-modal": true,
    "aria-labelledby": accessibleName,
    "aria-describedby": accessibleDescription
  }, props), _react["default"].createElement(_Modal.Modal.Header, null, _react["default"].createElement(_Modal.Modal.CloseButton, {
    onClick: onHide
  }), _react["default"].createElement(_Modal.Modal.Title, {
    id: accessibleName
  }, title)), _react["default"].createElement(_Modal.Modal.Body, null, icon && icon, _react["default"].createElement("div", {
    id: accessibleDescription
  }, primaryContent && primaryContent, secondaryContent && secondaryContent)), _react["default"].createElement(_Modal.Modal.Footer, null, !footer ? _react["default"].createElement(_react["default"].Fragment, null, secondaryActionButtonContent && _react["default"].createElement(_Button.Button, {
    bsStyle: secondaryActionButtonBsStyle,
    onClick: secondaryAction
  }, secondaryActionButtonContent), _react["default"].createElement(_Button.Button, {
    autoFocus: true,
    bsStyle: primaryActionButtonBsStyle,
    onClick: primaryAction
  }, primaryActionButtonContent)) : footer));
};

MessageDialog.propTypes = {
  /** additional class(es) */
  className: _propTypes["default"].string,

  /** When true, the modal will show itself */
  show: _propTypes["default"].bool.isRequired,

  /** A callback fired when the header closeButton or backdrop is clicked */
  onHide: _propTypes["default"].func.isRequired,

  /** callback to trigger when clicking the default footer primary action button */
  primaryAction: function primaryAction(props, propName, componentName) {
    if (props.footer) {
      return null;
    }

    return _propTypes["default"].checkPropTypes({
      primaryAction: _propTypes["default"].func.isRequired
    }, _defineProperty({}, propName, props[propName]), propName, componentName);
  },

  /** callback to trigger when clicking the default footer secondary action button */
  secondaryAction: _propTypes["default"].func,

  /** Bootstrap button style for primary action */
  primaryActionButtonBsStyle: _propTypes["default"].string,

  /** Bootstrap button style for secondary action */
  secondaryActionButtonBsStyle: _propTypes["default"].string,

  /** content for default footer primary action button */
  primaryActionButtonContent: function primaryActionButtonContent(props, propName, componentName) {
    if (props.footer) {
      return null;
    }

    return _propTypes["default"].checkPropTypes({
      primaryActionButtonContent: _propTypes["default"].node.isRequired
    }, _defineProperty({}, propName, props[propName]), propName, componentName);
  },

  /** content for default footer secondary action button */
  secondaryActionButtonContent: _propTypes["default"].node,

  /** modal title */
  title: _propTypes["default"].string,

  /** modal body icon */
  icon: _propTypes["default"].node,

  /** modal body primary content */
  primaryContent: _propTypes["default"].node,

  /** modal body secondary content */
  secondaryContent: _propTypes["default"].node,

  /** custom footer */
  footer: _propTypes["default"].node,

  /** When true the modal will prevent focus from leaving the Modal while open */
  enforceFocus: _propTypes["default"].bool,

  /** Gives the modal an accessible name by referring to the element that provides the dialog title. Must be unique, as this sets an id */
  accessibleName: _propTypes["default"].string,

  /** Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. Must be unique, as this sets an id */
  accessibleDescription: _propTypes["default"].string
};
MessageDialog.defaultProps = {
  className: '',
  primaryAction: null,
  secondaryAction: _helpers.noop,
  primaryActionButtonBsStyle: 'primary',
  secondaryActionButtonBsStyle: 'default',
  primaryActionButtonContent: null,
  secondaryActionButtonContent: null,
  title: '',
  icon: null,
  primaryContent: null,
  secondaryContent: null,
  footer: null,
  enforceFocus: true,
  accessibleName: '',
  accessibleDescription: ''
};
var _default = MessageDialog;
exports["default"] = _default;