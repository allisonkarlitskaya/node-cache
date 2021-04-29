"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = require("../../../Dropdown");

var _Icon = require("../../../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NotificationDrawerDropDown = function NotificationDrawerDropDown(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      pullRight = _ref.pullRight,
      props = _objectWithoutProperties(_ref, ["id", "children", "className", "pullRight"]);

  var classes = (0, _classnames["default"])('dropdown', {
    'pull-right': pullRight
  }, 'dropdown-kebab-pf', className);
  return _react["default"].createElement(_Dropdown.Dropdown, {
    className: classes,
    id: id
  }, _react["default"].createElement(_Dropdown.Dropdown.Toggle, {
    bsStyle: "link",
    noCaret: true
  }, _react["default"].createElement(_Icon.Icon, {
    name: "ellipsis-v"
  })), _react["default"].createElement(_Dropdown.Dropdown.Menu, {
    className: "dropdown-menu-right"
  }, children));
};

NotificationDrawerDropDown.propTypes = {
  /** dropdown button id */
  id: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Child node - contents of the element */
  children: _propTypes["default"].node.isRequired,

  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** menu right aligned */
  pullRight: _propTypes["default"].bool
};
NotificationDrawerDropDown.defaultProps = {
  pullRight: true,
  id: null,
  className: ''
};
var _default = NotificationDrawerDropDown;
exports["default"] = _default;