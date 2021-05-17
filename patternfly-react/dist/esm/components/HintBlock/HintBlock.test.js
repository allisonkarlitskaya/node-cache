import React from 'react';
import { mount } from 'enzyme';
import { HintBlock } from '../../index';
import { Icon } from '../Icon';
test('HintBlock displays correctly', () => {
  const onClose = jest.fn();
  const onButtonClick = jest.fn();
  const component = mount(React.createElement(HintBlock, {
    id: "test-id",
    className: "test-class",
    title: "Test Title Text",
    onClose: onClose,
    body: "Test Body Text",
    buttonContent: React.createElement("span", null, React.createElement(Icon, {
      type: "pf",
      name: "help"
    }), " Optional Action"),
    onButtonClick: onButtonClick
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('.close').simulate('click');
  expect(onClose).toBeCalled();
  component.find('.btn').simulate('click');
  expect(onClose).toBeCalled();
});
test('HintBlock hides close button when no close callback', () => {
  const onButtonClick = jest.fn();
  const component = mount(React.createElement(HintBlock, {
    title: "Test Title Text",
    body: "Test Body Text",
    buttonContent: "Optional Action",
    onButtonClick: onButtonClick
  }));
  expect(component.render()).toMatchSnapshot();
});
test('HintBlock hides optional button when no button content', () => {
  const onClose = jest.fn();
  const component = mount(React.createElement(HintBlock, {
    title: "Test Title Text",
    onClose: onClose,
    body: "Test Body Text"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('HintBlock display complex content', () => {
  const component = mount(React.createElement(HintBlock, {
    title: React.createElement("div", null, "My Custom ", React.createElement("b", null, "Title")),
    body: React.createElement("div", null, React.createElement("p", null, "This pattern does not yet exist in ", React.createElement("a", {
      href: "http://www.patternfly.org/pattern-library/"
    }, "PatternFly"), "."), "The ", React.createElement("b", null, "Hint Block"), " pattern is similar to an informational inline notification, but with additional emphasis (blue highlight). The intention is to use this for specific use cases involving new users, new features, or cases where extra guidance may assist in successfully completing a flow. The hint pattern involves a one-step reminder, explanation, or call to action. Potential Use Cases", React.createElement("ul", null, React.createElement("li", null, "To provide guidance to ", React.createElement("b", null, "new users"), " who do not know how to use the application"), React.createElement("li", null, "To provide contextual help on using ", React.createElement("b", null, "new features")), React.createElement("li", null, "To provide hints on a flow/ the ", React.createElement("b", null, "next steps"), " a user should be thinking about."))),
    buttonContent: React.createElement("span", null, React.createElement(Icon, {
      type: "pf",
      name: "help"
    }), " Optional Action")
  }));
  expect(component.render()).toMatchSnapshot();
});