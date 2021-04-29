"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Label = require("../Label");

var _OverlayTrigger = require("../OverlayTrigger");

var _Tooltip = require("../Tooltip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var tooltip = function tooltip(text) {
  return React.createElement(_Tooltip.Tooltip, {
    id: "tooltip"
  }, text);
};

var LabelWithTooltip = function LabelWithTooltip(_ref) {
  var onDeleteClick = _ref.onDeleteClick,
      category = _ref.category,
      value = _ref.value,
      truncate = _ref.truncate,
      bsStyle = _ref.bsStyle,
      className = _ref.className,
      overlayPlacement = _ref.overlayPlacement;
  return React.createElement("li", {
    key: value.id
  }, React.createElement(_OverlayTrigger.OverlayTrigger, {
    placement: overlayPlacement,
    overlay: tooltip(value.label)
  }, React.createElement(_Label.Label, {
    key: value.id,
    onRemoveClick: function onRemoveClick() {
      return onDeleteClick(category, value);
    },
    bsStyle: bsStyle,
    className: "compound-label-inner-color-pf ".concat(className)
  }, truncate(value.label))));
};

LabelWithTooltip.propTypes = {
  /** Fuction callback called when X button is clicked */
  onDeleteClick: _propTypes["default"].func.isRequired,

  /** Category in CATEGORY: value(s) pair */

  /**  Parent of label, it does not get displayed in this component */
  category: _propTypes["default"].shape({
    id: _propTypes["default"].any.isRequired,
    label: _propTypes["default"].string.isRequired
  }).isRequired,

  /** Individual Value in Category:VALUE(s) pair  */

  /** id uniquily identify value within its category, label is text which is displayed */
  value: _propTypes["default"].PropTypes.shape({
    id: _propTypes["default"].any.isRequired,
    label: _propTypes["default"].string.isRequired
  }).isRequired,

  /** Function used to truncate value label */
  truncate: _propTypes["default"].func.isRequired,

  /** Name of CSS class(es) which are set to label */
  className: _propTypes["default"].string,

  /** Bootstrap style which is set to label */
  bsStyle: _propTypes["default"].string,

  /** Placement of the overlay */
  overlayPlacement: _propTypes["default"].oneOf(['top', 'right', 'bottom', 'left'])
};
LabelWithTooltip.defaultProps = {
  className: '',
  bsStyle: 'primary',
  overlayPlacement: 'bottom'
};
var _default = LabelWithTooltip;
exports["default"] = _default;