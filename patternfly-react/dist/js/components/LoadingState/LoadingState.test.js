"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

jest.useFakeTimers();
test('Loading State renders properly while loading', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.LoadingState, {
    loading: true,
    loadingText: "Loading"
  }, _react["default"].createElement("p", null, "Loading Complete")));
  jest.runAllTimers();
  component.update();
  expect(component.state('render')).toEqual(true);
  expect((0, _enzymeToJson["default"])(component.render())).toMatchSnapshot();
});
test('Loading State renders properly while not loading', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.LoadingState, {
    loading: false,
    loadingText: "Loading"
  }, _react["default"].createElement("p", null, "Loading Complete")));
  jest.runAllTimers();
  component.update();
  expect((0, _enzymeToJson["default"])(component.render())).toMatchSnapshot();
});
test('Loadin State renders in xs size', function () {
  var component = (0, _enzyme.shallow)(_react["default"].createElement(_index.LoadingState, {
    loading: true,
    loadingText: "Loading",
    size: "xs"
  }, _react["default"].createElement("p", null, "Loading Complete")));
  jest.runAllTimers();
  component.update();
  expect((0, _enzymeToJson["default"])(component.render())).toMatchSnapshot();
});