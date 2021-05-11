import React from 'react';
import { mount } from 'enzyme';
import { Button } from '../Button';
import { EmptyState } from './index';
test('Empty state icon renders properly', () => {
  const component = mount(React.createElement(EmptyState, null, React.createElement(EmptyState.Icon, null)));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state title renders properly', () => {
  const component = mount(React.createElement(EmptyState, null, React.createElement(EmptyState.Title, null, "Empty State Title")));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state info renders properly', () => {
  const component = mount(React.createElement(EmptyState, null, React.createElement(EmptyState.Info, null, "This is the Empty State component.")));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state help renders properly', () => {
  const component = mount(React.createElement(EmptyState, null, React.createElement(EmptyState.Help, null, "For more information please see ", React.createElement("a", {
    href: "#"
  }, "pfExample"))));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state main action renders properly', () => {
  const component = mount(React.createElement(EmptyState, null, React.createElement(EmptyState.Action, null, React.createElement(Button, {
    className: "btn-primary btn-lg"
  }, "Main Action"))));
  expect(component.render()).toMatchSnapshot();
});
test('Empty state secondary action renders properly', () => {
  const component = mount(React.createElement(EmptyState, null, React.createElement(EmptyState.Action, {
    secondary: true
  }, React.createElement(Button, {
    title: "Perform an action"
  }, "Secondary Action 1"), React.createElement(Button, {
    title: "Perform an action"
  }, "Secondary Action 2"), React.createElement(Button, {
    title: "Perform an action"
  }, "Secondary Action 3"))));
  expect(component.render()).toMatchSnapshot();
});