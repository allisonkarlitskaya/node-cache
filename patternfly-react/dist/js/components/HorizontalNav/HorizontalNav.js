"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HorizontalNavMenu = _interopRequireDefault(require("./HorizontalNavMenu"));

var _HorizontalNavMenuItem = _interopRequireDefault(require("./HorizontalNavMenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HorizontalNav = function HorizontalNav(props) {
  var children = props.children;
  return _react["default"].createElement("nav", {
    className: "navbar navbar-default navbar-pf"
  }, children);
};

HorizontalNav.propTypes = {
  children: _propTypes["default"].node
};
HorizontalNav.defaultProps = {
  children: null
};
HorizontalNav.Menu = _HorizontalNavMenu["default"];
HorizontalNav.MenuItem = _HorizontalNavMenuItem["default"];
var _default = HorizontalNav;
exports["default"] = _default;