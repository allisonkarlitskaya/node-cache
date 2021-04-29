"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = require("../Icon");

var _Button = require("../Button");

var _Popover = require("../Popover");

var _OverlayTrigger = require("../OverlayTrigger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * FieldLevelHelp Component for Patternfly React
 */
var FieldLevelHelp = function FieldLevelHelp(_ref) {
  var children = _ref.children,
      content = _ref.content,
      close = _ref.close,
      rootClose = _ref.rootClose,
      placement = _ref.placement,
      buttonClass = _ref.buttonClass,
      props = _objectWithoutProperties(_ref, ["children", "content", "close", "rootClose", "placement", "buttonClass"]);

  // backwards compatibility of the existing `close` prop - use that prop if it exists
  var closeProp = typeof close !== 'undefined' ? close : rootClose;

  var overlay = _react["default"].createElement(_Popover.Popover, {
    id: "popover"
  }, content);

  var buttonClasses = (0, _classnames["default"])('popover-pf-info', buttonClass);
  return _react["default"].createElement(_OverlayTrigger.OverlayTrigger, {
    overlay: overlay,
    placement: placement,
    trigger: ['click'],
    rootClose: closeProp
  }, _react["default"].createElement(_Button.Button, {
    bsStyle: "link",
    className: buttonClasses
  }, _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: "info"
  })));
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  content: _propTypes["default"].node,

  /** close prop */
  close: _propTypes["default"].bool,

  /** leave popover/tooltip open  */
  rootClose: _propTypes["default"].bool,

  /** overlay placement */
  placement: _propTypes["default"].string,

  /** button class */
  buttonClass: _propTypes["default"].string,

  /** children nodes  */
  children: _propTypes["default"].node
};
FieldLevelHelp.defaultProps = {
  content: null,
  close: undefined,
  rootClose: true,
  placement: 'top',
  buttonClass: '',
  children: null
};
var _default = FieldLevelHelp;
exports["default"] = _default;