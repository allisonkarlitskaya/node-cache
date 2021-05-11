import React from 'react';
import { mount } from 'enzyme';
import { NotificationDrawer } from './index';
test('NotificationDrawer is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer, null, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Title is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.Title, null));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Accordion is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.Accordion, null, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Toggle is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.Toggle, null));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Dropdown is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.Dropdown, {
    id: "1"
  }, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.Panel, {
    expanded: true
  }, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Action and Link is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.PanelAction, null, React.createElement(NotificationDrawer.PanelActionLink, null, React.createElement("div", null, "Child"))));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Body is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.PanelBody, {
    maxHeight: 350
  }, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Collapse is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.PanelCollapse, {
    collapseIn: true
  }, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Counter is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.PanelCounter, null, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Heading is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.PanelHeading, null, React.createElement("div", null, "Child")));
  expect(component.render()).toMatchSnapshot();
});
test('NotificationDrawer Panel Title is working properly', () => {
  const component = mount(React.createElement(NotificationDrawer.PanelTitle, null));
  expect(component.render()).toMatchSnapshot();
});