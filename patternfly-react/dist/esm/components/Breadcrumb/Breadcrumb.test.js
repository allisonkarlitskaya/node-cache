import React from 'react';
import { mount } from 'enzyme';
import { Breadcrumb } from './index';
test('Breadcrumb icon renders properly', () => {
  const component = mount(React.createElement(Breadcrumb, null, React.createElement(Breadcrumb.Item, {
    href: "#"
  }, "Home"), React.createElement(Breadcrumb.Item, {
    href: "http://getbootstrap.com/components/#breadcrumbs"
  }, "Library"), React.createElement(Breadcrumb.Item, {
    active: true
  }, "Data")));
  expect(component).toMatchSnapshot();
});
test('Breadcrum combined with page title', () => {
  const component = mount(React.createElement(Breadcrumb, {
    title: true
  }, React.createElement(Breadcrumb.Item, {
    href: "#"
  }, "Home"), React.createElement(Breadcrumb.Item, {
    href: "http://getbootstrap.com/components/#breadcrumbs"
  }, "Library"), React.createElement(Breadcrumb.Item, {
    active: true
  }, "Data")));
  expect(component).toMatchSnapshot();
});