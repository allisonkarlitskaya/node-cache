"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = require("../Modal");

var _AboutModalVersions = _interopRequireDefault(require("./AboutModalVersions"));

var _AboutModalVersionItem = _interopRequireDefault(require("./AboutModalVersionItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * AboutModal Component for PatternFly
 */
var AboutModal = function AboutModal(_ref) {
  var children = _ref.children,
      className = _ref.className,
      show = _ref.show,
      onHide = _ref.onHide,
      productTitle = _ref.productTitle,
      logo = _ref.logo,
      altLogo = _ref.altLogo,
      trademarkText = _ref.trademarkText,
      closeText = _ref.closeText,
      props = _objectWithoutProperties(_ref, ["children", "className", "show", "onHide", "productTitle", "logo", "altLogo", "trademarkText", "closeText"]);

  return _react["default"].createElement(_Modal.Modal, _extends({
    className: className,
    contentClassName: "about-modal-pf",
    show: show,
    onHide: onHide
  }, props), _react["default"].createElement(_Modal.Modal.Header, null, _react["default"].createElement(_Modal.Modal.CloseButton, {
    onClick: onHide,
    closeText: closeText
  })), _react["default"].createElement(_Modal.Modal.Body, null, _react["default"].createElement("h1", null, productTitle), children, _react["default"].createElement("div", {
    className: "trademark-pf"
  }, trademarkText)), _react["default"].createElement(_Modal.Modal.Footer, null, _react["default"].createElement("img", {
    src: logo,
    alt: altLogo
  })));
};

AboutModal.defaultProps = {
  closeText: 'Close'
};
AboutModal.propTypes = {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Flag to show the modal */
  show: _propTypes["default"].bool.isRequired,

  /** Function to call when modal is closed */
  onHide: _propTypes["default"].func.isRequired,

  /** Text or Element to show for the product title */
  productTitle: _propTypes["default"].node,

  /** Image Source for the Product logo */
  logo: _propTypes["default"].string,

  /** Alternate text if invalid logo */
  altLogo: _propTypes["default"].string,

  /** Trademark information text */
  trademarkText: _propTypes["default"].string,

  /** Alternate text for close button for screen readers (default 'Close') */
  closeText: _propTypes["default"].string
};
AboutModal.defaultProps = {
  children: null,
  className: '',
  productTitle: null,
  logo: '',
  altLogo: '',
  trademarkText: ''
};
AboutModal.Versions = _AboutModalVersions["default"];
AboutModal.VersionItem = _AboutModalVersionItem["default"];
var _default = AboutModal;
exports["default"] = _default;