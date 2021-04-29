"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('TypeAheadSelect is working !!', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement("p", null, _react["default"].createElement(_index.TypeAheadSelect, {
    clearButton: true,
    multiple: true,
    allowNew: true,
    id: "some-id",
    options: ['One', 'Two', 'Three']
  })));
  expect(component).toMatchSnapshot();
});