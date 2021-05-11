"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = require("../Icon");

var _Dropdown = require("../Dropdown");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * DropdownKebab Component for Patternfly React
 */
var DropdownKebab = function DropdownKebab(_ref) {
  var className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      pullRight = _ref.pullRight,
      componentClass = _ref.componentClass,
      title = _ref.title,
      toggleStyle = _ref.toggleStyle;
  var kebabClass = (0, _classnames["default"])('dropdown-kebab-pf', className);
  return _react["default"].createElement(_Dropdown.Dropdown, {
    className: kebabClass,
    id: id,
    pullRight: pullRight,
    componentClass: componentClass
  }, _react["default"].createElement(_Dropdown.Dropdown.Toggle, {
    bsStyle: toggleStyle,
    title: title,
    noCaret: true
  }, _react["default"].createElement(_Icon.Icon, {
    name: "ellipsis-v"
  })), _react["default"].createElement(_Dropdown.Dropdown.Menu, null, children));
};

DropdownKebab.propTypes = {
  /** additional kebab dropdown classes */
  className: _propTypes["default"].string,

  /** children nodes  */
  children: _propTypes["default"].node,

  /** kebab dropdown id */
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,

  /** menu right aligned */
  pullRight: _propTypes["default"].bool,

  /** dropdown component class */
  componentClass: _propTypes["default"].func,

  /** title for kebab */
  title: _propTypes["default"].string,

  /** toggle style */
  toggleStyle: _propTypes["default"].string
};
DropdownKebab.defaultProps = {
  className: '',
  children: null,
  pullRight: false,
  componentClass: _Button.ButtonGroup,
  title: '',
  toggleStyle: 'link'
};
var _default = DropdownKebab;
exports["default"] = _default;