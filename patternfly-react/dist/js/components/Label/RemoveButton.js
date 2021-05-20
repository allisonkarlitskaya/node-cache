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

var RemoveButton = function RemoveButton(_ref) {
  var className = _ref.className,
      title = _ref.title,
      onRemoveClick = _ref.onRemoveClick,
      props = _objectWithoutProperties(_ref, ["className", "title", "onRemoveClick"]);

  var classes = (0, _classnames["default"])('pficon pficon-close', className);
  return _react["default"].createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      onRemoveClick && onRemoveClick();
    },
    className: "pf-remove-button"
  }, _react["default"].createElement("span", _extends({
    className: classes
  }, props, {
    "aria-hidden": "true"
  })), _react["default"].createElement("span", {
    className: "sr-only"
  }, title));
};

RemoveButton.propTypes = {
  /** Additional css classes */
  className: _propTypes["default"].string,

  /** Reader title text */
  title: _propTypes["default"].string,

  /** Callback when remove button is clicked */
  onRemoveClick: _propTypes["default"].func
};
RemoveButton.defaultProps = {
  className: '',
  title: 'Remove',
  onRemoveClick: _helpers.noop
};
var _default = RemoveButton;
exports["default"] = _default;