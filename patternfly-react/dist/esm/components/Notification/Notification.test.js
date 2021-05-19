import React from 'react';
import { mount } from 'enzyme';
import { Notification } from './index';
test('Notification is working properly', () => {
  const component = mount(React.createElement(Notification, null, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Content is working properly', () => {
  const component = mount(React.createElement(Notification.Content, null, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Info is working properly', () => {
  const component = mount(React.createElement(Notification.Info, null));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Info Right is working properly', () => {
  const component = mount(React.createElement(Notification.InfoRight, {
    text: "right"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Info Left is working properly', () => {
  const component = mount(React.createElement(Notification.InfoLeft, {
    text: "left"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Notification Message is working properly', () => {
  const component = mount(React.createElement(Notification.Message, null, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});