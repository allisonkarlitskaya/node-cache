import React from 'react';
import { mount } from 'enzyme';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { ModelessOverlay } from './index';
test('ModelessOverlay renders properly', () => {
  const component = mount(React.createElement(ModelessOverlay, {
    id: "test-modeless-overlay-id",
    className: "test-modeless-overlay-class"
  }, React.createElement(Modal.Header, null, React.createElement(Modal.CloseButton, null), React.createElement(Modal.Title, null, "Modal Overlay Title")), React.createElement(Modal.Body, null, "test body text"), React.createElement(Modal.Footer, null, React.createElement(Button, {
    bsStyle: "default",
    className: "btn-cancel"
  }, "Cancel"), React.createElement(Button, {
    bsStyle: "primary"
  }, "Save"))));
  expect(component.render()).toMatchSnapshot();
});
test('ModelessOverlay renders properly when setting size', () => {
  const component = mount(React.createElement(ModelessOverlay, {
    id: "test-modeless-overlay-id",
    className: "test-modeless-overlay-class",
    bsSize: "sm"
  }, React.createElement(Modal.Header, null, React.createElement(Modal.CloseButton, null), React.createElement(Modal.Title, null, "Modal Overlay Title")), React.createElement(Modal.Body, null, "test body text"), React.createElement(Modal.Footer, null, React.createElement(Button, {
    bsStyle: "default",
    className: "btn-cancel"
  }, "Cancel"), React.createElement(Button, {
    bsStyle: "primary"
  }, "Save"))));
  expect(component.render()).toMatchSnapshot();
});