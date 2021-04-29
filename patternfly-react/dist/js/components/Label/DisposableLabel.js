"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../common/helpers");

var _Label = _interopRequireDefault(require("react-bootstrap/lib/Label"));

var _Label2 = _interopRequireDefault(require("./Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DisposableLabel = function DisposableLabel(props) {
  return _react["default"].createElement(_Label2["default"], props);
}; // WARNING: This should be kept consistent with Label.propTypes


DisposableLabel.propTypes = _objectSpread({}, _Label["default"].propTypes, {
  /** Children nodes */
  children: _propTypes["default"].node,

  /** Label type */
  type: _propTypes["default"].string,

  /** callback when Label is removed  */
  onRemoveClick: _propTypes["default"].func
}); // WARNING: This should be kept consistent with Label.defaultProps

DisposableLabel.defaultProps = {
  children: null,
  type: 'default',
  onRemoveClick: _helpers.noop
};
var _default = DisposableLabel;
exports["default"] = _default;