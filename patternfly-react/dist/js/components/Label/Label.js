"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = _interopRequireDefault(require("react-bootstrap/lib/Label"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RemoveButton = _interopRequireDefault(require("./RemoveButton"));

var _DisposableLabel = _interopRequireDefault(require("./DisposableLabel"));

var _CompoundLabel = _interopRequireDefault(require("./CompoundLabel"));

var _LabelWithTooltip = _interopRequireDefault(require("./LabelWithTooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = function Label(_ref) {
  var children = _ref.children,
      onRemoveClick = _ref.onRemoveClick,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["children", "onRemoveClick", "type"]);

  return _react["default"].createElement(_Label["default"], _extends({
    bsStyle: type
  }, props), children, !!onRemoveClick && _react["default"].createElement(_RemoveButton["default"], {
    onRemoveClick: onRemoveClick,
    title: "Remove"
  }));
}; // WARNING: If you change propTypes you MUST also change DisposableLabel.propTypes


Label.propTypes = _objectSpread({}, _Label["default"].propTypes, {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Label type */
  type: _propTypes["default"].string,

  /** callback when Label is removed  */
  onRemoveClick: _propTypes["default"].func
}); // WARNING: If you change defaultProps you MUST also change DisposableLabel.defaultProps

Label.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: undefined
};
Label.RemoveButton = _RemoveButton["default"];
Label.DisposableLabel = _DisposableLabel["default"];
Label.CompoundLabel = _CompoundLabel["default"];
Label.WithTooltop = _LabelWithTooltip["default"];
var _default = Label;
exports["default"] = _default;