import React from 'react';
import { mount } from 'enzyme';
import DatePicker from './DatePicker';
test('DatePicker is working properly', () => {
  const component = mount(React.createElement(DatePicker, {
    value: "2/21/2019, 2:22:31 PM"
  }));
  expect(component.render()).toMatchSnapshot();
});
test('Edit form of DatePicker', () => {
  const component = mount(React.createElement(DatePicker, {
    value: "2/21/2019"
  }));
  expect(component.render()).toMatchSnapshot();
  component.find('input').simulate('change', {
    target: {
      value: '2/22/2019'
    }
  });
  component.find('input').simulate('blur');
  expect(component.state().value).toEqual(new Date('2/22/2019'));
});