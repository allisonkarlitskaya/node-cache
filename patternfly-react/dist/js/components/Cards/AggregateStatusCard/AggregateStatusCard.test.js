"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Icon = require("../../Icon");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Aggregate Status Card Count is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.AggregateStatusCount, null, " 9 "));
  expect(component.render()).toMatchSnapshot();
});
test('Aggregate Status Notification is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.AggregateStatusNotification, null, ' ', _react["default"].createElement("a", {
    href: "#",
    className: "add",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Add Ipsum!"
  }, _react["default"].createElement(_Icon.Icon, {
    type: "pf",
    name: "add-circle-o"
  })), ' '));
  expect(component.render()).toMatchSnapshot();
});
test('Aggregate Status Notifications is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.AggregateStatusNotifications, null, "Card Content"));
  expect(component.render()).toMatchSnapshot();
});