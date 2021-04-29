"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Form = require("../Form");

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * TableCheckbox component for Patternfly React
 */
var TableCheckbox = function TableCheckbox(_ref) {
  var id = _ref.id,
      label = _ref.label,
      checked = _ref.checked,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["id", "label", "checked", "onChange"]);

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Form.ControlLabel, {
    srOnly: true,
    htmlFor: id
  }, label), _react["default"].createElement("input", _extends({
    type: "checkbox",
    id: id,
    checked: checked,
    onChange: onChange
  }, props)));
};

TableCheckbox.propTypes = {
  /** checkbox id */
  id: _propTypes["default"].string,

  /** checkbox label */
  label: _propTypes["default"].string,

  /** checkbox is checked */
  checked: _propTypes["default"].bool,

  /** onChange callback */
  onChange: _propTypes["default"].func
};
TableCheckbox.defaultProps = {
  id: '',
  label: '',
  checked: false,
  onChange: _helpers.noop
};
var _default = TableCheckbox;
exports["default"] = _default;