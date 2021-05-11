import React from 'react';
import { shallow } from 'enzyme';
import { TypeAheadSelect } from './index';
test('TypeAheadSelect is working !!', () => {
  const component = shallow(React.createElement("p", null, React.createElement(TypeAheadSelect, {
    clearButton: true,
    multiple: true,
    allowNew: true,
    id: "some-id",
    options: ['One', 'Two', 'Three']
  })));
  expect(component).toMatchSnapshot();
});