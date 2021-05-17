import React from 'react';
import { shallow, mount } from 'enzyme';
import { VerticalNav } from './index';
import { Masthead as MastheadPf } from '../Masthead';
import { mockNavItems } from './__mocks__/mockNavItems';
import { MockIconBarChildren } from './__mocks__/mockIconBarChildren';
import { basicExample } from './__mocks__/basicExample';
const {
  Masthead,
  Brand,
  IconBar
} = VerticalNav;
console.warn = jest.fn(() => {}); // eslint-disable-line no-console

test('VerticalNav renders properly with item children', () => {
  const component = mount(basicExample());
  expect(component.render()).toMatchSnapshot();
});
test('VerticalNav renders properly in mobile mode', () => {
  const component = mount(basicExample({
    isMobile: true
  }));
  expect(component.render()).toMatchSnapshot();
});
test('VerticalNav renders without errors with persistence on', () => {
  const component = shallow(React.createElement(VerticalNav, {
    persist: true
  }));
  expect(component.find(VerticalNav.WithPersist).exists()).toBe(true);
});
test('VerticalNav renders without errors with persistence off', () => {
  const component = shallow(React.createElement(VerticalNav, {
    persist: false
  }));
  expect(component.find(VerticalNav.NoPersist).exists()).toBe(true);
});
test('VerticalNav renders properly with a custom className on a nav item', () => {
  const component = mount(basicExample(null, 'my-custom-item'));
  expect(component.render()).toMatchSnapshot();
});
test('VerticalNav renders properly with item objects', () => {
  const component = mount(React.createElement(VerticalNav, {
    items: mockNavItems,
    pinnableMenus: true
  }, React.createElement(Masthead, null, React.createElement(Brand, {
    iconImg: "../../../storybook/img/logo-alt.svg",
    titleImg: "../../../storybook/img/brand-alt.svg"
  }), React.createElement(IconBar, null, React.createElement(MockIconBarChildren, null)))));
  expect(component.render()).toMatchSnapshot();
});
test('VerticalNav renders properly with masthead PF component', () => {
  const component = mount(React.createElement(VerticalNav, {
    items: mockNavItems,
    masthead: React.createElement(MastheadPf, null)
  }));
  expect(component.render()).toMatchSnapshot();
}); // Note: in the future it would be nice to unit test all those component class methods too...