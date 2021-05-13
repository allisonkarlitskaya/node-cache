"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('patternfly Icon is working', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Icon, {
    type: "pf",
    name: "ok"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('fontawesome Icon is working', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Icon, {
    name: "angle-down"
  }));
  expect(component.render()).toMatchSnapshot();
});