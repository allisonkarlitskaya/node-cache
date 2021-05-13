"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

var _Icon = require("../../Icon");

var _Icon2 = _interopRequireDefault(require("./Icon.consts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.unmock('./NotificationDrawerPanelWrapper');
var p1Notifications = [{
  id: 12,
  seen: false,
  level: 'info',
  text: 'Foreman Community Newsletter - January 2019',
  group: 'Community',
  created_at: 'bad_date',
  actions: {
    links: [{
      href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
      title: 'Open',
      external: true
    }]
  }
}, {
  id: 14,
  seen: true,
  level: 'warning',
  text: 'Foreman Community Newsletter - January 2019',
  group: 'Community',
  actions: {
    links: [{
      href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
      title: 'Open',
      external: true
    }]
  }
}, {
  id: 15,
  seen: true,
  level: 'ok',
  text: 'Foreman Community Newsletter - January 2029',
  group: 'Community',
  actions: {
    links: [{
      href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
      title: 'Open',
      external: true
    }]
  }
}, {
  id: 16,
  seen: false,
  level: 'error',
  text: 'Foreman Community Newsletter - January 2029',
  group: 'Community',
  actions: {
    links: [{
      href: 'http://theforeman.org/2018/01/foreman-community-newsletter-january-2018.html',
      title: 'Open',
      external: true
    }]
  }
}];
var panel = [{
  panelkey: '1',
  panelName: 'Notification Tab 1',
  notifications: p1Notifications,
  isExpanded: true
}];
test('NotificationDrawerPanelWraper is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawerPanelWrapper, {
    panelkey: panel.panelkey,
    panelName: "panelName",
    notifications: p1Notifications,
    isExpanded: true,
    togglePanel: jest.fn(),
    onNotificationClick: jest.fn(),
    onNotificationAsRead: jest.fn(),
    onNotificationHide: jest.fn(),
    onMarkPanelAsRead: jest.fn(),
    onClickedLink: jest.fn(),
    onMarkPanelAsClear: jest.fn(),
    showLoading: true
  }));
  expect(component.render()).toMatchSnapshot();
});
test('DrawerWraper is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawerWrapper, {
    panels: panel,
    toggleDrawerHide: jest.fn(),
    toggleDrawerExpand: jest.fn(),
    togglePanel: jest.fn(),
    isExpandable: true,
    isExpanded: true,
    onNotificationClick: jest.fn(),
    onNotificationAsRead: jest.fn(),
    onNotificationHide: jest.fn(),
    onMarkPanelAsRead: jest.fn(),
    onMarkPanelAsClear: jest.fn(),
    onClickedLink: jest.fn()
  }));
  expect(component.render()).toMatchSnapshot();
});
test('StatefulNotificationDrawerWrapper is working properly', function () {
  var mockFunc = function mockFunc() {
    var success = 'success';
    return success;
  };

  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.StatefulNotificationDrawerWrapper, {
    panels: panel,
    isExpanded: true,
    updateUnreadCount: mockFunc
  }));
  component.instance().onMarkPanelAsRead('1'); // panelKey

  component.instance().onMarkPanelAsClear('1');
  component.instance().onNotificationClick('1', 12); // (panelKey, notificationKey)

  component.instance().onNotificationHide('1', 12);
  component.instance().togglePanel('1');
  component.instance().toggleDrawerExpand();
  component.instance().updateUnreadCount();
  expect(component.render()).toMatchSnapshot();
});
test('StatefulToggleNotificationDrawerWrapper is working properly', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.StatefulToggleNotificationDrawerWrapper, {
    panels: panel,
    isDrawerOpen: true,
    hasUnreadMessages: true
  }));
  component.instance().toggleDrawer();
  component.instance().updateUnreadCount(true);
  expect(component.render()).toMatchSnapshot();
});
test('getIconClass is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement("div", null, _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: (0, _Icon2["default"])('ok')
  }), _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: (0, _Icon2["default"])('info')
  }), _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: (0, _Icon2["default"])('warning')
  }), _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: (0, _Icon2["default"])('danger')
  }), _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: (0, _Icon2["default"])('close')
  }), _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: (0, _Icon2["default"])('notice')
  }), _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: (0, _Icon2["default"])('question-sign')
  })));
  expect(component.render()).toMatchSnapshot();
});