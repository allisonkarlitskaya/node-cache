"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../../index");

var _Modal = _interopRequireDefault(require("../Modal"));

var _CustomModalDialog = _interopRequireDefault(require("../InnerComponents/CustomModalDialog"));

var _Modal2 = _interopRequireDefault(require("react-bootstrap/lib/Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Modal Pattern component.
 */
var ModalPattern = function ModalPattern(_ref) {
  var show = _ref.show,
      title = _ref.title,
      onClose = _ref.onClose,
      footer = _ref.footer,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["show", "title", "onClose", "footer", "children"]);

  return _react["default"].createElement(_Modal["default"], _extends({
    show: show
  }, rest), _react["default"].createElement(_Modal["default"].Header, null, _react["default"].createElement(_Modal["default"].CloseButton, {
    onClick: onClose
  }), _react["default"].createElement(_Modal["default"].Title, null, title)), _react["default"].createElement(_Modal["default"].Body, null, children), _react["default"].createElement(_Modal["default"].Footer, null, footer));
};

ModalPattern.propTypes = _objectSpread({}, _Modal2["default"].propTypes, {
  show: _propTypes["default"].bool,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  onClose: _propTypes["default"].func,
  footer: _propTypes["default"].node,
  children: _propTypes["default"].node
});
ModalPattern.defaultProps = _objectSpread({}, _Modal2["default"].defaultProps, {
  dialogComponentClass: _CustomModalDialog["default"],
  show: false,
  title: '',
  onClose: _index.noop,
  footer: null,
  children: null
});
ModalPattern.displayName = 'ModalPattern';
var _default = ModalPattern;
exports["default"] = _default;