import React from 'react';
import { shallow } from 'enzyme';
import { DonutChart } from './index';
test('DonutChart renders properly', () => {
  expect(shallow(React.createElement(DonutChart, {
    id: "area-1",
    data: {
      columns: [['data', 42]]
    }
  })).getElement()).toMatchSnapshot();
});