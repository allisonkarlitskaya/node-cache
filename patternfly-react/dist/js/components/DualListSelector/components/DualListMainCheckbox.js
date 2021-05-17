"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _helpers = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListMainCheckbox = function DualListMainCheckbox(_ref) {
  var isChecked = _ref.isChecked,
      side = _ref.side,
      onChange = _ref.onChange;
  return _react["default"].createElement("input", {
    className: "dual-list-pf-main-checkbox",
    type: "checkbox",
    "data-side": side,
    onChange: onChange,
    checked: isChecked
  });
};

DualListMainCheckbox.propTypes = {
  /** controlls the checkbox */
  isChecked: _propTypes["default"].bool,

  /** the side of the selectors, passed in the onChange function. */
  side: _propTypes["default"].string,

  /** The function which is being called on checked state toggled. */
  onChange: _propTypes["default"].func
};
DualListMainCheckbox.defaultProps = {
  isChecked: false,
  side: null,
  onChange: _helpers.noop
};
var _default = DualListMainCheckbox;
exports["default"] = _default;