"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _InlineEdit = require("../../InlineEdit/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
Creates a reactabular formatter:

(<value>, {
  rowData: <object>,
  property: <string>,
  column: <column>,
  columnIndex: <number>,
  rowIndex: <number> }) => <string|React element>
*/
var inlineEditFormatterFactory = function inlineEditFormatterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      isEditing = _ref.isEditing,
      renderValue = _ref.renderValue,
      renderEdit = _ref.renderEdit;

  return function (value, additionalData) {
    return _react["default"].createElement(_InlineEdit.InlineEdit, {
      value: value,
      additionalData: additionalData,
      isEditing: isEditing,
      renderValue: renderValue,
      renderEdit: renderEdit
    });
  };
};

var _default = inlineEditFormatterFactory;
exports["default"] = _default;