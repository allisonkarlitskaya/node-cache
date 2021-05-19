import React from 'react';
import { mount } from 'enzyme';
import { Button, DropdownKebab, Filter, FormControl, Icon, MenuItem, Sort, Toolbar } from '../../index';
import { mockFilterExampleFields } from '../Filter/__mocks__/mockFilterExample';
import { mockSortFields } from '../Sort/__mocks__/mockSortExample';
test('Toolbar renders properly', () => {
  const component = mount(React.createElement(Toolbar, null, React.createElement(Filter, null, React.createElement(Filter.TypeSelector, {
    filterTypes: mockFilterExampleFields,
    currentFilterType: mockFilterExampleFields[0]
  }), React.createElement(FormControl, {
    type: mockFilterExampleFields[0].filterType,
    id: "filterInput",
    placeholder: "Filter by Name"
  })), React.createElement(Sort, null, React.createElement(Sort.TypeSelector, {
    sortTypes: mockSortFields,
    currentSortType: mockSortFields[0]
  }), React.createElement(Sort.DirectionSelector, {
    isNumeric: mockSortFields[0].isNumeric,
    isAscending: true
  })), React.createElement("div", {
    className: "form-group"
  }, React.createElement(Button, null, "Action 1"), React.createElement(Button, null, "Action 2"), React.createElement(DropdownKebab, {
    id: "toolbarActionKebab"
  }, React.createElement(MenuItem, null, "Action"), React.createElement(MenuItem, null, "Another Action"), React.createElement(MenuItem, null, "Something Else Here"), React.createElement(MenuItem, {
    role: "separator",
    className: "divider"
  }), React.createElement(MenuItem, null, "Separated Link"))), React.createElement(Toolbar.RightContent, null, React.createElement(Toolbar.Find, {
    placeholder: "Find By Keyword...",
    currentIndex: 1,
    totalCount: 3
  }), React.createElement(Toolbar.ViewSelector, null, React.createElement(Button, {
    title: "List View",
    bsStyle: "link",
    className: "active"
  }, React.createElement(Icon, {
    type: "fa",
    name: "th-list"
  })), React.createElement(Button, {
    title: "Card View",
    bsStyle: "link"
  }, React.createElement(Icon, {
    type: "fa",
    name: "th"
  })), React.createElement(Button, {
    title: "Table View",
    bsStyle: "link"
  }, React.createElement(Icon, {
    type: "fa",
    name: "table"
  })))), React.createElement(Toolbar.Results, null, React.createElement("h5", null, "40 Results"), React.createElement(Filter.ActiveLabel, {
    title: "Active Filters:"
  }), React.createElement(Filter.List, null, React.createElement(Filter.Item, {
    label: "Name: John"
  }), React.createElement(Filter.Item, {
    label: "Address: Westford"
  })))));
  expect(component.render()).toMatchSnapshot();
});