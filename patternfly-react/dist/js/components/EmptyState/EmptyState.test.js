"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = require("../Button");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Empty state icon renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.EmptyState, null, _react["default"].createElement(_index.EmptyState.Icon, null)));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state title renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.EmptyState, null, _react["default"].createElement(_index.EmptyState.Title, null, "Empty State Title")));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state info renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.EmptyState, null, _react["default"].createElement(_index.EmptyState.Info, null, "This is the Empty State component.")));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state help renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.EmptyState, null, _react["default"].createElement(_index.EmptyState.Help, null, "For more information please see ", _react["default"].createElement("a", {
    href: "#"
  }, "pfExample"))));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state main action renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.EmptyState, null, _react["default"].createElement(_index.EmptyState.Action, null, _react["default"].createElement(_Button.Button, {
    className: "btn-primary btn-lg"
  }, "Main Action"))));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state secondary action renders properly', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.EmptyState, null, _react["default"].createElement(_index.EmptyState.Action, {
    secondary: true
  }, _react["default"].createElement(_Button.Button, {
    title: "Perform an action"
  }, "Secondary Action 1"), _react["default"].createElement(_Button.Button, {
    title: "Perform an action"
  }, "Secondary Action 2"), _react["default"].createElement(_Button.Button, {
    title: "Perform an action"
  }, "Secondary Action 3"))));
  expect(component.render()).toMatchSnapshot();
});