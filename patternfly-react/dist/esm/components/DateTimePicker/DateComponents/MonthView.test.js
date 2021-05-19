import React from 'react';
import { shallow } from 'enzyme';
import MonthView from './MonthView';
test('MonthView is working properly', () => {
  const component = shallow(React.createElement(MonthView, {
    date: "1/21/2019, 2:22:31 PM"
  }));
  expect(component.render()).toMatchSnapshot();
});