"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Nav = require("../Nav");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VerticalNavIconBar = function VerticalNavIconBar(props) {
  var iconBar = _react["default"].createElement(_Nav.Nav, {
    navbar: true,
    pullRight: true,
    className: "navbar-iconic"
  }, props.children);

  return props.collapse ? _react["default"].createElement("nav", {
    className: "collapse navbar-collapse"
  }, iconBar) : iconBar;
};

VerticalNavIconBar.propTypes = {
  /** Children to render inside .navbar-right */
  children: _propTypes["default"].node,

  /** Whether to also wrap the children in a .navbar-collapse */
  collapse: _propTypes["default"].bool
};
VerticalNavIconBar.defaultProps = {
  collapse: true,
  children: null
};
VerticalNavIconBar.displayName = 'VerticalNav.IconBar';
var _default = VerticalNavIconBar;
exports["default"] = _default;