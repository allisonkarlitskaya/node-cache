import React from 'react';
import { shallow } from 'enzyme';
import DisposableLabel from './DisposableLabel';
import Label from './Label';
import { noop } from '../../common/helpers';
test('defaults props', () => {
  const view = shallow(React.createElement(DisposableLabel, null));
  expect(view).toMatchSnapshot();
  expect(view.find(Label).props().onRemoveClick).toBe(noop);
});
test('onRemoveClick is passed to the Label', () => {
  const onRemoveClick = jest.fn();
  const component = shallow(React.createElement(DisposableLabel, {
    onRemoveClick: onRemoveClick
  }));
  expect(component.find(Label).props().onRemoveClick).toBe(onRemoveClick);
});