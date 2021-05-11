"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('NotificationDrawer is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer, null, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Title is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.Title, null));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Accordion is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.Accordion, null, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Toggle is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.Toggle, null));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Dropdown is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.Dropdown, {
    id: "1"
  }, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.Panel, {
    expanded: true
  }, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Action and Link is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.PanelAction, null, _react["default"].createElement(_index.NotificationDrawer.PanelActionLink, null, _react["default"].createElement("div", null, "Child"))));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Body is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.PanelBody, {
    maxHeight: 350
  }, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Collapse is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.PanelCollapse, {
    collapseIn: true
  }, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Counter is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.PanelCounter, null, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Heading is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.PanelHeading, null, _react["default"].createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Title is working properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.NotificationDrawer.PanelTitle, null));
  expect(component.render()).toMatchSnapshot();
});