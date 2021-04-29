"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("../../index");

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('HintBlock displays correctly', function () {
  var onClose = jest.fn();
  var onButtonClick = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.HintBlock, {
    id: "test-id",
    className: "test-class",
    title: "Test Title Text",
    onClose: onClose,
    body: "Test Body Text",
    buttonContent: _react["default"].createElement("span", null, _react["default"].createElement(_Icon.Icon, {
      type: "pf",
      name: "help"
    }), " Optional Action"),
    onButtonClick: onButtonClick
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.close').simulate('click');
  expect(onClose).toBeCalled();
  component.find('.btn').simulate('click');
  expect(onClose).toBeCalled();
});
test('HintBlock hides close button when no close callback', function () {
  var onButtonClick = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.HintBlock, {
    title: "Test Title Text",
    body: "Test Body Text",
    buttonContent: "Optional Action",
    onButtonClick: onButtonClick
  }));
  expect(component.render()).toMatchSnapshot();
});
test('HintBlock hides optional button when no button content', function () {
  var onClose = jest.fn();
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.HintBlock, {
    title: "Test Title Text",
    onClose: onClose,
    body: "Test Body Text"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('HintBlock display complex content', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.HintBlock, {
    title: _react["default"].createElement("div", null, "My Custom ", _react["default"].createElement("b", null, "Title")),
    body: _react["default"].createElement("div", null, _react["default"].createElement("p", null, "This pattern does not yet exist in ", _react["default"].createElement("a", {
      href: "http://www.patternfly.org/pattern-library/"
    }, "PatternFly"), "."), "The ", _react["default"].createElement("b", null, "Hint Block"), " pattern is similar to an informational inline notification, but with additional emphasis (blue highlight). The intention is to use this for specific use cases involving new users, new features, or cases where extra guidance may assist in successfully completing a flow. The hint pattern involves a one-step reminder, explanation, or call to action. Potential Use Cases", _react["default"].createElement("ul", null, _react["default"].createElement("li", null, "To provide guidance to ", _react["default"].createElement("b", null, "new users"), " who do not know how to use the application"), _react["default"].createElement("li", null, "To provide contextual help on using ", _react["default"].createElement("b", null, "new features")), _react["default"].createElement("li", null, "To provide hints on a flow/ the ", _react["default"].createElement("b", null, "next steps"), " a user should be thinking about."))),
    buttonContent: _react["default"].createElement("span", null, _react["default"].createElement(_Icon.Icon, {
      type: "pf",
      name: "help"
    }), " Optional Action")
  }));
  expect(component.render()).toMatchSnapshot();
});