"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Spinner should not render children when loading', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Spinner, {
    loading: true
  }, _react["default"].createElement("span", null, "Children should not render.")));
  expect(component.render()).toMatchSnapshot();
});
test('Spinner should render children when not loading', function () {
  var component = (0, _enzyme.mount)(_react["default"].createElement(_index.Spinner, {
    size: "lg"
  }, _react["default"].createElement("span", null, "Children should be rendered.")));
  expect(component.render()).toMatchSnapshot();
});