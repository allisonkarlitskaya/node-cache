function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { mount } from 'enzyme';
import BreadcrumbSwitcher from './BreadcrumbSwitcher';
import { switcherProps } from './BreadcrumbSwitcher.fixtures';
import { removeLastSlashFromPath } from './BreadcrumbSwitcherHelper';
test('BreadcrumbSwitcher renders properly', () => {
  const component = mount(React.createElement(BreadcrumbSwitcher, switcherProps)).getElement();
  expect(component).toMatchSnapshot();
});
test('BreadcrumbSwitcher functionality', () => {
  const toggleClicked = jest.fn();
  const searchClear = jest.fn();
  const nextPage = jest.fn();
  const prevPage = jest.fn();
  const component = mount(React.createElement(BreadcrumbSwitcher, _extends({}, switcherProps, {
    open: true,
    onSearchClear: searchClear,
    onPrevPageClick: prevPage,
    onNextPageClick: nextPage,
    onTogglerClick: toggleClicked
  })));
  component.find('.fa-close').simulate('click');
  expect(searchClear).toHaveBeenCalled();
  component.find('button#switcher').simulate('click');
  expect(toggleClicked).toHaveBeenCalled();
  component.find('.next>a').simulate('click');
  expect(nextPage).toHaveBeenCalled();
  component.find('.previous>a').simulate('click');
  expect(prevPage).toHaveBeenCalled();
});
test('BreadcrumbSwitcher helper tests', () => {
  const pathWithSlash = 'example.com/';
  const pathWithoutSlash = 'example.com';
  expect(removeLastSlashFromPath(pathWithSlash)).toBe('example.com');
  expect(removeLastSlashFromPath(pathWithoutSlash)).toBe('example.com');
});