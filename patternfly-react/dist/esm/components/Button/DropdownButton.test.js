import React from 'react';
import { shallow } from 'enzyme';
import DropdownButton from './DropdownButton';
import { MenuItem } from '../MenuItem';
test('DropdownButton should renders properly', () => {
  DropdownButton.BUTTON_BS_STYLES.forEach(bsStyle => {
    const component = shallow(React.createElement(DropdownButton, {
      title: bsStyle,
      id: `dropdown-button-test-${bsStyle}`
    }, React.createElement(MenuItem, {
      eventKey: "1"
    }, "Action"), React.createElement(MenuItem, {
      eventKey: "2"
    }, "Another action"), React.createElement(MenuItem, {
      eventKey: "3",
      active: true
    }, "Active Item"), React.createElement(MenuItem, {
      divider: true
    }), React.createElement(MenuItem, {
      eventKey: "4"
    }, "Separated link")));
    expect(component).toMatchSnapshot();
  });
});