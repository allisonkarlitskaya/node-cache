import React from 'react';
import { mount } from 'enzyme';
import { CardTitle } from '../index';
import { UtilizationCard, UtilizationCardDetails, UtilizationCardDetailsCount, UtilizationCardDetailsDesc, UtilizationCardDetailsLine1, UtilizationCardDetailsLine2 } from './index';
test('Utilization Card is working properly', () => {
  const component = mount(React.createElement(UtilizationCard, null, React.createElement(CardTitle, null, "Card Title")));
  expect(component.render()).toMatchSnapshot();
});
test('Utilization Card Details is working properly', () => {
  const component = mount(React.createElement(UtilizationCardDetails, null, React.createElement(UtilizationCardDetailsCount, null, "200"), React.createElement(UtilizationCardDetailsDesc, null, React.createElement(UtilizationCardDetailsLine1, null, "Available"), React.createElement(UtilizationCardDetailsLine2, null, "of 1300 Gbps"))));
  expect(component.render()).toMatchSnapshot();
});
test('Utilization Card Details Description is working properly', () => {
  const component = mount(React.createElement(UtilizationCardDetailsDesc, null, React.createElement(UtilizationCardDetailsLine1, null, "Available"), React.createElement(UtilizationCardDetailsLine2, null, "of 1300 Gbps")));
  expect(component.render()).toMatchSnapshot();
});
test('Utilization Card Details Line1,2 is working properly', () => {
  const component = mount(React.createElement("div", null, React.createElement(UtilizationCardDetailsLine1, null, "Available"), React.createElement(UtilizationCardDetailsLine2, null, "of 1300 Gbps")));
  expect(component.render()).toMatchSnapshot();
});