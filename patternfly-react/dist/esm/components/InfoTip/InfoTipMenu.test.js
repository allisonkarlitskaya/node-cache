function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import InfoTipMenu from './InfoTipMenu';
const props = {
  children: 'children'
};
test('forwards only valid props to the root element', () => {
  const view = shallow(React.createElement(InfoTipMenu, _extends({}, props, {
    id: "id",
    bsRole: "bsRole",
    bsClass: "bsClass",
    pullRight: "pullRight",
    labelledBy: "labeledBy"
  })));
  expect(view).toMatchSnapshot('props are forwarded to root element');
});
test('adds classname to the root element', () => {
  const className = 'extra-classname';
  const view = shallow(React.createElement(InfoTipMenu, _extends({}, props, {
    className: className
  })));
  const rootClassName = view.first().props().className;
  expect(rootClassName.includes(className)).toBe(true);
});