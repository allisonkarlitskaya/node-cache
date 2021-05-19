import React from 'react';
import { mount } from 'enzyme';
import { Icon } from '../../Icon';
import { AggregateStatusCount, AggregateStatusNotification, AggregateStatusNotifications } from './index';
test('Aggregate Status Card Count is working properly', () => {
  const component = mount(React.createElement(AggregateStatusCount, null, " 9 "));
  expect(component.render()).toMatchSnapshot();
});
test('Aggregate Status Notification is working properly', () => {
  const component = mount(React.createElement(AggregateStatusNotification, null, ' ', React.createElement("a", {
    href: "#",
    className: "add",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Add Ipsum!"
  }, React.createElement(Icon, {
    type: "pf",
    name: "add-circle-o"
  })), ' '));
  expect(component.render()).toMatchSnapshot();
});
test('Aggregate Status Notifications is working properly', () => {
  const component = mount(React.createElement(AggregateStatusNotifications, null, "Card Content"));
  expect(component.render()).toMatchSnapshot();
});