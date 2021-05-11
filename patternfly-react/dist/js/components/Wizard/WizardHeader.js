"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = require("../Icon");

var _Modal = require("../Modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * WizardHeader component for Patternfly React
 */
var WizardHeader = function WizardHeader(_ref) {
  var onClose = _ref.onClose,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["onClose", "title"]);

  return _react["default"].createElement(_Modal.Modal.Header, props, _react["default"].createElement("button", {
    className: "close",
    onClick: onClose,
    "aria-hidden": "true",
    "aria-label": "Close"
  }, _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: "close"
  })), _react["default"].createElement(_Modal.Modal.Title, null, title));
};

WizardHeader.propTypes = {
  /** onClose callback */
  onClose: _propTypes["default"].func.isRequired,

  /** The wizard title */
  title: _propTypes["default"].node
};
WizardHeader.defaultProps = {
  title: null
};
var _default = WizardHeader;
exports["default"] = _default;