"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _cssElementQueries = require("css-element-queries");

var _CardHeightMatching = _interopRequireDefault(require("./CardHeightMatching"));

var helpers = _interopRequireWildcard(require("../../common/helpers"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

jest.mock('css-element-queries');
jest.spyOn(helpers, 'debounce').mockImplementation(function (v) {
  return v;
});
var mockQuerySelectorAll = jest.fn();
HTMLElement.prototype.querySelectorAll = mockQuerySelectorAll;
var mockElement = {
  scrollHeight: 0,
  style: {
    height: 0
  }
};
var props = {
  selector: ['first', 'second'],
  children: 'children'
};
beforeEach(function () {
  _cssElementQueries.mockDetach.mockClear();

  _cssElementQueries.ResizeSensor.mockClear();

  helpers.debounce.mockClear();
  mockQuerySelectorAll.mockReturnValue([mockElement]);
});
test('creates a ResizeSensor for each selector', function () {
  (0, _enzyme.mount)(_react["default"].createElement(_CardHeightMatching["default"], props));
  expect(_cssElementQueries.ResizeSensor).toHaveBeenCalledTimes(props.selector.length);
  expect(_cssElementQueries.ResizeSensor).toBeCalledWith(expect.arrayContaining([mockElement]), expect.any(Function));
});
test('allows selector to be a string', function () {
  (0, _enzyme.mount)(_react["default"].createElement(_CardHeightMatching["default"], _extends({}, props, {
    selector: "selector"
  })));
  expect(_cssElementQueries.ResizeSensor).toHaveBeenCalledTimes(1);
});
test('debounces resize events', function () {
  (0, _enzyme.mount)(_react["default"].createElement(_CardHeightMatching["default"], props));
  expect(helpers.debounce).toBeCalledWith(expect.any(Function), 200);
});
test('sets max height on mount', function () {
  var firstElement = _objectSpread({}, mockElement, {
    scrollHeight: 0
  });

  var secondElement = _objectSpread({}, mockElement, {
    scrollHeight: 10
  });

  mockQuerySelectorAll.mockReturnValue([firstElement, secondElement]);
  jest.useFakeTimers();
  (0, _enzyme.mount)(_react["default"].createElement(_CardHeightMatching["default"], props));
  jest.runAllTimers();
  expect(firstElement.style.height).toBe("".concat(secondElement.scrollHeight, "px"));
  expect(secondElement.style.height).toBe("".concat(secondElement.scrollHeight, "px"));
  jest.useRealTimers();
});
test('sets max height on update', function () {
  var firstElement = _objectSpread({}, mockElement, {
    scrollHeight: 0
  });

  var secondElement = _objectSpread({}, mockElement, {
    scrollHeight: 10
  });

  mockQuerySelectorAll.mockReturnValue([firstElement, secondElement]);
  jest.useFakeTimers();
  var view = (0, _enzyme.mount)(_react["default"].createElement(_CardHeightMatching["default"], props));
  jest.runAllTimers();
  secondElement.scrollHeight = 20;
  view.setProps(props);
  jest.runAllTimers();
  expect(firstElement.style.height).toBe("".concat(secondElement.scrollHeight, "px"));
  expect(secondElement.style.height).toBe("".concat(secondElement.scrollHeight, "px"));
  jest.useRealTimers();
});
test('detaches on unmount', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_CardHeightMatching["default"], props));
  view.unmount();
  expect(_cssElementQueries.mockDetach).toHaveBeenCalledTimes(props.selector.length);
});
test('handles resize trigger without a container', function () {
  var debounceHandler;
  helpers.debounce.mockImplementationOnce(function (handler) {
    debounceHandler = handler;
    return handler;
  });
  jest.useFakeTimers();
  var view = (0, _enzyme.mount)(_react["default"].createElement(_CardHeightMatching["default"], props));
  jest.runAllTimers();
  view.unmount();
  mockQuerySelectorAll.mockClear();
  debounceHandler();
  expect(mockQuerySelectorAll).not.toBeCalled();
  jest.useRealTimers();
});
test('sets height on update', function () {
  var debounceHandler;
  helpers.debounce.mockImplementationOnce(function (handler) {
    debounceHandler = handler;
    return handler;
  });
  jest.useFakeTimers();
  var view = (0, _enzyme.mount)(_react["default"].createElement(_CardHeightMatching["default"], props));
  jest.runAllTimers();
  view.unmount();
  mockQuerySelectorAll.mockClear();
  debounceHandler();
  expect(mockQuerySelectorAll).not.toBeCalled();
  jest.useRealTimers();
});