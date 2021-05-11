import MenuItem from '../MenuItem/MenuItem';
import React from 'react';
import { shallow } from 'enzyme';
import DropdownKebab from './DropdownKebab';
test('Kebab dropdown renders properly', () => {
  const component = shallow(React.createElement(DropdownKebab, {
    id: "myKebab",
    title: "Kebab title"
  }, React.createElement(MenuItem, null, "Action"), React.createElement(MenuItem, null, "Another Action"), React.createElement(MenuItem, null, "Something else here"), React.createElement(MenuItem, {
    divider: true
  }), React.createElement(MenuItem, null, "Separated link")));
  expect(component).toMatchSnapshot();
});