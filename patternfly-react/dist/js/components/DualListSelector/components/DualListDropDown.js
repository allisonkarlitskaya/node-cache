"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _index = require("../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DualListDropDown = function DualListDropDown(_ref) {
  var id = _ref.id,
      children = _ref.children;
  var kebabID = id || "dual-list-pf-kebab-".concat((0, _v["default"])());
  return children ? _react["default"].createElement(_index.DropdownKebab, {
    id: kebabID,
    pullRight: true
  }, children) : null;
};

DualListDropDown.propTypes = {
  /** The menu items */
  children: _propTypes["default"].node,

  /** ID for the kebab container */
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
DualListDropDown.defaultProps = {
  children: null,
  id: null
};
var _default = DualListDropDown;
exports["default"] = _default;