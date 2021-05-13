"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HintBlock = function HintBlock(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      title = _ref.title,
      body = _ref.body,
      buttonContent = _ref.buttonContent,
      onButtonClick = _ref.onButtonClick,
      props = _objectWithoutProperties(_ref, ["className", "onClose", "title", "body", "buttonContent", "onButtonClick"]);

  var classes = (0, _classnames["default"])('hint-block-pf', className);
  return _react["default"].createElement("div", _extends({
    className: classes
  }, props), onClose && _react["default"].createElement("button", {
    type: "button",
    className: "close",
    "aria-hidden": "true",
    "aria-label": "Close",
    onClick: onClose
  }, _react["default"].createElement("span", {
    className: "pficon pficon-close"
  })), _react["default"].createElement("div", {
    className: "hint-block-pf-title"
  }, title), _react["default"].createElement("div", {
    className: "hint-block-pf-body"
  }, body), buttonContent && _react["default"].createElement("button", {
    className: "btn btn-primary",
    type: "button",
    onClick: onButtonClick
  }, buttonContent));
};

HintBlock.propTypes = {
  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Close callback, if not provided the block will not be closable */
  onClose: _propTypes["default"].func,

  /** Title for the hint block */
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,

  /** Body of the hint block */
  body: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,

  /** Optional button contents for the hint block */
  buttonContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /** Callback for the button if buttonContent is provided */
  onButtonClick: _propTypes["default"].func
};
HintBlock.defaultProps = {
  className: '',
  onClose: null,
  buttonContent: null,
  onButtonClick: _helpers.noop
};
var _default = HintBlock;
exports["default"] = _default;