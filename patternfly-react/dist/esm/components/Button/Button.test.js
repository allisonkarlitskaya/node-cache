import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
test('Button renders properly', () => {
  const component = shallow(React.createElement(Button, {
    id: "button1"
  }, "Default button")).getElement();
  expect(component).toMatchSnapshot();
});
test('Button allows to specify size and style', () => {
  const component = shallow(React.createElement(Button, {
    id: "button1",
    bsStyle: "primary",
    bsSize: "large"
  }, "Large Primary button")).getElement();
  expect(component).toMatchSnapshot();
});