function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount } from 'enzyme';
import { ResizeSensor, mockDetach } from 'css-element-queries';
import CardHeightMatching from './CardHeightMatching';
import * as helpers from '../../common/helpers';
jest.mock('css-element-queries');
jest.spyOn(helpers, 'debounce').mockImplementation(v => v);
const mockQuerySelectorAll = jest.fn();
HTMLElement.prototype.querySelectorAll = mockQuerySelectorAll;
const mockElement = {
  scrollHeight: 0,
  style: {
    height: 0
  }
};
const props = {
  selector: ['first', 'second'],
  children: 'children'
};
beforeEach(() => {
  mockDetach.mockClear();
  ResizeSensor.mockClear();
  helpers.debounce.mockClear();
  mockQuerySelectorAll.mockReturnValue([mockElement]);
});
test('creates a ResizeSensor for each selector', () => {
  mount(React.createElement(CardHeightMatching, props));
  expect(ResizeSensor).toHaveBeenCalledTimes(props.selector.length);
  expect(ResizeSensor).toBeCalledWith(expect.arrayContaining([mockElement]), expect.any(Function));
});
test('allows selector to be a string', () => {
  mount(React.createElement(CardHeightMatching, _extends({}, props, {
    selector: "selector"
  })));
  expect(ResizeSensor).toHaveBeenCalledTimes(1);
});
test('debounces resize events', () => {
  mount(React.createElement(CardHeightMatching, props));
  expect(helpers.debounce).toBeCalledWith(expect.any(Function), 200);
});
test('sets max height on mount', () => {
  const firstElement = _objectSpread({}, mockElement, {
    scrollHeight: 0
  });

  const secondElement = _objectSpread({}, mockElement, {
    scrollHeight: 10
  });

  mockQuerySelectorAll.mockReturnValue([firstElement, secondElement]);
  jest.useFakeTimers();
  mount(React.createElement(CardHeightMatching, props));
  jest.runAllTimers();
  expect(firstElement.style.height).toBe(`${secondElement.scrollHeight}px`);
  expect(secondElement.style.height).toBe(`${secondElement.scrollHeight}px`);
  jest.useRealTimers();
});
test('sets max height on update', () => {
  const firstElement = _objectSpread({}, mockElement, {
    scrollHeight: 0
  });

  const secondElement = _objectSpread({}, mockElement, {
    scrollHeight: 10
  });

  mockQuerySelectorAll.mockReturnValue([firstElement, secondElement]);
  jest.useFakeTimers();
  const view = mount(React.createElement(CardHeightMatching, props));
  jest.runAllTimers();
  secondElement.scrollHeight = 20;
  view.setProps(props);
  jest.runAllTimers();
  expect(firstElement.style.height).toBe(`${secondElement.scrollHeight}px`);
  expect(secondElement.style.height).toBe(`${secondElement.scrollHeight}px`);
  jest.useRealTimers();
});
test('detaches on unmount', () => {
  const view = mount(React.createElement(CardHeightMatching, props));
  view.unmount();
  expect(mockDetach).toHaveBeenCalledTimes(props.selector.length);
});
test('handles resize trigger without a container', () => {
  let debounceHandler;
  helpers.debounce.mockImplementationOnce(handler => {
    debounceHandler = handler;
    return handler;
  });
  jest.useFakeTimers();
  const view = mount(React.createElement(CardHeightMatching, props));
  jest.runAllTimers();
  view.unmount();
  mockQuerySelectorAll.mockClear();
  debounceHandler();
  expect(mockQuerySelectorAll).not.toBeCalled();
  jest.useRealTimers();
});
test('sets height on update', () => {
  let debounceHandler;
  helpers.debounce.mockImplementationOnce(handler => {
    debounceHandler = handler;
    return handler;
  });
  jest.useFakeTimers();
  const view = mount(React.createElement(CardHeightMatching, props));
  jest.runAllTimers();
  view.unmount();
  mockQuerySelectorAll.mockClear();
  debounceHandler();
  expect(mockQuerySelectorAll).not.toBeCalled();
  jest.useRealTimers();
});