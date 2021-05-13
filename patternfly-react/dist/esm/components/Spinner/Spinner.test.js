import React from 'react';
import { mount } from 'enzyme';
import { Spinner } from './index';
test('Spinner should not render children when loading', () => {
  const component = mount(React.createElement(Spinner, {
    loading: true
  }, React.createElement("span", null, "Children should not render.")));
  expect(component.render()).toMatchSnapshot();
});
test('Spinner should render children when not loading', () => {
  const component = mount(React.createElement(Spinner, {
    size: "lg"
  }, React.createElement("span", null, "Children should be rendered.")));
  expect(component.render()).toMatchSnapshot();
});