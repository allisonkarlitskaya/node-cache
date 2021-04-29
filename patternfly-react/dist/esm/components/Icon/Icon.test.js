import React from 'react';
import { mount } from 'enzyme';
import { Icon } from './index';
test('patternfly Icon is working', () => {
  const component = mount(React.createElement(Icon, {
    type: "pf",
    name: "ok"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('fontawesome Icon is working', () => {
  const component = mount(React.createElement(Icon, {
    name: "angle-down"
  }));
  expect(component.render()).toMatchSnapshot();
});