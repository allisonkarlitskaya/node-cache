"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ToastNotification = _interopRequireDefault(require("./ToastNotification"));

var _TimedToastNotification = _interopRequireDefault(require("./TimedToastNotification"));

var _ToastNotificationList = _interopRequireDefault(require("./ToastNotificationList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var testToastNotificationSnapshot = function testToastNotificationSnapshot(Component, props, notificationProps) {
  return _react["default"].createElement(_ToastNotificationList["default"], notificationProps, _react["default"].createElement(Component, _extends({
    type: "success",
    onDismiss: jest.fn(),
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn()
  }, props), _react["default"].createElement("span", null, "Success Will Robinson!")));
};

test('ToastNotification renders properly', function () {
  var component = (0, _enzyme.mount)(testToastNotificationSnapshot(_ToastNotification["default"], {
    type: 'error'
  }));
  expect(component.render()).toMatchSnapshot();
});
test('TimedToastNotification persisted and paused renders properly', function () {
  var component = (0, _enzyme.mount)(testToastNotificationSnapshot(_TimedToastNotification["default"], {
    persisted: true,
    paused: true
  }));
  expect(component.render()).toMatchSnapshot();
});
test('TimedToastNotification expectedly sets pause', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_TimedToastNotification["default"], {
    type: "success",
    onDismiss: jest.fn(),
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn(),
    paused: true
  }));
  expect(component.props().paused).toBe(true);
});
test('TimedToastNotification expectedly executes mouse enter/leave and dismiss functions', function () {
  var eventCount = 0;
  var component = (0, _enzyme.mount)(testToastNotificationSnapshot(_TimedToastNotification["default"], {
    type: 'info',
    persisted: true,
    onDismiss: function onDismiss() {
      return eventCount++;
    },
    onMouseEnter: function onMouseEnter() {
      return eventCount++;
    },
    onMouseLeave: function onMouseLeave() {
      return eventCount++;
    }
  }));
  var notification = component.find('.alert-info');
  var close = component.find('button');
  notification.simulate('mouseEnter');
  notification.simulate('mouseLeave');
  close.simulate('click');
  expect(eventCount).toBe(3);
});
test('ToastNotificationList expectedly executes mouse enter/leave/over functions', function () {
  var eventCount = 0;
  var component = (0, _enzyme.mount)(testToastNotificationSnapshot(_TimedToastNotification["default"], {
    type: 'warning'
  }, {
    onMouseEnter: function onMouseEnter() {
      return eventCount++;
    },
    onMouseLeave: function onMouseLeave() {
      return eventCount++;
    },
    onMouseOver: function onMouseOver() {
      return eventCount++;
    }
  }));
  var notification = component.find('.toast-notifications-list-pf');
  notification.simulate('mouseEnter');
  notification.simulate('mouseLeave');
  notification.simulate('mouseOver');
  expect(eventCount).toBe(3);
});