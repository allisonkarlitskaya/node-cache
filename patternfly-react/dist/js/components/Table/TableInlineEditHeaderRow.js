"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableConfirmButtonsRow = _interopRequireDefault(require("./TableConfirmButtonsRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TableInlineEditHeaderRow = function TableInlineEditHeaderRow(props) {
  var buttonsPosition = function buttonsPosition(window, rowDimensions) {
    var position = {};
    position.bottom = window.height - rowDimensions.bottom - 3;
    position.right = window.width - rowDimensions.right + 10;
    return position;
  };

  var buttonsClassName = 'top bold';

  var rowProps = _objectSpread({}, props, {
    buttonsPosition: buttonsPosition,
    buttonsClassName: buttonsClassName
  });

  return _react["default"].createElement(_TableConfirmButtonsRow["default"], rowProps);
};

TableInlineEditHeaderRow.shouldComponentUpdate = true;
TableInlineEditHeaderRow.defaultProps = _objectSpread({}, _TableConfirmButtonsRow["default"].defaultProps);
TableInlineEditHeaderRow.propTypes = {
  /** Function that determines whether values or edit components should be rendered */
  isEditing: _propTypes["default"].func,

  /** Confirm edit callback */
  onConfirm: _propTypes["default"].func,

  /** Cancel edit callback */
  onCancel: _propTypes["default"].func,

  /** Row cells */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),

  /** Message text inputs for i18n */
  messages: _propTypes["default"].shape({
    confirmButtonLabel: _propTypes["default"].string,
    cancelButtonLabel: _propTypes["default"].string
  })
};
var _default = TableInlineEditHeaderRow;
exports["default"] = _default;