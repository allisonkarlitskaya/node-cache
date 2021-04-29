import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LoadingState } from './index';
jest.useFakeTimers();
test('Loading State renders properly while loading', () => {
  const component = shallow(React.createElement(LoadingState, {
    loading: true,
    loadingText: "Loading"
  }, React.createElement("p", null, "Loading Complete")));
  jest.runAllTimers();
  component.update();
  expect(component.state('render')).toEqual(true);
  expect(toJson(component.render())).toMatchSnapshot();
});
test('Loading State renders properly while not loading', () => {
  const component = shallow(React.createElement(LoadingState, {
    loading: false,
    loadingText: "Loading"
  }, React.createElement("p", null, "Loading Complete")));
  jest.runAllTimers();
  component.update();
  expect(toJson(component.render())).toMatchSnapshot();
});
test('Loadin State renders in xs size', () => {
  const component = shallow(React.createElement(LoadingState, {
    loading: true,
    loadingText: "Loading",
    size: "xs"
  }, React.createElement("p", null, "Loading Complete")));
  jest.runAllTimers();
  component.update();
  expect(toJson(component.render())).toMatchSnapshot();
});