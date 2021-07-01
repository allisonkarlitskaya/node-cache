"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NotificationDrawerTitle = _interopRequireDefault(require("./NotificationDrawerTitle"));

var _NotificationDrawerAccordion = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerAccordion"));

var _NotificationDrawerPanel = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerPanel"));

var _NotificationDrawerPanelAction = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerPanelAction"));

var _NotificationDrawerPanelActionLink = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerPanelActionLink"));

var _NotificationDrawerPanelBody = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerPanelBody"));

var _NotificationDrawerPanelCollapse = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerPanelCollapse"));

var _NotificationDrawerPanelCounter = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerPanelCounter"));

var _NotificationDrawerPanelHeading = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerPanelHeading"));

var _NotificationDrawerPanelTitle = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerPanelTitle"));

var _NotificationDrawerDropDown = _interopRequireDefault(require("./NotificationDrawerAccordion/NotificationDrawerDropDown"));

var _NotificationDrawerToggle = _interopRequireDefault(require("./NotificationDrawerToggle"));

var _NotificationDrawerEmptyState = _interopRequireDefault(require("./NotificationDrawerEmptyState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NotificationDrawer = function NotificationDrawer(_ref) {
  var hide = _ref.hide,
      expanded = _ref.expanded,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["hide", "expanded", "children", "className"]);

  var classes = (0, _classnames["default"])('drawer-pf drawer-alt-pf drawer-pf-notifications', {
    'drawer-pf-expanded': expanded
  }, {
    hide: hide
  }, className);
  return _react["default"].createElement("div", _extends({
    className: classes
  }, props), children);
};

NotificationDrawer.propTypes = {
  /** Child node - contents of the element */
  children: _propTypes["default"].node.isRequired,

  /** Additional element css classes */
  className: _propTypes["default"].string,

  /** Expanded bool */
  expanded: _propTypes["default"].bool,

  /** Hide Bool */
  hide: _propTypes["default"].bool
};
NotificationDrawer.defaultProps = {
  className: '',
  expanded: false,
  hide: false
};
NotificationDrawer.Accordion = _NotificationDrawerAccordion["default"];
NotificationDrawer.Panel = _NotificationDrawerPanel["default"];
NotificationDrawer.PanelAction = _NotificationDrawerPanelAction["default"];
NotificationDrawer.PanelActionLink = _NotificationDrawerPanelActionLink["default"];
NotificationDrawer.PanelBody = _NotificationDrawerPanelBody["default"];
NotificationDrawer.PanelCollapse = _NotificationDrawerPanelCollapse["default"];
NotificationDrawer.PanelCounter = _NotificationDrawerPanelCounter["default"];
NotificationDrawer.PanelHeading = _NotificationDrawerPanelHeading["default"];
NotificationDrawer.PanelTitle = _NotificationDrawerPanelTitle["default"];
NotificationDrawer.Title = _NotificationDrawerTitle["default"];
NotificationDrawer.Dropdown = _NotificationDrawerDropDown["default"];
NotificationDrawer.Toggle = _NotificationDrawerToggle["default"];
NotificationDrawer.EmptyState = _NotificationDrawerEmptyState["default"];
var _default = NotificationDrawer;
exports["default"] = _default;