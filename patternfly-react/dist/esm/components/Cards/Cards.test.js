import React from 'react';
import { mount } from 'enzyme';
import { MenuItem } from '../MenuItem';
import { Card, CardTitle, CardBody, CardGrid, CardHeading, CardFooter, CardLink, CardDropdownButton } from './index';
test('Card is working properly', () => {
  const component = mount(React.createElement(Card, {
    accented: true,
    aggregatedMini: true
  }, "Card Content"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Title is working properly', () => {
  const component = mount(React.createElement(CardTitle, null, "Card Title"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Footer is working properly', () => {
  const component = mount(React.createElement(CardFooter, null, "This is a Card Footer"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Grid is working properly', () => {
  const component = mount(React.createElement(CardGrid, null, "Grid Content"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Header is working properly', () => {
  const component = mount(React.createElement(CardHeading, null, "Card Content"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Body is working properly', () => {
  const component = mount(React.createElement(CardBody, null, "This is a Card Body"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Link is working properly', () => {
  const component = mount(React.createElement(CardLink, {
    disabled: true,
    href: "https://github.com/patternfly/patternfly-react/pull/203"
  }, "Card Content"));
  expect(component.render()).toMatchSnapshot();
});
test('Card Drop Down Button is working properly', () => {
  const onClick = jest.fn();
  const component = mount(React.createElement(CardDropdownButton, {
    id: "cardDropdownButton1",
    title: "Last 30 Days",
    onClick: onClick
  }, React.createElement(MenuItem, {
    eventKey: "1",
    active: true
  }, "Last 30 Days")));
  component.find('button').simulate('click');
  expect(onClick).toHaveBeenCalled();
  expect(component.render()).toMatchSnapshot();
});