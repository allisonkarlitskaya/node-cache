function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { render } from 'enzyme';
import { InlineEdit } from './index';
describe('InlineEdit', () => {
  const inlineEdit = label => (value, additionalData) => React.createElement("div", null, label, ": ", value, React.createElement("br", null), "additionalData: ", JSON.stringify(additionalData));

  const baseProps = {
    value: 'VALUE',
    additionalData: {
      some: 'data'
    },
    renderValue: inlineEdit('value'),
    renderEdit: inlineEdit('edit')
  };
  test('it renders value', () => {
    const component = render(React.createElement(InlineEdit, _extends({}, baseProps, {
      isEditing: () => false
    })));
    expect(component).toMatchSnapshot();
  });
  test('it renders edit input', () => {
    const component = render(React.createElement(InlineEdit, _extends({}, baseProps, {
      isEditing: () => true
    })));
    expect(component).toMatchSnapshot();
  });
});