"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../common/helpers");

var _TableSelectionCell = _interopRequireDefault(require("../TableSelectionCell"));

var _TableCheckbox = _interopRequireDefault(require("../TableCheckbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var selectionCellFormatter = function selectionCellFormatter(_ref, onSelectRow, id, label) {
  var rowData = _ref.rowData,
      rowIndex = _ref.rowIndex;
  var checkboxId = id || "select".concat(rowIndex);
  var checkboxLabel = label || "Select row ".concat(rowIndex);
  return _react["default"].createElement(_TableSelectionCell["default"], null, _react["default"].createElement(_TableCheckbox["default"], {
    id: checkboxId,
    label: checkboxLabel,
    checked: rowData.selected,
    onChange: function onChange(e) {
      onSelectRow(e, rowData);
    }
  }));
};

selectionCellFormatter.propTypes = {
  /** rowData for this row */
  rowData: _propTypes["default"].object,

  /** rowIndex for this row */
  rowIndex: _propTypes["default"].number.isRequired,

  /** row selected callback */
  onSelectRow: _propTypes["default"].func,
  // eslint-disable-line react/no-unused-prop-types

  /** checkbox id override */
  id: _propTypes["default"].string,
  // eslint-disable-line react/no-unused-prop-types

  /** checkbox label override */
  label: _propTypes["default"].string // eslint-disable-line react/no-unused-prop-types

};
selectionCellFormatter.defaultProps = {
  rowData: {},
  onSelectRow: _helpers.noop,
  id: '',
  label: ''
};
var _default = selectionCellFormatter;
exports["default"] = _default;