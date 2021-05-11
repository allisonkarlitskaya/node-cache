import React from 'react';
import { mount } from 'enzyme';
import FieldLevelHelp from './FieldLevelHelp';
test('FieldLevelHelp renders properly', () => {
  const component = mount(React.createElement(FieldLevelHelp, {
    id: "fieldlevelname1"
  }, "Port Number"));
  expect(component).toMatchSnapshot();
});
test('FieldLevelHelp allows to specify mode content and close', () => {
  const component = mount(React.createElement("div", null, React.createElement("label", null, "Port Number"), React.createElement(FieldLevelHelp, {
    id: "fieldlevelname1",
    mode: "popover",
    content: "Enter Port number between the 4000-5000 range",
    rootClose: true,
    close: true,
    placement: "top",
    buttonClass: "additionl-button-class"
  })));
  expect(component).toMatchSnapshot();
});