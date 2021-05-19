"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../NotificationDrawer/index");

var _index2 = require("./index");

var _helpers = require("../../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NotificationDrawerWrapper = function NotificationDrawerWrapper(_ref) {
  var panels = _ref.panels,
      translations = _ref.translations,
      toggleDrawerHide = _ref.toggleDrawerHide,
      toggleDrawerExpand = _ref.toggleDrawerExpand,
      isExpandable = _ref.isExpandable,
      isExpanded = _ref.isExpanded,
      expandedPanel = _ref.expandedPanel,
      togglePanel = _ref.togglePanel,
      onNotificationClick = _ref.onNotificationClick,
      onNotificationAsRead = _ref.onNotificationAsRead,
      onNotificationHide = _ref.onNotificationHide,
      onMarkPanelAsRead = _ref.onMarkPanelAsRead,
      onMarkPanelAsClear = _ref.onMarkPanelAsClear,
      onClickedLink = _ref.onClickedLink;

  var translationsWrapper = _objectSpread({}, _index2.NotificationDrawerPanelWrapper.defaultProps.translations, {}, translations);

  var notificationPanels = panels.map(function (panel, i) {
    return _react["default"].createElement(_index2.NotificationDrawerPanelWrapper, {
      key: i,
      panelName: panel.panelName,
      panelkey: panel.panelkey,
      onClickedLink: onClickedLink,
      notifications: panel.notifications,
      togglePanel: togglePanel,
      isExpanded: expandedPanel === panel.panelkey,
      onNotificationClick: onNotificationClick,
      onNotificationAsRead: onNotificationAsRead,
      onNotificationHide: onNotificationHide,
      onMarkPanelAsRead: onMarkPanelAsRead,
      onMarkPanelAsClear: onMarkPanelAsClear,
      showLoading: panel.showLoading,
      translations: translationsWrapper
    });
  });

  var noNotificationsMessage = _react["default"].createElement(_index.NotificationDrawer.EmptyState, {
    title: translations.emptyState
  });

  return _react["default"].createElement(_index.NotificationDrawer, {
    expanded: isExpanded
  }, _react["default"].createElement(_index.NotificationDrawer.Title, {
    title: translations.title,
    onCloseClick: function onCloseClick() {
      return toggleDrawerHide();
    },
    expandable: isExpandable,
    onExpandClick: toggleDrawerExpand
  }), _react["default"].createElement(_index.NotificationDrawer.Accordion, null, notificationPanels.length === 0 ? noNotificationsMessage : notificationPanels));
};

NotificationDrawerWrapper.propTypes = {
  /** toggleDrawer Hide/Expand func */
  toggleDrawerExpand: _propTypes["default"].func,
  toggleDrawerHide: _propTypes["default"].func,

  /** Notification Panels Array */
  panels: _propTypes["default"].array,

  /** is Expanded Bool */
  isExpanded: _propTypes["default"].bool,

  /** function(panelkey, notificationkey) on Notification Click */
  onNotificationClick: _propTypes["default"].func,

  /** function(panelkey, notificationkey) on Notification Mark as Read Click */
  onNotificationAsRead: _propTypes["default"].func,

  /** on function(panelkey) Panel Read All Click */
  onMarkPanelAsRead: _propTypes["default"].func,

  /** function(url) on Dropdown Link Click */
  onClickedLink: _propTypes["default"].func,

  /** function(panelkey, notificationkey) on Notification Hide Click */
  onNotificationHide: _propTypes["default"].func,

  /** function(panelkey) Panel Clear All Click */
  onMarkPanelAsClear: _propTypes["default"].func,

  /** function() togglePanel Click */
  togglePanel: _propTypes["default"].func,

  /** show Loading notification Bool */
  isExpandable: _propTypes["default"].bool,

  /** expanded Panel */
  expandedPanel: _propTypes["default"].string,

  /** translations for Title, EmptyState, Read/Clear */
  translations: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    unreadEvent: _propTypes["default"].string,
    unreadEvents: _propTypes["default"].string,
    emptyState: _propTypes["default"].string,
    readAll: _propTypes["default"].string,
    clearAll: _propTypes["default"].string,
    deleteNotification: _propTypes["default"].string
  })
};
NotificationDrawerWrapper.defaultProps = {
  panels: null,
  toggleDrawerHide: _helpers.noop,
  toggleDrawerExpand: _helpers.noop,
  togglePanel: null,
  isExpanded: false,
  onNotificationClick: _helpers.noop,
  onNotificationAsRead: _helpers.noop,
  onMarkPanelAsRead: _helpers.noop,
  onClickedLink: _helpers.noop,
  onNotificationHide: _helpers.noop,
  onMarkPanelAsClear: _helpers.noop,
  isExpandable: true,
  expandedPanel: null,
  translations: {}
};
var _default = NotificationDrawerWrapper;
exports["default"] = _default;