"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ConfirmButton = _interopRequireDefault(require("./ConfirmButton"));

var _CancelButton = _interopRequireDefault(require("./CancelButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InlineEdit = function InlineEdit(_ref) {
  var value = _ref.value,
      isEditing = _ref.isEditing,
      additionalData = _ref.additionalData,
      renderValue = _ref.renderValue,
      renderEdit = _ref.renderEdit;

  if (isEditing(additionalData)) {
    return renderEdit(value, additionalData);
  }

  return renderValue(value, additionalData);
};

InlineEdit.propTypes = {
  /** Inline edit input value */
  value: _propTypes["default"].any,

  /** Function that determines whether value or edit component should be rendered */
  isEditing: _propTypes["default"].func,

  /** Additional data passed th the render functions */
  additionalData: _propTypes["default"].object,

  /** Returns value component */
  renderValue: _propTypes["default"].func,

  /** Returns edit component */
  renderEdit: _propTypes["default"].func
};
InlineEdit.ConfirmButton = _ConfirmButton["default"];
InlineEdit.CancelButton = _CancelButton["default"];
var _default = InlineEdit;
exports["default"] = _default;