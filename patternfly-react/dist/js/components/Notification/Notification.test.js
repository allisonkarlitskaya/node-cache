"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Notification is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Notification, null, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Content is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Notification.Content, null, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Info is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Notification.Info, null));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Info Right is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Notification.InfoRight, {
    text: "right"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Info Left is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Notification.InfoLeft, {
    text: "left"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Message is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Notification.Message, null, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});