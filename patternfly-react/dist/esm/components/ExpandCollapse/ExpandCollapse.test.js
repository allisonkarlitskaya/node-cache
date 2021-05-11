import React from 'react';
import { mount, render } from 'enzyme';
import ExpandCollapse from './ExpandCollapse';
test('ExpandCollapse with content', () => {
  const view = mount(React.createElement(ExpandCollapse, null, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(view.find('#content')).toHaveLength(0);
  expect(view.find('span.fa-angle-right')).toHaveLength(1);
  expect(view.find('span.fa-angle-down')).toHaveLength(0);
  expect(view.find('.btn-link').text()).toEqual('Show Advanced Options');
  const button = view.find('.btn-link');
  expect(button).toHaveLength(1);
  button.simulate('click');
  expect(view.find('#content')).toHaveLength(1);
  expect(view.find('span.fa-angle-right')).toHaveLength(0);
  expect(view.find('span.fa-angle-down')).toHaveLength(1);
  expect(view.find('.btn-link').text()).toEqual('Hide Advanced Options');
  button.simulate('click');
  expect(view.find('#content')).toHaveLength(0);
  expect(view.find('span.fa-angle-right')).toHaveLength(1);
  expect(view.find('span.fa-angle-down')).toHaveLength(0);
  expect(view.find('.btn-link').text()).toEqual('Show Advanced Options');
});
test('localized ExpandCollapse', () => {
  const view = mount(React.createElement(ExpandCollapse, {
    textCollapsed: "Click to expand",
    textExpanded: "Click to collapse"
  }, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(view).toMatchSnapshot();
  view.find('.btn-link').simulate('click');
  expect(view).toMatchSnapshot();
});
test('aligned ExpandCollapse', () => {
  const def = render(React.createElement(ExpandCollapse, null, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(def.find('.expand-collapse-pf-separator')).toHaveLength(1);
  const left = render(React.createElement(ExpandCollapse, {
    align: ExpandCollapse.ALIGN_LEFT
  }, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(left.find('.expand-collapse-pf-separator')).toHaveLength(1);
  const center = render(React.createElement(ExpandCollapse, {
    align: ExpandCollapse.ALIGN_CENTER
  }, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(center.find('.expand-collapse-pf-separator')).toHaveLength(2);
});
test('ExpandCollapse with separator', () => {
  const def = render(React.createElement(ExpandCollapse, null, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(def.find('.expand-collapse-pf-separator.bordered')).toHaveLength(1);
  const noSep = render(React.createElement(ExpandCollapse, {
    bordered: false
  }, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(noSep.find('.expand-collapse-pf-separator')).toHaveLength(1);
  expect(noSep.find('.expand-collapse-pf-separator.bordered')).toHaveLength(0);
  const center = render(React.createElement(ExpandCollapse, {
    align: ExpandCollapse.ALIGN_CENTER
  }, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(center.find('.expand-collapse-pf-separator.bordered')).toHaveLength(2);
  const centerNoSep = render(React.createElement(ExpandCollapse, {
    align: ExpandCollapse.ALIGN_CENTER,
    bordered: false
  }, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(centerNoSep.find('.expand-collapse-pf-separator')).toHaveLength(2);
  expect(centerNoSep.find('.expand-collapse-pf-separator.bordered')).toHaveLength(0);
});
test('ExpandCollapse with explicit override prop', () => {
  const view = mount(React.createElement(ExpandCollapse, {
    expanded: true
  }, React.createElement("div", {
    id: "content"
  }, "My text")));
  expect(view.find('#content')).toHaveLength(1);
  expect(view.find('span.fa-angle-right')).toHaveLength(0);
  expect(view.find('span.fa-angle-down')).toHaveLength(1);
  expect(view.find('.btn-link').text()).toEqual('Hide Advanced Options');
});
test('ExpandCollapse with explicit onToggle callback', () => {
  const callback = jest.fn();
  const view = mount(React.createElement(ExpandCollapse, {
    onToggle: callback
  }, React.createElement("div", {
    id: "content"
  }, "My text")));
  const button = view.find('.btn-link');
  button.simulate('click');
  expect(callback).toBeCalled();
});