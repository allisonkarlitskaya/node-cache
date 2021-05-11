"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HorizontalNavMenuItem = function HorizontalNavMenuItem(props) {
  var children = props.children,
      onItemClick = props.onItemClick,
      title = props.title,
      active = props.active,
      dropdown = props.dropdown,
      submenu = props.submenu,
      dropup = props.dropup,
      pullLeft = props.pullLeft,
      otherProps = _objectWithoutProperties(props, ["children", "onItemClick", "title", "active", "dropdown", "submenu", "dropup", "pullLeft"]);

  var dropdownClasses = (0, _classnames["default"])({
    'dropdown-submenu': submenu,
    'pull-left': pullLeft
  });
  return dropdown ? _react["default"].createElement(_index.Dropdown, _extends({
    componentClass: "li",
    className: dropdownClasses
  }, otherProps), _react["default"].createElement(_index.Dropdown.Toggle, {
    useAnchor: true,
    noCaret: submenu
  }, title), _react["default"].createElement(_index.Dropdown.Menu, {
    className: dropup ? 'dropup' : ''
  }, children)) : _react["default"].createElement(_index.ListGroupItem, _extends({
    listItem: true,
    bsClass: "",
    active: active
  }, otherProps), _react["default"].createElement("a", {
    href: "#",
    onClick: onItemClick
  }, title), children && _react["default"].createElement(_index.ListGroup, {
    componentClass: "ul",
    bsClass: "nav navbar-nav navbar-persistent"
  }, children));
};

HorizontalNavMenuItem.propTypes = {
  children: _propTypes["default"].node,
  onItemClick: _propTypes["default"].func,
  title: _propTypes["default"].node,
  active: _propTypes["default"].bool,
  dropdown: _propTypes["default"].bool,
  submenu: _propTypes["default"].bool,
  dropup: _propTypes["default"].bool,
  pullLeft: _propTypes["default"].bool
};
HorizontalNavMenuItem.defaultProps = {
  children: null,
  onItemClick: null,
  title: '',
  active: false,
  dropdown: false,
  submenu: false,
  dropup: false,
  pullLeft: false
};
var _default = HorizontalNavMenuItem;
exports["default"] = _default;