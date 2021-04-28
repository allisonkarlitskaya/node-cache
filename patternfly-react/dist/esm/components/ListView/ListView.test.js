import React from 'react';
import { mount } from 'enzyme';
import { Row, Col } from '../Grid';
import { ListView } from './index';
import { mockListItems, renderActions, renderAdditionalInfoItems } from './__mocks__/mockListItems';
test('ListView renders properly', () => {
  const component = mount(React.createElement(ListView, null, mockListItems.map((item, index) => React.createElement(ListView.Item, {
    key: index,
    actions: renderActions(item.actions),
    checkboxInput: React.createElement("input", {
      type: "checkbox"
    }),
    leftContent: React.createElement(ListView.Icon, {
      name: "plane"
    }),
    additionalInfo: renderAdditionalInfoItems(item.properties),
    heading: item.title,
    description: item.description,
    stacked: true
  }, React.createElement(Row, null, React.createElement(Col, {
    sm: 11
  }, item.expandedContentText))))));
  expect(component.render()).toMatchSnapshot();
});