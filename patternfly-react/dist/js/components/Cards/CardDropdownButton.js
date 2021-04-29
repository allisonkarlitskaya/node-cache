"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = require("../Dropdown");

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardDropdownButton = function CardDropdownButton(_ref) {
  var id = _ref.id,
      children = _ref.children,
      title = _ref.title,
      className = _ref.className,
      pullRight = _ref.pullRight,
      props = _objectWithoutProperties(_ref, ["id", "children", "title", "className", "pullRight"]);

  var classes = (0, _classnames["default"])('card-pf-time-frame-filter', className);

  var CustomButtonGroup = function CustomButtonGroup(customGroup) {
    return _react["default"].createElement(_Button.ButtonGroup, _extends({}, customGroup, {
      bsClass: " "
    }));
  };

  return _react["default"].createElement(_Dropdown.Dropdown, _extends({
    className: classes,
    id: id,
    pullRight: pullRight,
    componentClass: CustomButtonGroup
  }, props), _react["default"].createElement(_Dropdown.Dropdown.Toggle, null, title), _react["default"].createElement(_Dropdown.Dropdown.Menu, null, children));
};

CardDropdownButton.propTypes = {
  /** dropdown button id */
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Child node - contents of the element */
  children: _propTypes["default"].node.isRequired,

  /** Dropdown title */
  title: _propTypes["default"].node,

  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** menu right aligned */
  pullRight: _propTypes["default"].bool
};
CardDropdownButton.defaultProps = {
  pullRight: true,
  id: null,
  title: null,
  className: ''
};
var _default = CardDropdownButton;
exports["default"] = _default;