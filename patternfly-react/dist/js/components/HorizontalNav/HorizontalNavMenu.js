"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../index");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HorizontalNavMenu = function HorizontalNavMenu(props) {
  var children = props.children,
      twoLevels = props.twoLevels;
  var menuClasses = (0, _classnames["default"])({
    'persistent-secondary': twoLevels
  }, 'nav navbar-nav navbar-primary');
  return _react["default"].createElement("div", {
    className: "collapse navbar-collapse navbar-collapse-1"
  }, _react["default"].createElement(_index.ListGroup, {
    componentClass: "ul",
    bsClass: menuClasses
  }, children));
};

HorizontalNavMenu.propTypes = {
  children: _propTypes["default"].node,
  twoLevels: _propTypes["default"].bool
};
HorizontalNavMenu.defaultProps = {
  children: null,
  twoLevels: false
};
var _default = HorizontalNavMenu;
exports["default"] = _default;