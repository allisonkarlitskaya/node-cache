"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TreeViewIcon = function TreeViewIcon(_ref) {
  var icon = _ref.icon;
  var classes = (0, _classnames["default"])('icon node-icon indent', icon);
  return _react["default"].createElement("span", {
    className: classes,
    "aria-hidden": true
  });
};

TreeViewIcon.propTypes = {
  icon: _propTypes["default"].string
};
TreeViewIcon.defaultProps = {
  icon: 'fa fa-folder'
};
var _default = TreeViewIcon;
exports["default"] = _default;